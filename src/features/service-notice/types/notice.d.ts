// Service Notice 타입 정의

export interface ServiceNotice {
  _id: string
  title: string
  content: string
  summary?: string
  category?: string
  isImportant: boolean
  isActive: boolean
  author?: string
  viewCount: number
  imageUrls?: string[]
  tags?: string[]
  createdAt: string
  updatedAt: string
  publishedAt?: string
}

export interface ServiceNoticeListResponse {
  data: ServiceNotice[]
  totalPages: number
  currentPage: number
  totalItems: number
  limit: number
}

export interface ServiceNoticeStats {
  totalNotices: number
  activeNotices: number
  importantNotices: number
  totalViews: number
}