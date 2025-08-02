"use client"

import React from "react"
import { useCustomerReviewManagement } from "@/features/admin-customer-review/api/customer-review.hooks"
import { CustomerReviewHeader } from "@/features/admin-customer-review/ui/CustomerReviewHeader"
import { CustomerReviewList } from "@/features/admin-customer-review/ui/CustomerReviewList"
import { Pagination } from "@/features/admin-customer-review/ui/Pagination"
import * as styles from "../../../features/admin-customer-review/ui/customer-review-page.css"

export default function AdminCustomerReviewPage() {
  const {
    data,
    isLoading,
    currentPage,
    setCurrentPage,
    handleDelete,
    handleToggleActive,
    handleToggleFeatured,
  } = useCustomerReviewManagement()

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>고객 리뷰를 불러오는 중...</div>
      </div>
    )
  }

  const reviews = data?.data || []
  const totalPages = data?.totalPages || 0
  const totalItems = data?.totalItems || 0

  return (
    <div className={styles.container}>
      <CustomerReviewHeader totalCount={totalItems} />
      
      <CustomerReviewList
        reviews={reviews}
        onToggleActive={handleToggleActive}
        onToggleFeatured={handleToggleFeatured}
        onDelete={handleDelete}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}