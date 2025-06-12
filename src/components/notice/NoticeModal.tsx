"use client"

import React from "react"
import Image from "next/image"
import { useNotice } from "@/hooks/useNotice"
import * as styles from "@/styles/Notice.css"

export default function NoticeModal() {
  const {
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    loadingState,
  } = useNotice()

  if (!isModalOpen || !currentNotice || loadingState.isLoading) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={`${styles.modalContent} ${styles.responsiveModalContent}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderContent}>
            <div className={styles.modalBadge}>공지사항</div>
            <h2 className={styles.modalTitle}>{currentNotice.title}</h2>
          </div>
          <button
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.noticeContent}>{currentNotice.content}</div>

          {/* 첨부파일 이미지만 표시 */}
          {currentNotice.attachments &&
            currentNotice.attachments.length > 0 && (
              <div style={{ marginTop: "20px" }}>
                {currentNotice.attachments.map((attachment, index) => {
                  const fileExtension = attachment.name
                    .split(".")
                    .pop()
                    ?.toLowerCase()
                  const isImage = [
                    "jpg",
                    "jpeg",
                    "png",
                    "gif",
                    "webp",
                    "svg",
                  ].includes(fileExtension || "")

                  if (isImage) {
                    return (
                      <div key={index} style={{ marginBottom: "12px" }}>
                        <Image
                          src={attachment.url}
                          alt={attachment.name}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "12px",
                            border: "1px solid rgba(0, 0, 0, 0.06)",
                          }}
                          onError={(e) => {
                            console.log("이미지 로드 실패:", attachment.url)
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.todayCloseButton} onClick={closeTodayModal}>
            오늘 하루 보지 않기
          </button>
          <button className={styles.confirmButton} onClick={closeModal}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}
