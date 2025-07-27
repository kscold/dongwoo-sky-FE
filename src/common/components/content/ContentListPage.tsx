"use client"

import React, { useState } from "react"
import Link from "next/link"

import Pagination from "../ui/Pagination"
import PageSkeleton from "../ui/PageSkeleton"
import ContentCard from "./ContentCard"
import { ContentListConfig, ContentItem } from "../../types/content"
import {
  contentListContainer,
  contentListHeader,
  contentListTitle,
  contentListSubtitle,
  contentListBackButton,
  contentListGrid,
  contentListEmptyState,
  contentListEmptyStateTitle,
  contentListEmptyStateText,
  errorState,
} from "../../../styles/content/content-list.css"

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
      <div className={`${contentListContainer} ${className}`}>
        <div className={errorState}>⚠️ {config.errorMessage}</div>
      </div>
    )
  }

  const items = data || []

  return (
    <div className={`${contentListContainer} ${className}`}>
      {/* 헤더 */}
      <div className={contentListHeader}>
        <h1 className={contentListTitle}>{config.pageTitle}</h1>
        <p className={contentListSubtitle}>{config.pageSubtitle}</p>
        <Link href={config.backUrl} className={contentListBackButton}>
          ← {config.backButtonText}
        </Link>
      </div>

      {/* 컨텐츠 목록 */}
      {items.length > 0 ? (
        <>
          <div className={contentListGrid}>
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
        <div className={contentListEmptyState}>
          <h3 className={contentListEmptyStateTitle}>
            {config.emptyStateTitle}
          </h3>
          <p className={contentListEmptyStateText}>
            {config.emptyStateText}
          </p>
        </div>
      )}
    </div>
  )
}

export default ContentListPage
