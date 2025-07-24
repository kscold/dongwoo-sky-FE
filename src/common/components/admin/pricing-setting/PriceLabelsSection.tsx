import React from "react"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as styles from "../../../../styles/admin/admin-pricing-setting.css"

interface FormValues {
  onlinePriceLabel: string
  contactPriceLabel: string
  savingsLabel: string
  phoneNumber: string
  [key: string]: any
}

interface PriceLabelsSectionProps {
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
  isSubmitting: boolean
}

export const PriceLabelsSection: React.FC<PriceLabelsSectionProps> = ({
  register,
  errors,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>💳 가격 표시 라벨</h2>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>온라인 견적 라벨</label>
          <input
            {...register("onlinePriceLabel")}
            className={styles.input}
            placeholder="예: 온라인 견적"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>직접 문의 라벨</label>
          <input
            {...register("contactPriceLabel")}
            className={styles.input}
            placeholder="예: 직접 문의 시"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>절약 금액 라벨</label>
          <input
            {...register("savingsLabel")}
            className={styles.input}
            placeholder="예: 원 절약!"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>전화번호</label>
          <input
            {...register("phoneNumber", {
              required: "전화번호는 필수입니다.",
            })}
            className={styles.input}
            placeholder="예: 010-1234-5678"
            disabled={isSubmitting}
          />
          {errors.phoneNumber && (
            <p className={styles.errorMessage}>
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}