import { Skeleton } from "@/common/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <article className="container py-12">
      <div className="grid grid-cols-[240px_1fr_240px] gap-8">
        <aside></aside>
        <section>
          {/* 블로그 헤더 */}
          <div className="space-y-4">
            <div className="space-y-2">
              {/* 태그 */}
              <div className="flex gap-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
              </div>
              {/* 제목 */}
              <Skeleton className="h-10 w-3/4" />
            </div>

            {/* 메타 정보 */}
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="my-8">
            <Skeleton className="h-[1px] w-full" />
          </div>

          {/* 블로그 본문 */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-9/12" />
          </div>

          {/* 구분선 */}
          <div className="my-16">
            <Skeleton className="h-[1px] w-full" />
          </div>

          {/* 이전/다음 포스트 네비게이션 */}
          <nav className="grid grid-cols-2 gap-8">
            <div className="space-y-2 rounded-lg border p-6">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-5 w-24" />
              </div>
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="space-y-2 rounded-lg border p-6">
              <div className="flex items-center justify-end gap-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-4" />
              </div>
              <Skeleton className="h-4 w-full" />
            </div>
          </nav>
        </section>

        {/* 우측 목차 */}
        <aside className="relative">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/20 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <Skeleton className="h-6 w-16" />
              <nav className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <div className="space-y-2 pl-4">
                      <Skeleton className="h-3 w-32" />
                      <Skeleton className="h-3 w-36" />
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
