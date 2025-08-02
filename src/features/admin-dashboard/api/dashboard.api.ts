import { apiClient } from "@/api/client"

export interface DashboardStats {
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

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    try {
      const [notices, equipment, workShowcases, customerReviews] = await Promise.all([
        apiClient.get("/service/notice/published"),
        apiClient.get("/service/pricing/equipment"),
        apiClient.get("/service/work-showcase"),
        apiClient.get("/service/customer-review"),
      ])

      return {
        notices: {
          total: Array.isArray(notices.data) ? notices.data.length : 0,
          published: Array.isArray(notices.data) ? notices.data.length : 0,
        },
        equipment: {
          total: Array.isArray(equipment.data) ? equipment.data.length : 0,
          active: Array.isArray(equipment.data) ? equipment.data.length : 0,
        },
        workShowcases: {
          total: workShowcases.data?.total || 0,
          active: workShowcases.data?.total || 0,
        },
        customerReviews: {
          total: customerReviews.data?.total || 0,
          active: customerReviews.data?.total || 0,
        },
      }
    } catch (error) {
      console.error(`[Dashboard API] Stats 조회 실패:`, error)
      return {
        notices: { total: 0, published: 0 },
        equipment: { total: 0, active: 0 },
        workShowcases: { total: 0, active: 0 },
        customerReviews: { total: 0, active: 0 },
      }
    }
  },
}