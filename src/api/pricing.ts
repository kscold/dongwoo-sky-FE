import { apiClient } from "./client"
import { Equipment } from "@/common/types/equipment"

interface PricingResponse {
    equipment: Equipment[]
    settings: any
}

export const pricingApi = {
    getPricingEquipments: async (): Promise<Equipment[]> => {
        const response = await apiClient.get<PricingResponse>("service/pricing")
        return response.data.equipment || []
    },
} 