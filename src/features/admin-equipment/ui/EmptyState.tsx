import React from "react"
import * as styles from "./empty-state.css"

interface EmptyStateProps {
  onAddEquipment: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onAddEquipment }) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateIcon}>🚧</div>
      <h3 className={styles.emptyStateTitle}>등록된 장비가 없습니다</h3>
      <p className={styles.emptyStateDescription}>
        첫 번째 장비를 추가해보세요
      </p>
      <button
        type="button"
        onClick={onAddEquipment}
        className={styles.emptyStateButton}
      >
        장비 추가하기
      </button>
    </div>
  )
}