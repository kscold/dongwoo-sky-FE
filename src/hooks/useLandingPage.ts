import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { landingPageApi } from "@/api/landingPage"
import type { LandingPageData } from "@/types/landing-page"

// 현재 랜딩페이지 데이터 조회
export function useLandingPageData() {
  return useQuery({
    queryKey: ["landingPage", "current"],
    queryFn: landingPageApi.getCurrentLandingPage,
    staleTime: 5 * 60 * 1000, // 5분
    retry: 1,
  })
}

// 모든 랜딩페이지 데이터 조회 (관리자용)
export function useAllLandingPages() {
  return useQuery({
    queryKey: ["landingPage", "all"],
    queryFn: landingPageApi.getAllLandingPages,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

// 랜딩페이지 업데이트
export function useUpdateLandingPage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: Partial<LandingPageData>
    }) => landingPageApi.updateLandingPage(id, data),
    onSuccess: () => {
      // 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["landingPage"] })
    },
    onError: (error) => {
      console.error("랜딩페이지 업데이트 실패:", error)
    },
  })
}

// 랜딩페이지 생성
export function useCreateLandingPage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<LandingPageData>) =>
      landingPageApi.createLandingPage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landingPage"] })
    },
    onError: (error) => {
      console.error("랜딩페이지 생성 실패:", error)
    },
  })
}

// 히어로 이미지 업로드
export function useUploadHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: landingPageApi.uploadHeroImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landingPage"] })
      queryClient.invalidateQueries({ queryKey: ["heroImages"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 업로드 실패:", error)
    },
  })
}

// 히어로 다중 이미지 업로드
export function useUploadHeroImages() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: landingPageApi.uploadHeroImages,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landingPage"] })
      queryClient.invalidateQueries({ queryKey: ["heroImages"] })
    },
    onError: (error) => {
      console.error("히어로 다중 이미지 업로드 실패:", error)
    },
  })
}

// 히어로 이미지 목록 조회
export function useHeroImages() {
  return useQuery({
    queryKey: ["heroImages"],
    queryFn: landingPageApi.getHeroImages,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

// 히어로 이미지 설정
export function useSetHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: landingPageApi.setHeroImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landingPage"] })
      queryClient.invalidateQueries({ queryKey: ["heroImages"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 설정 실패:", error)
    },
  })
}

// 히어로 이미지 삭제
export function useDeleteHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: landingPageApi.deleteHeroImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroImages"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 삭제 실패:", error)
    },
  })
}
