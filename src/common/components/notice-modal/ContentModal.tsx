"use client"

import React from "react"
import Image from "next/image"

import { Notice } from "../../../types/notice"
import { isImageFile, getFileIcon } from "../../../utils/fileUtils"
import * as styles from "../../../styles/service/components/content-modal.css"

export interface ContentModalProps {
  notice: Notice
  onClose: () => void
  onCloseToday: () => void
}

export const ContentModal: React.FC<ContentModalProps> = ({
  notice,
  onClose,
  onCloseToday,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.badge}>📢 공지사항</span>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{notice.title}</h2>
          
          {/* 이미지 표시 영역 */}
          {notice.imageUrls && notice.imageUrls.length > 0 && (
            <div className={styles.imageContainer}>
              {notice.imageUrls.map((imageUrl, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={`공지사항 이미지 ${index + 1}`}
                    width={600}
                    height={400}
                    className={styles.modalImage}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          )}
          
          <div className={styles.contentText}>
            {notice.content.split("\\n").map((line, index) => (
              <p key={index} style={{ margin: "0 0 8px 0", padding: 0 }}>
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={onCloseToday} className={styles.todayBtn}>
            오늘 하루 보지 않기
          </button>
          <button onClick={onClose} className={styles.confirmBtn}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
