"use client"

import React, { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import { CustomerReview } from "../../../types/customer-review"
import * as styles from "../../../styles/service/components/customer-review-swiper.css"

interface CustomerReviewSwiperProps {
  customerReviews: CustomerReview[]
  title?: string
  description?: string
  showViewAll?: boolean
  viewAllLink?: string
}

const CustomerReviewSwiper: React.FC<CustomerReviewSwiperProps> = ({
  customerReviews,
  title = "고객 리뷰",
  description = "고객들의 생생한 후기와 만족도를 확인해보세요",
  showViewAll = true,
  viewAllLink = "/customer-reviews",
}) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<any>(null)

  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const renderRating = (rating: number) => (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={styles.starIcon}
          style={{ color: i < rating ? "#f59e0b" : "#e0e0e0" }}
        />
      ))}
    </div>
  )

  // 데이터가 없으면 렌더링하지 않음
  if (!customerReviews || customerReviews.length === 0) {
    return null
  }

  // 버튼 클릭 핸들러
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <section className={styles.swiperSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </div>
        {showViewAll && (
          <Link href={viewAllLink} className={styles.viewAllButton}>
            전체보기
          </Link>
        )}
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".customer-review-pagination" }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 20 },
            1280: { slidesPerView: 2, spaceBetween: 20 },
            1536: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className={styles.swiperWrapper}
          watchOverflow={true}
          centerInsufficientSlides={true}
          allowTouchMove={true}
          touchRatio={1}
          threshold={10}
          grabCursor={true}
          loop={false}
          speed={300}
          slidesPerGroup={1}
          observer={true}
          observeParents={true}
          updateOnWindowResize={true}
        >
          {customerReviews.map((review, index) => (
            <SwiperSlide
              key={review._id || index}
              className={styles.swiperSlide}
            >
              <Link
                href={`/customer-reviews/${review._id}`}
                className={styles.reviewCard}
              >
                <div className={styles.imageContainer}>
                  {review.imageUrls && review.imageUrls.length > 0 ? (
                    <Image
                      src={review.imageUrls[0]}
                      alt={review.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className={styles.image}
                      onError={(e) => {
                        const target = e.currentTarget
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML =
                            '<div class="' +
                            styles.imagePlaceholder +
                            '">⭐</div>'
                        }
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>⭐</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                      {review.title || "No Title"}
                    </h3>
                    {renderRating(review.rating || 0)}
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <UserIcon className={styles.metaIcon} />
                      <span>{review.customerName || "Unknown"}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.serviceIcon}>🔧</span>
                      <span>{review.serviceType || "Unknown Service"}</span>
                    </div>
                  </div>
                  <p className={styles.description}>
                    {review.content
                      ? stripHtml(review.content).slice(0, 120) + "..."
                      : "No content available"}
                  </p>
                  <div className={styles.footer}>
                    <span className={styles.date}>
                      {review.createdAt
                        ? formatDate(review.createdAt)
                        : "No date"}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`customer-review-pagination ${styles.pagination}`}
        ></div>

        <button
          ref={navigationPrevRef}
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrevClick}
          type="button"
        >
          <ChevronLeftIcon className={styles.navIcon} />
        </button>
        <button
          ref={navigationNextRef}
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNextClick}
          type="button"
        >
          <ChevronRightIcon className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
}

export default CustomerReviewSwiper
