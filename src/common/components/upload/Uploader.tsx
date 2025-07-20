"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";

import * as styles from "../../../styles/components/uploader.css";
import { isImageFile, getFileIcon } from "../../../utils/fileUtils";

interface UploaderProps {
  onFilesChange: (files: any[]) => void;
  value?: string[] | { url: string; alt?: string }[] | File[];
  accept?: Record<string, string[]>;
  maxFiles?: number;
  disabled?: boolean;
  uploadType: "new" | "existing";
  label?: string;
  isEditing?: boolean;
  isUploading?: boolean;
  onImageUpload?: (files: FileList) => void;
  onImageDelete?: (index: number) => void;
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
  label = "파일 업로드",
  isEditing = true,
  isUploading = false,
  onImageUpload,
  onImageDelete,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        if (onImageUpload) {
          // admin-home 방식: 실제 API 업로드
          onImageUpload(files);
        } else {
          // 기존 방식: 로컬 파일 처리
          const fileArray = Array.from(files);
          const currentFiles = Array.isArray(value) ? value : [];
          const newFiles = [...currentFiles, ...fileArray];
          onFilesChange(newFiles);
        }
      }
    },
    [onFilesChange, value, onImageUpload]
  );

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDelete = useCallback(
    (index: number) => {
      if (onImageDelete) {
        // admin-home 방식: 실제 API 삭제
        onImageDelete(index);
      } else {
        // 기존 방식: 로컬 파일 제거
        const currentFiles = Array.isArray(value) ? value : [];
        const newFiles = currentFiles.filter((_, i) => i !== index);
        onFilesChange(newFiles);
      }
    },
    [onFilesChange, value, onImageDelete]
  );

  const getImageUrl = (item: any): string => {
    if (item instanceof File) {
      return URL.createObjectURL(item);
    }
    return typeof item === "string" ? item : item?.url || "";
  };

  const getFileName = (item: any): string => {
    if (item instanceof File) {
      return item.name;
    }
    if (typeof item === "string") {
      return item.split("/").pop() || "이미지";
    }
    return item?.alt || item?.url?.split("/").pop() || "이미지";
  };

  const isNewFile = (item: any): boolean => {
    return item instanceof File;
  };

  return (
    <div className={styles.uploaderContainer}>
      <label className={styles.label}>{label}</label>

      <div className={styles.imageUploadContainer}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept={Object.keys(accept).join(",")}
          multiple={maxFiles > 1}
          className={styles.hiddenInput}
          disabled={disabled}
        />

        {isEditing && (
          <button
            type="button"
            onClick={handleUploadClick}
            className={styles.uploadButton}
            disabled={isUploading || disabled}
          >
            {isUploading ? "업로드 중..." : "파일 업로드"}
          </button>
        )}

        <div className={styles.imageGrid}>
          {value
            ?.filter(
              (item) =>
                item && (typeof item === "string" || (item as any).url)
            )
            .map((item, index) => {
              const itemUrl = getImageUrl(item);
              const fileName = getFileName(item);
              const isImage = isImageFile(fileName);
              
              return (
                <div key={index} className={styles.imageItem}>
                  {isImage ? (
                    <>
                      <Image
                        src={itemUrl || "/placeholder-image.jpg"}
                        alt={fileName}
                        width={200}
                        height={150}
                        className={styles.previewImage}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = "flex";
                          }
                        }}
                      />
                      <div style={{ 
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "150px",
                        color: "#9CA3AF",
                        fontSize: "14px",
                        backgroundColor: "#f3f4f6"
                      }}>
                        🖼️ 이미지 로드 실패
                      </div>
                    </>
                  ) : (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "150px",
                      backgroundColor: "#f3f4f6",
                      fontSize: "48px"
                    }}>
                      {getFileIcon(fileName)}
                    </div>
                  )}
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className={styles.deleteButton}
                      disabled={disabled}
                      title="파일 제거"
                    >
                      ✕
                    </button>
                  )}
                  <div className={styles.fileInfo}>
                    <div className={styles.fileName} title={fileName}>
                      {fileName}
                    </div>
                    <div className={styles.fileStatus}>
                      {isNewFile(item) ? "🆕 새 파일" : "💾 기존 파일"} • {isImage ? "이미지" : "문서"}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
