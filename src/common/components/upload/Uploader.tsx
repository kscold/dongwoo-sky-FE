"use client"

import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import * as styles from "../../../styles/components/uploader.css"

interface UploaderProps {
  onFilesChange: (files: any[]) => void
  value?: string[] | { url: string; alt?: string }[] | File[]
  accept?: Record<string, string[]>
  maxFiles?: number
  disabled?: boolean
  uploadType: "new" | "existing"
}

export const Uploader: React.FC<UploaderProps> = ({
  onFilesChange,
  value = [],
  accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
  },
  maxFiles = 10,
  disabled = false,
  uploadType,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const currentFiles = Array.isArray(value) ? value : [];
      const newFiles = [...currentFiles, ...acceptedFiles];
      onFilesChange(newFiles);
    },
    [onFilesChange, value]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    disabled,
    multiple: maxFiles > 1,
  })

  const removeFile = (index: number) => {
    const currentFiles = Array.isArray(value) ? value : []
    const newFiles = currentFiles.filter((_, i) => i !== index)
    onFilesChange(newFiles)
  }

  const getImageUrl = (item: any): string => {
    if (item instanceof File) {
      return URL.createObjectURL(item)
    }
    return typeof item === "string" ? item : item?.url || ""
  }

  const getFileName = (item: any): string => {
    if (item instanceof File) {
      return item.name
    }
    if (typeof item === "string") {
      return item.split("/").pop() || "이미지"
    }
    return item?.alt || item?.url?.split("/").pop() || "이미지"
  }

  const isNewFile = (item: any): boolean => {
    return item instanceof File
  }

  const dropzoneClass = `${styles.dropzone} ${isDragActive ? styles.dragActive : ""
    } ${disabled ? styles.disabled : ""}`

  return (
    <div className={styles.uploaderContainer}>
      <div {...getRootProps({ className: dropzoneClass })}>
        <input {...getInputProps()} />
        <div className={styles.dropzoneContent}>
          <div className={styles.uploadIcon}>
            {isDragActive ? "🎯" : "📸"}
          </div>

          <div className={styles.uploadText}>
            {isDragActive ? (
              <div className={styles.dragText}>
                ✨ 여기에 놓아주세요!
              </div>
            ) : (
              <>
                <div className={styles.primaryText}>
                  {uploadType === "new" ? "새로운 이미지 업로드" : "이미지 업로드"}
                </div>
                <div className={styles.secondaryText}>
                  이미지를 드래그하여 놓거나 아래 버튼을 클릭하세요
                  <br />
                  <span style={{ fontSize: "12px", color: "#9CA3AF" }}>
                    {accept["image/*"]?.join(", ")} 파일 지원 • 최대 {maxFiles}개 파일
                  </span>
                </div>
              </>
            )}
          </div>

          {!isDragActive && (
            <button
              type="button"
              className={styles.browseButton}
              disabled={disabled}
              onClick={(e) => e.stopPropagation()}
            >
              파일 선택하기
            </button>
          )}
        </div>
      </div>

      {value && value.length > 0 && (
        <div className={styles.previewSection}>
          <h4 className={styles.previewTitle}>
            업로드된 이미지 ({value.length}개)
          </h4>
          <div className={styles.previewContainer}>
            {value.map((item, index) => (
              <div key={index} className={styles.previewItem}>
                <div className={styles.imageContainer}>
                  <img
                    src={getImageUrl(item)}
                    alt={getFileName(item)}
                    className={styles.previewImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling?.setAttribute(
                        "style",
                        "display: flex; align-items: center; justify-content: center; height: 100%; color: #9CA3AF; font-size: 14px;"
                      )
                    }}
                  />
                  <div style={{ display: "none" }}>
                    🖼️ 이미지 로드 실패
                  </div>
                  <button
                    type="button"
                    className={styles.removeButton}
                    onClick={() => removeFile(index)}
                    disabled={disabled}
                    title="이미지 제거"
                  >
                    ✕
                  </button>
                </div>
                <div className={styles.fileInfo}>
                  <div className={styles.fileName} title={getFileName(item)}>
                    {getFileName(item)}
                  </div>
                  <div className={styles.fileStatus}>
                    {isNewFile(item) ? "🆕 새 파일" : "💾 기존 파일"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 