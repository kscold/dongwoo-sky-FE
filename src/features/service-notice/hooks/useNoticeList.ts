import { useState, useEffect } from "react"
import { useNotices } from "../../../common/hooks/useNotices"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import { getContentConfig } from "../../../common/configs/content/content.config"

export const useNoticeList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("notice")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  const {
    data: noticesData,
    isLoading,
    error,
  } = useNotices(currentPage, limit)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Transform the data to match our interface
  const transformedItems: NoticeProps[] = (
    noticesData?.data || []
  ).map((item) => ({
    ...item,
    _id: item._id,
    title: item.title,
    content: item.content,
    summary: item.summary,
    imageUrls: item.imageUrls,
    viewCount: item.viewCount,
    createdAt: item.createdAt,
    publishedAt: item.publishedAt,
    isActive: item.isActive,
    author: item.author,
    priority: item.priority,
    pinned: item.pinned,
    category: item.category,
    attachments: item.attachments,
  }))

  return {
    items: transformedItems,
    isLoading,
    error: error ? String(error) : null,
    currentPage,
    totalPages: noticesData?.totalPages || 1,
    onPageChange: setCurrentPage,
  }
}