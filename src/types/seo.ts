export interface SEOMetadata {
  id?: string
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonical?: string
  robots?: string
  structuredData?: Record<string, any>
  createdAt?: string
  updatedAt?: string
}

export interface PageSEO {
  page: string // 페이지 식별자 (예: 'home', 'service-guide', 'equipment-detail')
  path: string // URL 경로
  metadata: SEOMetadata
}

export interface EquipmentSEO {
  equipmentId: string
  metadata: SEOMetadata
}

export interface CreateSEODto {
  page?: string
  path?: string
  equipmentId?: string
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonical?: string
  robots?: string
  structuredData?: Record<string, any>
}

export interface UpdateSEODto extends Partial<CreateSEODto> {}