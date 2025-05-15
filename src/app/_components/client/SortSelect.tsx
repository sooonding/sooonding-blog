"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");

  const handleValueChange = (value: string) => {
    // 쿼리 문자열 가져오기
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <Select
      value={sort || "latest"}
      onValueChange={handleValueChange}
      defaultValue="latest"
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 방식 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">최신순</SelectItem>
        <SelectItem value="oldest">오래된순</SelectItem>
      </SelectContent>
    </Select>
  );
}
