import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { heroSettingsApi, HeroSettings } from "@/api/heroSettings"

// 히어로 설정 조회 훅
export function useHeroSettings() {
  return useQuery({
    queryKey: ["heroSettings"],
    queryFn: heroSettingsApi.getHeroSettings,
    staleTime: 5 * 60 * 1000, // 5분
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}

// 히어로 설정 업데이트 훅 (관리자용)
export function useUpdateHeroSettings() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: heroSettingsApi.updateHeroSettings,
    onSuccess: () => {
      // 성공 시 캐시 무효화하여 최신 데이터 다시 가져오기
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      console.error("히어로 설정 업데이트 실패:", error)
    },
  })
}

// 히어로 이미지 업로드 훅
export function useUploadHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: heroSettingsApi.uploadHeroImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 업로드 실패:", error)
    },
  })
}

// 히어로 이미지 삭제 훅
export function useDeleteHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: heroSettingsApi.deleteHeroImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 삭제 실패:", error)
    },
  })
}

// 히어로 이미지 순서 변경 훅
export function useUpdateHeroImagesOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: heroSettingsApi.updateHeroImagesOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 순서 변경 실패:", error)
    },
  })
}

// 히어로 이미지 상태 변경 훅
export function useToggleHeroImageStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ key, isActive }: { key: string; isActive: boolean }) =>
      heroSettingsApi.toggleHeroImageStatus(key, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      console.error("히어로 이미지 상태 변경 실패:", error)
    },
  })
}
