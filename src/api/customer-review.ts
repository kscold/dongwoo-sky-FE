import { apiClient } from "./client"
import type {
  CustomerReview,
  CreateCustomerReviewDto,
  UpdateCustomerReviewDto,
  PaginatedCustomerReviews,
} from "@/common/types/customer-review"

export type {
  CustomerReview,
  CreateCustomerReviewDto,
  UpdateCustomerReviewDto,
  PaginatedCustomerReviews,
}

/**
 * 공개용 고객 후기 데이터를 가져옵니다.
 */
export const getPublishedCustomerReviews = async (): Promise<CustomerReview[]> => {
  try {
    const response = await apiClient.get<CustomerReview[]>("/service/customer-review")
    console.log(`[getPublishedCustomerReviews] 고객 후기 데이터:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getPublishedCustomerReviews] 고객 후기 조회 실패:`, error)
    throw error
  }
}

/**
 * 특정 고객 후기 조회
 */
export const getCustomerReviewById = async (id: string): Promise<CustomerReview> => {
  try {
    const response = await apiClient.get<CustomerReview>(`/service/customer-review/${id}`)
    console.log(`[getCustomerReviewById] 고객 후기 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getCustomerReviewById] 고객 후기 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 고객 후기 도움됨 표시
 */
export const markReviewHelpful = async (id: string): Promise<{ helpfulCount: number }> => {
  try {
    const response = await apiClient.post<{ helpfulCount: number }>(`/service/customer-review/${id}/helpful`)
    return response.data
  } catch (error) {
    console.error(`[markReviewHelpful] 고객 후기 도움됨 표시 실패:`, error)
    throw error
  }
}

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 고객 후기 목록 조회 (페이지네이션)
 */
export const getAdminCustomerReviews = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedCustomerReviews> => {
  try {
    const response = await apiClient.get<PaginatedCustomerReviews>("/admin/customer-review", {
      params: { page, limit }
    })
    console.log(`[getAdminCustomerReviews] 관리자 고객 후기 목록:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminCustomerReviews] 관리자 고객 후기 목록 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 특정 고객 후기 조회
 */
export const getAdminCustomerReviewById = async (id: string): Promise<CustomerReview> => {
  try {
    const response = await apiClient.get<CustomerReview>(`/admin/customer-review/${id}`)
    console.log(`[getAdminCustomerReviewById] 관리자 고객 후기 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAdminCustomerReviewById] 관리자 고객 후기 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 고객 후기 생성
 */
export const createCustomerReview = async (data: CreateCustomerReviewDto): Promise<CustomerReview> => {
  try {
    const response = await apiClient.post<CustomerReview>("/admin/customer-review", data)
    console.log(`[createCustomerReview] 고객 후기 생성 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[createCustomerReview] 고객 후기 생성 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 고객 후기 수정
 */
export const updateCustomerReview = async (
  id: string,
  data: UpdateCustomerReviewDto
): Promise<CustomerReview> => {
  try {
    const response = await apiClient.patch<CustomerReview>(`/admin/customer-review/${id}`, data)
    console.log(`[updateCustomerReview] 고객 후기 수정 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[updateCustomerReview] 고객 후기 수정 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 고객 후기 삭제
 */
export const deleteCustomerReview = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/admin/customer-review/${id}`)
    console.log(`[deleteCustomerReview] 고객 후기 삭제 성공`)
  } catch (error) {
    console.error(`[deleteCustomerReview] 고객 후기 삭제 실패:`, error)
    throw error
  }
}

/**
 * 고객 후기 이미지 업로드
 */
export const uploadCustomerReviewImages = async (
  files: File[]
): Promise<{ imageUrls: string[] }> => {
  try {
    const formData = new FormData()
    files.forEach(file => {
      formData.append("files", file)
    })

    const response = await apiClient.post<{ imageUrls: string[] }>(
      "/admin/customer-review/upload-images",
      formData
    )
    return response.data
  } catch (error) {
    console.error(`[uploadCustomerReviewImages] 고객 후기 이미지 업로드 실패:`, error)
    throw error
  }
}
