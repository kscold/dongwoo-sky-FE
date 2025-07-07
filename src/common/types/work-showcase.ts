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
}

export interface PaginatedWorkShowcases {
    items: WorkShowcase[]
    totalPages: number
    currentPage: number
    totalItems: number
} 