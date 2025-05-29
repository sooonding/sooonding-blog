"use client";

import { getPublishedPostsResponse } from "@/lib/notion";
import Link from "next/link";

// import { Button } from "@/common/components/ui/button";
import { use, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";
import { MainCard } from "./MainCard";
import { motion } from "framer-motion";

interface PostListProps {
  postsPromise: Promise<getPublishedPostsResponse>;
}

export default function MainPostList({ postsPromise }: PostListProps) {
  const initialData = use(postsPromise);

  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const sort = searchParams.get("sort");

  // react-intersection-observer 라이브러리를 사용하여 무한 스크롤 구현

  const fetchPosts = async ({
    pageParam,
  }: {
    pageParam: string | undefined;
  }) => {
    const params = new URLSearchParams();
    if (tag) params.set("tag", tag);
    if (sort) params.set("sort", sort);
    if (pageParam) params.set("startCursor", pageParam);

    const response = await fetch(`/api/posts?${params.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  //isFetchingNextPage : 다음 페이지 불러오는 중인지 여부 | 로딩 스피너 등 표시할 때 사용

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", tag, sort],
      queryFn: fetchPosts, // 실제 데이터를 불러오는 비동기 함수
      initialPageParam: undefined, // 첫 페이지는 특별한 파라미터 없이 시작
      getNextPageParam: (lastPage) => {
        //다음 페이지를 불러올 때 사용할 파라미터를 반환하는 함수입니다.
        return lastPage.nextCursor ?? undefined;
      },
      initialData: {
        pages: [initialData], //첫 렌더링 시 사용할 초기 데이터입니다.
        pageParams: [undefined], //첫 렌더링 시 사용할 파라미터입니다.
      },
    });

  // useInView 훅은 뷰포트 감지
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetchingNextPage]);

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  console.log(allPosts, "all");

  return (
    <motion.main
      key={searchParams.toString()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          {allPosts.map((post, index) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <MainCard post={post} isFirst={index === 0} />
              </Link>
            );
          })}
        </div>
        {hasNextPage && !isFetchingNextPage && (
          <div ref={ref} className="h-10"></div>
        )}
        {isFetchingNextPage && (
          <div className="flex items-center justify-center gap-2 py-4">
            <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
            <span className="text-muted-foreground text-sm">loading...</span>
          </div>
        )}
      </div>
    </motion.main>
  );
}
