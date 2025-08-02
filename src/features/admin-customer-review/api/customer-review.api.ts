import { apiClient } from "@/api/client"
import type {
  CustomerReviewResponse,
  CustomerReviewRequest,
  CustomerReviewUpdateRequest,
  CustomerReviewListResponse,
  CustomerReviewImageUploadResponse,
} from "../types/customer-review"

export const customerReviewApi = {
  getAllAdmin: async (page = 1, limit = 10): Promise<CustomerReviewListResponse> => {
    const response = await apiClient.get<CustomerReviewListResponse>(
      "/admin/customer-review",
      {
        params: { page, limit },
      }
    )
    return response.data
  },

  getByIdAdmin: async (id: string): Promise<CustomerReviewResponse> => {
    const response = await apiClient.get<CustomerReviewResponse>(
      `/admin/customer-review/${id}`
    )
    return response.data
  },

  create: async (data: CustomerReviewRequest): Promise<CustomerReviewResponse> => {
    const response = await apiClient.post<CustomerReviewResponse>(
      "/admin/customer-review",
      data
    )
    return response.data
  },

  update: async (
    id: string,
    data: CustomerReviewUpdateRequest
  ): Promise<CustomerReviewResponse> => {
    const response = await apiClient.patch<CustomerReviewResponse>(
      `/admin/customer-review/${id}`,
      data
    )
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/customer-review/${id}`)
  },

  toggleActive: async (id: string, isActive: boolean): Promise<CustomerReviewResponse> => {
    const response = await apiClient.patch<CustomerReviewResponse>(
      `/admin/customer-review/${id}`,
      { isActive }
    )
    return response.data
  },

  toggleFeatured: async (id: string, featured: boolean): Promise<CustomerReviewResponse> => {
    const response = await apiClient.patch<CustomerReviewResponse>(
      `/admin/customer-review/${id}`,
      { featured }
    )
    return response.data
  },

  uploadImages: async (files: File[]): Promise<CustomerReviewImageUploadResponse> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    const response = await apiClient.post<CustomerReviewImageUploadResponse>(
      "/admin/customer-review/upload-images",
      formData
    )
    return response.data
  },
}