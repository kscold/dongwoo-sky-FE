import { 
  getAll,
  getById
} from "@/api/notice"
import type { ServiceNoticeListResponse, ServiceNotice } from "../types/notice"

export const serviceNoticeApi = {
  getPublishedNotices: async (page: number = 1, limit: number = 10): Promise<ServiceNoticeListResponse> => {
    const data = await getAll(page, limit)
    return {
      data: data.data.map((item: any) => ({
        ...item,
        isActive: item.isActive ?? true,
        isImportant: (item as any).isImportant ?? item.priority === "high",
        viewCount: item.viewCount ?? 0,
        createdAt: item.createdAt?.toString() ?? new Date().toISOString(),
        updatedAt: item.updatedAt?.toString() ?? new Date().toISOString(),
        publishedAt: item.publishedAt?.toString(),
      })),
      totalPages: data.totalPages,
      currentPage: data.currentPage,
      totalItems: data.totalItems,
      limit: data.limit,
    }
  },

  getNoticeById: async (id: string): Promise<ServiceNotice> => {
    const data = await getById(id)
    return {
      ...data,
      isActive: data.isActive ?? true,
      isImportant: (data as any).isImportant ?? data.priority === "high",
      viewCount: data.viewCount ?? 0,
      createdAt: data.createdAt?.toString() ?? new Date().toISOString(),
      updatedAt: data.updatedAt?.toString() ?? new Date().toISOString(),
      publishedAt: data.publishedAt?.toString(),
    }
  },

  // 조회수 증가는 별도 API가 없으므로 빈 함수로 처리
  incrementViewCount: async (id: string) => {
    // API가 구현되어 있지 않으므로 빈 Promise 반환
    return Promise.resolve()
  },
}