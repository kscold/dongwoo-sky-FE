"use client"

import React, { useState } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import {
  useEquipments,
  useUpdateEquipmentOrder,
  useDeleteEquipment,
} from "../../../common/hooks/useEquipment"
import { Equipment } from "../../../types/equipment"
import SortableEquipmentItem from "./components/SortableEquipmentItem"
import EquipmentFormModal from "./components/EquipmentFormModal"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import * as styles from "../../../styles/admin/admin-equipment.css"

function EquipmentAdminContent() {
  const { data: equipments = [], isLoading, error } = useEquipments()
  const updateOrderMutation = useUpdateEquipmentOrder()
  const deleteMutation = useDeleteEquipment()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEquipment, setEditingEquipment] = useState<Equipment | null>(
    null
  )

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const activeIndex = equipments.findIndex(
        (item, index) => (item.id || `equipment-${index}`) === active.id
      )
      const overIndex = equipments.findIndex(
        (item, index) => (item.id || `equipment-${index}`) === over!.id
      )

      if (activeIndex === -1 || overIndex === -1) return

      const newOrder = arrayMove(equipments, activeIndex, overIndex)
      // 실제 id가 있는 장비들만 순서 업데이트
      const newOrderIds = newOrder
        .filter((item) => item.id)
        .map((item) => item.id)

      if (newOrderIds.length > 0) {
        updateOrderMutation.mutate(newOrderIds)
      }
    }
  }

  const openModal = (equipment: Equipment | null = null) => {
    console.log("Opening modal with equipment:", equipment)
    console.log("Equipment ID:", equipment?.id)
    setEditingEquipment(equipment)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setEditingEquipment(null)
    setIsModalOpen(false)
  }

  const handleDelete = (id: string) => {
    if (!id) {
      alert("삭제할 수 없는 장비입니다.")
      return
    }

    if (window.confirm("정말로 이 장비를 삭제하시겠습니까?")) {
      deleteMutation.mutate(id)
    }
  }

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>장비 관리</h1>
          <p className={styles.subtitle}>
            오류가 발생했습니다: {String(error)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>장비 관리</h1>
        <p className={styles.subtitle}>
          웹사이트에 표시될 장비를 관리하고 순서를 조정하세요.
        </p>
        <div className={styles.headerActions}>
          <button
            type="button"
            onClick={() => openModal()}
            className={styles.addButton}
          >
            📋 새 장비 추가
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>전체 장비 목록</h2>
          <p className={styles.sectionDescription}>
            드래그하여 장비의 노출 순서를 변경할 수 있습니다. (
            {equipments.length}개 장비)
          </p>
        </div>

        {equipments.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>🚧</div>
            <h3 className={styles.emptyStateTitle}>등록된 장비가 없습니다</h3>
            <p className={styles.emptyStateDescription}>
              첫 번째 장비를 추가해보세요
            </p>
            <button
              type="button"
              onClick={() => openModal()}
              className={styles.emptyStateButton}
            >
              장비 추가하기
            </button>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
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
                      onEdit={() => openModal(equipment)}
                      onDelete={() => handleDelete(equipment.id || "")}
                    />
                  )
                })}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>

      {isModalOpen && (
        <EquipmentFormModal
          isOpen={isModalOpen}
          onClose={closeModal}
          initialData={editingEquipment}
        />
      )}
    </div>
  )
}

export default function EquipmentAdminPage() {
  return (
    <ProtectedRoute>
      <EquipmentAdminContent />
    </ProtectedRoute>
  )
}
