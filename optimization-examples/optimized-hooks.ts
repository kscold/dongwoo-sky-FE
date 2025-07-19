import { useQuery, useQueries, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// 1. 데이터 prefetching을 위한 커스텀 훅
export const usePrefetchRelatedData = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  // 라우터 이벤트를 통한 prefetching
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // 페이지별 데이터 prefetching
      if (url.includes('/pricing')) {
        // pricing 페이지 관련 데이터 미리 로드
        queryClient.prefetchQuery({
          queryKey: ['pricingEquipments'],
          queryFn: () => import('../../api/pricing').then(api => api.pricingApi.getPricingEquipments()),
          staleTime: 10 * 60 * 1000, // 10분간 유지
        })
        
        queryClient.prefetchQuery({
          queryKey: ['servicePricingSetting'],
          queryFn: () => import('../../api/pricingSettings').then(api => api.servicePricingApi.getPricingSettings()),
          staleTime: 10 * 60 * 1000,
        })
      } else if (url.includes('/work-showcases')) {
        // 첫 페이지 데이터 미리 로드
        queryClient.prefetchQuery({
          queryKey: ['work-showcases', 'showcases', 1, 10],
          queryFn: () => import('../../api/work-showcase').then(api => api.getPublishedWorkShowcases(1, 10)),
          staleTime: 5 * 60 * 1000,
        })
      }
    }

    // 실제 라우터 이벤트는 Next.js App Router에서 다르게 처리해야 함
    // 여기서는 예시로만 표시
    return () => {}
  }, [queryClient, router])
}

// 2. 통합된 홈페이지 데이터 훅 (선택적 로딩)
export const useOptimizedHomeData = (options?: {
  includeWorkShowcases?: boolean
  includeCustomerReviews?: boolean
  includeNotices?: boolean
}) => {
  const { 
    includeWorkShowcases = true, 
    includeCustomerReviews = true, 
    includeNotices = true 
  } = options || {}

  // 병렬 쿼리 실행 - 필요한 데이터만 선택적으로 로드
  const queries = [
    {
      queryKey: ['home', 'basic'],
      queryFn: () => import('../../api/home').then(api => api.getHomePageData()),
      staleTime: 10 * 60 * 1000, // 홈 기본 데이터는 더 오래 캐시
    },
    ...(includeWorkShowcases ? [{
      queryKey: ['work-showcases', 'home'],
      queryFn: () => import('../../api/work-showcase').then(api => api.getPublishedWorkShowcases(1, 5)),
      staleTime: 5 * 60 * 1000,
    }] : []),
    ...(includeCustomerReviews ? [{
      queryKey: ['customer-reviews', 'home'],
      queryFn: () => import('../../api/customer-review').then(api => api.getPublishedCustomerReviews(1, 5)),
      staleTime: 5 * 60 * 1000,
    }] : []),
    ...(includeNotices ? [{
      queryKey: ['notices', 'home'],
      queryFn: () => import('../../api/notice').then(api => api.noticeApi.getAll(1, 5)),
      staleTime: 2 * 60 * 1000, // 공지사항은 더 자주 업데이트
    }] : []),
  ]

  return useQueries({
    queries,
    combine: (results) => {
      const [homeResult, ...otherResults] = results
      return {
        data: {
          home: homeResult.data,
          workShowcases: includeWorkShowcases ? otherResults[0]?.data : null,
          customerReviews: includeCustomerReviews ? otherResults[includeWorkShowcases ? 1 : 0]?.data : null,
          notices: includeNotices ? otherResults[
            (includeWorkShowcases ? 1 : 0) + (includeCustomerReviews ? 1 : 0)
          ]?.data : null,
        },
        isLoading: results.some(result => result.isLoading),
        isError: results.some(result => result.isError),
        errors: results.filter(result => result.error).map(result => result.error),
      }
    }
  })
}

// 3. 최적화된 페이지네이션 훅
export const useOptimizedPagination = <T>(
  queryFn: (page: number, limit: number) => Promise<{ data: T[], total: number, totalPages: number }>,
  queryKey: string[],
  initialPage = 1,
  limit = 10
) => {
  const queryClient = useQueryClient()

  const result = useQuery({
    queryKey: [...queryKey, 'page', initialPage, limit],
    queryFn: () => queryFn(initialPage, limit),
    staleTime: 5 * 60 * 1000,
    placeholderData: (previousData) => previousData, // 페이지 전환 시 이전 데이터 유지
  })

  // 다음 페이지 미리 로드
  useEffect(() => {
    if (result.data && result.data.totalPages > initialPage) {
      queryClient.prefetchQuery({
        queryKey: [...queryKey, 'page', initialPage + 1, limit],
        queryFn: () => queryFn(initialPage + 1, limit),
        staleTime: 5 * 60 * 1000,
      })
    }
  }, [result.data, initialPage, limit, queryClient, queryFn, queryKey])

  return result
}

// 4. 조건부 쿼리 실행을 위한 훅
export const useConditionalQuery = <T>(
  queryKey: string[],
  queryFn: () => Promise<T>,
  condition: boolean,
  options?: {
    staleTime?: number
    enabled?: boolean
  }
) => {
  return useQuery({
    queryKey,
    queryFn,
    enabled: condition && (options?.enabled ?? true),
    staleTime: options?.staleTime ?? 5 * 60 * 1000,
  })
}

// 5. 캐시 무효화 전략
export const useCacheInvalidation = () => {
  const queryClient = useQueryClient()

  const invalidateRelatedQueries = (type: 'equipment' | 'pricing' | 'content') => {
    switch (type) {
      case 'equipment':
        queryClient.invalidateQueries({ queryKey: ['pricingEquipments'] })
        queryClient.invalidateQueries({ queryKey: ['service-guide'] })
        break
      case 'pricing':
        queryClient.invalidateQueries({ queryKey: ['pricingEquipments'] })
        queryClient.invalidateQueries({ queryKey: ['servicePricingSetting'] })
        break
      case 'content':
        queryClient.invalidateQueries({ queryKey: ['work-showcases'] })
        queryClient.invalidateQueries({ queryKey: ['customer-reviews'] })
        queryClient.invalidateQueries({ queryKey: ['home'] })
        break
    }
  }

  const warmupCache = async () => {
    // 자주 사용되는 데이터 미리 로드
    const criticalQueries = [
      { key: ['home', 'basic'], fn: () => import('../../api/home').then(api => api.getHomePageData()) },
      { key: ['pricingEquipments'], fn: () => import('../../api/pricing').then(api => api.pricingApi.getPricingEquipments()) },
    ]

    await Promise.allSettled(
      criticalQueries.map(query => 
        queryClient.prefetchQuery({
          queryKey: query.key,
          queryFn: query.fn,
          staleTime: 10 * 60 * 1000,
        })
      )
    )
  }

  return { invalidateRelatedQueries, warmupCache }
}