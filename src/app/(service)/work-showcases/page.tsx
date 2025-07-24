"use client"

import React, { useState } from "react"
import { useWorkShowcases } from "../../../common/hooks/useWorkShowcase"
import { WorkShowcaseProps } from "../../../common/interfaces/content/content.interface"
import ContentList from "../../../common/components/content/ContentList"
import { getContentConfig } from "../../../common/configs/content/content.config"
import * as styles from "../../../styles/content/content-page.css"

const WorkShowcasesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("work-showcase")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  const {
    data: workShowcasesData,
    isLoading,
    error,
  } = useWorkShowcases(currentPage, limit)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Transform the data to match our interface
  const transformedItems: WorkShowcaseProps[] = (
    workShowcasesData?.data || []
  ).map((item) => ({
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
    category: item.category,
    projectDuration: item.projectDuration,
    clientName: item.clientName || item.authorName, // Map authorName to clientName if needed
    description: item.description,
    tags: item.tags,
    beforeImageUrls: item.beforeImageUrls,
    afterImageUrls: item.afterImageUrls,
  }))

  return (
    <div className={styles.pageWrapper}>
      <ContentList
        items={transformedItems}
        type="work-showcase"
        isLoading={isLoading}
        error={error ? String(error) : null}
        currentPage={currentPage}
        totalPages={workShowcasesData?.totalPages || 1}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default WorkShowcasesPage
