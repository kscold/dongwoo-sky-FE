"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import { Equipment } from "../../../../types/equipment"
import * as styles from "../../styles"

interface EquipmentSelectorProps {
  activeEquipments: Equipment[]
  selectedId: string
  onEquipmentSelect: (equipment: Equipment) => void
  settings: any
  scrollLeftAriaLabel?: string
  scrollRightAriaLabel?: string
}

export function EquipmentSelector({
  activeEquipments,
  selectedId,
  onEquipmentSelect,
  settings,
  scrollLeftAriaLabel,
  scrollRightAriaLabel,
}: EquipmentSelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{settings.equipmentSectionTitle}</h2>
        <p className={styles.sectionDescription}>
          {activeEquipments.length}
          {settings.equipmentSectionDescription}
        </p>
      </div>
      <section className={styles.equipmentSelector}>
        <button
          className={styles.scrollButton}
          onClick={() => handleScroll("left")}
          aria-label={scrollLeftAriaLabel || "이전 장비 보기"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={styles.equipmentScrollContainer}>
          <div className={styles.equipmentList} ref={scrollContainerRef}>
            {activeEquipments.map((equipment) => (
              <div
                key={equipment.id}
                className={`${styles.equipmentCard} ${
                  selectedId === equipment.id ? styles.equipmentCardActive : ""
                }`}
                onClick={() => onEquipmentSelect(equipment)}
              >
                <div className={styles.equipmentImageWrapper}>
                  {equipment.imageUrl ? (
                    <>
                      <Image
                        src={equipment.imageUrl}
                        alt={equipment.name}
                        fill
                        className={styles.equipmentImage}
                        sizes="(max-width: 768px) 280px, 280px"
                        priority
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      <div className={styles.equipmentImagePlaceholder} style={{ display: 'none' }}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 15L4 9C4 8.44772 4.44772 8 5 8L10 8L13 5L16 8L19 8C19.5523 8 20 8.44772 20 9L20 15M4 15C4 16.6569 5.34315 18 7 18C8.65685 18 10 16.6569 10 15M4 15C4 13.3431 5.34315 12 7 12C8.65685 12 10 13.3431 10 15M20 15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15M20 15C20 13.3431 18.6569 12 17 12C15.3431 12 14 13.3431 14 15M10 15L14 15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </>
                  ) : (
                    <div className={styles.equipmentImagePlaceholder}>
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 15L4 9C4 8.44772 4.44772 8 5 8L10 8L13 5L16 8L19 8C19.5523 8 20 8.44772 20 9L20 15M4 15C4 16.6569 5.34315 18 7 18C8.65685 18 10 16.6569 10 15M4 15C4 13.3431 5.34315 12 7 12C8.65685 12 10 13.3431 10 15M20 15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15M20 15C20 13.3431 18.6569 12 17 12C15.3431 12 14 13.3431 14 15M10 15L14 15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className={styles.equipmentInfo}>
                  <h3 className={styles.equipmentName}>{equipment.name}</h3>
                  <p className={styles.equipmentPrice}>
                    {equipment.basePrice.toLocaleString()}원/{equipment.baseHours}시간
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={styles.scrollButton}
          onClick={() => handleScroll("right")}
          aria-label={scrollRightAriaLabel || "다음 장비 보기"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>
    </>
  )
}