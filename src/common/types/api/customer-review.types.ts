import { CustomerReviewProps } from '../../interfaces/content/content.interface'
import { PaginationResponse, ApiResponse } from '../content/content.types'

export interface CustomerReviewRequest {
  title: string
  content: string
  customerName: string
  customerCompany?: string
  serviceType?: string
  projectLocation?: string
  rating: number
  imageUrls?: string[]
  isActive?: boolean
}

export interface CustomerReviewUpdateRequest extends Partial<CustomerReviewRequest> {
  _id: string
}

export interface CustomerReviewResponse extends CustomerReviewProps {
  updatedAt: Date
}

export type CustomerReviewListResponse = PaginationResponse<CustomerReviewResponse>

export type CustomerReviewApiResponse = ApiResponse<CustomerReviewResponse>

export type CustomerReviewListApiResponse = ApiResponse<CustomerReviewListResponse>