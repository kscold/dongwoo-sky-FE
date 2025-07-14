import { useQuery } from "@tanstack/react-query"

import { pricingApi } from "../../api/pricing"
import { Equipment } from "../../types/equipment"

const PRICING_EQUIPMENTS_QUERY_KEY = "pricingEquipments"

export const usePricingEquipments = () => {
  return useQuery<Equipment[], Error>({
    queryKey: [PRICING_EQUIPMENTS_QUERY_KEY],
    queryFn: pricingApi.getPricingEquipments,
  })
}
