import React from "react"
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core"
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { Equipment } from "../../../../types/equipment"
import SortableEquipmentItem from "./SortableEquipmentItem"
import * as styles from "./EquipmentList.css"

interface EquipmentListProps {
  equipments: Equipment[]
  onEditEquipment: (equipment: Equipment) => void
  onDeleteEquipment: (id: string) => void
  onDragEnd: (event: any) => void
  sensors: any
}

export const EquipmentList: React.FC<EquipmentListProps> = ({
  equipments,
  onEditEquipment,
  onDeleteEquipment,
  onDragEnd,
  sensors,
}) => {
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={equipments.map((e, index) => e.id || `equipment-${index}`)}
        strategy={verticalListSortingStrategy}
      >
        <div className={styles.equipmentGrid}>
          {equipments.map((equipment, index) => {
            const uniqueKey = equipment.id || `equipment-${index}`

            return (
              <SortableEquipmentItem
                key={uniqueKey}
                equipment={equipment}
                index={index}
                onEdit={() => onEditEquipment(equipment)}
                onDelete={() => onDeleteEquipment(equipment.id || "")}
              />
            )
          })}
        </div>
      </SortableContext>
    </DndContext>
  )
}