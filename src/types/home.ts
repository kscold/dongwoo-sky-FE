import { Notice } from "./notice"
import { Equipment } from "./equipment"
import { WorkShowcase } from "./work-showcase"
import { CustomerReview } from "./customer-review"
import { SiteContact } from "./site-setting"

export interface HeroTitle {
  preTitle: string
  mainTitle: string
  postTitle: string
}

export interface HeroButtons {
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}

export interface HeroImage {
  url: string
  key?: string
  name?: string
  order?: number
  isActive?: boolean
  alt?: string
}

export interface HeroSection {
  title: string
  companyName: string
  highlightText: string
  subtitle: string
  description: string
  ctaButtons: HeroButton[]
  backgroundImageUrls: HeroImage[]
  isActive: boolean
}

export interface HeroButton {
  text: string
  link: string
  _id?: string
}

export interface ContentSetting {
  key: string
  title: string
  description: string
  isActive: boolean
  _id?: string
  createdAt?: string
  updatedAt?: string
}

// 백엔드 실제 데이터 구조에 맞춘 타입 (관리자용)
export interface HomeSettings {
  _id?: string
  pageId: string
  heroTitle: HeroTitle
  heroSubtitle: string
  heroImages: HeroImage[]
  heroButtons: HeroButtons
  heroSection?: HeroSection
  isActive: boolean
  sortOrder: number
  createdAt?: string
  updatedAt?: string
}

// 백엔드 Home 스키마 구조에 맞춘 타입 (공개용)
export interface Home {
  _id?: string
  key: string
  title: string
  description: string
  heroSection: HeroSection
  contentSettings: ContentSetting[]
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export interface HomePageData {
  home: Home
  notices: Notice[]
  workShowcases: WorkShowcase[]
  customerReviews: CustomerReview[]
  contactInfo: SiteContact
  equipments?: Equipment[]
}
