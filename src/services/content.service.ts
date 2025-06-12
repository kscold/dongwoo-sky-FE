import {
  WorkShowcase,
  CustomerReview,
  PaginatedResponse,
  ApiResponse,
  CreateWorkShowcaseDto,
  UpdateWorkShowcaseDto,
  CreateCustomerReviewDto,
  UpdateCustomerReviewDto,
  ImageUploadResponse,
} from "@/types/content"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

class ContentService {
  private async fetchApi<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${BASE_URL}${endpoint}`

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API fetch error:", error)
      throw error
    }
  }

  // 작업자 자랑거리 관련 메서드
  async getTopWorkShowcases(): Promise<WorkShowcase[]> {
    const response = await this.fetchApi<ApiResponse<WorkShowcase[]>>(
      "/content/work-showcases/top"
    )
    return response.data
  }

  async getAllWorkShowcases(
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<WorkShowcase>> {
    const response = await this.fetchApi<
      ApiResponse<PaginatedResponse<WorkShowcase>>
    >(`/content/work-showcases?page=${page}&limit=${limit}`)
    return response.data
  }

  async getWorkShowcaseById(id: string): Promise<WorkShowcase> {
    const response = await this.fetchApi<ApiResponse<WorkShowcase>>(
      `/content/work-showcases/${id}`
    )
    return response.data
  }

  async createWorkShowcase(data: CreateWorkShowcaseDto): Promise<WorkShowcase> {
    const response = await this.fetchApi<ApiResponse<WorkShowcase>>(
      "/content/work-showcases",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
    return response.data
  }

  async updateWorkShowcase(
    id: string,
    data: UpdateWorkShowcaseDto
  ): Promise<WorkShowcase> {
    const response = await this.fetchApi<ApiResponse<WorkShowcase>>(
      `/content/work-showcases/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    )
    return response.data
  }

  async deleteWorkShowcase(id: string): Promise<void> {
    await this.fetchApi(`/content/work-showcases/${id}`, {
      method: "DELETE",
    })
  }

  async likeWorkShowcase(id: string): Promise<void> {
    await this.fetchApi(`/content/work-showcases/${id}/like`, {
      method: "POST",
    })
  }

  // 고객 리뷰 관련 메서드
  async getTopCustomerReviews(): Promise<CustomerReview[]> {
    const response = await this.fetchApi<ApiResponse<CustomerReview[]>>(
      "/content/customer-reviews/top"
    )
    return response.data
  }

  async getAllCustomerReviews(
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<CustomerReview>> {
    const response = await this.fetchApi<
      ApiResponse<PaginatedResponse<CustomerReview>>
    >(`/content/customer-reviews?page=${page}&limit=${limit}`)
    return response.data
  }

  async getCustomerReviewById(id: string): Promise<CustomerReview> {
    const response = await this.fetchApi<ApiResponse<CustomerReview>>(
      `/content/customer-reviews/${id}`
    )
    return response.data
  }

  async createCustomerReview(
    data: CreateCustomerReviewDto
  ): Promise<CustomerReview> {
    const response = await this.fetchApi<ApiResponse<CustomerReview>>(
      "/content/customer-reviews",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
    return response.data
  }

  async updateCustomerReview(
    id: string,
    data: UpdateCustomerReviewDto
  ): Promise<CustomerReview> {
    const response = await this.fetchApi<ApiResponse<CustomerReview>>(
      `/content/customer-reviews/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    )
    return response.data
  }

  async deleteCustomerReview(id: string): Promise<void> {
    await this.fetchApi(`/content/customer-reviews/${id}`, {
      method: "DELETE",
    })
  }

  async markCustomerReviewHelpful(id: string): Promise<void> {
    await this.fetchApi(`/content/customer-reviews/${id}/helpful`, {
      method: "POST",
    })
  }

  // 다중 이미지 업로드
  async uploadMultipleImages(files: File[]): Promise<ImageUploadResponse> {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    const response = await fetch(`${BASE_URL}/content/upload-images`, {
      method: "POST",
      body: formData,
      // Content-Type을 설정하지 않음 (FormData가 자동으로 설정)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data
  }
}

export const contentService = new ContentService()
export default contentService
