"use client"

import React, { useState, useRef } from "react"
import {
  useLandingPageData,
  useUpdateLandingPage,
  useUploadHeroImage,
} from "@/hooks/useLandingPage"
import type { LandingPageData } from "@/types/landing-page"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import * as styles from "../../../styles/admin/landing-page-admin.css"

function LandingPageAdminContent() {
  const { data, isLoading, error } = useLandingPageData()
  const updateMutation = useUpdateLandingPage()
  const uploadImageMutation = useUploadHeroImage()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<Partial<LandingPageData>>({})
  const [isUploading, setIsUploading] = useState(false)

  // Cast data to proper type
  const landingPageData = data as LandingPageData | undefined

  // Debug logging
  console.log("Landing page admin data:", {
    data,
    landingPageData,
    isLoading,
    error,
  })

  const handleEdit = () => {
    if (landingPageData) {
      setEditData({
        title: landingPageData.title,
        heroSection: { ...landingPageData.heroSection },
      })
      setIsEditing(true)
    }
  }

  const handleSave = async () => {
    if (landingPageData && editData) {
      try {
        // Check if we have an existing ID (either _id or id)
        const existingId =
          (landingPageData as { _id?: string; id?: string })._id ||
          landingPageData.id

        if (existingId) {
          // Update existing
          await updateMutation.mutateAsync({
            id: existingId,
            data: editData,
          })
        } else {
          // Create new if no ID exists (should not happen with updated backend)
          console.warn(
            "No ID found, this shouldn't happen with the updated backend"
          )
          return
        }

        setIsEditing(false)
        alert("랜딩 페이지가 성공적으로 업데이트되었습니다!")
      } catch (error) {
        alert("업데이트 중 오류가 발생했습니다.")
        console.error("Update error:", error)
      }
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData({})
  }

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      const result = await uploadImageMutation.mutateAsync(file)

      // 업로드된 이미지 URL을 editData에 반영
      handleInputChange("heroSection.backgroundImageUrl", result.imageUrl)

      alert("🎉 이미지가 성공적으로 업로드되었습니다!")
    } catch (error) {
      console.error("Image upload failed:", error)
      alert("❌ 이미지 업로드에 실패했습니다. 다시 시도해주세요.")
    } finally {
      setIsUploading(false)
      // 파일 입력 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("heroSection.")) {
      const heroField = field.replace("heroSection.", "")
      setEditData((prev) => ({
        ...prev,
        heroSection: {
          ...prev.heroSection!,
          [heroField]: value,
        },
      }))
    } else {
      setEditData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>
          ⏳ 랜딩 페이지 데이터를 불러오는 중입니다...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          ⚠️ 랜딩 페이지 데이터를 불러올 수 없습니다.
          <br />
          <small>서버 연결을 확인해주세요.</small>
        </div>
      </div>
    )
  }

  if (!landingPageData) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyMessage}>
          📝 등록된 랜딩 페이지 데이터가 없습니다.
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>랜딩 페이지 관리</h1>
        {!isEditing ? (
          <button className={styles.editButton} onClick={handleEdit}>
            ✏️ 편집
          </button>
        ) : (
          <div className={styles.buttonGroup}>
            <button
              className={styles.saveButton}
              onClick={handleSave}
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? "⏳ 저장 중..." : "💾 저장"}
            </button>
            <button
              className={styles.cancelButton}
              onClick={handleCancel}
              disabled={updateMutation.isPending}
            >
              ❌ 취소
            </button>
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>기본 정보</h2>
        <div className={styles.field}>
          <label className={styles.label}>페이지 제목</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.title || ""}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="페이지 제목을 입력하세요"
            />
          ) : (
            <div className={styles.value}>{landingPageData.title}</div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>히어로 섹션</h2>

        <div className={styles.field}>
          <label className={styles.label}>메인 타이틀</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.title || ""}
              onChange={(e) =>
                handleInputChange("heroSection.title", e.target.value)
              }
              placeholder="메인 타이틀 (어울림 스카이)"
            />
          ) : (
            <div className={styles.value}>
              {landingPageData.heroSection.title}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>서브 타이틀</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.subtitle || ""}
              onChange={(e) =>
                handleInputChange("heroSection.subtitle", e.target.value)
              }
              placeholder="서브 타이틀을 입력하세요"
            />
          ) : (
            <div className={styles.value}>
              {landingPageData.heroSection.subtitle}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>설명</label>
          {isEditing ? (
            <textarea
              className={styles.textarea}
              value={editData.heroSection?.description || ""}
              onChange={(e) =>
                handleInputChange("heroSection.description", e.target.value)
              }
              placeholder="히어로 섹션 설명을 입력하세요"
              rows={3}
            />
          ) : (
            <div className={styles.value}>
              {landingPageData.heroSection.description}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>배경 이미지 URL</label>
          {isEditing ? (
            <div>
              <input
                type="url"
                className={styles.input}
                value={editData.heroSection?.backgroundImageUrl || ""}
                onChange={(e) =>
                  handleInputChange(
                    "heroSection.backgroundImageUrl",
                    e.target.value
                  )
                }
                placeholder="https://example.com/image.jpg"
              />
              <div style={{ marginTop: "8px" }}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? "📤 업로드 중..." : "📁 이미지 파일 선택"}
                </button>
                <small
                  style={{ display: "block", marginTop: "4px", color: "#666" }}
                >
                  JPG, PNG, GIF 형식 지원 (최대 10MB)
                </small>
              </div>
            </div>
          ) : (
            <div className={styles.value}>
              <a
                href={landingPageData.heroSection.backgroundImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {landingPageData.heroSection.backgroundImageUrl}
              </a>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>CTA 버튼 텍스트</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.ctaText || ""}
              onChange={(e) =>
                handleInputChange("heroSection.ctaText", e.target.value)
              }
              placeholder="버튼 텍스트 (예: 무료 견적 받기)"
            />
          ) : (
            <div className={styles.value}>
              {landingPageData.heroSection.ctaText}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>CTA 버튼 링크</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.ctaLink || ""}
              onChange={(e) =>
                handleInputChange("heroSection.ctaLink", e.target.value)
              }
              placeholder="링크 경로 (예: /contact)"
            />
          ) : (
            <div className={styles.value}>
              {landingPageData.heroSection.ctaLink}
            </div>
          )}
        </div>
      </div>

      {/* 미리보기 섹션 */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>미리보기</h2>
        <div className={styles.preview}>
          <div
            className={styles.previewHero}
            style={{
              backgroundImage: `url('${
                isEditing
                  ? editData.heroSection?.backgroundImageUrl ||
                    landingPageData.heroSection.backgroundImageUrl
                  : landingPageData.heroSection.backgroundImageUrl
              }')`,
            }}
          >
            <div className={styles.previewOverlay}>
              <h1 className={styles.previewTitle}>
                {isEditing
                  ? editData.heroSection?.title ||
                    landingPageData.heroSection.title
                  : landingPageData.heroSection.title}
              </h1>
              <p className={styles.previewSubtitle}>
                {isEditing
                  ? editData.heroSection?.subtitle ||
                    landingPageData.heroSection.subtitle
                  : landingPageData.heroSection.subtitle}
              </p>
              <p className={styles.previewDescription}>
                {isEditing
                  ? editData.heroSection?.description ||
                    landingPageData.heroSection.description
                  : landingPageData.heroSection.description}
              </p>
              <button className={styles.previewButton}>
                {isEditing
                  ? editData.heroSection?.ctaText ||
                    landingPageData.heroSection.ctaText
                  : landingPageData.heroSection.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPageAdmin() {
  return (
    <ProtectedRoute>
      <LandingPageAdminContent />
    </ProtectedRoute>
  )
}
