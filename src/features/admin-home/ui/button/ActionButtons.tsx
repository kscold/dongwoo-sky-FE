import React from "react"
import * as styles from "./action-buttons.css"

interface ActionButtonsProps {
  isEditing: boolean
  isLoading: boolean
  onEdit: () => void
  onSave: () => void
  onCancel: () => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isEditing,
  isLoading,
  onEdit,
  onSave,
  onCancel
}) => {
  return (
    <div className={styles.actionButtonContainer}>
      {!isEditing ? (
        <button
          onClick={onEdit}
          className={styles.editButton}
          disabled={isLoading}
        >
          편집
        </button>
      ) : (
        <div className={styles.editButtonGroup}>
          <button
            onClick={onSave}
            className={styles.saveButton}
            disabled={isLoading}
          >
            {isLoading ? "저장 중..." : "저장"}
          </button>
          <button
            onClick={onCancel}
            className={styles.cancelButton}
            disabled={isLoading}
          >
            취소
          </button>
        </div>
      )}
    </div>
  )
}