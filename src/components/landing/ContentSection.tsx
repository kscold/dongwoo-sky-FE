"use client"

import React from "react"
import Link from "next/link"
import { useTopWorkShowcases, useTopCustomerReviews } from "@/hooks/use-content"
import type { WorkShowcase, CustomerReview } from "@/types/content"
import * as styles from "@/styles/landing/ContentSection.css"

const ContentSection = () => {
  const {
    data: workShowcases,
    isLoading: workLoading,
    error: workError,
  } = useTopWorkShowcases()
  const {
    data: customerReviews,
    isLoading: reviewLoading,
    error: reviewError,
  } = useTopCustomerReviews()

  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        {/* 어울림 스카이 소식 헤더 */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>어울림 스카이 소식</h2>
          <p className={styles.sectionSubtitle}>
            현장에서 일어나는 생생한 이야기와 고객님들의 소중한 후기를
            확인해보세요
          </p>
        </div>

        {/* 좌우 레이아웃 컨테이너 */}
        <div className={styles.newsContainer}>
          {/* 왼쪽: 작업자 자랑거리 */}
          <div className={styles.newsSection}>
            <div className={styles.newsSectionHeader}>
              <h3 className={styles.newsSectionTitle}>작업자 자랑거리</h3>
              <Link href="/work-showcases" className={styles.plusButton}>
                +
              </Link>
            </div>

            {workLoading ? (
              <div className={styles.loadingState}>⏳ 불러오는 중...</div>
            ) : workError ? (
              <div className={styles.errorState}>⚠️ 불러올 수 없습니다.</div>
            ) : workShowcases &&
              Array.isArray(workShowcases) &&
              workShowcases.length > 0 ? (
              <div className={styles.newsGrid}>
                {workShowcases.map((showcase: WorkShowcase) => (
                  <Link
                    key={showcase._id}
                    href={`/work-showcases/${showcase._id}`}
                    className={styles.newsCard}
                  >
                    <div className={styles.newsCardImage}>
                      {showcase.imageUrls && showcase.imageUrls.length > 0 ? (
                        <img
                          src={showcase.imageUrls[0]}
                          alt={showcase.title}
                          className={styles.newsImage}
                        />
                      ) : (
                        <div className={styles.newsImagePlaceholder}>🏗️</div>
                      )}
                    </div>
                    <div className={styles.newsCardContent}>
                      <h4 className={styles.newsCardTitle}>{showcase.title}</h4>
                      <p className={styles.newsCardDesc}>
                        {stripHtml(showcase.content).slice(0, 60)}...
                      </p>
                      <div className={styles.newsCardMeta}>
                        <span>👷 {showcase.authorName}</span>
                        <span>👀 {showcase.viewCount}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                등록된 자랑거리가 없습니다.
              </div>
            )}
          </div>

          {/* 오른쪽: 고객 리뷰 */}
          <div className={styles.newsSection}>
            <div className={styles.newsSectionHeader}>
              <h3 className={styles.newsSectionTitle}>고객 리뷰</h3>
              <Link href="/customer-reviews" className={styles.plusButton}>
                +
              </Link>
            </div>

            {reviewLoading ? (
              <div className={styles.loadingState}>⏳ 불러오는 중...</div>
            ) : reviewError ? (
              <div className={styles.errorState}>⚠️ 불러올 수 없습니다.</div>
            ) : customerReviews &&
              Array.isArray(customerReviews) &&
              customerReviews.length > 0 ? (
              <div className={styles.newsGrid}>
                {customerReviews.map((review: CustomerReview) => (
                  <Link
                    key={review._id}
                    href={`/customer-reviews/${review._id}`}
                    className={styles.newsCard}
                  >
                    <div className={styles.newsCardImage}>
                      {review.imageUrls && review.imageUrls.length > 0 ? (
                        <img
                          src={review.imageUrls[0]}
                          alt={review.title}
                          className={styles.newsImage}
                        />
                      ) : (
                        <div className={styles.newsImagePlaceholder}>💬</div>
                      )}
                    </div>
                    <div className={styles.newsCardContent}>
                      <h4 className={styles.newsCardTitle}>{review.title}</h4>
                      <div className={styles.rating}>
                        {renderStars(review.rating)}
                      </div>
                      <p className={styles.newsCardDesc}>
                        {stripHtml(review.content).slice(0, 60)}...
                      </p>
                      <div className={styles.newsCardMeta}>
                        <span>👤 {review.customerName}</span>
                        <span>👀 {review.viewCount}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>등록된 리뷰가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection
