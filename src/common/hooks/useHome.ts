import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getHomePageData,
  getAdminHomeSettings,
  saveAdminHomeSettings,
  uploadHeroImages,
  deleteHeroImage,
} from "../../api/home";
import { HomeSettings } from "../../types/home";

export const homeKeys = {
  all: ["home"] as const,
  homePageData: () => [...homeKeys.all, "homePageData"] as const,
  adminSettings: () => [...homeKeys.all, "adminSettings"] as const,
  mainSettings: () => [...homeKeys.all, "mainSettings"] as const,
};

/**
 * 홈페이지 데이터 조회 (공개용)
 */
export const useHomePageData = () => {
  return useQuery({
    queryKey: homeKeys.homePageData(),
    queryFn: getHomePageData,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

/**
 * 관리자용 홈 설정 목록 조회
 */
export const useAdminHomeSettings = () => {
  return useQuery({
    queryKey: homeKeys.adminSettings(),
    queryFn: getAdminHomeSettings,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

/**
 * 관리자용 홈 설정 저장 (생성 또는 업데이트)
 */
export const useSaveAdminHomeSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (settings: Partial<HomeSettings>) =>
      saveAdminHomeSettings(settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() });
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() });
      queryClient.invalidateQueries({ queryKey: homeKeys.homePageData() });
    },
    onError: (error) => {
      console.error("홈 설정 저장 실패:", error);
    },
  });
};

/**
 * 히어로 이미지 업로드 (다중)
 */
export const useUploadHeroImages = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (files: File[]) => uploadHeroImages(files),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() });
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() });
    },
    onError: (error) => {
      console.error("히어로 이미지 업로드 실패:", error);
    },
  });
};

/**
 * 히어로 이미지 삭제
 */
export const useDeleteHeroImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (imageUrl: string) => deleteHeroImage(imageUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: homeKeys.adminSettings() });
      queryClient.invalidateQueries({ queryKey: homeKeys.mainSettings() });
    },
    onError: (error) => {
      console.error("히어로 이미지 삭제 실패:", error);
    },
  });
};

// =================================================================
// 편의성 훅
// =================================================================

/**
 * 메인 홈 설정 조회 (관리자용)
 * 단일 홈 설정을 조회
 */
export const useMainHomeSettings = () => {
  return useQuery({
    queryKey: homeKeys.mainSettings(),
    queryFn: getAdminHomeSettings,
    staleTime: 1000 * 60 * 5, // 5분
  });
};
