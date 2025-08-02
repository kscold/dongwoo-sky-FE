import * as styles from "./inquiry-type-selector.css"

interface InquiryTypeSelectorProps {
  isPricingInquiry: boolean
  onTypeChange: (isPricingInquiry: boolean) => void
}

export function InquiryTypeSelector({
  isPricingInquiry,
  onTypeChange,
}: InquiryTypeSelectorProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="radio"
          name="inquiryType"
          value="general"
          checked={!isPricingInquiry}
          onChange={() => onTypeChange(false)}
          className={styles.radio}
        />
        일반 문의
      </label>
      <label className={styles.label}>
        <input
          type="radio"
          name="inquiryType"
          value="pricing"
          checked={isPricingInquiry}
          onChange={() => onTypeChange(true)}
          className={styles.radio}
        />
        견적 문의
      </label>
    </div>
  )
}