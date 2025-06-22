"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCustomerReview } from "@/hooks/useContent"
import * as styles from "./styles.css.ts"

const CustomerReviewDetailPage = () => {
  const params = useParams()
  const id = params.id as string

  const { data: review, isLoading, error } = useCustomerReview(id)

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          ⏳ 고객 리뷰를 불러오는 중입니다...
        </div>
      </div>
    )
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
        <Link href="/customer-reviews" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
        <h1 className={styles.title}>{review.title}</h1>

        {/* 평점 */}
        <div className={styles.ratingSection}>
          <div className={styles.stars}>{renderStars(review.rating)}</div>
          <span className={styles.ratingText}>({review.rating}/5)</span>
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
              {formatDate(review.publishedAt)}
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
        <button className={styles.helpfulButton}>
          👍 도움됨 ({review.helpfulCount})
        </button>
        <Link href="/customer-reviews" className={styles.backToListButton}>
          다른 리뷰 보기
        </Link>
      </div>
    </div>
  )
}

export default CustomerReviewDetailPage
