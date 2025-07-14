import { apiClient } from "./client"

export interface PricingSetting {
  id: string
  mainTitle: string
  mainSubtitle: string
  discountBannerTitle: string
  discountBannerSubtitle: string
  discountPercentage: number
  equipmentSectionTitle: string
  equipmentSectionDescription: string
  timeSectionTitle: string
  timeSectionDescription: string
  priceCardTitle: string
  onlinePriceLabel: string
  contactPriceLabel: string
  savingsLabel: string
  priceNotes: string[]
  infoNotes: string[]
  ctaButtonText: string
  ctaSubtext: string
  detailCardTitle: string
  phoneNumber: string
  // 추가 UI 라벨들
  timeSelectionLabel: string
  hourUnit: string
  baseHoursLabel: string
  additionalHoursLabel: string
  hourlyRateLabel: string
  specificationsLabel: string
  scrollLeftAriaLabel: string
  scrollRightAriaLabel: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UpdatePricingSettingDto {
  mainTitle?: string
  mainSubtitle?: string
  discountBannerTitle?: string
  discountBannerSubtitle?: string
  discountPercentage?: number
  equipmentSectionTitle?: string
  equipmentSectionDescription?: string
  timeSectionTitle?: string
  timeSectionDescription?: string
  priceCardTitle?: string
  onlinePriceLabel?: string
  contactPriceLabel?: string
  savingsLabel?: string
  priceNotes?: string[]
  infoNotes?: string[]
  ctaButtonText?: string
  ctaSubtext?: string
  detailCardTitle?: string
  phoneNumber?: string
  // 추가 UI 라벨들
  timeSelectionLabel?: string
  hourUnit?: string
  baseHoursLabel?: string
  additionalHoursLabel?: string
  hourlyRateLabel?: string
  specificationsLabel?: string
  scrollLeftAriaLabel?: string
  scrollRightAriaLabel?: string
  isActive?: boolean
}

// 서비스용 API (인증 불필요)
export const servicePricingApi = {
  getPricingSettings: async (): Promise<PricingSetting> => {
    const response = await apiClient.get<PricingSetting>(
      "service/pricing/settings"
    )
    return response.data
  },
}

// 어드민용 API (인증 필요)
export const adminPricingSettingsApi = {
  getPricingSetting: async (): Promise<PricingSetting> => {
    const response = await apiClient.get<PricingSetting>(
      "admin/pricing-setting"
    )
    return response.data
  },

  updatePricingSetting: async (
    data: UpdatePricingSettingDto
  ): Promise<PricingSetting> => {
    const response = await apiClient.put<PricingSetting>(
      "admin/pricing-setting",
      data
    )
    return response.data
  },
}

// 기존 API는 어드민 API로 연결 (하위 호환성)
export const pricingSettingsApi = adminPricingSettingsApi
