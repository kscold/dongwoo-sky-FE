import * as styles from "./contact-form.css"

interface InquiryTypeSelectorProps {
  isPricingInquiry: boolean
  onTypeChange: (isPricingInquiry: boolean) => void
}

export function InquiryTypeSelector({
  isPricingInquiry,
  onTypeChange,
}: InquiryTypeSelectorProps) {
  return (
    <div className={styles.inquiryTypeSelector}>
      <label className={styles.inquiryTypeLabel}>
        <input
          type="radio"
          name="inquiryType"
          value="general"
          checked={!isPricingInquiry}
          onChange={() => onTypeChange(false)}
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
          onChange={() => onTypeChange(true)}
          className={styles.inquiryTypeRadio}
        />
        견적 문의
      </label>
    </div>
  )
}