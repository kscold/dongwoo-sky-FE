import { useState, useEffect } from "react"
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"
import { usePricingSetting, useUpdatePricingSetting } from "./usePricingSettings"
import { UpdatePricingSettingDto } from "../../api/pricingSettings"

interface FormValues extends Omit<UpdatePricingSettingDto, "infoNotes"> {
  infoNotes: string[]
}

export const usePricingSettingForm = () => {
  const { data: pricingSetting, isLoading } = usePricingSetting()
  const updateMutation = useUpdatePricingSetting()
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle")

  const form = useForm<FormValues>()
  const { register, handleSubmit, reset, control, formState: { errors, isSubmitting } } = form

  const {
    fields: infoNotesFields,
    append: appendInfoNote,
    remove: removeInfoNote,
  } = useFieldArray({
    control,
    name: "infoNotes",
  })

  useEffect(() => {
    if (pricingSetting) {
      const defaultNotes = [
        "VAT 별도, 현장 상황에 따라 변동될 수 있습니다",
        "직접 문의 시 현장 조건을 고려한 정확한 견적을 제공합니다",
        "장기 이용 시 추가 할인 혜택이 있습니다",
      ]

      reset({
        ...pricingSetting,
        infoNotes: pricingSetting.infoNotes || defaultNotes,
        timeSelectionLabel: pricingSetting.timeSelectionLabel || "선택한 작업 시간",
        hourUnit: pricingSetting.hourUnit || "시간",
        baseHoursLabel: pricingSetting.baseHoursLabel || "기본",
        additionalHoursLabel: pricingSetting.additionalHoursLabel || "추가",
        hourlyRateLabel: pricingSetting.hourlyRateLabel || "시간당",
        specificationsLabel: pricingSetting.specificationsLabel || "주요 사양",
        scrollLeftAriaLabel: pricingSetting.scrollLeftAriaLabel || "왼쪽으로 스크롤",
        scrollRightAriaLabel: pricingSetting.scrollRightAriaLabel || "오른쪽으로 스크롤",
      })
    }
  }, [pricingSetting, reset])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setSaveStatus("saving")
      await updateMutation.mutateAsync(data)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      console.error("저장 실패:", error)
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 5000)
    }
  }

  const addInfoNote = () => {
    appendInfoNote("")
  }

  return {
    isLoading,
    saveStatus,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    infoNotesFields,
    removeInfoNote,
    addInfoNote,
    onSubmit,
  }
}