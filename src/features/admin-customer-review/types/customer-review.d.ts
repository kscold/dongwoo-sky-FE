// Customer Review 타입 정의

export interface CustomerReviewRequest {
  customerName: string
  company?: string
  rating: number
  content: string
  workType?: string
  workDate?: string
  imageUrls?: string[]
  isActive?: boolean
  featured?: boolean
}

export interface CustomerReviewUpdateRequest extends Partial<CustomerReviewRequest> {}

export interface CustomerReviewResponse {
  id: string
  customerName: string
  company?: string
  rating: number
  content: string
  workType?: string
  workDate?: string
  imageUrls?: string[]
  isActive: boolean
  featured: boolean
  helpfulCount: number
  createdAt: string
  updatedAt: string
}

export interface CustomerReviewListResponse {
  data: CustomerReviewResponse[]
  totalPages: number
  currentPage: number
  totalItems: number
  limit: number
}

export interface CustomerReviewApiResponse {
  success: boolean
  data: CustomerReviewResponse
}

export interface CustomerReviewListApiResponse {
  success: boolean
  data: {
    items: CustomerReviewResponse[]
    totalPages: number
    currentPage: number
    totalItems: number
  }
}

export interface CustomerReviewImageUploadResponse {
  imageUrls: string[]
}