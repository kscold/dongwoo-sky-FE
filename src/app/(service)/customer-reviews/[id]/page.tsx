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
import * as styles from "../../../../styles/service/page/customer-review-page.css.ts"

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
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/customer-reviews" className={styles.backButton}>
            ← 목록으로 돌아가기
          </Link>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              홈
            </Link>
            <span className={styles.separator}>›</span>
            <Link href="/customer-reviews" className={styles.breadcrumbLink}>
              고객 후기
            </Link>
            <span className={styles.separator}>›</span>
            <span className={styles.current}>상세보기</span>
          </nav>
        </div>
        <h1 className={styles.title}>{review.title}</h1>

        {/* 평점 */}
        <div className={styles.ratingSection}>
          <div className={styles.stars}>{renderStars(review.rating || 0)}</div>
          <span className={styles.ratingText}>({review.rating || 0}/5)</span>
        </div>

        {/* 메타 정보 */}
        <div className={styles.meta}>
          <div className={styles.customerInfo}>
            <span className={styles.customer}>👤 {review.customerName}</span>
            {review.customerCompany && (
              <span className={styles.company}>({review.customerCompany})</span>
            )}
          </div>
          <div className={styles.details}>
            {review.serviceType && (
              <span className={styles.detail}>🔧 {review.serviceType}</span>
            )}
            {review.projectLocation && (
              <span className={styles.detail}>📍 {review.projectLocation}</span>
            )}
          </div>
          <div className={styles.stats}>
            <span className={styles.stat}>👀 조회수 {review.viewCount}</span>
            <span className={styles.stat}>👍 도움됨 {review.helpfulCount}</span>
            <span className={styles.date}>
              {review.publishedAt
                ? formatDate(review.publishedAt)
                : formatDate(review.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 이미지 갤러리 */}
      {review.imageUrls && review.imageUrls.length > 0 && (
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <Image
              src={review.imageUrls[0]}
              alt={review.title}
              className={styles.image}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          {review.imageUrls.length > 1 && (
            <div className={styles.thumbnails}>
              {review.imageUrls.slice(1).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${review.title} ${index + 2}`}
                  className={styles.thumbnail}
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
      <div className={styles.content}>
        <div
          className={styles.contentBody}
          dangerouslySetInnerHTML={{ __html: review.content }}
        />
      </div>

      {/* 액션 버튼 */}
      <div className={styles.actions}>
        <button
          className={styles.helpfulButton}
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
