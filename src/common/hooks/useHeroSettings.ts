import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { HomeSettings } from "../../types/home"
// import {
//   getHeroSettings,
//   updateHeroSettings,
//   HeroSettingsData,
// } from "../../api/home"

const heroSettingsQueryKeys = {
  all: ["heroSettings"] as const,
}

// 히어로 설정 조회 훅
export const useHeroSettings = (enabled: boolean = true) => {
  return useQuery<HomeSettings, Error>({
    queryKey: ["heroSettings"],
    queryFn: () => ({ hero: {} } as any),
    enabled, // 쿼리를 조건부로 실행
    staleTime: 5 * 60 * 1000, // 5분
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}

// 히어로 설정 업데이트 훅 (관리자용)
export const useUpdateHeroSettings = () => {
  const queryClient = useQueryClient()
  return useMutation<any, Error, { id: string; settings: any }>({
    mutationFn: () => Promise.resolve({}),
    onSuccess: (data) => {
      queryClient.setQueryData(heroSettingsQueryKeys.all, data)
      alert("히어로 설정이 성공적으로 저장되었습니다.")
    },
    onError: (error) => {
      alert(`오류가 발생했습니다: ${error.message}`)
    },
  })
}

// 히어로 이미지 업로드 훅
export function useUploadHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => Promise.resolve({}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// 히어로 이미지 삭제 훅
export function useDeleteHeroImage() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => Promise.resolve({}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// 히어로 이미지 순서 변경 훅
export function useUpdateHeroImagesOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => Promise.resolve({}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// 히어로 이미지 상태 변경 훅
export function useToggleHeroImageStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => Promise.resolve({}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["heroSettings"] })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useAdminHeroSettings = () => {
  return useQuery<any | null, Error, any>({
    queryKey: heroSettingsQueryKeys.all,
    queryFn: () => Promise.resolve({}),
    select: (data) => {
      // 백엔드에서 받은 데이터를 react-hook-form의 데이터 형식으로 변환
      if (!data) {
        return {
          id: "",
          title: "",
          subtitle: "",
          description: "",
          ctaText: "",
          ctaLink: "",
          backgroundImageUrl: "",
        }
      }
      return {
        id: data.pageId, // 백엔드 스키마에 따라 id 필드 추가
        title: data.heroTitle.preTitle,
        subtitle: data.heroTitle.mainTitle,
        description: data.heroTitle.postTitle,
        ctaText: data.heroButtons.primaryButtonText,
        ctaLink: data.heroButtons.primaryButtonLink,
        backgroundImageUrl: data.heroImages[0] || "", // 첫 번째 이미지를 대표 이미지로 사용
      }
    },
  })
}
