import React, { useRef, useState, useCallback } from "react"
import { CloudArrowUpIcon, TrashIcon, PhotoIcon } from "@heroicons/react/24/outline"
import * as styles from "./Upload.css"

export interface UploadedFile {
  url: string
  alt?: string
  name?: string
  size?: number
}

export interface UploadProps {
  label?: string
  error?: string
  helperText?: string
  variant?: "default" | "admin" | "image"
  maxFiles?: number
  maxSize?: number // bytes
  accept?: string
  value?: UploadedFile[]
  onChange?: (files: UploadedFile[]) => void
  onUpload?: (files: FileList) => Promise<void>
  onDelete?: (index: number) => Promise<void>
  loading?: boolean
  disabled?: boolean
  showPreview?: boolean
}

export const Upload: React.FC<UploadProps> = ({
  label,
  error,
  helperText,
  variant = "default",
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = "image/*",
  value = [],
  onChange,
  onUpload,
  onDelete,
  loading = false,
  disabled = false,
  showPreview = true,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleFiles = useCallback(async (files: FileList) => {
    if (!files || files.length === 0) return

    // 파일 크기 검증
    const oversizedFiles = Array.from(files).filter(file => file.size > maxSize)
    if (oversizedFiles.length > 0) {
      const sizeInMB = (maxSize / (1024 * 1024)).toFixed(1)
      alert(`파일 크기는 ${sizeInMB}MB를 초과할 수 없습니다.`)
      return
    }

    // 파일 개수 검증
    if (value.length + files.length > maxFiles) {
      alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`)
      return
    }

    try {
      if (onUpload) {
        await onUpload(files)
      } else {
        // 기본 처리: URL.createObjectURL 사용
        const newFiles: UploadedFile[] = Array.from(files).map(file => ({
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
        }))
        onChange?.([...value, ...newFiles])
      }
    } catch (error) {
      console.error("파일 업로드 실패:", error)
      alert("파일 업로드에 실패했습니다.")
    }
  }, [value, maxFiles, maxSize, onUpload, onChange])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (disabled || loading) return
    
    const files = e.dataTransfer.files
    handleFiles(files)
  }, [handleFiles, disabled, loading])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      handleFiles(files)
    }
  }, [handleFiles])

  const handleDelete = useCallback(async (index: number) => {
    try {
      if (onDelete) {
        await onDelete(index)
      } else {
        const newFiles = value.filter((_, i) => i !== index)
        onChange?.(newFiles)
      }
    } catch (error) {
      console.error("파일 삭제 실패:", error)
      alert("파일 삭제에 실패했습니다.")
    }
  }, [value, onChange, onDelete])

  const openFileDialog = () => {
    if (!disabled && !loading) {
      fileInputRef.current?.click()
    }
  }

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      {/* 업로드 영역 */}
      <div
        className={`
          ${styles.uploadArea}
          ${styles.variants[variant]}
          ${dragActive ? styles.dragActive : ""}
          ${disabled ? styles.disabled : ""}
          ${error ? styles.error : ""}
        `}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (!disabled && !loading) setDragActive(true)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setDragActive(false)
        }}
        onClick={openFileDialog}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={maxFiles > 1}
          accept={accept}
          onChange={handleChange}
          className={styles.hiddenInput}
          disabled={disabled}
        />

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <span>업로드 중...</span>
          </div>
        ) : (
          <div className={styles.uploadContent}>
            <CloudArrowUpIcon className={styles.uploadIcon} />
            <div className={styles.uploadText}>
              <span className={styles.uploadPrimary}>
                클릭하거나 파일을 드래그하여 업로드
              </span>
              <span className={styles.uploadSecondary}>
                {accept.includes("image") ? "이미지 파일" : "파일"} 
                ({(maxSize / (1024 * 1024)).toFixed(1)}MB 이하, 최대 {maxFiles}개)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 파일 미리보기 */}
      {showPreview && value.length > 0 && (
        <div className={styles.previewContainer}>
          {value.map((file, index) => (
            <div key={index} className={styles.previewItem}>
              {variant === "image" || accept.includes("image") ? (
                <div className={styles.imagePreview}>
                  <img 
                    src={file.url} 
                    alt={file.alt || file.name || "업로드된 이미지"} 
                    className={styles.previewImage}
                  />
                </div>
              ) : (
                <div className={styles.filePreview}>
                  <PhotoIcon className={styles.fileIcon} />
                  <span className={styles.fileName}>{file.name}</span>
                </div>
              )}
              
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(index)
                }}
                className={styles.deleteButton}
                disabled={disabled || loading}
              >
                <TrashIcon />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
}