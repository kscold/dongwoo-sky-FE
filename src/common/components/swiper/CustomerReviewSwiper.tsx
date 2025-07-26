"use client"

import React, { useEffect, useState } from "react"
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
  const [swiperKey, setSwiperKey] = useState(0)

  // 데이터가 변경되면 Swiper를 강제로 리렌더링
  useEffect(() => {
    if (customerReviews && customerReviews.length > 0) {
      setSwiperKey((prev) => prev + 1)
      console.log(
        "Customer review data updated:",
        customerReviews.length,
        "items"
      )
    }
  }, [customerReviews])

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
          key={swiperKey}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
            el: ".customer-review-pagination",
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".customer-review-prev",
            nextEl: ".customer-review-next",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            console.log("Customer review slide changed to:", swiper.activeIndex)
            // 강제로 이미지 로드 트리거
            setTimeout(() => {
              const activeSlides = swiper.slides.filter(
                (slide) =>
                  slide.classList.contains("swiper-slide-active") ||
                  slide.classList.contains("swiper-slide-next")
              )
              activeSlides.forEach((slide) => {
                const img = slide.querySelector("img")
                if (img && !img.complete) {
                  img.loading = "eager"
                }
              })
            }, 100)
          }}
          onSwiper={(swiper) => {
            console.log(
              "Customer review swiper initialized with",
              customerReviews.length,
              "slides"
            )
            // Swiper 초기화 후 강제 업데이트
            setTimeout(() => {
              swiper.update()
              swiper.slideTo(0, 0)
            }, 100)
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16, slidesPerGroup: 2 },
            768: { slidesPerView: 2, spaceBetween: 18, slidesPerGroup: 2 },
            1024: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
            1280: { slidesPerView: 2, spaceBetween: 20, slidesPerGroup: 2 },
            1536: { slidesPerView: 2, spaceBetween: 24, slidesPerGroup: 2 },
          }}
          className={styles.swiperWrapper}
          watchOverflow={true}
          centerInsufficientSlides={true}
          loop={false}
          grabCursor={true}
          observer={true}
          observeParents={true}
        >
          {customerReviews.map((review, index) => (
            <SwiperSlide
              key={review._id}
              className={styles.swiperSlide}
              data-index={index}
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
                      loading="eager"
                      priority={false}
                      unoptimized={true}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>⭐</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{review.title}</h3>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <UserIcon className={styles.metaIcon} />
                      <span>{review.customerName}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.serviceIcon}>🔧</span>
                      <span>{review.serviceType}</span>
                    </div>
                  </div>
                  <p className={styles.description}>
                    {stripHtml(review.content).slice(0, 120)}...
                  </p>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      {renderRating(review.rating || 0)}
                    </div>
                    <span className={styles.date}>
                      {review.createdAt ? formatDate(review.createdAt) : "날짜 없음"}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="customer-review-pagination"></div>

        <button
          className={`customer-review-prev ${styles.navButton} ${styles.prevButton}`}
        >
          <ChevronLeftIcon className={styles.navIcon} />
        </button>
        <button
          className={`customer-review-next ${styles.navButton} ${styles.nextButton}`}
        >
          <ChevronRightIcon className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
}

export default CustomerReviewSwiper
