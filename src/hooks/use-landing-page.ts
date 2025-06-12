import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { landingPageService } from "@/services/landing-page.service"
import type { LandingPageData } from "@/types/landing-page"

// Query Keys
export const LANDING_PAGE_QUERY_KEYS = {
  all: ["landing-pages"] as const,
  current: ["landing-pages", "current"] as const,
  list: ["landing-pages", "list"] as const,
} as const

// 현재 활성화된 랜딩 페이지 데이터 훅
export function useLandingPageData() {
  return useQuery<LandingPageData, Error>({
    queryKey: LANDING_PAGE_QUERY_KEYS.current,
    queryFn: () => landingPageService.getCurrentLandingPage(),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    cacheTime: 10 * 60 * 1000, // 10분간 메모리에 유지
    retry: 2,
    refetchOnWindowFocus: false,
  })
}

// 모든 랜딩 페이지 데이터 훅 (관리자용)
export function useAllLandingPages() {
  return useQuery<LandingPageData[], Error>({
    queryKey: LANDING_PAGE_QUERY_KEYS.list,
    queryFn: () => landingPageService.getAllLandingPages(),
    staleTime: 2 * 60 * 1000, // 2분간 캐시 유지
    cacheTime: 5 * 60 * 1000, // 5분간 메모리에 유지
  })
}

// 랜딩 페이지 생성 훅 (관리자용)
export function useCreateLandingPage() {
  const queryClient = useQueryClient()

  return useMutation<LandingPageData, Error, Partial<LandingPageData>>({
    mutationFn: (data: Partial<LandingPageData>) =>
      landingPageService.createLandingPage(data),
    onSuccess: () => {
      // 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: LANDING_PAGE_QUERY_KEYS.all })
    },
  })
}

// 랜딩 페이지 업데이트 훅 (관리자용)
export function useUpdateLandingPage() {
  const queryClient = useQueryClient()

  return useMutation<
    LandingPageData,
    Error,
    { id: string; data: Partial<LandingPageData> }
  >({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<LandingPageData>
    }) => landingPageService.updateLandingPage(id, data),
    onSuccess: () => {
      // 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: LANDING_PAGE_QUERY_KEYS.all })
    },
  })
}

// 히어로 이미지 업로드 훅 (관리자용)
export function useUploadHeroImage() {
  return useMutation<{ imageUrl: string }, Error, File>({
    mutationFn: (file: File) => landingPageService.uploadHeroImage(file),
  })
}
