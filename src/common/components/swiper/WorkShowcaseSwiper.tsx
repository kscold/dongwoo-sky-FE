"use client"

import React, { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

import { WorkShowcase } from "../../../types/work-showcase"
import * as styles from "../../../styles/service/components/work-showcase-swiper.css.ts"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

interface WorkShowcaseSwiperProps {
  workShowcases: WorkShowcase[]
  title?: string
  description?: string
  showViewAll?: boolean
  viewAllLink?: string
}

const WorkShowcaseSwiper: React.FC<WorkShowcaseSwiperProps> = ({
  workShowcases,
  title = "작업자 자랑거리",
  description = "전문 작업자들의 현장 이야기와 작업 성과를 확인해보세요",
  showViewAll = true,
  viewAllLink = "/work-showcases",
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

  // 데이터가 없으면 렌더링하지 않음
  if (!workShowcases || workShowcases.length === 0) {
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
          pagination={{ clickable: true, el: ".work-showcase-pagination" }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          autoplay={{
            delay: 5000,
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
          {workShowcases.map((showcase, index) => (
            <SwiperSlide
              key={showcase._id || index}
              className={styles.swiperSlide}
            >
              <Link
                href={`/work-showcases/${showcase._id}`}
                className={styles.showcaseCard}
              >
                <div className={styles.imageContainer}>
                  {showcase.imageUrls && showcase.imageUrls.length > 0 ? (
                    <Image
                      src={showcase.imageUrls[0]}
                      alt={showcase.title}
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
                            '">🏗️</div>'
                        }
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>🏗️</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {showcase.title || "No Title"}
                  </h3>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <UserIcon className={styles.metaIcon} />
                      <span>{showcase.authorName || "Unknown"}</span>
                    </div>
                    {showcase.projectLocation && (
                      <div className={styles.metaItem}>
                        <span className={styles.locationIcon}>📍</span>
                        <span>{showcase.projectLocation}</span>
                      </div>
                    )}
                  </div>
                  <p className={styles.description}>
                    {showcase.content
                      ? stripHtml(showcase.content).slice(0, 100) + "..."
                      : "No content available"}
                  </p>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <HeartIcon className={styles.statIcon} />
                      <span>{showcase.likeCount || 0}</span>
                    </div>
                    <span className={styles.date}>
                      {showcase.createdAt
                        ? formatDate(showcase.createdAt)
                        : "No date"}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`work-showcase-pagination ${styles.pagination}`}></div>

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

export default WorkShowcaseSwiper
