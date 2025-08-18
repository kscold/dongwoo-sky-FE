// Work Showcase 타입 정의

export interface WorkShowcaseRequest {
  title: string
  content: string
  category?: string
  projectDuration?: string
  clientName?: string
  description?: string
  tags?: string[]
  imageUrls?: string[]
  beforeImageUrls?: string[]
  afterImageUrls?: string[]
  isActive?: boolean
}

export interface WorkShowcaseUpdateRequest extends Partial<WorkShowcaseRequest> {}

export interface WorkShowcaseResponse {
  _id: string
  id?: string
  title: string
  content: string
  category?: string
  projectDuration?: string
  clientName?: string
  description?: string
  tags?: string[]
  imageUrls?: string[]
  beforeImageUrls?: string[]
  afterImageUrls?: string[]
  isActive: boolean
  viewCount: number
  likeCount: number
  createdAt: string
  updatedAt: string
  authorName?: string
  projectLocation?: string
  equipmentUsed?: string
}

export interface WorkShowcaseListResponse {
  data: WorkShowcaseResponse[]
  totalPages: number
  currentPage: number
  totalItems: number
  limit: number
}

export interface WorkShowcaseApiResponse {
  success: boolean
  data: {
    items: WorkShowcaseResponse[]
    totalPages: number
    currentPage: string
    totalItems: number
  }
}

export interface WorkShowcaseImageUploadResponse {
  imageUrls: string[]
}