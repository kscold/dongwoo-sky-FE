"use client"

import React from "react"
import { ServiceTable, ServiceFormModal, useServiceManagement } from "../../../features/admin-service-setting"
import * as styles from "../../../styles/common/admin-common.css"

export default function AdminServicePage() {
  const {
    services,
    loading,
    error,
    showModal,
    editingService,
    formData,
    setFormData,
    setShowModal,
    handleCreate,
    handleEdit,
    handleDelete,
    handleSubmit
  } = useServiceManagement()

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>서비스 목록을 불러오는 중...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>서비스 관리</h1>
        <p className={styles.description}>작업 가능 범위를 관리합니다.</p>
      </div>

      <button className={styles.addButton} onClick={handleCreate}>
        새 서비스 추가
      </button>

      <ServiceTable 
        services={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ServiceFormModal
        showModal={showModal}
        editingService={editingService}
        formData={formData}
        onSubmit={handleSubmit}
        onFormChange={setFormData}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}