"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import PageSkeleton from "../ui/PageSkeleton"
import { ContentDetailConfig, ContentItem } from "../../types/content"
import { formatDate } from "../../utils/content"

interface ContentDetailPageProps<T extends ContentItem> {
  config: ContentDetailConfig
  item: T | undefined
  isLoading: boolean
  error: Error | null
  onAction?: () => void
  actionLoading?: boolean
  className?: string
}

const ContentDetailPage = <T extends ContentItem>({
  config,
  item,
  isLoading,
  error,
  onAction,
  actionLoading,
  className = "",
}: ContentDetailPageProps<T>) => {
  if (isLoading) {
    return <PageSkeleton variant={config.skeletonVariant} />
  }

  if (error || !item) {
    return (
      <div className={`content-detail-container ${className}`}>
        <div className="content-detail-error-state">
          ⚠️ {config.errorMessage}
          <p className="content-detail-error-description">
            {config.errorDescription}
          </p>
        </div>
        <Link href={config.backUrl} className="content-detail-back-button">
          ← {config.backButtonText}
        </Link>
      </div>
    )
  }

  return (
    <div className={`content-detail-container ${className}`}>
      {/* 헤더 */}
      <div className="content-detail-header">
        <Link href={config.backUrl} className="content-detail-back-button">
          ← {config.backButtonText}
        </Link>
        <h1 className="content-detail-title">{item.title}</h1>
        
        {/* 메타 정보 */}
        <div className="content-detail-meta">
          {config.headerMetaFields && (
            <div className="content-detail-header-meta">
              {config.headerMetaFields.map((field) => {
                const value = (item as any)[field.key]
                if (!value) return null
                
                return (
                  <span key={field.key} className={`content-detail-meta-item ${field.className || ''}`}>
                    {field.icon} {value}
                    {field.suffix && <span className="content-detail-meta-suffix">({field.suffix})</span>}
                  </span>
                )
              })}
            </div>
          )}
          
          {config.detailMetaFields && (
            <div className="content-detail-details">
              {config.detailMetaFields.map((field) => {
                const value = (item as any)[field.key]
                if (!value) return null
                
                return (
                  <span key={field.key} className="content-detail-detail">
                    {field.icon} {value}
                  </span>
                )
              })}
            </div>
          )}
          
          {config.statFields && (
            <div className="content-detail-stats">
              {config.statFields.map((field) => {
                const value = (item as any)[field.key]
                if (value === undefined || value === null) return null
                
                return (
                  <span key={field.key} className="content-detail-stat">
                    {field.icon} {field.label} {value}
                  </span>
                )
              })}
              <span className="content-detail-date">
                {formatDate(item.publishedAt || item.createdAt)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 이미지 갤러리 */}
      {item.imageUrls && item.imageUrls.length > 0 && (
        <div className="content-detail-image-gallery">
          <div className="content-detail-main-image">
            <Image
              src={item.imageUrls[0]}
              alt={item.title}
              className="content-detail-image"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          {item.imageUrls.length > 1 && (
            <div className="content-detail-thumbnails">
              {item.imageUrls.slice(1).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${item.title} ${index + 2}`}
                  className="content-detail-thumbnail"
                  width={150}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 내용 */}
      <div className="content-detail-content">
        <div
          className="content-detail-content-body"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>

      {/* 액션 버튼 */}
      {config.actionButton && onAction && (
        <div className="content-detail-actions">
          <button
            className="content-detail-action-button"
            onClick={onAction}
            disabled={actionLoading}
          >
            {config.actionButton.icon} {config.actionButton.label} ({(item as any)[config.actionButton.countKey] || 0})
          </button>
        </div>
      )}
    </div>
  )
}

export default ContentDetailPage