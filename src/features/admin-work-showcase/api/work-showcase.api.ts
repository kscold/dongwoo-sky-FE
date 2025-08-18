import { apiClient } from "@/api/client"
import type {
  WorkShowcaseResponse,
  WorkShowcaseRequest,
  WorkShowcaseUpdateRequest,
  WorkShowcaseListResponse,
  WorkShowcaseApiResponse,
  WorkShowcaseImageUploadResponse,
} from "../types/work-showcase"

export const workShowcaseApi = {
  getAllAdmin: async (page = 1, limit = 10): Promise<WorkShowcaseListResponse> => {
    const response = await apiClient.get<WorkShowcaseApiResponse>("/admin/work-showcase", {
      params: { page, limit },
    })

    return {
      data: response.data.data.items,
      totalPages: response.data.data.totalPages,
      currentPage: parseInt(response.data.data.currentPage),
      totalItems: response.data.data.totalItems,
      limit: limit,
    }
  },

  getByIdAdmin: async (id: string): Promise<WorkShowcaseResponse> => {
    const response = await apiClient.get<WorkShowcaseResponse>(`/admin/work-showcase/${id}`)
    return response.data
  },

  create: async (data: WorkShowcaseRequest): Promise<WorkShowcaseResponse> => {
    const response = await apiClient.post<WorkShowcaseResponse>("/admin/work-showcase", data)
    return response.data
  },

  update: async (id: string, data: WorkShowcaseUpdateRequest): Promise<WorkShowcaseResponse> => {
    const response = await apiClient.patch<WorkShowcaseResponse>(
      `/admin/work-showcase/${id}`,
      data
    )
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/work-showcase/${id}`)
  },

  toggleActive: async (id: string, isActive: boolean): Promise<WorkShowcaseResponse> => {
    const response = await apiClient.patch<WorkShowcaseResponse>(
      `/admin/work-showcase/${id}`,
      { isActive }
    )
    return response.data
  },

  uploadImages: async (files: File[]): Promise<WorkShowcaseImageUploadResponse> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    const response = await apiClient.post<WorkShowcaseImageUploadResponse>(
      "/admin/work-showcase/upload-images",
      formData
    )
    return response.data
  },
}