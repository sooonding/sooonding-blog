// client component로 fetch 하는 방법

"use client";

import Link from "next/link";
import { PostCard } from "./PostCard";
import { useEffect, useState } from "react";
import { Post } from "@/types/blog";

export default function PostListClient() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

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
