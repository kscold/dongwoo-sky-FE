"use client"

import React, { useState } from "react"
import { useCustomerReviews } from "../../../common/hooks/useCustomerReview"
import { CustomerReviewProps } from "../../../common/interfaces/content/content.interface"
import ContentList from "../../../common/components/content/ContentList"
import { getContentConfig } from "../../../common/configs/content/content.config"
import * as styles from "../../../styles/content/content-page.css"

const CustomerReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig("customer-review")
  const limit = isMobile ? config.mobileItemsPerPage : config.itemsPerPage

  const {
    data: customerReviewsData,
    isLoading,
    error,
  } = useCustomerReviews(currentPage, limit)

  React.useEffect(() => {
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
    // Ensure all required properties are present
    _id: item._id,
    title: item.title,
    content: item.content,
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

  return (
    <div className={styles.pageWrapper}>
      <ContentList
        items={transformedItems}
        type="customer-review"
        isLoading={isLoading}
        error={error ? String(error) : null}
        currentPage={currentPage}
        totalPages={customerReviewsData?.totalPages || 1}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default CustomerReviewsPage
