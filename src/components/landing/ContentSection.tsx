"use client"

import React from "react"
import Image from "next/image"
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
          <h2 className={styles.sectionTitle}>
            🏗️ 어울림 스카이와 함께하는 현장 이야기
          </h2>
          <p className={styles.sectionSubtitle}>
            실제 현장에서 일어나는 생생한 작업 이야기와 고객님들의 솔직한 후기를
            만나보세요
          </p>
        </div>

        {/* 좌우 레이아웃 컨테이너 */}
        <div className={styles.newsContainer}>
          {/* 왼쪽: 작업자 자랑거리 */}
          <div className={styles.newsSection}>
            <div className={styles.newsSectionHeader}>
              <div className={styles.sectionTitleContainer}>
                <h3 className={styles.newsSectionTitle}>
                  <span className={styles.sectionIcon}>🏆</span>
                  작업자 자랑거리
                </h3>
                <p className={styles.sectionDescription}>
                  현장에서의 전문성과 성과를 확인해보세요
                </p>
              </div>
              <Link href="/work-showcases" className={styles.viewAllButton}>
                전체보기 →
              </Link>
            </div>

            {workLoading ? (
              <div className={styles.loadingState}>
                <div className={styles.loadingSpinner}>
                  <div className={styles.loadingSpinnerDot}></div>
                  <div className={styles.loadingSpinnerDot}></div>
                  <div className={styles.loadingSpinnerDot}></div>
                </div>
                <p>불러오는 중...</p>
              </div>
            ) : workError ? (
              <div className={styles.errorState}>
                <div className={styles.errorIcon}>⚠️</div>
                <p>데이터를 불러올 수 없습니다.</p>
              </div>
            ) : workShowcases &&
              Array.isArray(workShowcases) &&
              workShowcases.length > 0 ? (
              <div className={styles.newsGrid}>
                {workShowcases.slice(0, 5).map((showcase: WorkShowcase) => (
                  <Link
                    key={showcase._id}
                    href={`/work-showcases/${showcase._id}`}
                    className={styles.newsCard}
                  >
                    <div className={styles.newsCardImage}>
                      {showcase.imageUrls && showcase.imageUrls.length > 0 ? (
                        <Image
                          src={showcase.imageUrls[0]}
                          alt={showcase.title}
                          className={styles.newsImage}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className={styles.newsImagePlaceholder}>
                          <span>🏗️</span>
                        </div>
                      )}
                      <div className={styles.imageOverlay}>
                        <span className={styles.categoryBadge}>작업 완료</span>
                      </div>
                    </div>
                    <div className={styles.newsCardContent}>
                      <h4 className={styles.newsCardTitle}>{showcase.title}</h4>
                      <p className={styles.newsCardDesc}>
                        {stripHtml(showcase.content).slice(0, 80)}...
                      </p>
                      <div className={styles.newsCardMeta}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaIcon}>👷</span>
                          <span>{showcase.authorName}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <span className={styles.metaIcon}>👀</span>
                          <span>{showcase.viewCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📝</div>
                <p>등록된 자랑거리가 없습니다.</p>
                <p className={styles.emptySubtext}>
                  곧 멋진 작업 사례들을 공유할 예정입니다.
                </p>
              </div>
            )}
          </div>

          {/* 오른쪽: 고객 리뷰 */}
          <div className={styles.newsSection}>
            <div className={styles.newsSectionHeader}>
              <div className={styles.sectionTitleContainer}>
                <h3 className={styles.newsSectionTitle}>
                  <span className={styles.sectionIcon}>💬</span>
                  고객 리뷰
                </h3>
                <p className={styles.sectionDescription}>
                  실제 고객들의 생생한 이용 후기
                </p>
              </div>
              <Link href="/customer-reviews" className={styles.viewAllButton}>
                전체보기 →
              </Link>
            </div>

            {reviewLoading ? (
              <div className={styles.loadingState}>
                <div className={styles.loadingSpinner}>
                  <div className={styles.loadingSpinnerDot}></div>
                  <div className={styles.loadingSpinnerDot}></div>
                  <div className={styles.loadingSpinnerDot}></div>
                </div>
                <p>불러오는 중...</p>
              </div>
            ) : reviewError ? (
              <div className={styles.errorState}>
                <div className={styles.errorIcon}>⚠️</div>
                <p>데이터를 불러올 수 없습니다.</p>
              </div>
            ) : customerReviews &&
              Array.isArray(customerReviews) &&
              customerReviews.length > 0 ? (
              <div className={styles.newsGrid}>
                {customerReviews.slice(0, 5).map((review: CustomerReview) => (
                  <Link
                    key={review._id}
                    href={`/customer-reviews/${review._id}`}
                    className={styles.newsCard}
                  >
                    <div className={styles.newsCardImage}>
                      {review.imageUrls && review.imageUrls.length > 0 ? (
                        <Image
                          src={review.imageUrls[0]}
                          alt={review.title}
                          className={styles.newsImage}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className={styles.newsImagePlaceholder}>
                          <span>💬</span>
                        </div>
                      )}
                      <div className={styles.imageOverlay}>
                        <div className={styles.ratingOverlay}>
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <div className={styles.newsCardContent}>
                      <h4 className={styles.newsCardTitle}>{review.title}</h4>
                      <div className={styles.rating}>
                        {renderStars(review.rating)}
                      </div>
                      <p className={styles.newsCardDesc}>
                        {stripHtml(review.content).slice(0, 80)}...
                      </p>
                      <div className={styles.newsCardMeta}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaIcon}>👤</span>
                          <span>{review.customerName}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <span className={styles.metaIcon}>👀</span>
                          <span>{review.viewCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>💬</div>
                <p>등록된 리뷰가 없습니다.</p>
                <p className={styles.emptySubtext}>
                  고객님들의 소중한 후기를 기다리고 있습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection
