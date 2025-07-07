"use client"

import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

import { Equipment } from "../../../common/types/equipment"
import * as styles from "../../../styles/service/components/equipment-swiper.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface EquipmentSwiperProps {
    equipments: Equipment[]
}

const EquipmentSwiper: React.FC<EquipmentSwiperProps> = ({ equipments }) => {
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
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className={styles.swiperWrapper}
            >
                {equipments.map((equipment) => (
                    <SwiperSlide key={equipment._id} className={styles.swiperSlide}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={equipment.imageUrl}
                                alt={equipment.name}
                                fill
                                style={{ objectFit: "cover" }}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.slideContent}>
                            <h3 className={styles.slideTitle}>{equipment.name}</h3>
                            <p className={styles.slideInfo}>
                                {`규격: ${equipment.tonnage}`}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="swiper-pagination"></div>
            </Swiper>

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

export default EquipmentSwiper 