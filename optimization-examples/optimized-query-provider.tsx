"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

export default function OptimizedQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 데이터 타입별 차별화된 캐시 시간
            staleTime: 5 * 60 * 1000, // 5분 기본값
            gcTime: 15 * 60 * 1000, // 15분으로 증가 (더 긴 캐시 유지)
            retry: (failureCount, error: any) => {
              // 404 에러는 재시도하지 않음
              if (error?.status === 404) return false
              // 최대 3번 재시도, 지수적 백오프
              return failureCount < 3
            },
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            // 네트워크 재연결 시에만 자동 재요청
            refetchOnMount: "always",
          },
          mutations: {
            retry: 1,
            // 낙관적 업데이트를 위한 기본 설정
            onError: (error, variables, context) => {
              console.error("Mutation failed:", error)
            },
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools 
          initialIsOpen={false} 
          position="bottom-right"
          toggleButtonProps={{
            style: {
              marginLeft: '5px',
              transform: `scale(.7)`,
              transformOrigin: 'bottom right',
            },
          }}
        />
      )}
    </QueryClientProvider>
  )
}