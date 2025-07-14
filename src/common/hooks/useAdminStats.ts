import { useQuery } from "@tanstack/react-query"

import { getAdminStats } from "../../api/admin-stats"

export const adminStatsKeys = {
  all: ["admin-stats"] as const,
  overview: () => [...adminStatsKeys.all, "overview"] as const,
}

/**
 * 어드민 통계 데이터 조회 훅
 */
export const useAdminStats = () => {
  return useQuery({
    queryKey: adminStatsKeys.overview(),
    queryFn: getAdminStats,
    staleTime: 0, // 캐시 즉시 만료 (항상 최신 데이터)
    gcTime: 5 * 60 * 1000, // 5분간 메모리에 유지
    refetchOnWindowFocus: true, // 창 포커스 시 재조회
    refetchInterval: 30 * 1000, // 30초마다 자동 재조회
  })
}
