import React from "react"
import { UseFormRegister, FieldArrayWithId } from "react-hook-form"
import * as styles from "../../../../styles/admin/admin-pricing-setting.css"

interface FormValues {
  infoNotes: string[]
  [key: string]: any
}

interface InfoNotesSectionProps {
  register: UseFormRegister<FormValues>
  infoNotesFields: FieldArrayWithId<FormValues, "infoNotes">[]
  removeInfoNote: (index: number) => void
  addInfoNote: () => void
  isSubmitting: boolean
}

export const InfoNotesSection: React.FC<InfoNotesSectionProps> = ({
  register,
  infoNotesFields,
  removeInfoNote,
  addInfoNote,
  isSubmitting
}) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>ℹ️ 안내 사항</h2>
      <p className={styles.sectionDescription}>
        각 줄은 별도의 안내 사항으로 표시됩니다.
      </p>

      <div className={styles.arrayField}>
        {infoNotesFields.map((field, index) => (
          <div key={field.id} className={styles.arrayItem}>
            <input
              {...register(`infoNotes.${index}` as const)}
              className={styles.input}
              placeholder="예: VAT 별도, 현장 상황에 따라 변동될 수 있습니다"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => removeInfoNote(index)}
              className={styles.removeButton}
              disabled={isSubmitting}
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addInfoNote}
          className={styles.addButton}
          disabled={isSubmitting}
        >
          + 안내사항 추가
        </button>
      </div>
    </div>
  )
}