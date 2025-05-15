import ProfileSection from "./_components/ProfileSection";

import HeaderSection from "./_components/HeaderSection";
import PostListSuspense from "@/components/features/blog/PostListSuspense";
import { getTags } from "@/lib/notion";
import { Suspense } from "react";
import TagSectionClient from "./_components/TagSectionClient";
import PostListSkeleton from "@/components/features/blog/PostListSkeleton";
import TagSectionSkeleton from "./_components/TagSectionSkeleton";

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;

  const selectedTag = tag || "전체";
  const selectedSort = sort || "latest";

  const tags = getTags();

  return (
    <div className="container py-8">
      {/* 레이아웃 그리드 cols : [220px 고정, 나머지 사이즈 다, 200px 고정] */}
      <div className="grid grid-cols-[220px_1fr_200px] gap-6">
        {/* 좌측 사이드 바 */}
        <aside>
          <ProfileSection />
        </aside>
        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          <Suspense fallback={<PostListSkeleton />}>
            <PostListSuspense
              selectedTag={selectedTag}
              selectedSort={selectedSort}
            />
          </Suspense>
        </div>
        {/* 우측 사이드바  */}
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
