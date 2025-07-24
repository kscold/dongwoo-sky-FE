"use client"

import React, { useEffect, useCallback } from "react"

import {
  useMainHomeSettings,
  useSaveAdminHomeSettings,
  useUploadHeroImages,
  useDeleteHeroImage,
} from "../../../common/hooks/useHome"
import { useAdminHomeState } from "../../../common/hooks/useAdminHomeState"
import { HomeSettings } from "../../../types/home"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { HeroTitleSection } from "./compoents/HeroTitleSection"
import { HeroButtonSection } from "./compoents/HeroButtonSection"
import { ImageUploadSection } from "./compoents/ImageUploadSection"
import { ContentSectionSettings } from "./compoents/ContentSectionSettings"
import { PreviewSection } from "./compoents/PreviewSection"
import { ActionButtons } from "./compoents/button/ActionButtons"
import * as styles from "../../../styles/admin/admin-home-page.css"

function HomePageAdminContent() {
  const { data: homeSettings, isLoading, error } = useMainHomeSettings()
  const saveHomeSettingsMutation = useSaveAdminHomeSettings()
  const uploadImagesMutation = useUploadHeroImages()
  const deleteImageMutation = useDeleteHeroImage()

  const {
    isEditing,
    editData,
    isUploading,
    setIsUploading,
    currentImageIndex,
    setCurrentImageIndex,
    currentTitle,
    currentButtons,
    currentImages,
    handleEdit,
    handleCancel,
    updateEditData,
    updateTitleField,
    updateButtonField,
    updateContentSettings
  } = useAdminHomeState(homeSettings || undefined)

  // Debug logging - 데이터 구조 확인
  useEffect(() => {
    if (homeSettings) {
      console.log("🏠 홈 설정 데이터:", {
        homeSettings,
        homeSettingsKeys: Object.keys(homeSettings),
        homeSettingsId: homeSettings._id,
        heroTitle: homeSettings.heroTitle,
        heroTitleKeys: homeSettings.heroTitle
          ? Object.keys(homeSettings.heroTitle)
          : [],
        isLoading,
        error,
      })
    }
  }, [homeSettings, isLoading, error])

  useEffect(() => {
    if (editData && Object.keys(editData).length > 0) {
      console.log("✏️ 편집 데이터:", editData)
    }
  }, [editData])

  // 이미지 자동 전환 효과
  useEffect(() => {
    if (currentImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentImages.length, setCurrentImageIndex])

  const handleSave = async () => {
    console.log("=== 저장 디버깅 ===")
    console.log("저장 시도 - editData:", editData)

    if (editData) {
      try {
        // 이미지 데이터를 문자열 배열로 변환
        const processedData = {
          ...editData,
          heroImages: editData.heroImages
            ? editData.heroImages.map((img: any) =>
              typeof img === "string" ? img : img.url
            )
            : [],
        }

        console.log("처리된 저장 데이터:", processedData)
        console.log("처리된 heroImages:", processedData.heroImages)

        // 단일 홈 설정으로 저장 (upsert)
        await saveHomeSettingsMutation.mutateAsync(processedData)

        handleCancel() // 편집 모드 종료
        alert("홈 페이지 설정이 성공적으로 업데이트되었습니다!")
      } catch (error) {
        alert("업데이트 중 오류가 발생했습니다.")
        console.error("Save error:", error)
      }
    }
  }

  const handleImageUpload = useCallback(async (files: FileList) => {
    setIsUploading(true)
    try {
      const fileArray = Array.from(files)
      const result = await uploadImagesMutation.mutateAsync(fileArray)

      if (result?.images && Array.isArray(result.images)) {
        const existingImages = editData.heroImages || homeSettings?.heroImages || []
        const newImages = result.images.map((img: any) => ({
          url: img.url,
          name: img.name || img.key || "Uploaded Image",
          key: img.key || "",
          alt: img.alt || "",
        }))

        const updatedImages = [...existingImages, ...newImages]
        updateEditData({ heroImages: updatedImages })

        alert(`${result.images.length}개의 이미지가 성공적으로 업로드되었습니다.`)
      } else {
        alert("이미지 업로드에 실패했습니다. 응답 형식이 올바르지 않습니다.")
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error)
      alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setIsUploading(false)
    }
  }, [editData.heroImages, homeSettings?.heroImages, updateEditData, uploadImagesMutation, setIsUploading])

  const handleImageDelete = useCallback(async (index: number) => {
    try {
      const imageToDelete = currentImages[index]
      const imageUrl = typeof imageToDelete === 'string' ? imageToDelete : imageToDelete?.url
      
      if (imageUrl) {
        // API 호출로 백엔드에서 이미지 삭제
        await deleteImageMutation.mutateAsync(imageUrl)
        
        // 프론트엔드 상태에서도 이미지 제거
        const updatedImages = currentImages.filter((_, i) => i !== index)
        updateEditData({ heroImages: updatedImages })
        
        alert('이미지가 성공적으로 삭제되었습니다.')
      }
    } catch (error) {
      console.error('이미지 삭제 실패:', error)
      alert('이미지 삭제 중 오류가 발생했습니다.')
    }
  }, [currentImages, updateEditData, deleteImageMutation])

  const handleInputChange = (field: string, value: any) => {
    if (field.startsWith("heroTitle.")) {
      const heroField = field.replace("heroTitle.", "")
      updateTitleField(heroField as keyof HomeSettings['heroTitle'], value)
    } else if (field.startsWith("heroButtons.")) {
      const buttonField = field.replace("heroButtons.", "")
      updateButtonField(buttonField as keyof HomeSettings['heroButtons'], value)
    } else {
      updateEditData({ [field]: value })
    }
  }


  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>홈 화면 관리</h1>
          <p className={styles.subtitle}>
            오류가 발생했습니다: {String(error)}
          </p>
        </div>
      </div>
    )
  }

  if (!homeSettings) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>홈 화면 관리</h1>
          <p className={styles.subtitle}>
            홈 설정을 불러오는 중입니다...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>서비스 홈 페이지 관리</h1>
        <ActionButtons
          isEditing={isEditing}
          isLoading={saveHomeSettingsMutation.isPending}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>페이지 설정</h2>
        <div className={styles.field}>
          <label className={styles.label}>활성화 상태</label>
          {isEditing ? (
            <div className={styles.toggleContainer}>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  className={styles.toggleInput}
                  checked={editData.isActive !== false}
                  onChange={(e) => handleInputChange("isActive", e.target.checked)}
                />
                <span className={`${styles.slider} ${editData.isActive !== false ? styles.toggleActive : ''}`}></span>
              </label>
              <span className={styles.toggleLabel}>
                {editData.isActive !== false ? "활성화" : "비활성화"}
              </span>
            </div>
          ) : (
            <div className={styles.value}>
              <span className={`${styles.statusBadge} ${homeSettings.isActive ? styles.statusActive : styles.statusInactive}`}>
                {homeSettings.isActive ? "활성화" : "비활성화"}
              </span>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>정렬 순서</label>
          {isEditing ? (
            <input
              type="number"
              className={styles.input}
              value={editData.sortOrder || 0}
              onChange={(e) => handleInputChange("sortOrder", parseInt(e.target.value) || 0)}
              placeholder="정렬 순서를 입력하세요"
              min="0"
            />
          ) : (
            <div className={styles.value}>
              {homeSettings.sortOrder || 0}
            </div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>히어로 타이틀</h2>
        <HeroTitleSection
          currentTitle={currentTitle}
          isEditing={isEditing}
          onUpdateTitle={updateTitleField}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>히어로 버튼</h2>
        <HeroButtonSection
          currentButtons={currentButtons}
          isEditing={isEditing}
          onUpdateButton={updateButtonField}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>히어로 이미지</h2>
        <ImageUploadSection
          currentImages={currentImages}
          isEditing={isEditing}
          isUploading={isUploading}
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>컨텐츠 섹션 설정</h2>
        <ContentSectionSettings
          contentSettings={editData.contentSettings || homeSettings?.contentSettings}
          isEditing={isEditing}
          onUpdateContentSettings={updateContentSettings}
        />
      </div>

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