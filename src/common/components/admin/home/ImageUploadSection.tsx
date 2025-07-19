import React, { useRef, useCallback } from "react"
import Image from "next/image"

import { HomeSettings } from "../../../../types/home"

import "../../../../styles/admin/admin-home-page.css"

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
    <div className="formSection">
      <label className="label">Hero Images</label>
      <div className="imageUploadContainer">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          multiple
          className="hiddenInput"
        />

        {isEditing && (
          <button
            type="button"
            onClick={handleUploadClick}
            className="uploadButton"
            disabled={isUploading}
          >
            {isUploading ? "업로드 중..." : "이미지 업로드"}
          </button>
        )}

        <div className="imageGrid">
          {currentImages?.filter(image => image.url).map((image, index) => (
            <div key={index} className="imageItem">
              <Image
                src={image.url || "/placeholder-image.jpg"}
                alt={`Hero image ${index + 1}`}
                width={200}
                height={150}
                className="previewImage"
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="deleteButton"
                >
                  삭제
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
