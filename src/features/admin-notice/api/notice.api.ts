import { apiClient } from "@/api/client"
import type {
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
  PaginatedNotices,
} from "@/types/notice"

export const noticeApi = {
  getAllAdmin: async (page = 1, limit = 10): Promise<PaginatedNotices> => {
    const response = await apiClient.get<PaginatedNotices>("/admin/notice", {
      params: { page, limit },
    })
    return response.data
  },

  getByIdAdmin: async (id: string): Promise<Notice> => {
    const response = await apiClient.get<Notice>(`/admin/notice/${id}`)
    return response.data
  },

  create: async (data: CreateNoticeDto): Promise<Notice> => {
    const response = await apiClient.post<Notice>("/admin/notice", data)
    return response.data
  },

  update: async (id: string, data: UpdateNoticeDto): Promise<Notice> => {
    const response = await apiClient.patch<Notice>(`/admin/notice/${id}`, data)
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/notice/${id}`)
  },

  togglePublish: async (id: string, isActive: boolean): Promise<Notice> => {
    const response = await apiClient.patch<Notice>(`/admin/notice/${id}`, {
      isActive,
    })
    return response.data
  },

  toggleModal: async (id: string, isModal: boolean): Promise<Notice> => {
    const response = await apiClient.patch<Notice>(`/admin/notice/${id}`, {
      isModal,
    })
    return response.data
  },
}