import React from "react"
import { UseFormRegister } from "react-hook-form"
import * as styles from "../../../../features/admin/styles/admin-pricing-setting.css"

interface FormValues {
  ctaButtonText: string
  ctaSubtext: string
  [key: string]: any
}

interface CTASectionProps {
  register: UseFormRegister<FormValues>
  isSubmitting: boolean
}

export const CTASection: React.FC<CTASectionProps> = ({
  register,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>📞 문의 버튼</h2>

      <div className={styles.formGroup}>
        <label className={styles.label}>버튼 텍스트</label>
        <input
          {...register("ctaButtonText")}
          className={styles.input}
          placeholder="예: 📞 직접 문의하고 할인받기"
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>버튼 부텍스트</label>
        <input
          {...register("ctaSubtext")}
          className={styles.input}
          placeholder="예: 전화 상담을 통해 더 정확한 견적과 할인 혜택을 받아보세요"
          disabled={isSubmitting}
        />
      </div>
    </div>
  )
}