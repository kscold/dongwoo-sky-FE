"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import * as styles from "@/styles/service/components/equipment-swiper.css"
import { Equipment } from "@/common/types/equipment"

interface EquipmentSwiperProps {
    equipments: Equipment[]
}

const EquipmentSwiper: React.FC<EquipmentSwiperProps> = ({ equipments }) => {
    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    el: `.${styles.swiperPagination}`,
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {equipments.map((equipment) => (
                    <SwiperSlide key={equipment.id} className={styles.swiperSlide}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={equipment.imageUrl}
                                alt={equipment.name}
                                fill
                                className={styles.equipmentImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.infoContainer}>
                            <h3 className={styles.equipmentName}>{equipment.name}</h3>
                            <p className={styles.equipmentDescription}>
                                {equipment.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}>
                <ChevronLeftIcon />
            </div>
            <div className={`swiper-button-next ${styles.swiperButtonNext}`}>
                <ChevronRightIcon />
            </div>
            <div className={styles.swiperPagination} />
        </div>
    )
}

export default EquipmentSwiper 