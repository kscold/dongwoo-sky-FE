"use client"

import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { ProcessStep } from "@/common/types/service-guide"
import * as styles from "@/styles/service/components/process-swiper.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface ProcessSwiperProps {
  processSteps: ProcessStep[]
  iconMap: { [key: string]: React.ElementType }
}

const ProcessSwiper: React.FC<ProcessSwiperProps> = ({
  processSteps,
  iconMap,
}) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
        }}
        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
        }}
        className={styles.swiperWrapper}
      >
        {processSteps.map((step: ProcessStep, index: number) => {
          const IconComponent = (step.icon && iconMap[step.icon]) || null
          return (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.processStep}>
                <div className={styles.processStepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                {IconComponent && (
                  <IconComponent className={styles.processStepIcon} />
                )}
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDescription}>
                  {step.description}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="swiper-pagination"></div>

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
  )
}

export default ProcessSwiper