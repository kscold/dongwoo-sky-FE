"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Header from "../../../common/components/layout/Header.tsx"
import Footer from "../../..//common/components/layout/Footer.tsx"
import { useCustomerReviews } from "../../..//common/hooks/useContent.ts"

import * as styles from "../../../styles/page/customer-reviews-page.css.ts"

const CustomerReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 10

  const {
    data: customerReviewsData,
    isLoading,
    error,
  } = useCustomerReviews(currentPage, limit)

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
      <>
        <Header />
        <main>
          <div className={styles.container}>
            <div className={styles.loadingState}>
              ⏳ 고객 리뷰를 불러오는 중입니다...
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <main>
          <div className={styles.container}>
            <div className={styles.errorState}>
              ⚠️ 고객 리뷰를 불러올 수 없습니다.
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const customerReviews = customerReviewsData?.data || []
  const totalPages = customerReviewsData?.totalPages || 1

  return (
    <>
      <main>
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
                {customerReviews.map((review: any) => (
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
                        <div className={styles.imagePlaceholder}>💬</div>
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
                        <span className={styles.stat}>
                          👀 {review.viewCount}
                        </span>
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
              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={styles.pageButton}
                  >
                    ← 이전
                  </button>

                  <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`${styles.pageNumber} ${
                            currentPage === page ? styles.active : ""
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={styles.pageButton}
                  >
                    다음 →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.emptyState}>
              <h3>등록된 고객 리뷰가 없습니다</h3>
              <p>첫 번째 고객 리뷰를 기다리고 있습니다.</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default CustomerReviewsPage
