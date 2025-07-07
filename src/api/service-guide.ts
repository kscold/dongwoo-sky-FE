import { apiClient } from "./client"
import type {
    ServiceGuideData,
    AdminServiceGuide,
    UpdateServiceGuideDto
} from "@/common/types/service-guide"

// API 응답 전체 구조
interface ApiResponse<T> {
    success: boolean
    code: number
    message: string
    data: T
}

/**
 * 공개용 서비스 가이드 데이터를 가져옵니다.
 */
export const getServiceGuideData = async (): Promise<ServiceGuideData> => {
    try {
        const response = await apiClient.get<ApiResponse<ServiceGuideData>>("/service/service-guide")
        console.log(`[getServiceGuideData] 서비스 가이드 데이터:`, response.data)
        return response.data.data
    } catch (error) {
        console.error(`[getServiceGuideData] 서비스 가이드 조회 실패:`, error)
        throw error
    }
}

// =================================================================
// 관리자 API
// =================================================================

/**
 * 관리자용 서비스 가이드 조회
 */
export const getAdminServiceGuide = async (): Promise<AdminServiceGuide> => {
    try {
        const response = await apiClient.get<ApiResponse<AdminServiceGuide>>("/admin/service-guide")
        console.log(`[getAdminServiceGuide] 관리자 서비스 가이드:`, response.data)
        return response.data.data
    } catch (error) {
        console.error(`[getAdminServiceGuide] 관리자 서비스 가이드 조회 실패:`, error)
        throw error
    }
}

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
        )
        console.log(`[updateAdminServiceGuide] 서비스 가이드 업데이트 성공:`, response.data)
        return response.data.data
    } catch (error) {
        console.error(`[updateAdminServiceGuide] 서비스 가이드 업데이트 실패:`, error)
        throw error
    }
}

/**
 * 서비스 가이드 이미지 업로드
 */
export const uploadServiceGuideImages = async (
    files: File[]
): Promise<{ imageUrls: string[] }> => {
    try {
        const formData = new FormData()
        files.forEach(file => {
            formData.append("files", file)
        })

        const response = await apiClient.post<{ imageUrls: string[] }>(
            "/admin/service-guide/upload-images",
            formData
        )
        return response.data
    } catch (error) {
        console.error(`[uploadServiceGuideImages] 서비스 가이드 이미지 업로드 실패:`, error)
        throw error
    }
} 