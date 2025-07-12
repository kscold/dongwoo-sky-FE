import { apiClient } from "./client"

export interface AdminStats {
  notices: {
    total: number
    published: number
  }
  equipment: {
    total: number
    active: number
  }
  workShowcases: {
    total: number
    active: number
  }
  customerReviews: {
    total: number
    active: number
  }
}

/**
 * 어드민 통계 데이터 조회 (공개 API를 통해 실제 데이터 개수 계산)
 */
export const getAdminStats = async (): Promise<AdminStats> => {
  try {
    // 공개 API를 통해 실제 데이터 개수 계산
    const [
      publishedNoticesResponse,
      activeEquipmentResponse,
      activeWorkShowcasesResponse,
      activeCustomerReviewsResponse,
    ] = await Promise.all([
      apiClient.get("/service/notice/published"),
      apiClient.get("/service/pricing/equipment"),
      apiClient.get("/service/work-showcase"),
      apiClient.get("/service/customer-review"),
    ])

    console.log("API 응답 데이터:", {
      notices: publishedNoticesResponse.data,
      equipment: activeEquipmentResponse.data,
      workShowcases: activeWorkShowcasesResponse.data,
      customerReviews: activeCustomerReviewsResponse.data,
    })

    const stats: AdminStats = {
      notices: {
        total: Array.isArray(publishedNoticesResponse.data) ? publishedNoticesResponse.data.length : 0,
        published: Array.isArray(publishedNoticesResponse.data) ? publishedNoticesResponse.data.length : 0,
      },
      equipment: {
        total: Array.isArray(activeEquipmentResponse.data) ? activeEquipmentResponse.data.length : 0,
        active: Array.isArray(activeEquipmentResponse.data) ? activeEquipmentResponse.data.length : 0,
      },
      workShowcases: {
        total: activeWorkShowcasesResponse.data?.total || 0,
        active: activeWorkShowcasesResponse.data?.total || 0,
      },
      customerReviews: {
        total: activeCustomerReviewsResponse.data?.total || 0,
        active: activeCustomerReviewsResponse.data?.total || 0,
      },
    }

    console.log(`[getAdminStats] 계산된 통계 데이터:`, stats)
    return stats
  } catch (error) {
    console.error(`[getAdminStats] 통계 데이터 조회 실패:`, error)
    // 에러 발생 시 기본값 반환
    return {
      notices: { total: 0, published: 0 },
      equipment: { total: 0, active: 0 },
      workShowcases: { total: 0, active: 0 },
      customerReviews: { total: 0, active: 0 },
    }
  }
}