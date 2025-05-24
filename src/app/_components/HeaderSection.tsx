"use client";

import { usePathname } from "next/navigation";
import SortSelect from "./client/SortSelect";

interface HeaderSectionProps {
  selectedTag: string;
}

export default function HeaderSection({ selectedTag }: HeaderSectionProps) {
  const url = usePathname();
  return (
    <div className="text-foreground-muted flex items-center justify-between">
      {url === "/"
        ? ""
        : selectedTag === "전체"
          ? "블로그 목록"
          : `${selectedTag} 관련 글`}
      <SortSelect />
    </div>
  );
}
