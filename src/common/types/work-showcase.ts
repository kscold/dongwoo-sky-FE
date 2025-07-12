export interface WorkShowcase {
    _id: string
    title: string
    content: string
    authorName: string
    authorRole?: string
    projectLocation?: string
    equipmentUsed?: string
    imageUrls?: string[]
    viewCount: number
    likeCount: number
    isActive: boolean
    publishedAt?: Date | null
    createdAt: Date
    updatedAt: Date
    rating?: number // 고객 리뷰에서 사용하는 평점 (1-5)
    customerName?: string // 고객 이름
    customerCompany?: string // 고객 회사
    serviceType?: string // 서비스 타입
    helpfulCount?: number // 도움이 된 개수
}

export interface CreateWorkShowcaseDto {
    title: string
    content: string
    authorName: string
    authorRole?: string
    projectLocation?: string
    equipmentUsed?: string
    imageUrls?: string[]
    isPublished?: boolean
    rating?: number
    customerName?: string
    customerCompany?: string
    serviceType?: string
}

export interface UpdateWorkShowcaseDto {
    title?: string
    content?: string
    authorName?: string
    authorRole?: string
    projectLocation?: string
    equipmentUsed?: string
    imageUrls?: string[]
    isPublished?: boolean
    rating?: number
    customerName?: string
    customerCompany?: string
    serviceType?: string
}

export interface PaginatedWorkShowcases {
    data: WorkShowcase[]
    total: number
    page: number
    limit: number
    totalPages: number
} 