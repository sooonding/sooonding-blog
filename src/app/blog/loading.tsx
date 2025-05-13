import { Skeleton } from "@/common/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_200px] gap-6">
        {/* 좌측 프로필 섹션 스켈레톤 */}
        <aside>
          <div className="bg-card border-border/40 space-y-4 rounded-lg border p-6">
            <div className="flex justify-center">
              <Skeleton className="h-32 w-32 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="mx-auto h-4 w-1/2" />
              <Skeleton className="mx-auto h-3 w-3/4" />
            </div>
            <div className="flex justify-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </aside>

        {/* 중앙 컨텐츠 영역 스켈레톤 */}
        <div className="space-y-8">
          {/* 헤더 섹션 스켈레톤 */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-10 w-[180px]" />
          </div>

          {/* 블로그 카드 그리드 스켈레톤 */}
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="group space-y-3">
                <Skeleton className="aspect-[2/1] w-full rounded-t-lg" />
                <div className="space-y-4 p-6">
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 우측 태그 섹션 스켈레톤 */}
        <aside>
          <div className="bg-card space-y-4 rounded-lg border p-6">
            <Skeleton className="h-6 w-24" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-6" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
