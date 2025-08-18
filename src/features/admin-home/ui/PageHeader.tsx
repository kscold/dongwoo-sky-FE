import React from "react"
import { ActionButtons } from "./button/ActionButtons"
import * as styles from "./page-header.css"

interface PageHeaderProps {
  isEditing: boolean
  isLoading: boolean
  onEdit: () => void
  onSave: () => void
  onCancel: () => void
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  isEditing,
  isLoading,
  onEdit,
  onSave,
  onCancel
}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>서비스 홈 페이지 관리</h1>
      <ActionButtons
        isEditing={isEditing}
        isLoading={isLoading}
        onEdit={onEdit}
        onSave={onSave}
        onCancel={onCancel}
      />
    </div>
  )
}