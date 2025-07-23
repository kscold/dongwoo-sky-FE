// 기본 컨텐츠 아이템 인터페이스
export interface ContentItem {
  _id: string
  title: string
  content: string
  imageUrls?: string[]
  viewCount?: number
  createdAt?: string | Date
  publishedAt?: string | Date
  isActive?: boolean
}

// 메타 필드 설정
export interface MetaField {
  key: string
  icon: string
  label?: string
  className?: string
  suffix?: string
}

// 통계 필드 설정
export interface StatField {
  key: string
  icon: string
  label?: string
}

// 액션 버튼 설정
export interface ActionButton {
  icon: string
  label: string
  countKey: string
}

// 리스트 페이지 설정
export interface ContentListConfig {
  pageTitle: string
  pageSubtitle: string
  backUrl: string
  backButtonText: string
  baseUrl: string
  placeholderIcon: string
  errorMessage: string
  emptyStateTitle: string
  emptyStateText: string
  skeletonVariant: string
  metaFields: MetaField[]
  statFields: StatField[]
}

// 상세 페이지 설정
export interface ContentDetailConfig {
  backUrl: string
  backButtonText: string
  errorMessage: string
  errorDescription: string
  skeletonVariant: string
  headerMetaFields?: MetaField[]
  detailMetaFields?: MetaField[]
  statFields?: StatField[]
  actionButton?: ActionButton
}