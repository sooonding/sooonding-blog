import ProfileSection from "./_components/ProfileSection";

import HeaderSection from "./_components/HeaderSection";

import { getPublishedPosts, getTags } from "@/lib/notion";
import { Suspense } from "react";
import TagSectionClient from "./_components/TagSectionClient";
import PostListSkeleton from "@/components/features/blog/PostListSkeleton";
import TagSectionSkeleton from "./_components/TagSectionSkeleton";
import MainPostList from "@/components/features/blog/MainPostListSuspense";

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;

  const selectedTag = tag || "전체";
  const selectedSort = sort || "latest";

  const tags = getTags();

  const postsPromise = getPublishedPosts({
    tag: selectedTag,
    sort: selectedSort,
  });

  return (
    <div className="container py-8">
      {/* 레이아웃 그리드 cols : [220px 고정, 나머지 사이즈 다, 200px 고정] */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr_200px]">
        {/* 좌측 사이드 바 */}
        <aside className="order-1 md:order-none">
          <ProfileSection />
        </aside>
        <div className="order-3 space-y-8 md:order-none">
          <HeaderSection selectedTag={selectedTag} />
          <div className="mt-20">
            <Suspense fallback={<PostListSkeleton />}>
              <MainPostList postsPromise={postsPromise} />
            </Suspense>
          </div>
        </div>
        {/* 우측 사이드바  */}
        <aside className="order-2 md:order-none">
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
