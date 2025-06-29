"use client"

import React, { useState } from "react"
import * as styles from "../../../styles/components/content-modal.css"

interface Attachment {
  name: string
  url: string
}

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  attachments?: Attachment[]
  badge?: string
  showTodayClose?: boolean
  onCloseToday?: () => void
  className?: string
}

export const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  attachments = [],
  badge,
  showTodayClose = false,
  onCloseToday,
  className = "",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  console.log("ContentModal - isOpen:", isOpen, "title:", title)

  if (!isOpen) return null

  // 이미지만 추출
  const imageAttachments = attachments.filter((a) => {
    const ext = a.name.split(".").pop()?.toLowerCase()
    return ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext || "")
  })

  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.modal} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className={styles.header}>
          {badge && <div className={styles.badge}>{badge}</div>}
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        {/* 메인 컨텐츠 */}
        <div className={styles.body}>
          {/* 이미지가 있으면 상단에 표시 */}
          {imageAttachments.length > 0 && !imageError && (
            <div className={styles.imageSection}>
              <img
                src={imageAttachments[0].url}
                alt={imageAttachments[0].name}
                className={styles.image}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{
                  opacity: imageLoaded ? 1 : 0.8,
                  transition: "opacity 0.3s ease",
                }}
              />
              {!imageLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#999",
                    fontSize: "14px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                  }}
                >
                  이미지 로딩 중...
                </div>
              )}
            </div>
          )}

          {/* 텍스트 내용 */}
          <div className={styles.content}>
            {content.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 푸터 */}
        <div className={styles.footer}>
          {showTodayClose && onCloseToday && (
            <button className={styles.todayBtn} onClick={onCloseToday}>
              오늘 하루 보지 않기
            </button>
          )}
          <button className={styles.confirmBtn} onClick={onClose}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}
