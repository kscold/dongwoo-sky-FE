import React from "react"
import { Equipment } from "../../../../types/equipment"
import { EquipmentList } from "./EquipmentList"
import { EmptyState } from "./EmptyState"
import * as styles from "./EquipmentSection.css"

interface EquipmentSectionProps {
  equipments: Equipment[]
  onAddEquipment: () => void
  onEditEquipment: (equipment: Equipment) => void
  onDeleteEquipment: (id: string) => void
  onDragEnd: (event: any) => void
  sensors: any
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  equipments,
  onAddEquipment,
  onEditEquipment,
  onDeleteEquipment,
  onDragEnd,
  sensors,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>전체 장비 목록</h2>
        <p className={styles.sectionDescription}>
          드래그하여 장비의 노출 순서를 변경할 수 있습니다. (
          {equipments.length}개 장비)
        </p>
      </div>

      {equipments.length === 0 ? (
        <EmptyState onAddEquipment={onAddEquipment} />
      ) : (
        <EquipmentList
          equipments={equipments}
          onEditEquipment={onEditEquipment}
          onDeleteEquipment={onDeleteEquipment}
          onDragEnd={onDragEnd}
          sensors={sensors}
        />
      )}
    </div>
  )
}