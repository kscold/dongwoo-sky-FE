import { useState } from "react"
import { useForm } from "react-hook-form"
import type { ContactInquiryRequest } from "../types/contact"
import { useContactInquiry } from "../api/contact.hooks"
import { useContactSettings } from "../../../common/hooks/useContact"
import { useHomePageData } from "../../../common/hooks/useHome"
import { ContactFormFields } from "./ContactFormFields"
import PricingInquiryForm from "../../../common/components/pricing/PricingInquiryForm"
import type { PricingInquiryData } from "../../../api/contact"
import * as styles from "./contact-form.css"

export function ContactForm() {
  const [pricingData, setPricingData] = useState<PricingInquiryData | null>(null)
  const [isPricingInquiry, setIsPricingInquiry] = useState(false)
  const [inquiryType, setInquiryType] = useState("general")
  
  const { data: homePageData } = useHomePageData()
  const { data: contactSettings } = useContactSettings()
  const { mutate: submitInquiry, isPending: isSubmitting } = useContactInquiry()
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactInquiryRequest>()

  const onSubmit = (data: ContactInquiryRequest) => {
    const inquiryData: ContactInquiryRequest = {
      ...data,
      inquiryType: isPricingInquiry ? "견적 문의" : "일반 문의",
      pricingInquiry: isPricingInquiry && pricingData ? pricingData : undefined,
    }

    submitInquiry(inquiryData, {
      onSuccess: () => {
        alert(
          isPricingInquiry
            ? "견적 문의가 접수되었습니다. 검토 후 빠른 시일 내에 연락드리겠습니다!"
            : "어울림 스카이로 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!"
        )
        reset()
        setPricingData(null)
        setIsPricingInquiry(false)
        setInquiryType("general")
      },
      onError: () => {
        alert("문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.")
      },
    })
  }

  const phoneNumber = homePageData?.contactInfo?.contactPhoneNumber || "010-1234-5678"

  return (
    <div className={styles.formSection}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>온라인 문의</h2>
        <p className={styles.formDescription}>
          아래 양식을 작성해주시면 신속하게 확인 후 연락드리겠습니다.
          <br />
          급한 용무는 언제든지{" "}
          <a href={`tel:${phoneNumber}`} className={styles.phoneLink}>
            {phoneNumber}
          </a>{" "}
          으로 전화 주시면 친절히 상담해 드립니다.
        </p>

        {contactSettings?.pricingService?.enabled && (
          <div className={styles.inquiryTypeSelector}>
            <label className={styles.inquiryTypeLabel}>
              <input
                type="radio"
                name="inquiryType"
                value="general"
                checked={!isPricingInquiry}
                onChange={() => setIsPricingInquiry(false)}
                className={styles.inquiryTypeRadio}
              />
              일반 문의
            </label>
            <label className={styles.inquiryTypeLabel}>
              <input
                type="radio"
                name="inquiryType"
                value="pricing"
                checked={isPricingInquiry}
                onChange={() => setIsPricingInquiry(true)}
                className={styles.inquiryTypeRadio}
              />
              견적 문의
            </label>
          </div>
        )}

        {isPricingInquiry && (
          <PricingInquiryForm
            onPricingDataChange={setPricingData}
            disabled={isSubmitting}
          />
        )}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <ContactFormFields
            control={control}
            register={register}
            errors={errors}
            inquiryType={inquiryType}
            setInquiryType={setInquiryType}
          />
          
          <button
            type="submit"
            className={styles.submitButton}
            disabled={
              isSubmitting ||
              (isPricingInquiry && (!pricingData || pricingData.equipmentIds.length === 0))
            }
          >
            {isSubmitting ? "전송 중..." : isPricingInquiry ? "견적 문의하기" : "문의하기"}
          </button>
        </form>
      </div>
    </div>
  )
}