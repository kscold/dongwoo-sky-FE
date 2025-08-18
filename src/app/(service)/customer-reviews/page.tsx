"use client"

import React from "react"
import {
  ReviewList,
  ReviewPagination,
  useReviewList
} from "../../../features/service-customer-review"
import * as styles from "../../../features/service-customer-review/styles"

const CustomerReviewsPage = () => {
  const {
    items,
    isLoading,
    error,
    currentPage,
    totalPages,
    onPageChange
  } = useReviewList()

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>고객 리뷰</h1>
          <p className={styles.subtitle}>
            저희 서비스를 이용해주신 고객분들의 소중한 후기입니다.
            실제 고객들이 경험한 서비스 품질과 만족도를 확인해보세요.
          </p>
        </div>

        {/* Review List */}
        <ReviewList items={items} isLoading={isLoading} error={error} />
        
        {/* Pagination */}
        <ReviewPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default CustomerReviewsPage
