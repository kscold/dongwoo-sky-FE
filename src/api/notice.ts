import { apiClient } from "./client"
import { Notice } from "@/common/types/notice"

export interface PaginatedNotices {
  data: Notice[]
  total: number
}

export const noticeApi = {
  /** 전체 공지사항 (관리자용, 페이지네이션) */
  getAllAdmin: async (
    page: number,
    limit: number
  ): Promise<PaginatedNotices> => {
    const response = await apiClient.get("/admin/notice", {
      params: { page, limit },
    })
    return response.data
  },

  /** 단일 공지사항 조회 */
  getById: async (id: string): Promise<Notice> => {
    const response = await apiClient.get(`/admin/notice/${id}`)
    return response.data
  },

  /** 공지사항 생성 */
  create: async (data: Omit<Notice, "_id" | "createdAt" | "updatedAt">): Promise<Notice> => {
    const response = await apiClient.post("/admin/notice", data)
    return response.data
  },

  /** 공지사항 수정 */
  update: async (
    id: string,
    data: Partial<Omit<Notice, "id" | "createdAt" | "updatedAt">>
  ): Promise<Notice> => {
    const response = await apiClient.patch(`/admin/notice/${id}`, data)
    return response.data
  },

  /** 공지사항 삭제 */
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/notice/${id}`)
  },

  /** 팝업으로 띄울 공지사항 조회 */
  getModalNotice: async (): Promise<Notice | null> => {
    try {
      const response = await apiClient.get("/service/notice/modal")
      return response.data
    } catch (error) {
      // 404 Not Found의 경우, null을 반환하여 처리
      // @ts-ignore
      if (error.response && error.response.status === 404) {
        return null
      }
      throw error // 그 외 다른 에러는 다시 던짐
    }
  },
}
