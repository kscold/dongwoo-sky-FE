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
    isPublished: boolean
    publishedAt?: string
    createdAt: string
    updatedAt: string
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
    isPublished?: boolean
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
    isPublished?: boolean
}

export interface PaginatedCustomerReviews {
    items: CustomerReview[]
    totalPages: number
    currentPage: number
    totalItems: number
} 