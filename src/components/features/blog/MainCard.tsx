"use client";

import { Post } from "@/types/blog";

interface IMainCardProps {
  post: Post;
  isFirst?: boolean;
}

export function MainCard({ post }: IMainCardProps) {
  return (
    <div className="container">
      <div className="flex items-center gap-10">
        <div className="text-muted-foreground min-w-[100px] text-sm">
          {post.date ? post.date : "No date"}
        </div>
        <div className="text-primary text-sm font-semibold underline decoration-[0.3px] underline-offset-2 transition-all hover:decoration-pink-200 hover:decoration-2">
          {post.title}
        </div>
      </div>
    </div>
  );
}
