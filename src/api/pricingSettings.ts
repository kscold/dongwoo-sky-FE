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
    isActive?: boolean
}

export const pricingSettingsApi = {
    getPricingSetting: async (): Promise<PricingSetting> => {
        const response = await apiClient.get<PricingSetting>("admin/pricing-setting")
        return response.data
    },

    updatePricingSetting: async (data: UpdatePricingSettingDto): Promise<PricingSetting> => {
        const response = await apiClient.put<PricingSetting>("admin/pricing-setting", data)
        return response.data
    },
} 