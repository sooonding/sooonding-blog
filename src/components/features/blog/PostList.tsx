import Link from "next/link";
import { PostCard } from "./PostCard";
import { Post } from "@/types/blog";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
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
