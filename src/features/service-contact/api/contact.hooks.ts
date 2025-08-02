import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { serviceContactApi } from "./contact.api"
import type { ContactInquiryRequest, PricingInquiryData } from "../types/contact"

export const useContactInquiry = () => {
  return useMutation({
    mutationFn: (data: ContactInquiryRequest) => serviceContactApi.createInquiry(data),
  })
}

export const useContactForm = () => {
  const [pricingData, setPricingData] = useState<PricingInquiryData | null>(null)
  const [isPricingInquiry, setIsPricingInquiry] = useState(false)

  const submitMutation = useMutation({
    mutationFn: (data: ContactInquiryRequest) => serviceContactApi.createInquiry(data),
    onSuccess: (_, variables) => {
      const isQualified = variables.inquiryType === "견적 문의"
      alert(
        isQualified
          ? "견적 문의가 접수되었습니다. 검토 후 빠른 시일 내에 연락드리겠습니다!"
          : "어울림 스카이로 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!"
      )
    },
    onError: () => {
      alert("문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.")
    },
  })

  const handleSubmit = async (formData: FormData) => {
    const inquiryData: ContactInquiryRequest = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      company: (formData.get("company") as string) || undefined,
      inquiryType: isPricingInquiry ? "견적 문의" : "일반 문의",
      subject: isPricingInquiry
        ? "장비 렌탈 견적 요청"
        : (formData.get("subject") as string) || "문의",
      message: formData.get("details") as string,
      email: (formData.get("email") as string) || "",
      location: (formData.get("location") as string) || undefined,
      isUrgent: false,
      pricingInquiry: isPricingInquiry && pricingData ? pricingData : undefined,
    }

    submitMutation.mutate(inquiryData)
  }

  const resetForm = () => {
    setPricingData(null)
    setIsPricingInquiry(false)
  }

  return {
    pricingData,
    setPricingData,
    isPricingInquiry,
    setIsPricingInquiry,
    isSubmitting: submitMutation.isPending,
    handleSubmit,
    resetForm,
  }
}