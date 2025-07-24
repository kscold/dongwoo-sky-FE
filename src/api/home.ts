import { apiClient } from "./client";
import { HomePageData, HomeSettings } from "../types/home";
import { ApiResponse } from "../types/auth";

/**
 * 홈페이지에 필요한 모든 데이터를 한 번에 가져옵니다. (공개용)
 */
export const getHomePageData = async (): Promise<HomePageData> => {
  try {
    const response = await apiClient.get<HomePageData>("/service/home");
    console.log(`[getHomePageData] 홈페이지 데이터:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`[getHomePageData] 홈페이지 데이터 조회 실패:`, error);
    throw error;
  }
};

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 홈 설정 조회 (단일 설정, 없으면 자동 생성)
 */
export const getAdminHomeSettings = async (): Promise<HomeSettings> => {
  try {
    const response = await apiClient.get<HomeSettings>("/admin/home");
    console.log(`[getAdminHomeSettings] 관리자 홈 설정:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`[getAdminHomeSettings] 관리자 홈 설정 조회 실패:`, error);
    throw error;
  }
};

/**
 * 관리자용 홈 설정 저장 (생성 또는 업데이트)
 */
export const saveAdminHomeSettings = async (
  settings: Partial<HomeSettings>
): Promise<HomeSettings> => {
  try {
    const response = await apiClient.post<HomeSettings>(
      "/admin/home",
      settings
    );
    console.log(`[saveAdminHomeSettings] 홈 설정 저장 완료:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`[saveAdminHomeSettings] 관리자 홈 설정 저장 실패:`, error);
    throw error;
  }
};

/**
 * 히어로 이미지 업로드 (다중)
 */
export const uploadHeroImages = async (
  files: File[]
): Promise<{ images: any[] }> => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await apiClient.post<{
      success: boolean;
      code: number;
      data: { images: any[] };
    }>("/admin/home/upload-hero-images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(`[uploadHeroImages] 히어로 이미지 업로드 완료:`, response.data);
    // ApiResponseDto 구조에서 실제 데이터 추출
    return response.data.data;
  } catch (error) {
    console.error(`[uploadHeroImages] 히어로 이미지 업로드 실패:`, error);
    throw error;
  }
};

/**
 * 히어로 이미지 삭제
 */
export const deleteHeroImage = async (
  imageUrl: string
): Promise<{ message: string }> => {
  try {
    const response = await apiClient.delete<{ message: string }>(
      "/admin/home/hero-images",
      { data: { imageUrl } }
    );
    console.log(`[deleteHeroImage] 히어로 이미지 삭제 완료:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`[deleteHeroImage] 히어로 이미지 삭제 실패:`, error);
    throw error;
  }
};
