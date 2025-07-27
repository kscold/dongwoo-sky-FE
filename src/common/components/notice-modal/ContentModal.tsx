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
          {((notice.imageUrls && notice.imageUrls.length > 0) ||
            (notice.attachments &&
              notice.attachments.some((att) => isImageFile(att.url)))) && (
            <div className={styles.imageContainer}>
              {/* 기존 imageUrls 처리 */}
              {notice.imageUrls?.map((imageUrl, index) => (
                <div key={`img-${index}`} className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={`공지사항 이미지 ${index + 1}`}
                    width={600}
                    height={400}
                    className={styles.modalImage}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}

              {/* attachments에서 이미지 파일들 처리 */}
              {notice.attachments
                ?.filter((att) => isImageFile(att.url))
                .map((attachment, index) => (
                  <div key={`att-${index}`} className={styles.imageWrapper}>
                    <Image
                      src={attachment.url}
                      alt={attachment.name || `첨부 이미지 ${index + 1}`}
                      width={600}
                      height={400}
                      className={styles.modalImage}
                      style={{ objectFit: "contain" }}
                      onError={(e) => {
                        console.error("이미지 로드 실패:", attachment.url)
                        e.currentTarget.style.display = "none"
                      }}
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

          {/* 비이미지 첨부파일들 표시 */}
          {notice.attachments &&
            notice.attachments.filter((att) => !isImageFile(att.url)).length >
              0 && (
              <div className={styles.attachmentContainer}>
                <h4 className={styles.attachmentTitle}>첨부파일</h4>
                <ul className={styles.attachmentList}>
                  {notice.attachments
                    .filter((att) => !isImageFile(att.url))
                    .map((attachment, index) => (
                      <li
                        key={`file-${index}`}
                        className={styles.attachmentItem}
                      >
                        <a
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.attachmentLink}
                          download={attachment.name}
                        >
                          <span className={styles.attachmentIcon}>
                            {getFileIcon(attachment.url)}
                          </span>
                          <span className={styles.attachmentName}>
                            {attachment.name || "첨부파일"}
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )}
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
