import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  getHomePageData,
  getAdminHomeSettings,
  getMainHomeSettings,
  getAdminHomeSetting,
  updateAdminHomeSettings,
  createAdminHomeSettings,
  deleteAdminHomeSettings,
  uploadHeroImages,
  deleteHeroImage,
  ensureMainHomeExists,
} from "../../api/home"
import { HomeSettings } from "../../types/home"

export const homeKeys = {
  all: ["home"] as const,
  homePageData: () => [...homeKeys.all, "homePageData"] as const,
  adminSettings: () => [...homeKeys.all, "adminSettings"] as const,
  mainSettings: () => [...homeKeys.all, "mainSettings"] as const,
  adminSetting: (id: string) => [...homeKeys.all, "adminSetting", id] as const,
}

// =================================================================
// 공개용 훅
// =================================================================

/**
 * 홈페이지 데이터 조회 (공개용)
 */
export const useHomePageData = () => {
  return useQuery({
    queryKey: homeKeys.homePageData(),
    queryFn: getHomePageData,
    staleTime: 1000 * 60 * 5, // 5분
  })
}

// =================================================================
// 관리자용 훅
// =================================================================

/**
 * 관리자용 홈 설정 목록 조회
 */
export const useAdminHomeSettings = () => {
  return useQuery({
    queryKey: homeKeys.adminSettings(),
    queryFn: getAdminHomeSettings,
    staleTime: 1000 * 60 * 5, // 5분
  })
}

/**
 * 관리자용 홈 설정 단일 조회
 */
export const useAdminHomeSetting = (id: string) => {
  return useQuery({
    queryKey: homeKeys.adminSetting(id),
    queryFn: () => getAdminHomeSetting(id),
    enabled: !!id,
  })
}

/**
 * 관리자용 홈 설정 업데이트
 */
export const useUpdateAdminHomeSettings = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      id,
      settings,
    }: {
      id: string
      settings: Partial<HomeSettings>
    }) => updateAdminHomeSettings(id, settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.homePageData() })
    },
    onError: (error) => {
      console.error("홈 설정 업데이트 실패:", error)
    },
  })
}

/**
 * 관리자용 홈 설정 생성
 */
export const useCreateAdminHomeSettings = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (settings: Partial<HomeSettings>) =>
      createAdminHomeSettings(settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.homePageData() })
    },
    onError: (error) => {
      console.error("홈 설정 생성 실패:", error)
    },
  })
}

/**
 * 관리자용 홈 설정 삭제
 */
export const useDeleteAdminHomeSettings = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteAdminHomeSettings(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.homePageData() })
    },
    onError: (error) => {
      console.error("홈 설정 삭제 실패:", error)
    },
  })
}

/**
 * 히어로 이미지 업로드 (다중)
 */
export const useUploadHeroImages = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (files: File[]) => uploadHeroImages(files),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
    },
    onError: (error) => {
      console.error("히어로 이미지 업로드 실패:", error)
    },
  })
}

/**
 * 히어로 이미지 삭제
 */
export const useDeleteHeroImage = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (imageUrl: string) => deleteHeroImage(imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
    },
    onError: (error) => {
      console.error("히어로 이미지 삭제 실패:", error)
    },
  })
}

/**
 * 메인 홈이 없으면 생성
 */
export const useEnsureMainHomeExists = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ensureMainHomeExists,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() })
      queryClient.invalidateQueries({ queryKey: homeKeys.homePageData() })
    },
    onError: (error) => {
      console.error("메인 홈 생성/확인 실패:", error)
    },
  })
}

// =================================================================
// 편의성 훅
// =================================================================

/**
 * 메인 홈 설정 조회 (관리자용)
 * 첫 번째 홈 설정을 메인으로 간주
 */
export const useMainHomeSettings = () => {
  return useQuery({
    queryKey: homeKeys.mainSettings(),
    queryFn: getMainHomeSettings,
    staleTime: 1000 * 60 * 5, // 5분
  })
}
