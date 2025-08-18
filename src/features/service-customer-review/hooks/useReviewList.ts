import { useState, useEffect } from "react"
import { useCustomerReviews } from "../../../common/hooks/useCustomerReview"
import { CustomerReviewProps } from "../../../common/interfaces/content/content.interface"
import { getContentConfig } from "../../../common/configs/content/content.config"

export const useReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("customer-review")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  const {
    data: customerReviewsData,
    isLoading,
    error,
  } = useCustomerReviews(currentPage, limit)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Transform the data to match our interface
  const transformedItems: CustomerReviewProps[] = (
    customerReviewsData?.data || []
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
    rating: item.rating,
    customerName: item.customerName,
    customerCompany: item.customerCompany,
    serviceType: item.serviceType,
    projectLocation: item.projectLocation,
    helpfulCount: item.helpfulCount,
  }))

  return {
    items: transformedItems,
    isLoading,
    error: error ? String(error) : null,
    currentPage,
    totalPages: customerReviewsData?.totalPages || 1,
    onPageChange: setCurrentPage,
  }
}