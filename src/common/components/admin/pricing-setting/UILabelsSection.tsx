import React from "react"
import { UseFormRegister } from "react-hook-form"
import * as styles from "../../../../features/admin/styles/admin-pricing-setting.css"

interface FormValues {
  timeSelectionLabel: string
  hourUnit: string
  baseHoursLabel: string
  additionalHoursLabel: string
  hourlyRateLabel: string
  specificationsLabel: string
  scrollLeftAriaLabel: string
  scrollRightAriaLabel: string
  [key: string]: any
}

interface UILabelsSectionProps {
  register: UseFormRegister<FormValues>
  isSubmitting: boolean
}

export const UILabelsSection: React.FC<UILabelsSectionProps> = ({
  register,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>🏷️ UI 라벨 설정</h2>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>시간 선택 라벨</label>
          <input
            {...register("timeSelectionLabel")}
            className={styles.input}
            placeholder="예: 선택한 작업 시간"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>시간 단위</label>
          <input
            {...register("hourUnit")}
            className={styles.input}
            placeholder="예: 시간"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>기본 시간 라벨</label>
          <input
            {...register("baseHoursLabel")}
            className={styles.input}
            placeholder="예: 기본"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>추가 시간 라벨</label>
          <input
            {...register("additionalHoursLabel")}
            className={styles.input}
            placeholder="예: 추가"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>시간당 요금 라벨</label>
          <input
            {...register("hourlyRateLabel")}
            className={styles.input}
            placeholder="예: 시간당"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>사양 라벨</label>
          <input
            {...register("specificationsLabel")}
            className={styles.input}
            placeholder="예: 주요 사양"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>왼쪽 스크롤 버튼 접근성 라벨</label>
          <input
            {...register("scrollLeftAriaLabel")}
            className={styles.input}
            placeholder="예: 왼쪽으로 스크롤"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>오른쪽 스크롤 버튼 접근성 라벨</label>
          <input
            {...register("scrollRightAriaLabel")}
            className={styles.input}
            placeholder="예: 오른쪽으로 스크롤"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  )
}