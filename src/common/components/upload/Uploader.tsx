"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";

import * as styles from "../../../shared/styles/uploader.css";
// import { getFileIcon } from "../../../utils/fileUtils"; // 현재 사용하지 않음

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
    if (typeof item === "string") {
      return item;
    }
    return item?.url || "";
  };

  const getFileName = (item: any): string => {
    if (item instanceof File) {
      return item.name;
    }
    if (typeof item === "string") {
      // URL에서 파일명 추출
      const urlParts = item.split("/");
      const fileName = urlParts[urlParts.length - 1];
      return fileName || "CDN 이미지";
    }
    if (item?.alt) {
      return item.alt;
    }
    if (item?.url) {
      const urlParts = item.url.split("/");
      const fileName = urlParts[urlParts.length - 1];
      return fileName || "CDN 이미지";
    }
    return "이미지";
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
          {(() => {
            console.log('Uploader value prop:', value);
            return value;
          })()
            ?.filter((item) => {
              // File 객체거나 URL이 있는 객체를 허용
              const isFile = item instanceof File;
              const isString = typeof item === "string" && item.trim() !== "";
              const isObjectWithUrl = typeof item === "object" && item !== null && (item as any).url && (item as any).url.trim() !== "";
              
              console.log('Filtering item:', {
                item,
                type: typeof item,
                isFile,
                isString,
                isObjectWithUrl,
                url: (item as any)?.url
              });
              
              return isFile || isString || isObjectWithUrl;
            })
            .map((item, index) => {
              const itemUrl = getImageUrl(item);
              const fileName = getFileName(item);
              
              // URL 유효성 검사 - CloudFront URL 특별 처리
              const isValidUrl = itemUrl && (
                itemUrl.startsWith('http://') || 
                itemUrl.startsWith('https://') || 
                itemUrl.startsWith('blob:') ||
                itemUrl.startsWith('data:')
              );
              
              // CDN URL인지 확인
              const cdnDomain = process.env.NEXT_PUBLIC_CDN_URL?.replace('https://', '') || 'd1h7waosxik1t4.cloudfront.net'
              const isCdnUrl = itemUrl && (
                itemUrl.includes(cdnDomain) ||
                itemUrl.includes('s3.') && itemUrl.includes('amazonaws.com')
              );
              
              // 이미지 여부 판단 - CDN URL이나 blob URL은 무조건 이미지로 처리
              const isImage = true; // 업로드 컴포넌트에서는 모든 파일을 이미지로 간주
              
              console.log('Uploader item debug:', {
                itemUrl,
                fileName,
                isImage,
                isValidUrl,
                isCdnUrl,
                item,
                renderCondition: isImage && isValidUrl
              });
              
              return (
                <div key={index} className={styles.imageItem}>
                  {isImage && isValidUrl ? (
                    <>
                      <Image
                        src={itemUrl}
                        alt={fileName}
                        width={200}
                        height={150}
                        className={styles.previewImage}
                        unoptimized={isCdnUrl || itemUrl.startsWith('blob:')}
                        priority={true}
                        onError={(e) => {
                          console.error(`이미지 로드 실패: ${itemUrl}`);
                          const target = e.currentTarget;
                          target.style.display = "none";
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = "flex";
                          }
                        }}
                        onLoad={() => {
                          console.log(`이미지 로드 성공: ${itemUrl}`);
                        }}
                      />
                      <div style={{ 
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "150px",
                        color: "#9CA3AF",
                        fontSize: "14px",
                        backgroundColor: "#f3f4f6",
                        border: "1px dashed #d1d5db",
                        borderRadius: "8px"
                      }}>
                        🖼️ 이미지 로드 실패
                        <br />
                        <small style={{ fontSize: "12px", marginTop: "4px" }}>
                          {itemUrl}
                        </small>
                      </div>
                    </>
                  ) : (
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "150px",
                      backgroundColor: "#f3f4f6",
                      border: "1px dashed #d1d5db",
                      borderRadius: "8px",
                      fontSize: "48px"
                    }}>
                      🖼️
                      <small style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "8px", textAlign: "center", padding: "0 8px" }}>
                        {!itemUrl ? "URL 없음" : !isValidUrl ? "URL 오류" : "이미지 로딩 실패"}
                      </small>
                      {itemUrl && (
                        <small style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "4px", textAlign: "center", padding: "0 8px", wordBreak: "break-all" }}>
                          {itemUrl.length > 60 ? `${itemUrl.substring(0, 60)}...` : itemUrl}
                        </small>
                      )}
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
                      {isNewFile(item) ? "🆕 새 파일" : isCdnUrl ? "☁️ CDN 이미지" : "💾 기존 파일"} • {isImage ? "이미지" : "문서"}
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
