import { getPublishedPosts } from "@/lib/notion";
import Link from "next/link";
import { PostCard } from "./PostCard";

interface PostListProps {
  selectedTag: string;
  selectedSort: string;
}

export default async function PostList({
  selectedTag,
  selectedSort,
}: PostListProps) {
  const { posts } = await getPublishedPosts({
    tag: selectedTag,
    sort: selectedSort,
  });

  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={index === 0} />
        </Link>
      ))}
    </div>
  );
}
