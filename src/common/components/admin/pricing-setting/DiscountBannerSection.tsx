import React from "react"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as styles from "../../../../styles/admin/admin-pricing-setting.css"

interface FormValues {
  discountBannerTitle: string
  discountBannerSubtitle: string
  discountPercentage: number
  [key: string]: any
}

interface DiscountBannerSectionProps {
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
  isSubmitting: boolean
}

export const DiscountBannerSection: React.FC<DiscountBannerSectionProps> = ({
  register,
  errors,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>💰 할인 배너</h2>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>할인 배너 제목</label>
          <input
            {...register("discountBannerTitle", {
              required: "할인 배너 제목은 필수입니다.",
            })}
            className={styles.input}
            placeholder="예: 직접 문의 시 특별 할인!"
            disabled={isSubmitting}
          />
          {errors.discountBannerTitle && (
            <p className={styles.errorMessage}>
              {errors.discountBannerTitle.message}
            </p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>할인율 (%)</label>
          <input
            type="number"
            {...register("discountPercentage", {
              required: "할인율은 필수입니다.",
              min: { value: 0, message: "0 이상의 값을 입력해주세요" },
              max: { value: 100, message: "100 이하의 값을 입력해주세요" },
            })}
            className={styles.input}
            placeholder="5"
            disabled={isSubmitting}
          />
          {errors.discountPercentage && (
            <p className={styles.errorMessage}>
              {errors.discountPercentage.message}
            </p>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>할인 배너 부제목</label>
        <input
          {...register("discountBannerSubtitle", {
            required: "할인 배너 부제목은 필수입니다.",
          })}
          className={styles.input}
          placeholder="예: 온라인 견적 대비 최대 5% 추가 할인 혜택"
          disabled={isSubmitting}
        />
        {errors.discountBannerSubtitle && (
          <p className={styles.errorMessage}>
            {errors.discountBannerSubtitle.message}
          </p>
        )}
      </div>
    </div>
  )
}