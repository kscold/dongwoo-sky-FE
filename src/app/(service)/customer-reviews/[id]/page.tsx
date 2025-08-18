"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

import {
  useCustomerReview,
  useMarkReviewHelpful,
} from "../../../../common/hooks/useCustomerReview"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import * as styles from "../../../../features/service-customer-review/styles"

const CustomerReviewDetailPage = () => {
  const params = useParams()
  const id = params.id as string

  const { data: review, isLoading, error } = useCustomerReview(id)
  const helpfulMutation = useMarkReviewHelpful()

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  const formatDate = (dateString: string | Date | undefined) => {
    if (!dateString) return "날짜 없음"
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleHelpful = async () => {
    try {
      await helpfulMutation.mutateAsync(id)
    } catch (error) {
      console.error("도움됨 표시 실패:", error)
    }
  }

  if (isLoading) {
    return <PageSkeleton variant="customer-review" />
  }

  if (error || !review) {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          ⚠️ 고객 리뷰를 찾을 수 없습니다.
        </div>
        <Link href="/customer-reviews" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.detailContainer}>
      {/* 헤더 */}
      <div className={styles.detailHeader}>
        <div className={styles.detailHeaderTop}>
          <Link href="/customer-reviews" className={styles.detailBackButton}>
            ← 목록으로 돌아가기
          </Link>
          <nav className={styles.detailBreadcrumb}>
            <Link href="/" className={styles.detailBreadcrumbLink}>
              홈
            </Link>
            <span className={styles.detailSeparator}>›</span>
            <Link href="/customer-reviews" className={styles.detailBreadcrumbLink}>
              고객 후기
            </Link>
            <span className={styles.detailSeparator}>›</span>
            <span className={styles.detailCurrent}>상세보기</span>
          </nav>
        </div>
        <h1 className={styles.detailTitle}>{review.title}</h1>

        {/* 평점 */}
        <div className={styles.detailRatingSection}>
          <div className={styles.detailStars}>{renderStars(review.rating || 0)}</div>
          <span className={styles.detailRatingText}>({review.rating || 0}/5)</span>
        </div>

        {/* 메타 정보 */}
        <div className={styles.detailMeta}>
          <div className={styles.detailCustomerInfo}>
            <span className={styles.detailCustomer}>👤 {review.customerName}</span>
            {review.customerCompany && (
              <span className={styles.detailCompany}>({review.customerCompany})</span>
            )}
          </div>
          <div className={styles.detailDetails}>
            {review.serviceType && (
              <span className={styles.detailDetail}>🔧 {review.serviceType}</span>
            )}
            {review.projectLocation && (
              <span className={styles.detailDetail}>📍 {review.projectLocation}</span>
            )}
          </div>
          <div className={styles.detailStats}>
            <span className={styles.detailStat}>👀 조회수 {review.viewCount}</span>
            <span className={styles.detailStat}>👍 도움됨 {review.helpfulCount}</span>
            <span className={styles.detailDate}>
              {review.publishedAt
                ? formatDate(review.publishedAt)
                : formatDate(review.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 이미지 갤러리 */}
      {review.imageUrls && review.imageUrls.length > 0 && (
        <div className={styles.detailImageGallery}>
          <div className={styles.detailMainImage}>
            <Image
              src={review.imageUrls[0]}
              alt={review.title}
              className={styles.detailImage}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          {review.imageUrls.length > 1 && (
            <div className={styles.detailThumbnails}>
              {review.imageUrls.slice(1).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${review.title} ${index + 2}`}
                  className={styles.detailThumbnail}
                  width={150}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 리뷰 내용 */}
      <div className={styles.detailContent}>
        <div
          className={styles.detailContentBody}
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </div>

      {/* 액션 버튼 */}
      <div className={styles.detailActions}>
        <button
          className={styles.detailHelpfulButton}
          onClick={handleHelpful}
          disabled={helpfulMutation.isPending}
        >
          👍 도움됨 ({review.helpfulCount})
        </button>
      </div>
    </div>
  )
}

export default CustomerReviewDetailPage
