"use client"

import React, { useRef, useEffect, useCallback } from "react"
import {
  useMainHomeSettings,
  useUpdateAdminHomeSettings,
  useUploadHeroImages,
  useEnsureMainHomeExists,
  useCreateAdminHomeSettings,
} from "../../../common/hooks/useHome"
import { useAdminStats } from "../../../common/hooks/useAdminStats"
import { useAdminHomeState } from "../../../common/hooks/useAdminHomeState"
import { HomeSettings } from "../../../types/home"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { StatsSection } from "../../../common/components/admin/home/StatsSection"
import { HeroTitleSection } from "../../../common/components/admin/home/HeroTitleSection"
import { HeroButtonSection } from "../../../common/components/admin/home/HeroButtonSection"
import { ImageUploadSection } from "../../../common/components/admin/home/ImageUploadSection"
import { HeroSectionSettings } from "../../../common/components/admin/home/HeroSectionSettings"
import { PreviewSection } from "../../../common/components/admin/home/PreviewSection"
import { ActionButtons } from "../../../common/components/admin/home/ActionButtons"
import "../../../styles/admin/admin-home-page.css"

function HomePageAdminContent() {
  const { data: homeSettings, isLoading, error } = useMainHomeSettings()
  const { data: statsData, isLoading: statsLoading } = useAdminStats()
  const updateMutation = useUpdateAdminHomeSettings()
  const uploadImagesMutation = useUploadHeroImages()
  const ensureMainHomeMutation = useEnsureMainHomeExists()
  const createMutation = useCreateAdminHomeSettings()
  const fileInputRef = useRef<HTMLInputElement>(null)

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
    updateHeroSection
  } = useAdminHomeState(homeSettings)

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
    console.log("저장 시도 - homeSettings:", homeSettings)
    console.log("저장 시도 - editData:", editData)
    console.log("저장 시도 - editData.heroImages:", editData.heroImages)
    console.log("저장 시도 - homeSettings._id:", homeSettings?._id)

    if (homeSettings && editData) {
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

        // _id가 없으면 생성, 있으면 업데이트
        if (homeSettings._id) {
          console.log("업데이트 모드 - ID:", homeSettings._id)
          await updateMutation.mutateAsync({
            id: homeSettings._id,
            settings: processedData,
          })
        } else {
          console.log("생성 모드 - 새 데이터 생성")
          await createMutation.mutateAsync(processedData)
        }

        alert("홈 페이지 설정이 성공적으로 업데이트되었습니다!")
      } catch (error) {
        alert("업데이트 중 오류가 발생했습니다.")
        console.error("Update error:", error)
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
  }, [editData.heroImages, homeSettings?.heroImages, updateEditData, uploadImagesMutation])

  const handleImageDelete = useCallback((index: number) => {
    const updatedImages = currentImages.filter((_, i) => i !== index)
    updateEditData({ heroImages: updatedImages })
  }, [currentImages, updateEditData])

  const handleInputChange = (field: string, value: any) => {
    if (field.startsWith("heroTitle.")) {
      const heroField = field.replace("heroTitle.", "")
      updateTitleField(heroField as keyof HomeSettings['heroTitle'], value)
    } else if (field.startsWith("heroButtons.")) {
      const buttonField = field.replace("heroButtons.", "")
      updateButtonField(buttonField as keyof HomeSettings['heroButtons'], value)
    } else if (field.startsWith("heroSection.")) {
      const sectionField = field.replace("heroSection.", "")
      updateHeroSection({ [sectionField]: value })
    } else {
      updateEditData({ [field]: value })
    }
  }

  const handleCreateMainHome = async () => {
    try {
      await ensureMainHomeMutation.mutateAsync()
      alert("메인 홈 페이지가 생성되었습니다!")
    } catch (error) {
      alert("메인 홈 페이지 생성 중 오류가 발생했습니다.")
      console.error("Create main home error:", error)
    }
  }

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (error) {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">홈 화면 관리</h1>
          <p className="subtitle">
            오류가 발생했습니다: {String(error)}
          </p>
        </div>
      </div>
    )
  }

  if (!homeSettings) {
    return (
      <div className="container">
        <div className="header">
          <h1 className="title">홈 화면 관리</h1>
          <p className="subtitle">
            홈 설정이 없습니다. 새로운 설정을 생성해주세요.
          </p>
          <div style={{ marginTop: "20px" }}>
            <button
              className="editButton"
              onClick={handleCreateMainHome}
              disabled={ensureMainHomeMutation.isPending}
            >
              {ensureMainHomeMutation.isPending
                ? "⏳ 생성 중..."
                : "🏠 메인 홈 페이지 생성"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <StatsSection statsData={statsData} isLoading={statsLoading} />

      <div className="header">
        <h1 className="title">서비스 홈 페이지 관리</h1>
        <ActionButtons
          isEditing={isEditing}
          isLoading={updateMutation.isPending}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>

      <div className="section">
        <h2 className="sectionTitle">기본 정보</h2>
        <div className="field">
          <label className="label">페이지 제목</label>
          {isEditing ? (
            <input
              type="text"
              className="input"
              value={editData.pageId || ""}
              onChange={(e) => handleInputChange("pageId", e.target.value)}
              placeholder="페이지 ID를 입력하세요"
            />
          ) : (
            <div className="value">
              {homeSettings.pageId || "제목 없음"}
            </div>
          )}
        </div>

        <div className="field">
          <label className="label">페이지 설명</label>
          {isEditing ? (
            <textarea
              className="textarea"
              value={editData.heroSubtitle || ""}
              onChange={(e) =>
                handleInputChange("heroSubtitle", e.target.value)
              }
              placeholder="페이지 설명을 입력하세요"
              rows={3}
            />
          ) : (
            <div className="value">
              {homeSettings.heroSubtitle || "설명 없음"}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="sectionTitle">히어로 타이틀</h2>
        <HeroTitleSection
          currentTitle={currentTitle}
          isEditing={isEditing}
          onUpdateTitle={updateTitleField}
        />
      </div>

      <div className="section">
        <h2 className="sectionTitle">히어로 버튼</h2>
        <HeroButtonSection
          currentButtons={currentButtons}
          isEditing={isEditing}
          onUpdateButton={updateButtonField}
        />
      </div>

      <div className="section">
        <h2 className="sectionTitle">히어로 이미지</h2>
        <ImageUploadSection
          currentImages={currentImages}
          isEditing={isEditing}
          isUploading={isUploading}
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />
      </div>

      <div className="section">
        <h2 className="sectionTitle">히어로 섹션 설정</h2>
        <HeroSectionSettings
          heroSection={editData.heroSection || homeSettings?.heroSection}
          isEditing={isEditing}
          onUpdateHeroSection={updateHeroSection}
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