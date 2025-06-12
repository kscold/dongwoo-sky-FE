// 랜딩 페이지 데이터 타입 정의
export interface HeroSection {
  id?: string
  title: string
  subtitle: string
  backgroundImageUrl: string
  description: string
  ctaText: string
  ctaLink: string
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface LandingPageData {
  _id?: string
  id?: string // For compatibility
  title: string
  heroSection: HeroSection
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
