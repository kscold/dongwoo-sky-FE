"use client"

import React, { useRef, useEffect, useState } from "react"
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
    const [swiperInstance, setSwiperInstance] = useState<any>(null)

    useEffect(() => {
        if (swiperInstance && navigationPrevRef.current && navigationNextRef.current) {
            swiperInstance.params.navigation.prevEl = navigationPrevRef.current
            swiperInstance.params.navigation.nextEl = navigationNextRef.current
            swiperInstance.navigation.init()
            swiperInstance.navigation.update()
        }
    }, [swiperInstance])

    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
                navigation={{
                    prevEl: ".equipment-swiper-button-prev",
                    nextEl: ".equipment-swiper-button-next",
                }}
                onSwiper={setSwiperInstance}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className={styles.swiperWrapper}
            >
                {equipments.map((equipment) => (
                    <SwiperSlide key={(equipment as any)._id || (equipment as any).id} className={styles.swiperSlide}>
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
                className={`${styles.navButton} ${styles.prevButton} equipment-swiper-button-prev`}
            >
                <ChevronLeftIcon className={styles.navIcon} />
            </button>
            <button
                ref={navigationNextRef}
                className={`${styles.navButton} ${styles.nextButton} equipment-swiper-button-next`}
            >
                <ChevronRightIcon className={styles.navIcon} />
            </button>
        </div>
    )
}

export default EquipmentSwiper 