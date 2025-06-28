"use client"

import React from "react"
import * as styles from "@/styles/components/form-modal.css"

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  onSubmit: (e: React.FormEvent) => void
  children: React.ReactNode
  className?: string
}

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  children,
  className = "",
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.modalBody}>{children}</div>

          <div className={styles.modalFooter}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              취소
            </button>
            <button type="submit" className={styles.saveButton}>
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
