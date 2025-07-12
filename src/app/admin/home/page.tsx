"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"

import {
  useMainHomeSettings,
  useUpdateAdminHomeSettings,
  useUploadHeroImages,
  useEnsureMainHomeExists,
  useCreateAdminHomeSettings,
} from "../../../common/hooks/useHome"
import { useAdminStats } from "../../../common/hooks/useAdminStats"
import { HomeSettings } from "../../../common/types/home"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import { StatsCard } from "../../../common/components/admin/StatsCard"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import * as styles from "../../../styles/admin/admin-home-page.css"

function HomePageAdminContent() {
  const { data: homeSettings, isLoading, error } = useMainHomeSettings()
  const { data: statsData, isLoading: statsLoading } = useAdminStats()
  const updateMutation = useUpdateAdminHomeSettings()
  const uploadImagesMutation = useUploadHeroImages()
  const ensureMainHomeMutation = useEnsureMainHomeExists()
  const createMutation = useCreateAdminHomeSettings()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<Partial<HomeSettings>>({})
  const [isUploading, setIsUploading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Debug logging - 데이터 구조 확인
  useEffect(() => {
    if (homeSettings) {
      console.log("🏠 홈 설정 데이터:", {
        homeSettings,
        homeSettingsKeys: Object.keys(homeSettings),
        homeSettingsId: homeSettings._id,
        heroTitle: homeSettings.heroTitle,
        heroTitleKeys: homeSettings.heroTitle ? Object.keys(homeSettings.heroTitle) : [],
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

  // 현재 표시할 데이터 계산
  const currentTitle = isEditing ? editData.heroTitle || homeSettings?.heroTitle || {} : homeSettings?.heroTitle || {}
  const currentButtons = isEditing ? editData.heroButtons || homeSettings?.heroButtons || {} : homeSettings?.heroButtons || {}
  const currentImages = isEditing ? editData.heroImages || homeSettings?.heroImages || [] : homeSettings?.heroImages || []

  // 이미지 자동 전환 효과
  useEffect(() => {
    if (currentImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentImages.length])

  const handleEdit = () => {
    if (homeSettings) {
      setEditData({
        pageId: homeSettings.pageId,
        heroTitle: homeSettings.heroTitle ? { ...homeSettings.heroTitle } : {
          preTitle: "",
          mainTitle: "",
          postTitle: ""
        },
        heroSubtitle: homeSettings.heroSubtitle,
        heroImages: homeSettings.heroImages ? [...homeSettings.heroImages] : [],
        heroButtons: homeSettings.heroButtons ? { ...homeSettings.heroButtons } : {
          primaryButtonText: "",
          primaryButtonLink: "",
          secondaryButtonText: "",
          secondaryButtonLink: ""
        },
        heroSection: {
          companyName: homeSettings.heroSection?.companyName || "어울림 스카이",
          highlightText: homeSettings.heroSection?.highlightText || "어울림 스카이",
          title: homeSettings.heroSection?.title || "",
          subtitle: homeSettings.heroSection?.subtitle || "",
          description: homeSettings.heroSection?.description || "",
          ctaButtons: homeSettings.heroSection?.ctaButtons || [],
          backgroundImageUrls: homeSettings.heroSection?.backgroundImageUrls || [],
          isActive: homeSettings.heroSection?.isActive || true,
        },
        isActive: homeSettings.isActive,
        sortOrder: homeSettings.sortOrder,
      })
      setIsEditing(true)
    }
  }

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
              typeof img === 'string' ? img : img.url
            )
            : []
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

        setIsEditing(false)
        alert("홈 페이지 설정이 성공적으로 업데이트되었습니다!")
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
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    try {
      console.log(`[handleImageUpload] 업로드할 파일 개수: ${files.length}`)

      const fileArray = Array.from(files)
      const result = await uploadImagesMutation.mutateAsync(fileArray)

      console.log(`[handleImageUpload] 업로드 결과:`, result)

      if (result?.images && Array.isArray(result.images)) {
        // 기존 이미지와 새로 업로드된 이미지를 합쳐서 editData에 설정
        const existingImages = editData.heroImages || homeSettings?.heroImages || []
        const newImages = result.images.map((img: any) => ({
          url: img.url,
          name: img.name || img.key || 'Uploaded Image',
          key: img.key || '',
          alt: img.alt || '',
        }))

        const updatedImages = [...existingImages, ...newImages]

        setEditData(prev => ({
          ...prev,
          heroImages: updatedImages
        }))

        console.log(`[handleImageUpload] editData 업데이트됨:`, updatedImages)

        // 파일 입력 초기화
        event.target.value = ''

        alert(`${result.images.length}개의 이미지가 성공적으로 업로드되었습니다.`)
      } else {
        console.error(`[handleImageUpload] 예상치 못한 응답 형식:`, result)
        alert('이미지 업로드에 실패했습니다. 응답 형식이 올바르지 않습니다.')
      }
    } catch (error) {
      console.error(`[handleImageUpload] 이미지 업로드 실패:`, error)
      alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    if (field.startsWith("heroTitle.")) {
      const heroField = field.replace("heroTitle.", "")
      setEditData((prev) => ({
        ...prev,
        heroTitle: {
          preTitle: "",
          mainTitle: "",
          postTitle: "",
          ...prev.heroTitle,
          [heroField]: value,
        },
      }))
    } else if (field.startsWith("heroButtons.")) {
      const buttonField = field.replace("heroButtons.", "")
      setEditData((prev) => ({
        ...prev,
        heroButtons: {
          primaryButtonText: "",
          primaryButtonLink: "",
          secondaryButtonText: "",
          secondaryButtonLink: "",
          ...prev.heroButtons,
          [buttonField]: value,
        },
      }))
    } else if (field.startsWith("heroSection.")) {
      const sectionField = field.replace("heroSection.", "")
      setEditData((prev) => ({
        ...prev,
        heroSection: {
          companyName: "어울림 스카이",
          highlightText: "어울림 스카이",
          title: "",
          subtitle: "",
          description: "",
          ctaButtons: [],
          backgroundImageUrls: [],
          isActive: true,
          ...prev.heroSection,
          [sectionField]: value,
        },
      }))
    } else {
      setEditData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleCreateMainHome = async () => {
    try {
      await ensureMainHomeMutation.mutateAsync();
      alert("메인 홈 페이지가 생성되었습니다!");
    } catch (error) {
      alert("메인 홈 페이지 생성 중 오류가 발생했습니다.");
      console.error("Create main home error:", error);
    }
  };

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
    );
  }

  if (!homeSettings) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>홈 화면 관리</h1>
          <p className={styles.subtitle}>홈 설정이 없습니다. 새로운 설정을 생성해주세요.</p>
          <div style={{ marginTop: "20px" }}>
            <button
              className={styles.editButton}
              onClick={handleCreateMainHome}
              disabled={ensureMainHomeMutation.isPending}
            >
              {ensureMainHomeMutation.isPending ? "⏳ 생성 중..." : "🏠 메인 홈 페이지 생성"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* 통계 카드 섹션 */}
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ 
          fontSize: "24px", 
          fontWeight: "700", 
          color: "#111827", 
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          📊 관리 현황
        </h2>
        
        {statsLoading ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: "12px",
                padding: "24px",
                border: "1px solid #e5e7eb",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6b7280"
              }}>
                ⏳ 로딩 중...
              </div>
            ))}
          </div>
        ) : statsData ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}>
            <StatsCard
              title="공개 공지사항"
              value={statsData.notices.published}
              subtitle="현재 공개된 공지사항"
              icon="📢"
              color="blue"
            />
            <StatsCard
              title="등록된 장비"
              value={statsData.equipment.active}
              subtitle="활성 상태 장비 수"
              icon="🏗️"
              color="green"
            />
            <StatsCard
              title="작업자 자랑거리"
              value={statsData.workShowcases.active}
              subtitle="공개된 자랑거리 수"
              icon="🎯"
              color="purple"
            />
            <StatsCard
              title="고객 리뷰"
              value={statsData.customerReviews.active}
              subtitle="공개된 고객 리뷰 수"
              icon="⭐"
              color="orange"
            />
          </div>
        ) : (
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #e5e7eb",
            textAlign: "center",
            color: "#6b7280"
          }}>
            ⚠️ 통계 데이터를 불러올 수 없습니다.
          </div>
        )}
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>서비스 홈 페이지 관리</h1>
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
              value={editData.pageId || ""}
              onChange={(e) => handleInputChange("pageId", e.target.value)}
              placeholder="페이지 ID를 입력하세요"
            />
          ) : (
            <div className={styles.value}>{homeSettings.pageId || "제목 없음"}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>페이지 설명</label>
          {isEditing ? (
            <textarea
              className={styles.textarea}
              value={editData.heroSubtitle || ""}
              onChange={(e) => handleInputChange("heroSubtitle", e.target.value)}
              placeholder="페이지 설명을 입력하세요"
              rows={3}
            />
          ) : (
            <div className={styles.value}>{homeSettings.heroSubtitle || "설명 없음"}</div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>히어로 섹션</h2>

        <div className={styles.field}>
          <label className={styles.label}>회사명</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.companyName || ""}
              onChange={(e) =>
                handleInputChange("heroSection.companyName", e.target.value)
              }
              placeholder="회사명을 입력하세요"
            />
          ) : (
            <div className={styles.value}>
              {homeSettings.heroSection?.companyName || "회사명 없음"}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>강조 텍스트</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroSection?.highlightText || ""}
              onChange={(e) =>
                handleInputChange("heroSection.highlightText", e.target.value)
              }
              placeholder="강조할 텍스트를 입력하세요"
            />
          ) : (
            <div className={styles.value}>
              {homeSettings.heroSection?.highlightText || "강조 텍스트 없음"}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>메인 타이틀</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroTitle?.mainTitle || ""}
              onChange={(e) =>
                handleInputChange("heroTitle.mainTitle", e.target.value)
              }
              placeholder="메인 타이틀을 입력하세요"
            />
          ) : (
            <div className={styles.value} dangerouslySetInnerHTML={{
              __html: homeSettings.heroTitle?.mainTitle || "타이틀 없음"
            }}>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>서브 타이틀</label>
          {isEditing ? (
            <input
              type="text"
              className={styles.input}
              value={editData.heroTitle?.preTitle || ""}
              onChange={(e) =>
                handleInputChange("heroTitle.preTitle", e.target.value)
              }
              placeholder="서브 타이틀을 입력하세요"
            />
          ) : (
            <div className={styles.value} dangerouslySetInnerHTML={{
              __html: homeSettings.heroTitle?.preTitle || "서브타이틀 없음"
            }}>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>설명</label>
          {isEditing ? (
            <textarea
              className={styles.textarea}
              value={editData.heroTitle?.postTitle || ""}
              onChange={(e) =>
                handleInputChange("heroTitle.postTitle", e.target.value)
              }
              placeholder="히어로 섹션 설명을 입력하세요"
              rows={3}
            />
          ) : (
            <div className={styles.value} dangerouslySetInnerHTML={{
              __html: homeSettings.heroTitle?.postTitle || "설명 없음"
            }}>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>배경 이미지</label>
          {isEditing ? (
            <div>
              <div style={{ marginBottom: "16px" }}>
                {(editData.heroImages || homeSettings.heroImages || []).length > 0 ? (
                  <div style={{
                    display: "flex",
                    gap: "16px",
                    overflowX: "auto",
                    paddingBottom: "16px",
                    marginBottom: "16px"
                  }}>
                    {(editData.heroImages || homeSettings.heroImages || []).map((image: string | { url: string; name?: string }, index: number) => {
                      const imageUrl = typeof image === 'string' ? image : image.url;
                      const imageName = typeof image === 'string' ? `배경 이미지 ${index + 1}` : (image.name || `배경 이미지 ${index + 1}`);

                      return (
                        <div key={index} style={{
                          minWidth: "200px",
                          border: "1px solid #ddd",
                          borderRadius: "12px",
                          overflow: "hidden",
                          backgroundColor: "#f9f9f9",
                          position: "relative",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          transition: "transform 0.2s ease"
                        }}>
                          <div style={{
                            position: "relative",
                            width: "100%",
                            height: "120px",
                            overflow: "hidden"
                          }}>
                            <Image
                              src={imageUrl}
                              alt={imageName}
                              fill
                              style={{
                                objectFit: "cover"
                              }}
                              onError={(e) => {
                                const target = e.currentTarget
                                target.style.display = 'none'
                                const parent = target.parentElement
                                if (parent) {
                                  parent.innerHTML = `
                                    <div style="
                                      width: 100%;
                                      height: 100%;
                                      display: flex;
                                      align-items: center;
                                      justify-content: center;
                                      flex-direction: column;
                                      background-color: #f0f0f0;
                                      color: #666;
                                      font-size: 12px;
                                    ">
                                      <div style="margin-bottom: 8px;">🖼️</div>
                                      <div>이미지 로드 실패</div>
                                    </div>
                                  `
                                }
                              }}
                            />
                            <div style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              backgroundColor: "rgba(0,0,0,0.7)",
                              color: "white",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              fontSize: "11px",
                              fontWeight: "bold"
                            }}>
                              {index + 1}
                            </div>
                          </div>
                          <div style={{
                            padding: "12px",
                            borderTop: "1px solid #eee"
                          }}>
                            <div style={{
                              fontSize: "12px",
                              color: "#333",
                              fontWeight: "500",
                              marginBottom: "4px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap"
                            }}>
                              {imageName}
                            </div>
                            <div style={{
                              fontSize: "10px",
                              color: "#888",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap"
                            }}>
                              {imageUrl}
                            </div>
                            <a
                              href={imageUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-block",
                                marginTop: "8px",
                                padding: "4px 8px",
                                backgroundColor: "#0066cc",
                                color: "white",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "10px",
                                fontWeight: "500"
                              }}
                            >
                              원본 보기
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{
                    padding: "60px 40px",
                    textAlign: "center",
                    color: "#666",
                    border: "2px dashed #ddd",
                    borderRadius: "12px",
                    marginBottom: "16px",
                    backgroundColor: "#fafafa"
                  }}>
                    <div style={{ fontSize: "32px", marginBottom: "12px" }}>🖼️</div>
                    <div style={{ fontSize: "16px", fontWeight: "500", marginBottom: "8px" }}>
                      배경 이미지가 없습니다
                    </div>
                    <div style={{ fontSize: "14px", color: "#888" }}>
                      아래 버튼을 클릭하여 이미지를 업로드하세요
                    </div>
                  </div>
                )}
              </div>
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  style={{
                    padding: "12px 20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "8px"
                  }}
                >
                  {isUploading ? "📤 업로드 중..." : "📁 이미지 파일 추가"}
                </button>
                <small
                  style={{
                    display: "block",
                    marginTop: "12px",
                    color: "#666",
                    fontSize: "13px",
                    lineHeight: "1.4"
                  }}
                >
                  JPG, PNG, GIF 형식 지원 (최대 10MB, 다중 선택 가능)<br />
                  권장 크기: 1920x1080px 이상의 고해상도 이미지
                </small>
              </div>
            </div>
          ) : (
            <div className={styles.value}>
              {homeSettings.heroImages && homeSettings.heroImages.length > 0 ? (
                <div style={{
                  display: "flex",
                  gap: "16px",
                  overflowX: "auto",
                  paddingBottom: "16px"
                }}>
                  {homeSettings.heroImages.map((image: string | { url: string; name?: string }, index: number) => {
                    const imageUrl = typeof image === 'string' ? image : image.url;
                    const imageName = typeof image === 'string' ? `배경 이미지 ${index + 1}` : (image.name || `배경 이미지 ${index + 1}`);

                    return (
                      <div key={index} style={{
                        minWidth: "200px",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}>
                        <div style={{
                          position: "relative",
                          width: "100%",
                          height: "120px",
                          overflow: "hidden"
                        }}>
                          <Image
                            src={imageUrl}
                            alt={imageName}
                            fill
                            style={{
                              objectFit: "cover"
                            }}
                            onError={(e) => {
                              const target = e.currentTarget
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = `
                                  <div style="
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    flex-direction: column;
                                    background-color: #f0f0f0;
                                    color: #666;
                                    font-size: 12px;
                                  ">
                                    <div style="margin-bottom: 8px;">🖼️</div>
                                    <div>이미지 로드 실패</div>
                                  </div>
                                `
                              }
                            }}
                          />
                          <div style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            fontWeight: "bold"
                          }}>
                            {index + 1}
                          </div>
                        </div>
                        <div style={{
                          padding: "12px",
                          borderTop: "1px solid #eee"
                        }}>
                          <div style={{
                            fontSize: "12px",
                            color: "#333",
                            fontWeight: "500",
                            marginBottom: "4px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}>
                            {imageName}
                          </div>
                          <div style={{
                            fontSize: "10px",
                            color: "#888",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}>
                            {imageUrl}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{
                  padding: "40px",
                  textAlign: "center",
                  color: "#666",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  backgroundColor: "#fafafa"
                }}>
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>🖼️</div>
                  <div>배경 이미지가 설정되지 않았습니다</div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>CTA 버튼</label>
          {isEditing ? (
            <div>
              <div style={{ marginBottom: "8px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
                <label style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}>주요 버튼</label>
                <input
                  type="text"
                  className={styles.input}
                  value={editData.heroButtons?.primaryButtonText || ""}
                  onChange={(e) => handleInputChange("heroButtons.primaryButtonText", e.target.value)}
                  placeholder="주요 버튼 텍스트"
                  style={{ marginBottom: "4px" }}
                />
                <input
                  type="text"
                  className={styles.input}
                  value={editData.heroButtons?.primaryButtonLink || ""}
                  onChange={(e) => handleInputChange("heroButtons.primaryButtonLink", e.target.value)}
                  placeholder="주요 버튼 링크"
                />
              </div>
              <div style={{ marginBottom: "8px", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
                <label style={{ display: "block", marginBottom: "4px", fontWeight: "500" }}>보조 버튼</label>
                <input
                  type="text"
                  className={styles.input}
                  value={editData.heroButtons?.secondaryButtonText || ""}
                  onChange={(e) => handleInputChange("heroButtons.secondaryButtonText", e.target.value)}
                  placeholder="보조 버튼 텍스트"
                  style={{ marginBottom: "4px" }}
                />
                <input
                  type="text"
                  className={styles.input}
                  value={editData.heroButtons?.secondaryButtonLink || ""}
                  onChange={(e) => handleInputChange("heroButtons.secondaryButtonLink", e.target.value)}
                  placeholder="보조 버튼 링크"
                />
              </div>
            </div>
          ) : (
            <div className={styles.value}>
              {homeSettings.heroButtons ? (
                <div>
                  <div style={{ marginBottom: "8px" }}>
                    <strong>주요 버튼:</strong> {homeSettings.heroButtons.primaryButtonText} → {homeSettings.heroButtons.primaryButtonLink}
                  </div>
                  <div>
                    <strong>보조 버튼:</strong> {homeSettings.heroButtons.secondaryButtonText} → {homeSettings.heroButtons.secondaryButtonLink}
                  </div>
                </div>
              ) : (
                <span>등록된 CTA 버튼이 없습니다.</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 미리보기 섹션 */}
      <div className={styles.previewSection}>
        <h3 className={styles.previewTitle}>📱 서비스 화면 미리보기</h3>
        <div className={styles.previewContainer}>
          <div
            className={styles.heroPreview}
            style={{
              backgroundImage: (editData.heroImages || homeSettings.heroImages || []).length > 0
                ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${typeof (editData.heroImages || homeSettings.heroImages)[currentImageIndex] === 'string'
                  ? (editData.heroImages || homeSettings.heroImages)[currentImageIndex]
                  : (editData.heroImages || homeSettings.heroImages)[currentImageIndex]?.url
                })`
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
          >
            <div className={styles.heroContent}>
              <h1
                className={styles.heroPreviewTitle}
                dangerouslySetInnerHTML={{
                  __html: (editData.heroTitle || homeSettings.heroTitle)?.preTitle || "하늘 위 모든 솔루션,<br/>어울림 스카이와 함께합니다."
                }}
              />
              <p className={styles.heroPreviewSubtitle}>
                {((editData.heroTitle || homeSettings.heroTitle)?.mainTitle || "안전하고 신뢰할 수 있는 중장비 렌탈 서비스")}
              </p>
              <p className={styles.heroPreviewDescription}>
                {((editData.heroTitle || homeSettings.heroTitle)?.postTitle || "최신 스카이 장비로 어떤 높이의 작업이든 신속하고 안전하게! 지금 바로 전문가와 상담하세요.")}
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.primaryPreviewButton}>
                  {((editData.heroButtons || homeSettings.heroButtons)?.primaryButtonText || "🏗️ 무료 견적 받기")}
                </button>
                <button className={styles.secondaryPreviewButton}>
                  {((editData.heroButtons || homeSettings.heroButtons)?.secondaryButtonText || "📋 서비스 안내")}
                </button>
              </div>
            </div>

            {((editData.heroImages || homeSettings.heroImages) && (editData.heroImages || homeSettings.heroImages).length > 1) && (
              <div className={styles.imageIndicators}>
                {(editData.heroImages || homeSettings.heroImages).map((_: string | { url: string; name?: string }, index: number) => (
                  <div
                    key={index}
                    className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.previewNote}>
          <div style={{ fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#333" }}>
            💡 실제 서비스 작동 방식
          </div>
          <div style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>
            • 배경 이미지는 5초마다 자동으로 전환됩니다<br />
            • 하단의 점들은 현재 표시 중인 이미지를 나타냅니다<br />
            • 버튼 클릭 시 설정된 링크로 이동합니다<br />
            • 모든 텍스트와 버튼은 실시간으로 반영됩니다
          </div>
        </div>
      </div>
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
