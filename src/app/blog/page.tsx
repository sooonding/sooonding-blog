import { getPublishedPosts, getTags } from "@/lib/notion";
import ProfileSection from "../_components/ProfileSection";
import HeaderSection from "../_components/HeaderSection";
import PostList from "@/components/features/blog/PostList";
import TagSection from "../_components/TagSection";
import { Suspense } from "react";
import PostListSkeleton from "@/components/features/blog/PostListSkeleton";

interface BlogProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag, sort } = await searchParams;

  const selectedTag = tag || "전체";
  const selectedSort = sort || "latest";

  const [posts, tags] = await Promise.all([
    getPublishedPosts({ tag: selectedTag, sort: selectedSort }),
    getTags(),
  ]);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_200px] gap-6">
        <aside>
          <ProfileSection />
        </aside>
        <div className="space-y-8">
          <HeaderSection selectedTag={selectedTag} />
          <Suspense fallback={<PostListSkeleton />}>
            <PostList posts={posts.posts} />
          </Suspense>
        </div>
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>
      </div>
    </div>
  );
}
