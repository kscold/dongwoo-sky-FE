"use client"

import React, { useState } from "react"
import Link from "next/link"

import Pagination from "../ui/Pagination"
import PageSkeleton from "../ui/PageSkeleton"
import ContentCard from "./ContentCard"
import { ContentListConfig, ContentItem } from "../../types/content"

interface ContentListPageProps<T extends ContentItem> {
  config: ContentListConfig
  type: "customer-review" | "work-showcase" | "notice"
  data: T[] | undefined
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  isLoading: boolean
  error: Error | null
  className?: string
}

const ContentListPage = <T extends ContentItem>({
  config,
  type,
  data,
  totalPages,
  currentPage,
  onPageChange,
  isLoading,
  error,
  className = "",
}: ContentListPageProps<T>) => {
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isLoading) {
    return <PageSkeleton variant={config.skeletonVariant} />
  }

  if (error) {
    return (
      <div className={`content-list-container ${className}`}>
        <div className="error-state">⚠️ {config.errorMessage}</div>
      </div>
    )
  }

  const items = data || []

  return (
    <div className={`content-list-container ${className}`}>
      {/* 헤더 */}
      <div className="content-list-header">
        <h1 className="content-list-title">{config.pageTitle}</h1>
        <p className="content-list-subtitle">{config.pageSubtitle}</p>
        <Link href={config.backUrl} className="content-list-back-button">
          ← {config.backButtonText}
        </Link>
      </div>

      {/* 컨텐츠 목록 */}
      {items.length > 0 ? (
        <>
          <div className="content-list-grid">
            {items.map((item) => (
              <ContentCard key={item._id} item={item} type={type} />
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <div className="content-list-empty-state">
          <h3 className="content-list-empty-state-title">
            {config.emptyStateTitle}
          </h3>
          <p className="content-list-empty-state-text">
            {config.emptyStateText}
          </p>
        </div>
      )}
    </div>
  )
}

export default ContentListPage
