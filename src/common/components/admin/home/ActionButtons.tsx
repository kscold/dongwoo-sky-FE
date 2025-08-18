import React from "react"
import "../../../../../features/admin/styles/admin-home-page.css"

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
  onCancel,
}) => {
  if (isEditing) {
    return (
      <div className="actionButtons">
        <button
          className="saveButton"
          onClick={onSave}
          disabled={isLoading}
        >
          {isLoading ? "💾 저장 중..." : "💾 저장"}
        </button>
        <button
          className="cancelButton"
          onClick={onCancel}
          disabled={isLoading}
        >
          ❌ 취소
        </button>
      </div>
    )
  }

  return (
    <div className="actionButtons">
      <button
        className="editButton"
        onClick={onEdit}
      >
        ✏️ 편집
      </button>
    </div>
  )
}