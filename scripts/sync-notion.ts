/**
 * Notion → Markdown 동기화 스크립트
 *
 * 이 스크립트는 Notion 데이터베이스의 모든 Published 글을
 * markdown 파일로 변환하여 content/posts/ 폴더에 저장합니다.
 *
 * 주요 기능:
 * 1. Notion API로 모든 Published 글 가져오기
 * 2. 각 글을 markdown으로 변환
 * 3. frontmatter와 함께 파일로 저장
 * 4. 변경된 파일만 업데이트
 */

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type {
  PageObjectResponse,
  PersonUserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import * as fs from "fs/promises";
import * as path from "path";

// 환경 변수 체크
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error("❌ 환경 변수가 설정되지 않았습니다!");
  console.error("NOTION_TOKEN과 NOTION_DATABASE_ID를 .env 파일에 설정해주세요.");
  process.exit(1);
}

// Notion 클라이언트 초기화
const notion = new Client({ auth: NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// 출력 디렉토리
const CONTENT_DIR = path.join(process.cwd(), "content", "posts");

interface Post {
  id: string;
  title: string;
  slug: string;
  description?: string;
  tags?: string[];
  author?: string;
  date?: string;
  modifiedDate?: string;
}

/**
 * Notion 페이지에서 메타데이터 추출
 */
function getPostMetadata(page: PageObjectResponse): Post {
  const { properties } = page;

  return {
    id: page.id,
    title:
      properties.Title.type === "title"
        ? (properties.Title.title[0]?.plain_text ?? "")
        : "",
    description:
      properties.Description.type === "rich_text"
        ? (properties.Description.rich_text[0]?.plain_text ?? "")
        : "",
    tags:
      properties.Tags.type === "multi_select"
        ? properties.Tags.multi_select.map((tag) => tag.name)
        : [],
    author:
      properties.Author.type === "people"
        ? ((properties.Author.people[0] as PersonUserObjectResponse)?.name ??
          "")
        : "",
    date:
      properties.Date.type === "date"
        ? (properties.Date.date?.start ?? "")
        : "",
    modifiedDate: page.last_edited_time,
    slug:
      properties.Slug.type === "rich_text"
        ? (properties.Slug.rich_text[0]?.plain_text ?? page.id)
        : page.id,
  };
}

/**
 * frontmatter 생성
 */
function createFrontmatter(post: Post): string {
  const frontmatter = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `slug: "${post.slug}"`,
    post.description ? `description: "${post.description.replace(/"/g, '\\"')}"` : "",
    post.tags && post.tags.length > 0 ? `tags: [${post.tags.map((t) => `"${t}"`).join(", ")}]` : "",
    post.author ? `author: "${post.author}"` : "",
    post.date ? `date: "${post.date}"` : "",
    post.modifiedDate ? `modifiedDate: "${post.modifiedDate}"` : "",
    `notionId: "${post.id}"`,
    "---",
    "",
  ];

  return frontmatter.filter(Boolean).join("\n");
}

/**
 * 모든 Published 글 가져오기
 */
async function getAllPublishedPosts(): Promise<Post[]> {
  console.log("📚 Notion에서 Published 글을 가져오는 중...");

  const allPosts: Post[] = [];
  let hasMore = true;
  let startCursor: string | undefined = undefined;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      start_cursor: startCursor,
      page_size: 100,
    });

    const posts = response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map(getPostMetadata);

    allPosts.push(...posts);
    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }

  console.log(`✅ 총 ${allPosts.length}개의 글을 찾았습니다.`);
  return allPosts;
}

/**
 * 개별 포스트를 markdown 파일로 저장
 */
async function savePostAsMarkdown(post: Post): Promise<void> {
  try {
    // Notion 페이지를 markdown으로 변환
    const mdblocks = await n2m.pageToMarkdown(post.id);
    const { parent: markdown } = n2m.toMarkdownString(mdblocks);

    // frontmatter + markdown 내용
    const fullContent = createFrontmatter(post) + markdown;

    // 파일 경로 (slug를 파일명으로 사용)
    const fileName = `${post.slug}.md`;
    const filePath = path.join(CONTENT_DIR, fileName);

    // 파일 쓰기
    await fs.writeFile(filePath, fullContent, "utf-8");
    console.log(`  ✓ ${fileName}`);
  } catch (error) {
    console.error(`  ✗ ${post.slug} 실패:`, error);
  }
}

/**
 * Notion에 없는 파일 삭제
 */
async function cleanupOldFiles(currentPosts: Post[]): Promise<number> {
  const currentSlugs = new Set(currentPosts.map((post) => `${post.slug}.md`));

  // content/posts 디렉토리의 모든 파일 읽기
  const existingFiles = await fs.readdir(CONTENT_DIR);

  let deletedCount = 0;

  for (const file of existingFiles) {
    // .gitkeep은 건드리지 않음
    if (file === '.gitkeep') {
      continue;
    }

    // .md 파일만 처리
    if (!file.endsWith('.md')) {
      continue;
    }

    // Notion에 없는 파일이면 삭제
    if (!currentSlugs.has(file)) {
      const filePath = path.join(CONTENT_DIR, file);
      await fs.unlink(filePath);
      console.log(`  🗑️  ${file} (삭제됨)`);
      deletedCount++;
    }
  }

  return deletedCount;
}

/**
 * 메인 동기화 함수
 */
async function syncNotionToMarkdown() {
  console.log("🚀 Notion → Markdown 동기화 시작\n");

  try {
    // content/posts 디렉토리 생성 (없으면)
    await fs.mkdir(CONTENT_DIR, { recursive: true });
    console.log(`📁 디렉토리: ${CONTENT_DIR}\n`);

    // 모든 Published 글 가져오기
    const posts = await getAllPublishedPosts();

    if (posts.length === 0) {
      console.log("⚠️  Published 상태인 글이 없습니다.");
      return;
    }

    // 각 포스트를 markdown으로 저장
    console.log("\n💾 Markdown 파일 저장 중...\n");
    for (const post of posts) {
      await savePostAsMarkdown(post);
    }

    // Notion에 없는 파일 삭제
    console.log("\n🧹 불필요한 파일 정리 중...\n");
    const deletedCount = await cleanupOldFiles(posts);

    if (deletedCount > 0) {
      console.log(`\n✨ 동기화 완료! ${posts.length}개 저장, ${deletedCount}개 삭제되었습니다.`);
    } else {
      console.log(`\n✨ 동기화 완료! ${posts.length}개의 파일이 저장되었습니다.`);
    }
  } catch (error) {
    console.error("\n❌ 동기화 실패:", error);
    process.exit(1);
  }
}

// 스크립트 실행
syncNotionToMarkdown();
