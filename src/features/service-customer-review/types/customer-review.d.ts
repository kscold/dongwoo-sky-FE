// Service Customer Review 타입 정의
import type { CustomerReviewProps } from "@/common/interfaces/content/content.interface"

export interface CustomerReview extends CustomerReviewProps {
  reviewText?: string
  isVerified?: boolean
  isPublished?: boolean
  projectType?: string
  projectDate?: string
  reviewTitle?: string
  beforeImages?: string[]
  afterImages?: string[]
  equipmentUsed?: string[]
  tags?: string[]
}

export interface CustomerReviewListResponse {
  data: CustomerReview[]
  totalPages: number
  currentPage: number
  totalItems: number
  limit: number
}

export interface CustomerReviewApiResponse {
  success: boolean
  data: {
    items: CustomerReview[]
    totalPages: number
    currentPage: string
    totalItems: number
  }
}

export interface CustomerReviewStats {
  totalReviews: number
  averageRating: number
  publishedReviews: number
  verifiedReviews: number
}