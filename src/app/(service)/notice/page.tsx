"use client"

import React, { useState } from "react"
import { useNotices } from "../../../common/hooks/useNotices"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import ContentList from "../../../common/components/content/ContentList"
import { getContentConfig } from "../../../common/configs/content/content.config"
import * as styles from "../../../styles/content/content-page.css"

export default function NoticePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("notice")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { data: noticesData, isLoading, error } = useNotices(currentPage, limit)

  // 공지사항 목록 필터링 (isModal이 false인 것만) 및 변환
  const notices =
    noticesData?.data?.filter((notice: any) => notice.isModal !== true) || []
  const totalPages = noticesData?.total
    ? Math.ceil(noticesData.total / limit)
    : 1

  // Transform the data to match our interface
  const transformedItems: NoticeProps[] = notices.map((item: any) => ({
    ...item,
    // Ensure all required properties are present
    _id: item._id,
    title: item.title,
    content: item.content,
    imageUrls: item.imageUrls,
    viewCount: item.viewCount,
    createdAt: item.createdAt,
    publishedAt: item.publishedAt,
    isActive: item.isActive,
    summary: item.summary,
    author: item.author,
    priority: item.priority || "medium",
    pinned: item.pinned || false,
    category: item.category,
  }))

  return (
    <div className={styles.pageWrapper}>
      <ContentList
        items={transformedItems}
        type="notice"
        isLoading={isLoading}
        error={error ? String(error) : null}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
