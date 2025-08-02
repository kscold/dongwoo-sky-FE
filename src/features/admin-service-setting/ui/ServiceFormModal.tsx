import React from "react"
import { Service, CreateServiceDto } from "../../../types/service"
import * as styles from "../../../styles/common/admin-common.css"

interface ServiceFormModalProps {
  showModal: boolean
  editingService: Service | null
  formData: CreateServiceDto
  onSubmit: (e: React.FormEvent) => void
  onFormChange: (data: CreateServiceDto) => void
  onClose: () => void
}

export const ServiceFormModal: React.FC<ServiceFormModalProps> = ({
  showModal,
  editingService,
  formData,
  onSubmit,
  onFormChange,
  onClose
}) => {
  if (!showModal) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalHeader}>
          {editingService ? "서비스 수정" : "새 서비스 추가"}
        </h2>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>제목</label>
            <input
              type="text"
              className={styles.input}
              value={formData.title}
              onChange={(e) =>
                onFormChange({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>설명</label>
            <textarea
              className={styles.textarea}
              value={formData.description}
              onChange={(e) =>
                onFormChange({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>아이콘 URL (선택사항)</label>
            <input
              type="url"
              className={styles.input}
              value={formData.icon}
              onChange={(e) =>
                onFormChange({ ...formData, icon: e.target.value })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>순서</label>
            <input
              type="number"
              className={styles.input}
              value={formData.sortOrder}
              onChange={(e) =>
                onFormChange({
                  ...formData,
                  sortOrder: parseInt(e.target.value),
                })
              }
              min="0"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) =>
                  onFormChange({ ...formData, isActive: e.target.checked })
                }
                style={{ marginRight: "8px" }}
              />
              활성화
            </label>
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              취소
            </button>
            <button type="submit" className={styles.saveButton}>
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}