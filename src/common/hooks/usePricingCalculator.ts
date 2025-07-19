import { useState, useMemo, useEffect } from "react"
import { Equipment } from "../../types/equipment"
import { usePricingEquipments } from "./usePricing"
import { useServicePricingSettings } from "./usePricingSettings"

export const usePricingCalculator = () => {
  const {
    data: equipments,
    isLoading: equipmentsLoading,
    isError: equipmentsError,
    error: equipmentsErrorData,
    refetch: refetchEquipments,
  } = usePricingEquipments()

  const {
    data: pricingSetting,
    isLoading: settingsLoading,
    isError: settingsError,
  } = useServicePricingSettings()

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [workingHours, setWorkingHours] = useState<number>(4)

  const activeEquipments = useMemo(
    () =>
      equipments
        ?.filter((e) => e.showInPricing && e.isPublished)
        .sort((a, b) => a.sortOrder - b.sortOrder) || [],
    [equipments]
  )

  useEffect(() => {
    if (!selectedId && activeEquipments.length > 0) {
      setSelectedId(activeEquipments[0]._id || activeEquipments[0].id)
    }
  }, [activeEquipments, selectedId])

  const selectedEquipment = useMemo(
    () => activeEquipments.find((e) => (e._id || e.id) === selectedId),
    [activeEquipments, selectedId]
  )

  const calculatePrice = (equipment: Equipment, hours: number) => {
    const basePrice = equipment.basePrice || 0
    const hourlyRate = equipment.hourlyRate || 0
    const baseHours = equipment.baseHours || 4

    if (hours <= baseHours) {
      return basePrice
    }

    return basePrice + (hours - baseHours) * hourlyRate
  }

  const estimatedPrice = useMemo(() => {
    if (!selectedEquipment) return 0
    return calculatePrice(selectedEquipment, workingHours)
  }, [selectedEquipment, workingHours])

  const discountPercentage = pricingSetting?.discountPercentage || 5
  const discountedPrice = Math.floor(
    estimatedPrice * (1 - discountPercentage / 100)
  )
  const savings = estimatedPrice - discountedPrice

  const handleEquipmentSelect = (equipmentId: string) => {
    setSelectedId(equipmentId)
    const equipment = activeEquipments.find(
      (e) => (e._id || e.id) === equipmentId
    )
    if (equipment) {
      const minHours = equipment.minHours || 1
      const maxHours = equipment.maxHours || 12
      if (workingHours < minHours) {
        setWorkingHours(minHours)
      } else if (workingHours > maxHours) {
        setWorkingHours(maxHours)
      }
    }
  }

  const isLoading = equipmentsLoading || settingsLoading
  const isError = equipmentsError || settingsError

  return {
    // Data
    activeEquipments,
    selectedEquipment,
    pricingSetting,
    
    // State
    selectedId,
    workingHours,
    setWorkingHours,
    
    // Calculated values
    estimatedPrice,
    discountedPrice,
    savings,
    discountPercentage,
    
    // Handlers
    handleEquipmentSelect,
    
    // Loading states
    isLoading,
    isError,
    equipmentsErrorData,
    refetchEquipments,
  }
}