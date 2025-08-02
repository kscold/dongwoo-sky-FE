import React from "react"
import * as styles from "../../../styles/admin/admin-form.css"

interface WorkShowcaseEditFormProps {
  formData: {
    title: string
    content: string
    category: string
    projectDuration: string
    clientName: string
    description: string
    tags: string[]
    isActive: boolean
  }
  tagsInput: string
  isPending: boolean
  onFormChange: (data: any) => void
  onTagsChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
}

export const WorkShowcaseEditForm: React.FC<WorkShowcaseEditFormProps> = ({
  formData,
  tagsInput,
  isPending,
  onFormChange,
  onTagsChange,
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
          onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
          className={styles.input}
          required
          placeholder="작업 제목을 입력하세요"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>카테고리</label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => onFormChange({ ...formData, category: e.target.value })}
          className={styles.input}
          placeholder="예: 크레인 작업, 굴삭기 작업"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>고객명</label>
          <input
            type="text"
            value={formData.clientName}
            onChange={(e) => onFormChange({ ...formData, clientName: e.target.value })}
            className={styles.input}
            placeholder="고객명 또는 회사명"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>작업 기간</label>
          <input
            type="text"
            value={formData.projectDuration}
            onChange={(e) => onFormChange({ ...formData, projectDuration: e.target.value })}
            className={styles.input}
            placeholder="예: 3일, 1주일"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>작업 설명</label>
        <textarea
          value={formData.description}
          onChange={(e) => onFormChange({ ...formData, description: e.target.value })}
          className={styles.textarea}
          placeholder="작업에 대한 간단한 설명"
          rows={3}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>상세 내용 *</label>
        <textarea
          value={formData.content}
          onChange={(e) => onFormChange({ ...formData, content: e.target.value })}
          className={styles.textarea}
          required
          placeholder="작업에 대한 상세한 내용을 입력하세요"
          rows={8}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>태그</label>
        <input
          type="text"
          value={tagsInput}
          onChange={(e) => onTagsChange(e.target.value)}
          className={styles.input}
          placeholder="태그를 쉼표로 구분하여 입력 (예: 크레인, 건설, 안전)"
        />
        <small className={styles.helpText}>
          쉼표(,)로 구분하여 여러 태그를 입력할 수 있습니다.
        </small>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) => onFormChange({ ...formData, isActive: e.target.checked })}
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