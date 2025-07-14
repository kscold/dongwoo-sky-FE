"use client"

import React, { useRef } from "react"
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
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
            1536: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className={styles.swiperWrapper}
          watchOverflow={true}
          centerInsufficientSlides={true}
        >
          {customerReviews.map((review) => (
            <SwiperSlide key={review._id} className={styles.swiperSlide}>
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
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>⭐</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{review.title}</h3>
                    {renderRating(review.rating)}
                  </div>
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
                  <div className={styles.footer}>
                    <span className={styles.date}>
                      {formatDate(review.createdAt)}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="customer-review-pagination"></div>

        <button
          ref={navigationPrevRef}
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          <ChevronLeftIcon className={styles.navIcon} />
        </button>
        <button
          ref={navigationNextRef}
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          <ChevronRightIcon className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
}

export default CustomerReviewSwiper
