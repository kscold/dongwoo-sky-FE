import React from "react"
import Image from "next/image"

import { NoticeAttachment } from "../../types/api/attachment.types"
import { processAttachment, formatFileSize, getFileIcon, downloadFile } from "../../utils/fileUtils"

interface AttachmentDisplayProps {
  attachments: NoticeAttachment[] | any[]
  variant?: 'admin' | 'service'
  showImages?: boolean
  showDownload?: boolean
}

export const AttachmentDisplay: React.FC<AttachmentDisplayProps> = ({
  attachments,
  variant = 'service',
  showImages = true,
  showDownload = true
}) => {
  if (!attachments || attachments.length === 0) {
    return null
  }

  const processedAttachments = attachments.map(processAttachment)
  const images = processedAttachments.filter(att => att.isImage)
  const files = processedAttachments.filter(att => !att.isImage)

  const handleDownload = (attachment: NoticeAttachment) => {
    downloadFile(attachment.url, attachment.displayName)
  }

  const baseStyles = {
    container: "mt-4",
    section: "mb-4",
    sectionTitle: "text-sm font-semibold text-gray-700 mb-2",
    imageGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
    imageContainer: "relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow",
    fileList: "space-y-2",
    fileItem: "flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
    fileInfo: "flex items-center space-x-3",
    fileIcon: "text-2xl",
    fileDetails: "flex-1",
    fileName: "text-sm font-medium text-gray-900 break-all",
    fileSize: "text-xs text-gray-500",
    downloadBtn: "px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
  }

  const adminStyles = {
    ...baseStyles,
    container: "mt-6 p-4 bg-white rounded-lg border",
    sectionTitle: "text-lg font-semibold text-gray-800 mb-3 border-b pb-2",
    imageGrid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
    fileItem: "flex items-center justify-between p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
  }

  const styles = variant === 'admin' ? adminStyles : baseStyles

  return (
    <div className={styles.container}>
      {/* 이미지 첨부파일 */}
      {showImages && images.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>📷 이미지 첨부파일</h4>
          <div className={styles.imageGrid}>
            {images.map((attachment, index) => (
              <div key={index} className={styles.imageContainer}>
                <Image
                  src={attachment.url}
                  alt={attachment.displayName}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
                  <p className="text-xs truncate">{attachment.displayName}</p>
                  {attachment.size && (
                    <p className="text-xs text-gray-300">{formatFileSize(attachment.size)}</p>
                  )}
                </div>
                {showDownload && (
                  <button
                    onClick={() => handleDownload(attachment)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                    title="다운로드"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 기타 첨부파일 */}
      {files.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>📎 첨부파일</h4>
          <div className={styles.fileList}>
            {files.map((attachment, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.fileInfo}>
                  <span className={styles.fileIcon}>
                    {getFileIcon(attachment.fileExtension)}
                  </span>
                  <div className={styles.fileDetails}>
                    <p className={styles.fileName}>{attachment.displayName}</p>
                    {attachment.size && (
                      <p className={styles.fileSize}>{formatFileSize(attachment.size)}</p>
                    )}
                  </div>
                </div>
                {showDownload && (
                  <button
                    onClick={() => handleDownload(attachment)}
                    className={styles.downloadBtn}
                  >
                    다운로드
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}