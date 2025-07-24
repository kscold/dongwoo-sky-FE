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
      // Default notes should come from backend, use empty array if none provided
      const defaultNotes: string[] = []

      reset({
        ...pricingSetting,
        infoNotes: pricingSetting.infoNotes || defaultNotes,
        timeSelectionLabel: pricingSetting.timeSelectionLabel || "",
        hourUnit: pricingSetting.hourUnit || "",
        baseHoursLabel: pricingSetting.baseHoursLabel || "",
        additionalHoursLabel: pricingSetting.additionalHoursLabel || "",
        hourlyRateLabel: pricingSetting.hourlyRateLabel || "",
        specificationsLabel: pricingSetting.specificationsLabel || "",
        scrollLeftAriaLabel: pricingSetting.scrollLeftAriaLabel || "",
        scrollRightAriaLabel: pricingSetting.scrollRightAriaLabel || "",
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