import { Client } from "@notionhq/client";
import type { Post, TagFilterItem } from "@/types/blog";
import type {
  PageObjectResponse,
  PersonUserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// const DEFAULT_COVER_IMAGE = "/images/panda.jpeg";

function getPostMetadata(page: PageObjectResponse): Post {
  const { properties } = page;

  // const getCoverImage = (cover: PageObjectResponse["cover"]) => {
  //   if (!cover) return DEFAULT_COVER_IMAGE;

  //   switch (cover.type) {
  //     case "external":
  //       return cover.external.url;
  //     case "file":
  //       return cover.file.url;
  //     default:
  //       return DEFAULT_COVER_IMAGE;
  //   }
  // };

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
    // coverImage: getCoverImage(page.cover),
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

export const getPostBySlug = async (
  slug: string,
): Promise<{
  markdown: string;
  post: Post | null;
}> => {
  const decodedSlug = decodeURIComponent(slug);

  const normalizedSlug = decodedSlug.replace(/\//g, "-");
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: normalizedSlug,
          },
        },
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
      ],
    },
  });

  if (!response.results[0]) {
    return {
      markdown: "",
      post: null,
    };
  }

  const mdblocks = await n2m.pageToMarkdown(response.results[0].id);

  const { parent } = n2m.toMarkdownString(mdblocks);

  return {
    markdown: parent,
    post: getPostMetadata(response.results[0] as PageObjectResponse),
  };
};
export interface getPublishedPostParams {
  tag?: string;
  sort?: string;
  pageSize?: number;
  startCursor?: string;
}

export interface getPublishedPostsResponse {
  posts: Post[];
  nextCursor: string | null;
  hasMore: boolean;
}

export const getPublishedPosts = async ({
  tag = "전체",
  sort = "latest",
  pageSize = 6,
  startCursor,
}: getPublishedPostParams = {}): Promise<getPublishedPostsResponse> => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Published",
            },
          },
          ...(tag && tag !== "전체"
            ? [
                {
                  property: "Tags",
                  multi_select: {
                    contains: tag,
                  },
                },
              ]
            : []),
        ],
      },
      sorts: [
        {
          property: "Date",
          direction: sort === "latest" ? "descending" : "ascending",
        },
      ],
      page_size: pageSize,
      start_cursor: startCursor,
    });

    const posts = response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map(getPostMetadata);

  return {
    posts,
    nextCursor: response.next_cursor,
    hasMore: response.has_more,
  };
};

export const getTags = async (): Promise<TagFilterItem[]> => {
  const { posts } = await getPublishedPosts({ pageSize: 100 });

  // 모든 태그를 추출하고 각 태그의 출현 횟수를 계산
  const tagCount = posts.reduce(
    (acc, post) => {
      post.tags?.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // TagFilterItem 형식으로 변환
  const tags: TagFilterItem[] = Object.entries(tagCount).map(
    ([name, count]) => ({
      id: name,
      name,
      count,
    }),
  );

  // "전체" 태그 추가
  tags.unshift({
    id: "all",
    name: "전체",
    count: posts.length,
  });

  // 태그 이름 기준으로 정렬 ("전체" 태그는 항상 첫 번째에 위치하도록 제외)
  const [allTag, ...restTags] = tags;
  const sortedTags = restTags.sort((a, b) => a.name.localeCompare(b.name));

  return [allTag, ...sortedTags];
};

export interface CreatePostParams {
  title: string;
  tag: string;
  content: string;
}

export const createPost = async ({ title, tag, content }: CreatePostParams) => {
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      Title: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Description: {
        rich_text: [
          {
            text: {
              content: content,
            },
          },
        ],
      },
      Tags: {
        multi_select: [{ name: tag }],
      },
      Status: {
        select: {
          name: "Published",
        },
      },
      Date: {
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  });

  return response;
};

export interface SearchPostsParams {
  query: string;
  pageSize?: number;
  startCursor?: string;
}

export interface SearchPostsResponse {
  posts: Post[];
  nextCursor: string | null;
  hasMore: boolean;
}

// 포스트 내용 캐시 (메모리 캐시)
const postContentCache = new Map<string, string>();

const getPostContent = async (postId: string): Promise<string> => {
  if (postContentCache.has(postId)) {
    return postContentCache.get(postId)!;
  }

  try {
    const mdblocks = await n2m.pageToMarkdown(postId);
    const { parent } = n2m.toMarkdownString(mdblocks);
    
    // 캐시에 저장 (최대 1시간 후 삭제)
    postContentCache.set(postId, parent);
    setTimeout(() => {
      postContentCache.delete(postId);
    }, 60 * 60 * 1000); // 1시간
    
    return parent;
  } catch (error) {
    console.error(`Error fetching content for post ${postId}:`, error);
    return "";
  }
};

export const searchPosts = async ({
  query,
  pageSize = 10,
  startCursor,
}: SearchPostsParams): Promise<SearchPostsResponse> => {
  if (!query.trim()) {
    return {
      posts: [],
      nextCursor: null,
      hasMore: false,
    };
  }

  // 모든 게시된 포스트를 가져옵니다
  const allPostsResponse = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
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
    page_size: 50, // 검색 성능을 위해 50개로 제한
  });

  const allPosts = allPostsResponse.results
    .filter((page): page is PageObjectResponse => "properties" in page)
    .map(getPostMetadata);

  const searchResults: Post[] = [];
  const searchQuery = query.toLowerCase();
  
  // 제목과 설명에서 먼저 검색 (빠른 검색)
  const titleDescriptionMatches = allPosts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(searchQuery);
    const descriptionMatch = post.description?.toLowerCase().includes(searchQuery);
    return titleMatch || descriptionMatch;
  });
  
  searchResults.push(...titleDescriptionMatches);

  // 내용 검색이 필요한 포스트들 (제목/설명에서 매칭되지 않은 것들)
  const remainingPosts = allPosts.filter(post => 
    !titleDescriptionMatches.some(match => match.id === post.id)
  );

  // 내용 검색 (최대 20개까지만, 성능 고려)
  const contentSearchPromises = remainingPosts.slice(0, 20).map(async (post) => {
    try {
      const content = await getPostContent(post.id);
      if (content.toLowerCase().includes(searchQuery)) {
        return post;
      }
      return null;
    } catch (error) {
      console.error(`Error searching content for post ${post.id}:`, error);
      return null;
    }
  });

  const contentMatches = await Promise.all(contentSearchPromises);
  const validContentMatches = contentMatches.filter(post => post !== null) as Post[];
  
  searchResults.push(...validContentMatches);

  // 중복 제거 및 날짜순 정렬
  const uniqueResults = searchResults.filter((post, index, array) => 
    array.findIndex(p => p.id === post.id) === index
  );

  // 페이지네이션 적용
  const startIndex = startCursor ? parseInt(startCursor) : 0;
  const endIndex = startIndex + pageSize;
  const paginatedResults = uniqueResults.slice(startIndex, endIndex);

  return {
    posts: paginatedResults,
    nextCursor: endIndex < uniqueResults.length ? endIndex.toString() : null,
    hasMore: endIndex < uniqueResults.length,
  };
};
