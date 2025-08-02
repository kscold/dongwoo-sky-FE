// Contact 타입 정의

export interface ContactInquiryRequest {
  name: string
  phone: string
  email?: string
  company?: string
  inquiryType: string
  subject?: string
  message: string
  location?: string
  isUrgent: boolean
  pricingInquiry?: PricingInquiryData
}

export interface PricingInquiryData {
  equipmentIds: string[]
  workLocation: string
  workingHours: number
  workingDays: number
  workStartDate?: Date
  workEndDate?: Date
  specialRequirements?: string
  siteConditions?: string
  accessRequirements?: string
}

export interface ContactSettings {
  pricingService: {
    enabled: boolean
  }
}

export interface ContactInfo {
  contactPhoneNumber: string
  kakaoOpenChatUrl: string
}