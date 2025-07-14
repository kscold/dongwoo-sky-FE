import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  pricingSettingsApi,
  servicePricingApi,
  adminPricingSettingsApi,
  PricingSetting,
  UpdatePricingSettingDto,
} from "../../api/pricingSettings"

const PRICING_SETTING_QUERY_KEY = "pricingSetting"
const SERVICE_PRICING_SETTING_QUERY_KEY = "servicePricingSetting"

// 서비스용 (인증 불필요)
export const useServicePricingSettings = () => {
  return useQuery<PricingSetting, Error>({
    queryKey: [SERVICE_PRICING_SETTING_QUERY_KEY],
    queryFn: servicePricingApi.getPricingSettings,
    staleTime: 5 * 60 * 1000, // 5분
  })
}

// 어드민용 (인증 필요)
export const useAdminPricingSetting = () => {
  return useQuery<PricingSetting, Error>({
    queryKey: [PRICING_SETTING_QUERY_KEY],
    queryFn: adminPricingSettingsApi.getPricingSetting,
  })
}

// 하위 호환성을 위한 기존 hook (어드민용)
export const usePricingSetting = useAdminPricingSetting

export const useUpdatePricingSetting = () => {
  const queryClient = useQueryClient()

  return useMutation<PricingSetting, Error, UpdatePricingSettingDto>({
    mutationFn: adminPricingSettingsApi.updatePricingSetting,
    onSuccess: () => {
      // 어드민과 서비스 양쪽 캐시 무효화
      queryClient.invalidateQueries({ queryKey: [PRICING_SETTING_QUERY_KEY] })
      queryClient.invalidateQueries({
        queryKey: [SERVICE_PRICING_SETTING_QUERY_KEY],
      })
    },
  })
}
