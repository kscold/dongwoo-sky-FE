"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid"
import { Equipment } from "@/common/types/equipment"
import { equipmentApi } from "@/api/equipment"
import * as styles from "../../../styles/components/equipment-swiper.css"

// Swiper CSS imports
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface EquipmentSwiperProps {
  className?: string
}

const EquipmentSwiper: React.FC<EquipmentSwiperProps> = ({ className }) => {
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true)
        const data = await equipmentApi.getAll()
        setEquipment(data)
      } catch (err) {
        setError("장비 정보를 불러오는데 실패했습니다.")
        console.error("Error fetching equipment:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchEquipment()
  }, [])

  if (loading) {
    return (
      <div className={`${styles.equipmentSwiperContainer} ${className || ""}`}>
        <div className={styles.loadingContainer}>
          장비 정보를 불러오는 중...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`${styles.equipmentSwiperContainer} ${className || ""}`}>
        <div className={styles.errorContainer}>{error}</div>
      </div>
    )
  }

  if (equipment.length === 0) {
    return (
      <div className={`${styles.equipmentSwiperContainer} ${className || ""}`}>
        <div className={styles.errorContainer}>등록된 장비가 없습니다.</div>
      </div>
    )
  }

  return (
    <div className={`${styles.equipmentSwiperContainer} ${className || ""}`}>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".equipment-swiper-button-prev",
            nextEl: ".equipment-swiper-button-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={equipment.length > 1}
          className="equipment-swiper"
        >
          {equipment.map((item) => (
            <SwiperSlide key={item._id}>
              <div className={styles.equipmentCard}>
                <div className={styles.equipmentImageContainer}>
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={600}
                      height={400}
                      className={styles.equipmentImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <PhotoIcon className={styles.placeholderIcon} />
                      <span>이미지 준비중</span>
                    </div>
                  )}
                </div>

                <h3 className={styles.equipmentTitle}>{item.name}</h3>
                <p className={styles.equipmentDescription}>
                  {item.description}
                </p>

                {/* 추가 스펙 정보 표시 */}
                {(item.maxHeight || item.maxWeight || item.tonnage) && (
                  <div className={styles.equipmentSpecs}>
                    {item.maxHeight && (
                      <span className={styles.specTag}>
                        최대 높이: {item.maxHeight}
                      </span>
                    )}
                    {item.maxWeight && (
                      <span className={styles.specTag}>
                        최대 중량: {item.maxWeight}
                      </span>
                    )}
                    {item.tonnage && (
                      <span className={styles.specTag}>
                        톤수: {item.tonnage}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 내비게이션 버튼 */}
        {equipment.length > 1 && (
          <>
            <button
              className={`equipment-swiper-button-prev ${styles.prevButton}`}
            >
              <ChevronLeftIcon
                style={{ width: "24px", height: "24px", color: "#0A3875" }}
              />
            </button>
            <button
              className={`equipment-swiper-button-next ${styles.nextButton}`}
            >
              <ChevronRightIcon
                style={{ width: "24px", height: "24px", color: "#0A3875" }}
              />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default EquipmentSwiper
