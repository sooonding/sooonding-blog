"use client";

import { Badge } from "@/common/components/ui/badge";
import { Post } from "@/types/blog";

interface IMainCardProps {
  post: Post;
  isFirst?: boolean;
}

export function MainCard({ post }: IMainCardProps) {
  console.log(post);
  return (
    <div className="container">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-10">
        <div className="text-primary min-w-[100px] text-sm">
          {post.date ? post.date : "No date"}
        </div>
        <div className="text-primary min-w-[300px] text-sm font-semibold underline decoration-[0.3px] underline-offset-2 transition-all hover:decoration-pink-200 hover:decoration-2">
          {post.title}
        </div>
        <div>
          {post.tags && post.tags.length >= 1 && (
            <Badge variant="default">{post.tags.join(", ")}</Badge>
          )}
        </div>
      </div>
    </div>
  );
}
