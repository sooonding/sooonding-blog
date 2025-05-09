import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";
import ProfileSection from "./_components/ProfileSection";
import TagSection from "./_components/TagSection";
import { getPublishedPosts, getTags } from "@/lib/notion";

interface HomeProps {
  searchParams: Promise<{ tag?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || "전체";

  const [posts, tags] = await Promise.all([
    getPublishedPosts(selectedTag),
    getTags(),
  ]);

  return (
    <div className="container py-8">
      {/* 레이아웃 그리드 cols : [220px 고정, 나머지 사이즈 다, 200px 고정] */}
      <div className="grid grid-cols-[220px_1fr_200px] gap-6">
        {/* 좌측 사이드 바 */}
        <aside>
          <ProfileSection />
        </aside>
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="flex items-center justify-between">
            {selectedTag === "전체" ? "블로그 목록" : `${selectedTag} 관련 글`}
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 방식 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="oldest">오래된순</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* 블로그 카드 그리드 */}
          <div className="grid grid-cols-2 gap-4">
            {/* 블로그 카드 반복 */}
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </div>
        {/* 우측 사이드바  */}
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>
      </div>
    </div>
  );
}
