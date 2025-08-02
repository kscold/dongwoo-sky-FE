"use client"

import React, { useEffect } from "react"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { HeroTitleSection } from "../../../features/admin-home/ui/HeroTitleSection"
import { HeroButtonSection } from "../../../features/admin-home/ui/HeroButtonSection"
import { ImageUploadSection } from "../../../features/admin-home/ui/ImageUploadSection"
import { ContentSectionSettings } from "../../../features/admin-home/ui/ContentSectionSettings"
import { PreviewSection } from "../../../features/admin-home/ui/PreviewSection"
import {
  PageHeader,
  PageStatusToggle,
  SectionWrapper,
  useHomePageAdmin
} from "../../../features/admin-home"
import * as styles from "../../../features/admin-home/ui/page.css"

function HomePageAdminContent() {
  const {
    homeSettings,
    isLoading,
    error,
    isEditing,
    editData,
    isUploading,
    currentImageIndex,
    setCurrentImageIndex,
    currentTitle,
    currentButtons,
    currentImages,
    handleEdit,
    handleCancel,
    handleSave,
    handleImageUpload,
    handleImageDelete,
    handleInputChange,
    updateTitleField,
    updateButtonField,
    updateContentSettings,
    isSaving,
  } = useHomePageAdmin()

  // 이미지 자동 전환 효과
  useEffect(() => {
    if (currentImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentImages.length, setCurrentImageIndex])

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>홈 화면 관리</h1>
          <p className={styles.subtitle}>오류가 발생했습니다: {String(error)}</p>
        </div>
      </div>
    )
  }

  if (!homeSettings) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>홈 화면 관리</h1>
          <p className={styles.subtitle}>홈 설정을 불러오는 중입니다...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <PageHeader
        isEditing={isEditing}
        isLoading={isSaving}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />

      <SectionWrapper title="페이지 설정">
        <div className={styles.field}>
          <label className={styles.label}>활성화 상태</label>
          <PageStatusToggle
            isActive={editData.isActive !== false}
            isEditing={isEditing}
            onChange={(value) => handleInputChange("isActive", value)}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper title="히어로 타이틀">
        <HeroTitleSection
          currentTitle={currentTitle}
          isEditing={isEditing}
          onUpdateTitle={updateTitleField}
        />
      </SectionWrapper>

      <SectionWrapper title="히어로 버튼">
        <HeroButtonSection
          currentButtons={currentButtons}
          isEditing={isEditing}
          onUpdateButton={updateButtonField}
        />
      </SectionWrapper>

      <SectionWrapper title="히어로 이미지">
        <ImageUploadSection
          currentImages={currentImages}
          isEditing={isEditing}
          isUploading={isUploading}
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />
      </SectionWrapper>

      <SectionWrapper title="컨텐츠 섹션 설정">
        <ContentSectionSettings
          contentSettings={editData.contentSettings || homeSettings?.contentSettings}
          isEditing={isEditing}
          onUpdateContentSettings={updateContentSettings}
        />
      </SectionWrapper>

      <PreviewSection
        currentTitle={currentTitle}
        currentButtons={currentButtons}
        currentImages={currentImages}
        currentImageIndex={currentImageIndex}
        heroSubtitle={editData.heroSubtitle || homeSettings?.heroSubtitle}
        onImageIndexChange={setCurrentImageIndex}
      />
    </div>
  )
}

export default function HomePageAdmin() {
  return (
    <ProtectedRoute>
      <HomePageAdminContent />
    </ProtectedRoute>
  )
}