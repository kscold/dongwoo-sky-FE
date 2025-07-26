"use client"

import React from "react"
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
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={{
            clickable: true,
            el: ".work-showcase-pagination",
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".work-showcase-prev",
            nextEl: ".work-showcase-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            console.log("Slide changed to:", swiper.activeIndex)
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
              "Swiper initialized with",
              workShowcases.length,
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
          {workShowcases.map((showcase, index) => (
            <SwiperSlide
              key={showcase._id}
              className={styles.swiperSlide}
              data-index={index}
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
                      loading="eager"
                      priority={false}
                      unoptimized={true}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>🏗️</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{showcase.title}</h3>
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
                  <p className={styles.description}>
                    {stripHtml(showcase.content).slice(0, 120)}...
                  </p>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <HeartIcon className={styles.statIcon} />
                      <span>{showcase.likeCount}</span>
                    </div>
                    <span className={styles.date}>
                      {showcase.createdAt
                        ? formatDate(showcase.createdAt)
                        : "날짜 없음"}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="work-showcase-pagination"></div>

        <button
          className={`work-showcase-prev ${styles.navButton} ${styles.prevButton}`}
        >
          <ChevronLeftIcon className={styles.navIcon} />
        </button>
        <button
          className={`work-showcase-next ${styles.navButton} ${styles.nextButton}`}
        >
          <ChevronRightIcon className={styles.navIcon} />
        </button>
      </div>
    </section>
  )
}

export default WorkShowcaseSwiper
