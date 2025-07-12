import { apiClient } from "./client"
import {
  HomePageData,
  HomeSettings,
  ContentSetting,
  HeroSection,
} from "../common/types/home"
import { ApiResponse } from "../common/types/auth"

/**
 * 홈페이지에 필요한 모든 데이터를 한 번에 가져옵니다. (공개용)
 */
export const getHomePageData = async (): Promise<HomePageData> => {
  try {
    const response = await apiClient.get<HomePageData>("/service/home")
    console.log(`[getHomePageData] 홈페이지 데이터:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getHomePageData] 홈페이지 데이터 조회 실패:`, error)
    throw error
  }
}

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 홈 설정 조회 (전체 목록)
 */
export const getAdminHomeSettings = async (): Promise<HomeSettings[]> => {
  try {
    const response = await apiClient.get<HomeSettings[]>("/admin/home")
    console.log(`[getAdminHomeSettings] 관리자 홈 설정 목록:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminHomeSettings] 관리자 홈 설정 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 홈 설정 단일 조회
 */
export const getAdminHomeSetting = async (id: string): Promise<HomeSettings> => {
  try {
    const response = await apiClient.get<HomeSettings>(`/admin/home/${id}`)
    console.log(`[getAdminHomeSetting] 관리자 홈 설정:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminHomeSetting] 관리자 홈 설정 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 홈 설정 업데이트
 */
export const updateAdminHomeSettings = async (
  id: string,
  settings: Partial<HomeSettings>,
): Promise<HomeSettings> => {
  try {
    const response = await apiClient.patch<HomeSettings>(
      `/admin/home/${id}`,
      settings,
    )
    console.log(`[updateAdminHomeSettings] 홈 설정 업데이트 완료:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[updateAdminHomeSettings] 관리자 홈 설정 업데이트 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 홈 설정 생성
 */
export const createAdminHomeSettings = async (
  settings: Partial<HomeSettings>,
): Promise<HomeSettings> => {
  try {
    const response = await apiClient.post<HomeSettings>(
      "/admin/home",
      settings,
    )
    console.log(`[createAdminHomeSettings] 홈 설정 생성 완료:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[createAdminHomeSettings] 관리자 홈 설정 생성 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 홈 설정 삭제
 */
export const deleteAdminHomeSettings = async (id: string): Promise<void> => {
  try {
    const response = await apiClient.delete<void>(`/admin/home/${id}`)
    console.log(`[deleteAdminHomeSettings] 홈 설정 삭제 완료`)
  } catch (error) {
    console.error(`[deleteAdminHomeSettings] 관리자 홈 설정 삭제 실패:`, error)
    throw error
  }
}

/**
 * 히어로 이미지 업로드 (다중)
 */
export const uploadHeroImages = async (
  files: File[],
): Promise<{ images: any[] }> => {
  try {
    const formData = new FormData()
    files.forEach(file => {
      formData.append("files", file)
    })

    const response = await apiClient.post<{
      success: boolean
      code: number
      data: { images: any[] }
    }>(
      "/admin/home/upload-hero-images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    console.log(`[uploadHeroImages] 히어로 이미지 업로드 완료:`, response.data)
    // ApiResponseDto 구조에서 실제 데이터 추출
    return response.data.data
  } catch (error) {
    console.error(`[uploadHeroImages] 히어로 이미지 업로드 실패:`, error)
    throw error
  }
}

/**
 * 히어로 이미지 삭제
 */
export const deleteHeroImage = async (
  imageUrl: string,
): Promise<{ message: string }> => {
  try {
    const response = await apiClient.delete<{ message: string }>(
      "/admin/home/hero-images",
      { data: { imageUrl } },
    )
    console.log(`[deleteHeroImage] 히어로 이미지 삭제 완료:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[deleteHeroImage] 히어로 이미지 삭제 실패:`, error)
    throw error
  }
}

/**
 * 메인 홈이 없으면 생성하는 함수
 */
export const ensureMainHomeExists = async (): Promise<HomeSettings> => {
  try {
    const response = await apiClient.post<HomeSettings>("/admin/home/initialize")
    console.log(`[ensureMainHomeExists] 메인 홈 생성/확인 완료:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[ensureMainHomeExists] 메인 홈 생성/확인 실패:`, error)
    throw error
  }
}

/**
 * 메인 홈 설정 조회 (첫 번째 항목)
 */
export const getMainHomeSettings = async (): Promise<HomeSettings | null> => {
  try {
    const response = await apiClient.get<HomeSettings[]>("/admin/home")
    console.log(`[getMainHomeSettings] 메인 홈 설정:`, response.data)
    return response.data.length > 0 ? response.data[0] : null
  } catch (error) {
    console.error(`[getMainHomeSettings] 메인 홈 설정 조회 실패:`, error)
    throw error
  }
}


