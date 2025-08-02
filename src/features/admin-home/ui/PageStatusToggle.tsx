import React from "react"
import * as styles from "./page-status-toggle.css"

interface PageStatusToggleProps {
  isActive: boolean
  isEditing: boolean
  onChange: (value: boolean) => void
}

export const PageStatusToggle: React.FC<PageStatusToggleProps> = ({ 
  isActive, 
  isEditing, 
  onChange 
}) => {
  if (!isEditing) {
    return (
      <div className={styles.value}>
        <span className={`${styles.statusBadge} ${isActive ? styles.statusActive : styles.statusInactive}`}>
          {isActive ? "활성화" : "비활성화"}
        </span>
      </div>
    )
  }

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.toggleSwitch}>
        <input
          type="checkbox"
          className={styles.toggleInput}
          checked={isActive}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={`${styles.slider} ${isActive ? styles.toggleActive : ""}`} />
      </label>
      <span className={styles.toggleLabel}>
        {isActive ? "활성화" : "비활성화"}
      </span>
    </div>
  )
}