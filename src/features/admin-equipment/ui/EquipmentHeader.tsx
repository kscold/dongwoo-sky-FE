import React from "react"
import * as styles from "./EquipmentHeader.css"

interface EquipmentHeaderProps {
  onAddEquipment: () => void
}

export const EquipmentHeader: React.FC<EquipmentHeaderProps> = ({
  onAddEquipment,
}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>장비 관리</h1>
      <p className={styles.subtitle}>
        웹사이트에 표시될 장비를 관리하고 순서를 조정하세요.
      </p>
      <div className={styles.headerActions}>
        <button
          type="button"
          onClick={onAddEquipment}
          className={styles.addButton}
        >
          📋 새 장비 추가
        </button>
      </div>
    </div>
  )
}