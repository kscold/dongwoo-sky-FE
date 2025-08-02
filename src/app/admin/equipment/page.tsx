"use client"

import React from "react"
import ProtectedRoute from "@/common/auth/ProtectedRoute"
import {
  useEquipmentManagement,
  EquipmentHeader,
  EquipmentList,
  EmptyState,
  ErrorState,
} from "@/features/admin-equipment"
import { EquipmentFormModal } from "@/features/admin-equipment"
import * as styles from "../../../features/admin-equipment/ui/equipment-page.css"

function EquipmentAdminContent() {
  const {
    equipments,
    isLoading,
    error,
    isModalOpen,
    editingEquipment,
    handleDragEnd,
    openModal,
    closeModal,
    handleDelete,
  } = useEquipmentManagement()

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>장비 목록을 불러오는 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <ErrorState />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <EquipmentHeader onAddClick={() => openModal()} />

      {equipments.length === 0 ? (
        <EmptyState onAddClick={() => openModal()} />
      ) : (
        <EquipmentList
          equipments={equipments}
          onDragEnd={handleDragEnd}
          onEdit={openModal}
          onDelete={handleDelete}
        />
      )}

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
