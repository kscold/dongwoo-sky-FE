import { apiClient } from "./client"

export interface WorkShowcase {
  _id: string
  title: string
  content: string
  imageUrls: string[]
  projectLocation: string
  authorName: string
  authorRole: string
  equipmentUsed: string
  likeCount: number
  viewCount: number
  publishedAt: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CustomerReview {
  _id: string
  title: string
  content: string
  imageUrls: string[]
  customerName: string
  customerCompany: string
  projectLocation: string
  serviceType: string
  rating: number
  viewCount: number
  helpfulCount: number
  publishedAt: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateWorkShowcaseDto {
  title: string
  description: string
  images: string[]
  location: string
  workDate: string
  equipmentUsed: string[]
  category: string
}

export interface UpdateWorkShowcaseDto extends Partial<CreateWorkShowcaseDto> {}

export interface CreateCustomerReviewDto {
  customerName: string
  projectTitle: string
  rating: number
  review: string
  images?: string[]
  workDate: string
  location: string
  equipmentUsed: string[]
}

export interface UpdateCustomerReviewDto
  extends Partial<CreateCustomerReviewDto> {}

export const contentApi = {
  // 작업 자랑거리 관련
  getTopWorkShowcases: async (): Promise<WorkShowcase[]> => {
    const response = await apiClient.get("/content/work-showcases/top")
    return response.data.data
  },

  getAllWorkShowcases: async (
    page: number = 1,
    limit: number = 10
  ): Promise<{
    items: WorkShowcase[]
    total: number
    totalPages: number
  }> => {
    const response = await apiClient.get(
      `/content/work-showcases?page=${page}&limit=${limit}`
    )
    return response.data.data
  },

  getWorkShowcaseById: async (id: string): Promise<WorkShowcase> => {
    const response = await apiClient.get<WorkShowcase>(
      `/content/work-showcases/${id}`
    )
    return response.data
  },

  createWorkShowcase: async (
    data: CreateWorkShowcaseDto
  ): Promise<WorkShowcase> => {
    const response = await apiClient.post<WorkShowcase>(
      "/content/work-showcases",
      data
    )
    return response.data
  },

  updateWorkShowcase: async (
    id: string,
    data: UpdateWorkShowcaseDto
  ): Promise<WorkShowcase> => {
    const response = await apiClient.put<WorkShowcase>(
      `/content/work-showcases/${id}`,
      data
    )
    return response.data
  },

  deleteWorkShowcase: async (id: string): Promise<void> => {
    await apiClient.delete(`/content/work-showcases/${id}`)
  },

  likeWorkShowcase: async (id: string): Promise<{ likes: number }> => {
    const response = await apiClient.post<{ likes: number }>(
      `/content/work-showcases/${id}/like`
    )
    return response.data
  },

  // 고객 후기 관련
  getTopCustomerReviews: async (): Promise<CustomerReview[]> => {
    const response = await apiClient.get("/content/customer-reviews/top")
    return response.data.data
  },

  getAllCustomerReviews: async (
    page: number = 1,
    limit: number = 10
  ): Promise<{
    data: CustomerReview[]
    total: number
    page: number
    totalPages: number
  }> => {
    const response = await apiClient.get(
      `/content/customer-reviews?page=${page}&limit=${limit}`
    )
    return response.data
  },

  getCustomerReviewById: async (id: string): Promise<CustomerReview> => {
    const response = await apiClient.get<CustomerReview>(
      `/content/customer-reviews/${id}`
    )
    return response.data
  },

  createCustomerReview: async (
    data: CreateCustomerReviewDto
  ): Promise<CustomerReview> => {
    const response = await apiClient.post<CustomerReview>(
      "/content/customer-reviews",
      data
    )
    return response.data
  },

  updateCustomerReview: async (
    id: string,
    data: UpdateCustomerReviewDto
  ): Promise<CustomerReview> => {
    const response = await apiClient.put<CustomerReview>(
      `/content/customer-reviews/${id}`,
      data
    )
    return response.data
  },

  deleteCustomerReview: async (id: string): Promise<void> => {
    await apiClient.delete(`/content/customer-reviews/${id}`)
  },

  markReviewHelpful: async (id: string): Promise<{ helpful: number }> => {
    const response = await apiClient.post<{ helpful: number }>(
      `/content/customer-reviews/${id}/helpful`
    )
    return response.data
  },

  // 이미지 업로드
  uploadImages: async (files: File[]): Promise<{ imageUrls: string[] }> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    const response = await apiClient.post<{ imageUrls: string[] }>(
      "/content/upload-images",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return response.data
  },
}
