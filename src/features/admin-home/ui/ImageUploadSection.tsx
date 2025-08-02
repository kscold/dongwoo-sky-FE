import React, { useRef, useCallback } from "react"
import Image from "next/image"

import { HomeSettings } from "../../../../types/home"

import * as styles from "./image-upload.css"

interface ImageUploadSectionProps {
  currentImages: HomeSettings["heroImages"]
  isEditing: boolean
  isUploading: boolean
  onImageUpload: (files: FileList) => void
  onImageDelete: (index: number) => void
}

export const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  currentImages,
  isEditing,
  isUploading,
  onImageUpload,
  onImageDelete,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
        onImageUpload(files)
      }
    },
    [onImageUpload]
  )

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleDelete = useCallback(
    (index: number) => {
      onImageDelete(index)
    },
    [onImageDelete]
  )

  return (
    <div className={styles.formSection}>
      <label className={styles.label}>Hero Images</label>
      <div className={styles.imageUploadContainer}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          multiple
          className={styles.hiddenInput}
        />

        {isEditing && (
          <button
            type="button"
            onClick={handleUploadClick}
            className={styles.uploadButton}
            disabled={isUploading}
          >
            {isUploading ? "업로드 중..." : "이미지 업로드"}
          </button>
        )}

        <div className={styles.imageGrid}>
          {currentImages?.filter(image => image && (typeof image === 'string' || image.url)).map((image, index) => {
            const imageUrl = typeof image === 'string' ? image : image.url
            return (
              <div key={index} className={styles.imageItem}>
                <Image
                  src={imageUrl || "/placeholder-image.jpg"}
                  alt={`Hero image ${index + 1}`}
                  width={200}
                  height={150}
                  className={styles.previewImage}
                />
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className={styles.deleteButton}
                  >
                    삭제
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
