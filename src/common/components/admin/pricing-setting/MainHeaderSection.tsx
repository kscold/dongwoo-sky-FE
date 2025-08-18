import React from "react"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import * as styles from "../../../../features/admin/styles/admin-pricing-setting.css"

interface FormValues {
  mainTitle: string
  mainSubtitle: string
  [key: string]: any
}

interface MainHeaderSectionProps {
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
  isSubmitting: boolean
}

export const MainHeaderSection: React.FC<MainHeaderSectionProps> = ({
  register,
  errors,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>🎯 메인 헤더</h2>

      <div className={styles.formGroup}>
        <label className={styles.label}>메인 제목</label>
        <input
          {...register("mainTitle", {
            required: "메인 제목은 필수입니다.",
          })}
          className={styles.input}
          placeholder="예: 이용 요금 안내"
          disabled={isSubmitting}
        />
        {errors.mainTitle && (
          <p className={styles.errorMessage}>{errors.mainTitle.message}</p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>메인 부제목</label>
        <textarea
          {...register("mainSubtitle", {
            required: "메인 부제목은 필수입니다.",
          })}
          className={styles.textarea}
          placeholder="투명하고 합리적인 비용으로..."
          rows={3}
          disabled={isSubmitting}
        />
        {errors.mainSubtitle && (
          <p className={styles.errorMessage}>
            {errors.mainSubtitle.message}
          </p>
        )}
      </div>
    </div>
  )
}