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
  HeartIcon,
} from "@heroicons/react/24/outline"
import { CustomerReview } from "../../../types/customer-review"
import { WorkShowcase } from "../../../types/work-showcase"
import * as styles from "../../../styles/service/components/content-swiper.css"

interface ContentSwiperProps {
  type: "review" | "showcase"
  data: CustomerReview[] | WorkShowcase[]
  title?: string
  description?: string
  showViewAll?: boolean
  viewAllLink?: string
}

const ContentSwiper: React.FC<ContentSwiperProps> = ({
  type,
  data,
  title,
  description,
  showViewAll = true,
  viewAllLink,
}) => {
  const [swiperKey, setSwiperKey] = useState(0)

  // 기본값 설정
  const defaultConfig = {
    review: {
      title: "고객 리뷰",
      description: "고객들의 생생한 후기와 만족도를 확인해보세요",
      viewAllLink: "/customer-reviews",
      paginationClass: "customer-review-pagination",
      prevClass: "customer-review-prev",
      nextClass: "customer-review-next",
    },
    showcase: {
      title: "작업자 자랑거리",
      description: "전문 작업자들의 현장 이야기와 작업 성과를 확인해보세요",
      viewAllLink: "/work-showcases",
      paginationClass: "work-showcase-pagination",
      prevClass: "work-showcase-prev",
      nextClass: "work-showcase-next",
    },
  }

  const config = defaultConfig[type]
  const finalTitle = title || config.title
  const finalDescription = description || config.description
  const finalViewAllLink = viewAllLink || config.viewAllLink

  // 데이터가 변경되면 Swiper를 강제로 리렌더링
  useEffect(() => {
    setSwiperKey((prev) => prev + 1)
    console.log(`${type} data updated:`, data?.length || 0, "items")
  }, [data, type])

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

  const renderLikeCount = (likeCount: number | undefined) => (
    <div className={styles.stat}>
      <HeartIcon className={styles.statIcon} />
      <span>{likeCount || 0}</span>
    </div>
  )

  const renderMeta = (item: CustomerReview | WorkShowcase) => {
    if (type === "review") {
      const review = item as CustomerReview
      return (
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
      )
    } else {
      const showcase = item as WorkShowcase
      return (
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <UserIcon className={styles.metaIcon} />
            <span>{showcase.authorName}</span>
          </div>
          {showcase.projectLocation && (
            <div className={styles.metaItem}>
              <span className={styles.locationIcon}>📍</span>
              <span>{showcase.projectLocation}</span>
            </div>
          )}
        </div>
      )
    }
  }

  const renderStats = (item: CustomerReview | WorkShowcase) => {
    if (type === "review") {
      const review = item as CustomerReview
      return (
        <div className={styles.stats}>
          <div className={styles.stat}>{renderRating(review.rating || 0)}</div>
          <span className={styles.date}>
            {review.createdAt ? formatDate(review.createdAt) : "날짜 없음"}
          </span>
        </div>
      )
    } else {
      const showcase = item as WorkShowcase
      return (
        <div className={styles.stats}>
          {renderLikeCount(showcase.likeCount)}
          <span className={styles.date}>
            {showcase.createdAt ? formatDate(showcase.createdAt) : "날짜 없음"}
          </span>
        </div>
      )
    }
  }

  const getItemData = (item: CustomerReview | WorkShowcase) => {
    if (type === "review") {
      const review = item as CustomerReview
      return {
        id: review._id,
        title: review.title,
        content: review.content,
        imageUrls: review.imageUrls,
        link: `/customer-reviews/${review._id}`,
        placeholder: "⭐",
      }
    } else {
      const showcase = item as WorkShowcase
      return {
        id: showcase._id,
        title: showcase.title,
        content: showcase.content,
        imageUrls: showcase.imageUrls,
        link: `/work-showcases/${showcase._id}`,
        placeholder: "🏗️",
      }
    }
  }

  // 데이터가 없을 때의 대체 컨텐츠
  const renderEmptySlide = () => (
    <SwiperSlide className={styles.swiperSlide}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            {type === "review" ? "⭐" : "🏗️"}
          </div>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>
            {type === "review" ? "고객 리뷰 준비중" : "작업 사례 준비중"}
          </h3>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span>📝 곧 업데이트될 예정입니다</span>
            </div>
          </div>
          <p className={styles.description}>
            {type === "review" 
              ? "고객님들의 소중한 후기를 준비하고 있습니다. 조금만 기다려 주세요!" 
              : "전문 작업자들의 현장 이야기를 준비하고 있습니다. 조금만 기다려 주세요!"
            }
          </p>
          <div className={styles.stats}>
            <span className={styles.date}>업데이트 예정</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  )

  const hasData = data && data.length > 0
  const swiperData = hasData ? data : []

  return (
    <section className={styles.swiperSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleContainer}>
          <h2 className={styles.sectionTitle}>{finalTitle}</h2>
          <p className={styles.sectionDescription}>{finalDescription}</p>
        </div>
        {showViewAll && hasData && (
          <Link href={finalViewAllLink} className={styles.viewAllButton}>
            전체보기
          </Link>
        )}
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          key={swiperKey}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            el: `.${config.paginationClass}`,
            dynamicBullets: false,
            hideOnClick: false,
            enabled: true,
          }}
          navigation={{
            prevEl: `.${config.prevClass}`,
            nextEl: `.${config.nextClass}`,
          }}
          autoplay={hasData ? {
            delay: type === "review" ? 6000 : 5000,
            disableOnInteraction: false,
          } : false}
          onSlideChange={(swiper) => {
            console.log(`${type} slide changed to:`, swiper.activeIndex)
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
              `${type} swiper initialized with`,
              swiperData.length,
              "slides"
            )
            // Swiper 초기화 후 강제 업데이트
            setTimeout(() => {
              swiper.update()
              swiper.slideTo(0, 0)
            }, 100)
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12, slidesPerGroup: 1 },
            480: { slidesPerView: 1, spaceBetween: 14, slidesPerGroup: 1 },
            640: { slidesPerView: 1, spaceBetween: 16, slidesPerGroup: 1 },
            768: { slidesPerView: 1, spaceBetween: 18, slidesPerGroup: 1 },
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
          {hasData ? (
            swiperData.map((item, index) => {
              const itemData = getItemData(item)
              return (
                <SwiperSlide
                  key={itemData.id}
                  className={styles.swiperSlide}
                  data-index={index}
                >
                  <Link href={itemData.link} className={styles.card}>
                    <div className={styles.imageContainer}>
                      {itemData.imageUrls && itemData.imageUrls.length > 0 ? (
                        <Image
                          src={itemData.imageUrls[0]}
                          alt={itemData.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className={styles.image}
                          loading="eager"
                          priority={false}
                          unoptimized={true}
                        />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          {itemData.placeholder}
                        </div>
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{itemData.title}</h3>
                      {renderMeta(item)}
                      <p className={styles.description}>
                        {stripHtml(itemData.content).slice(0, 120)}...
                      </p>
                      {renderStats(item)}
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })
          ) : (
            renderEmptySlide()
          )}
        </Swiper>

        <div className={config.paginationClass}></div>

        <button
          className={`${config.prevClass} ${styles.navButton} ${styles.prevButton}`}
          style={{ display: hasData && swiperData.length > 1 ? 'flex' : 'none' }}
        >
          <ChevronLeftIcon className={styles.navIcon} />
        </button>
        <button
          className={`${config.nextClass} ${styles.navButton} ${styles.nextButton}`}
          style={{ display: hasData && swiperData.length > 1 ? 'flex' : 'none' }}
        >
          <ChevronRightIcon className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
}

export default ContentSwiper
