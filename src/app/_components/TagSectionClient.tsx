"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { TagFilterItem } from "@/types/blog";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { use } from "react";

interface TagSectionProps {
  tags: Promise<TagFilterItem[]>;
  selectedTag: string;
}

export default function TagSection({ tags, selectedTag }: TagSectionProps) {
  // useHook을 이용하여 client 컴포넌트에서 data 받아오기
  // use: 서버컴포넌트에서 await으로 데이터를 가져오는것 처럼 client 컴포넌트에서 use를 통해 Promise를 처리 할 수 있음
  const allTags = use(tags);
  return (
    <Card>
      <CardHeader>
        <CardTitle>태그 목록</CardTitle>
        <span className="text-muted-foreground text-sm">
          (상위 10개의 목록)
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex max-h-[160px] flex-col gap-3 overflow-y-auto md:max-h-full">
          {allTags.map((tag) => (
            <Link href={`?tag=${tag.name}`} key={tag.name}>
              <div
                className={cn(
                  "hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors",
                  selectedTag === tag.name &&
                    "bg-muted-foreground/10 text-foreground font-medium",
                )}
              >
                <span>{tag.name}</span>
                <span>{tag.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
