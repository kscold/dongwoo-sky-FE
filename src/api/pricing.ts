import { apiClient } from "./client"
import { Equipment } from "@/common/types/equipment"

export const pricingApi = {
    getPricingEquipments: async (): Promise<Equipment[]> => {
        const response = await apiClient.get<Equipment[]>("service/pricing")
        return response.data
    },
} 