import React from "react"
import { UseFormRegister } from "react-hook-form"
import * as styles from "../../../../styles/admin/admin-pricing-setting.css"

interface FormValues {
  equipmentSectionTitle: string
  timeSectionTitle: string
  [key: string]: any
}

interface SectionTitlesSectionProps {
  register: UseFormRegister<FormValues>
  isSubmitting: boolean
}

export const SectionTitlesSection: React.FC<SectionTitlesSectionProps> = ({
  register,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>🏷️ 섹션 제목</h2>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>장비 선택 섹션 제목</label>
          <input
            {...register("equipmentSectionTitle")}
            className={styles.input}
            placeholder="예: 장비 선택"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>작업 시간 섹션 제목</label>
          <input
            {...register("timeSectionTitle")}
            className={styles.input}
            placeholder="예: 작업 시간 선택"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  )
}