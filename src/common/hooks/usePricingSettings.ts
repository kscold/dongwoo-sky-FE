import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { pricingSettingsApi, PricingSetting, UpdatePricingSettingDto } from "@/api/pricingSettings"

const PRICING_SETTING_QUERY_KEY = "pricingSetting"

export const usePricingSetting = () => {
    return useQuery<PricingSetting, Error>({
        queryKey: [PRICING_SETTING_QUERY_KEY],
        queryFn: pricingSettingsApi.getPricingSetting,
    })
}

export const useUpdatePricingSetting = () => {
    const queryClient = useQueryClient()

    return useMutation<PricingSetting, Error, UpdatePricingSettingDto>({
        mutationFn: pricingSettingsApi.updatePricingSetting,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [PRICING_SETTING_QUERY_KEY] })
        },
    })
} 