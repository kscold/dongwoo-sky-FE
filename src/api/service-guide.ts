import { apiClient } from "./client";
import type {
  ServiceGuideData,
  AdminServiceGuide,
  UpdateServiceGuideDto,
  ServiceGuide,
} from "../types/service-guide";

// API 응답 전체 구조
interface ApiResponse<T> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}

/**
 * 공개용 서비스 가이드 데이터를 가져옵니다.
 */
export const getServiceGuideData = async (): Promise<ServiceGuideData> => {
  try {
    const response = await apiClient.get<ApiResponse<ServiceGuideData>>(
      "/service/service-guide"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 서비스 가이드 조회
 */
export const getAdminServiceGuide = async (): Promise<AdminServiceGuide> => {
  try {
    const response = await apiClient.get<ApiResponse<AdminServiceGuide>>(
      "/admin/service-guide"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 관리자용 서비스 가이드 업데이트
 */
export const updateAdminServiceGuide = async (
  data: UpdateServiceGuideDto
): Promise<AdminServiceGuide> => {
  try {
    const response = await apiClient.patch<ApiResponse<AdminServiceGuide>>(
      "/admin/service-guide",
      data
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

/**
 * 서비스 가이드 이미지 업로드
 */
export const uploadServiceGuideImages = async (
  files: File[]
): Promise<{ imageUrls: string[] }> => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await apiClient.post<{ imageUrls: string[] }>(
      "/admin/service-guide/upload-images",
      formData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getServiceGuide = async (): Promise<ServiceGuide> => {
  const response = await apiClient.get("/admin/service-guide");
  return response.data;
};

export const updateServiceGuide = async (
  data: UpdateServiceGuideDto
): Promise<ServiceGuide> => {
  const response = await apiClient.patch("/admin/service-guide", data);
  return response.data;
};

export const uploadProfileImage = async (
  file: File
): Promise<{ imageUrl: string }> => {
  const formData = new FormData();
  formData.append("files", file);

  const response = await apiClient.post(
    "/admin/service-guide/upload-profile-image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.data;
};

export const deleteProfileImage = async (
  imageUrl: string
): Promise<{ message: string }> => {
  const response = await apiClient.delete(
    "/admin/service-guide/profile-image",
    {
      data: { imageUrl },
    }
  );
  return response.data.data;
};
