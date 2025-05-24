import { getPublishedPosts, getTags } from "@/lib/notion";
import ProfileSection from "../_components/ProfileSection";
import HeaderSection from "../_components/HeaderSection";

import { Suspense } from "react";
import PostListSkeleton from "@/components/features/blog/PostListSkeleton";

import TagSectionClient from "../_components/TagSectionClient";
import TagSectionSkeleton from "../_components/TagSectionSkeleton";

import PostList from "@/components/features/blog/PostListSuspense";

interface BlogProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Blog({ searchParams }: BlogProps) {
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
      <div className="grid grid-cols-[220px_1fr_200px] gap-6">
        <aside>
          <ProfileSection />
        </aside>
        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          <Suspense fallback={<PostListSkeleton />}>
            <PostList postsPromise={postsPromise} />
          </Suspense>
        </div>
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
