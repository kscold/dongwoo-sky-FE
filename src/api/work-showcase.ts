import { apiClient } from "./client"
import type {
  WorkShowcase,
  CreateWorkShowcaseDto,
  UpdateWorkShowcaseDto,
  PaginatedWorkShowcases,
} from "@/common/types/work-showcase"

export type {
  WorkShowcase,
  CreateWorkShowcaseDto,
  UpdateWorkShowcaseDto,
  PaginatedWorkShowcases,
}

/**
 * 공개용 작업자 자랑거리 데이터를 가져옵니다. (페이지네이션)
 */
export const getPublishedWorkShowcases = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedWorkShowcases> => {
  try {
    const response = await apiClient.get<PaginatedWorkShowcases>("/service/work-showcase", {
      params: { page, limit }
    })
    console.log(`[getPublishedWorkShowcases] 작업자 자랑거리 데이터:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getPublishedWorkShowcases] 작업자 자랑거리 조회 실패:`, error)
    throw error
  }
}

/**
 * 특정 작업자 자랑거리 조회
 */
export const getWorkShowcaseById = async (id: string): Promise<WorkShowcase> => {
  try {
    const response = await apiClient.get<WorkShowcase>(`/service/work-showcase/${id}`)
    console.log(`[getWorkShowcaseById] 작업자 자랑거리 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getWorkShowcaseById] 작업자 자랑거리 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 작업자 자랑거리 좋아요
 */
export const likeWorkShowcase = async (id: string): Promise<{ likeCount: number }> => {
  try {
    const response = await apiClient.post<{ likeCount: number }>(`/service/work-showcase/${id}/like`)
    return response.data
  } catch (error) {
    console.error(`[likeWorkShowcase] 작업자 자랑거리 좋아요 실패:`, error)
    throw error
  }
}

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 작업자 자랑거리 목록 조회 (페이지네이션)
 */
export const getAdminWorkShowcases = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedWorkShowcases> => {
  try {
    const response = await apiClient.get<PaginatedWorkShowcases>("/admin/work-showcase", {
      params: { page, limit }
    })
    console.log(`[getAdminWorkShowcases] 관리자 작업자 자랑거리 목록:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminWorkShowcases] 관리자 작업자 자랑거리 목록 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 특정 작업자 자랑거리 조회
 */
export const getAdminWorkShowcaseById = async (id: string): Promise<WorkShowcase> => {
  try {
    const response = await apiClient.get<WorkShowcase>(`/admin/work-showcase/${id}`)
    console.log(`[getAdminWorkShowcaseById] 관리자 작업자 자랑거리 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminWorkShowcaseById] 관리자 작업자 자랑거리 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 작업자 자랑거리 생성
 */
export const createWorkShowcase = async (data: CreateWorkShowcaseDto): Promise<WorkShowcase> => {
  try {
    const response = await apiClient.post<WorkShowcase>("/admin/work-showcase", data)
    console.log(`[createWorkShowcase] 작업자 자랑거리 생성 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[createWorkShowcase] 작업자 자랑거리 생성 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 작업자 자랑거리 수정
 */
export const updateWorkShowcase = async (
  id: string,
  data: UpdateWorkShowcaseDto
): Promise<WorkShowcase> => {
  try {
    const response = await apiClient.patch<WorkShowcase>(`/admin/work-showcase/${id}`, data)
    console.log(`[updateWorkShowcase] 작업자 자랑거리 수정 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[updateWorkShowcase] 작업자 자랑거리 수정 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 작업자 자랑거리 삭제
 */
export const deleteWorkShowcase = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/admin/work-showcase/${id}`)
    console.log(`[deleteWorkShowcase] 작업자 자랑거리 삭제 성공`)
  } catch (error) {
    console.error(`[deleteWorkShowcase] 작업자 자랑거리 삭제 실패:`, error)
    throw error
  }
}

/**
 * 작업자 자랑거리 이미지 업로드
 */
export const uploadWorkShowcaseImages = async (
  files: File[]
): Promise<{ imageUrls: string[] }> => {
  try {
    const formData = new FormData()
    files.forEach(file => {
      formData.append("files", file)
    })

    const response = await apiClient.post<{ imageUrls: string[] }>(
      "/admin/work-showcase/upload-images",
      formData
    )
    return response.data
  } catch (error) {
    console.error(`[uploadWorkShowcaseImages] 작업자 자랑거리 이미지 업로드 실패:`, error)
    throw error
  }
}
