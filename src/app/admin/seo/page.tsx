"use client"

import React from "react"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { SEOCard, SEOFormModal, SitemapSection, useSEOManagement } from "../../../features/admin-seo"
import * as styles from "../../../features/admin-seo/ui/page.css"

function SEOAdminContent() {
  const {
    seoList,
    isLoading,
    error,
    isModalOpen,
    editingItem,
    formData,
    setFormData,
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    handleDelete
  } = useSEOManagement()

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error) {
    return <div>SEO 설정을 불러오는 데 실패했습니다.</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SEO 관리</h1>
        <p className={styles.subtitle}>
          페이지별 메타데이터와 검색 엔진 최적화 설정을 관리합니다.
        </p>
        <button 
          onClick={() => handleOpenModal()}
          className={styles.addButton}
        >
          🔍 새 SEO 설정 추가
        </button>
      </div>

      <div className={styles.grid}>
        {seoList.map((item) => (
          <SEOCard
            key={item.metadata.id || item.page}
            item={item}
            onEdit={handleOpenModal}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <SEOFormModal
        isOpen={isModalOpen}
        editingItem={editingItem}
        formData={formData}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onFormChange={setFormData}
      />

      <SitemapSection totalPages={seoList.length + 4} />
    </div>
  )
}

export default function SEOAdminPage() {
  return (
    <ProtectedRoute>
      <SEOAdminContent />
    </ProtectedRoute>
  )
}