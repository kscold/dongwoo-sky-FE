export interface CustomerReview {
  _id: string
  title: string
  content: string
  customerName: string
  customerCompany?: string
  serviceType?: string
  projectLocation?: string
  rating: number
  imageUrls?: string[]
  viewCount: number
  helpfulCount: number
  isActive: boolean
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface CreateCustomerReviewDto {
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

export interface UpdateCustomerReviewDto {
  title?: string
  content?: string
  customerName?: string
  customerCompany?: string
  serviceType?: string
  projectLocation?: string
  rating?: number
  imageUrls?: string[]
  isActive?: boolean
}

export interface PaginatedCustomerReviews {
  data: CustomerReview[]
  total: number
  page: number
  limit: number
  totalPages: number
}
