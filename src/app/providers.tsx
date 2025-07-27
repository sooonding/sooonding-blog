"use client";

// 범용적으로 사용하기 위해 분리
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/common/components/theme/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          // 새로고침 시 최신 데이터를 가져오도록 캐시 시간 단축
          queries: {
            staleTime: 0, // 항상 최신 데이터 확인
            gcTime: 5 * 60 * 1000, // 5분간 가비지 컬렉션 방지
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}

        {/* devTools 적용 */}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
