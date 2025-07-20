"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Pagination from "../../../common/components/ui/Pagination"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { useCustomerReviews } from "../../../common/hooks/useCustomerReview"
import { CustomerReview } from "../../../types/customer-review"

import * as styles from "../../../styles/service/page/customer-reviews-page.css.ts"

const CustomerReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const limit = isMobile ? 5 : 10

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
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const renderStars = (rating: number | undefined) => {
    const validRating = rating || 0
    return "★".repeat(validRating) + "☆".repeat(5 - validRating)
  }

  const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return "날짜 미정"
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return <PageSkeleton variant="customer-review" />
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          ⚠️ 고객 리뷰를 불러올 수 없습니다.
        </div>
      </div>
    )
  }

  const customerReviews = customerReviewsData?.data || []
  const totalPages = customerReviewsData?.totalPages || 1

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h1 className={styles.title}>고객 리뷰</h1>
        <p className={styles.subtitle}>
          저희 서비스를 이용하신 고객님들의 생생한 후기를 만나보세요
        </p>
        <Link href="/" className={styles.backButton}>
          ← 메인으로 돌아가기
        </Link>
      </div>

      {/* 고객 리뷰 목록 */}
      {customerReviews.length > 0 ? (
        <>
          <div className={styles.grid}>
            {customerReviews.map((review: CustomerReview) => (
              <Link
                key={review._id}
                href={`/customer-reviews/${review._id}`}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  {review.imageUrls && review.imageUrls.length > 0 ? (
                    <Image
                      src={review.imageUrls[0]}
                      alt={review.title}
                      className={styles.image}
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>⭐</div>
                  )}
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{review.title}</h3>
                  <div className={styles.rating}>
                    <span className={styles.stars}>
                      {renderStars(review.rating)}
                    </span>
                    <span className={styles.ratingText}>
                      ({review.rating}/5)
                    </span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      👤 {review.customerName}
                    </span>
                    {review.customerCompany && (
                      <span className={styles.metaItem}>
                        🏢 {review.customerCompany}
                      </span>
                    )}
                    {review.serviceType && (
                      <span className={styles.metaItem}>
                        🔧 {review.serviceType}
                      </span>
                    )}
                    {review.projectLocation && (
                      <span className={styles.metaItem}>
                        📍 {review.projectLocation}
                      </span>
                    )}
                  </div>
                  <p className={styles.description}>
                    {stripHtml(review.content).slice(0, 120)}...
                  </p>
                  <div className={styles.stats}>
                    <span className={styles.stat}>👀 {review.viewCount}</span>
                    <span className={styles.stat}>
                      👍 {review.helpfulCount}
                    </span>
                    <span className={styles.date}>
                      {formatDate(review.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className={styles.emptyState}>
          <h3>등록된 고객 리뷰가 없습니다</h3>
          <p>첫 번째 고객 리뷰를 기다리고 있습니다.</p>
        </div>
      )}
    </div>
  )
}

export default CustomerReviewsPage
