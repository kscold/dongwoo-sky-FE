import { useState, useEffect } from "react"
import { useWorkShowcases } from "../../../common/hooks/useWorkShowcase"
import { WorkShowcaseProps } from "../../../common/interfaces/content/content.interface"
import { getContentConfig } from "../../../common/configs/content/content.config"

export const useShowcaseList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("work-showcase")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  const {
    data: workShowcasesData,
    isLoading,
    error,
  } = useWorkShowcases(currentPage, limit)

  useEffect(() => {
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
    _id: item._id,
    title: item.title,
    content: item.content,
    imageUrls: item.imageUrls,
    viewCount: item.viewCount,
    likeCount: item.likeCount,
    createdAt: item.createdAt,
    publishedAt: item.publishedAt,
    isActive: item.isActive,
    category: item.category,
    projectDuration: item.projectDuration,
    clientName: item.authorName, // authorName을 clientName으로 매핑
    description: item.summary, // summary를 description으로 매핑
    authorName: item.authorName,
    authorRole: item.authorRole,
    projectLocation: item.projectLocation,
    equipmentUsed: item.equipmentUsed,
    summary: item.summary,
    tags: item.tags,
    beforeImageUrls: item.beforeImageUrls,
    afterImageUrls: item.afterImageUrls,
  }))

  return {
    items: transformedItems,
    isLoading,
    error: error ? String(error) : null,
    currentPage,
    totalPages: workShowcasesData?.totalPages || 1,
    onPageChange: setCurrentPage,
  }
}