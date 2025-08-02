import React from "react"
import * as styles from "../../../styles/admin/admin-form.css"

interface CustomerReviewEditFormProps {
  formData: {
    title: string
    content: string
    customerName: string
    rating: number
    isActive: boolean
  }
  isPending: boolean
  onFormChange: (data: any) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
}

export const CustomerReviewEditForm: React.FC<CustomerReviewEditFormProps> = ({
  formData,
  isPending,
  onFormChange,
  onSubmit,
  onCancel
}) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>제목 *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            onFormChange({ ...formData, title: e.target.value })
          }
          className={styles.input}
          required
          placeholder="리뷰 제목을 입력하세요"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>고객명 *</label>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) =>
            onFormChange({ ...formData, customerName: e.target.value })
          }
          className={styles.input}
          required
          placeholder="고객명을 입력하세요"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>평점</label>
        <select
          value={formData.rating}
          onChange={(e) =>
            onFormChange({ ...formData, rating: Number(e.target.value) })
          }
          className={styles.select}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}점 {"★".repeat(num)}
              {"☆".repeat(5 - num)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>리뷰 내용 *</label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            onFormChange({ ...formData, content: e.target.value })
          }
          className={styles.textarea}
          required
          placeholder="리뷰 내용을 입력하세요"
          rows={8}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) =>
              onFormChange({ ...formData, isActive: e.target.checked })
            }
            className={styles.checkbox}
          />
          <span>활성화</span>
        </label>
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          취소
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isPending}
        >
          {isPending ? "수정 중..." : "수정"}
        </button>
      </div>
    </form>
  )
}