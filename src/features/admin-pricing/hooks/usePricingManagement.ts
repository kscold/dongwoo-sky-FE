import { useState, useEffect } from "react"
import { useEquipments } from "../../../common/hooks/useEquipment"
import { useContactSettings, useUpdateContactSettings } from "../../../common/hooks/useContact"
import { EquipmentPricing, PricingServiceConfig, CalculationRule } from "../../../api/contact"

export const usePricingManagement = () => {
  const { data: equipments = [], isLoading: equipmentsLoading } = useEquipments()
  const { data: contactSettings, isLoading: settingsLoading } = useContactSettings()
  const updateSettingsMutation = useUpdateContactSettings()

  const [pricingConfig, setPricingConfig] = useState<PricingServiceConfig>({
    enabled: false,
    title: "장비 렌탈 견적 서비스",
    description: "필요한 장비와 작업 조건을 선택하시면 대략적인 견적을 제공해드립니다.",
    pricingInquiryTypes: ["견적 문의", "장비 렌탈", "작업 문의"],
    equipmentPricing: [],
    baseCalculationRules: [
      {
        name: "거리 할증",
        description: "30km 이상 시 추가 요금",
        multiplier: 1.2,
        conditions: ["거리 30km 이상"]
      },
      {
        name: "야간 작업",
        description: "18시 이후 작업 시 추가 요금",
        multiplier: 1.5,
        conditions: ["야간 작업"]
      },
      {
        name: "주말/공휴일",
        description: "주말 및 공휴일 작업 시 추가 요금",
        multiplier: 1.3,
        conditions: ["주말", "공휴일"]
      }
    ],
    disclaimerText: "견적은 참고용이며, 실제 요금은 현장 상황에 따라 달라질 수 있습니다. 정확한 견적은 현장 확인 후 제공됩니다."
  })

  const [editingEquipment, setEditingEquipment] = useState<string | null>(null)

  useEffect(() => {
    if (contactSettings?.pricingService) {
      setPricingConfig(contactSettings.pricingService)
    }
  }, [contactSettings])

  useEffect(() => {
    if (equipments.length > 0 && pricingConfig.equipmentPricing.length === 0) {
      const initialPricing: EquipmentPricing[] = equipments.map(equipment => ({
        equipmentId: equipment.id,
        equipmentName: equipment.name,
        basePrice: equipment.basePrice || 100000,
        hourlyRate: equipment.hourlyRate || 15000,
        baseHours: equipment.baseHours || 8,
        minHours: equipment.minHours || 4,
        maxHours: equipment.maxHours || 12,
        workingTimeRanges: equipment.workingTimeRanges || ["08:00-18:00"],
        priceRanges: equipment.priceRanges || ["기본: 8시간"],
        calculationNotes: `${equipment.name} 기본 요금 정보`
      }))
      
      setPricingConfig(prev => ({
        ...prev,
        equipmentPricing: initialPricing
      }))
    }
  }, [equipments, pricingConfig.equipmentPricing.length])

  const handleConfigChange = (field: keyof PricingServiceConfig, value: any) => {
    setPricingConfig(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleEquipmentPricingChange = (equipmentId: string, field: keyof EquipmentPricing, value: any) => {
    setPricingConfig(prev => ({
      ...prev,
      equipmentPricing: prev.equipmentPricing.map(pricing =>
        pricing.equipmentId === equipmentId
          ? { ...pricing, [field]: value }
          : pricing
      )
    }))
  }

  const handleSave = async () => {
    try {
      await updateSettingsMutation.mutateAsync({
        pricingService: pricingConfig
      })
      alert("요금 설정이 저장되었습니다.")
    } catch (error) {
      alert("저장 중 오류가 발생했습니다.")
    }
  }

  const handleAddRule = () => {
    setPricingConfig(prev => ({
      ...prev,
      baseCalculationRules: [
        ...prev.baseCalculationRules,
        {
          name: "",
          description: "",
          multiplier: 1.0,
          conditions: []
        }
      ]
    }))
  }

  const handleRemoveRule = (index: number) => {
    setPricingConfig(prev => ({
      ...prev,
      baseCalculationRules: prev.baseCalculationRules.filter((_, i) => i !== index)
    }))
  }

  const handleUpdateRule = (index: number, field: keyof CalculationRule, value: any) => {
    setPricingConfig(prev => ({
      ...prev,
      baseCalculationRules: prev.baseCalculationRules.map((rule, i) =>
        i === index ? { ...rule, [field]: value } : rule
      )
    }))
  }

  return {
    equipments,
    pricingConfig,
    editingEquipment,
    setEditingEquipment,
    isLoading: equipmentsLoading || settingsLoading,
    isSaving: updateSettingsMutation.isPending,
    handleConfigChange,
    handleEquipmentPricingChange,
    handleSave,
    handleAddRule,
    handleRemoveRule,
    handleUpdateRule
  }
}