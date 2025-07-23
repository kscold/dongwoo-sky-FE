export type ContentType = 'customer-review' | 'work-showcase' | 'notice'

export type ContentStatus = 'active' | 'inactive' | 'draft' | 'published'

export type Priority = 'high' | 'medium' | 'low'

export type PaginationResponse<T> = {
  data: T[]
  totalPages: number
  currentPage: number
  totalItems: number
  limit: number
}

export type ApiResponse<T> = {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export type ContentConfig = {
  type: ContentType
  title: string
  subtitle: string
  emptyStateTitle: string
  emptyStateMessage: string
  itemsPerPage: number
  mobileItemsPerPage: number
}

export type SortOrder = 'asc' | 'desc'

export type SortField = 'createdAt' | 'publishedAt' | 'viewCount' | 'title' | 'rating'