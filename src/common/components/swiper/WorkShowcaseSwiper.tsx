"use client"

import React, { useRef } from "react"
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
          slidesPerView={1}
          pagination={{ clickable: true, el: ".work-showcase-pagination" }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          autoplay={{
            delay: 5000,
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
          {workShowcases.map((showcase) => (
            <SwiperSlide key={showcase._id} className={styles.swiperSlide}>
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
                    {stripHtml(showcase.content).slice(0, 100)}...
                  </p>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <HeartIcon className={styles.statIcon} />
                      <span>{showcase.likeCount}</span>
                    </div>
                    <span className={styles.date}>
                      {formatDate(showcase.createdAt)}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="work-showcase-pagination"></div>

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

export default WorkShowcaseSwiper
