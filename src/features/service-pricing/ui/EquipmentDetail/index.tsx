"use client"

import React from "react"
import Image from "next/image"
import { Equipment } from "../../../../types/equipment"
import * as styles from "../../styles"

interface EquipmentDetailProps {
  equipment: Equipment
  title: string
  specificationsLabel?: string
}

export function EquipmentDetail({
  equipment,
  title,
  specificationsLabel,
}: EquipmentDetailProps) {
  return (
    <div className={styles.equipmentDetailCard}>
      <h3 className={styles.detailTitle}>{title}</h3>
      <div className={styles.detailContent}>
        <div className={styles.detailImageWrapper}>
          {equipment.imageUrl ? (
            <>
              <Image
                src={equipment.imageUrl}
                alt={equipment.name}
                fill
                className={styles.detailImage}
                sizes="(max-width: 768px) 100vw, 400px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className={styles.detailImagePlaceholder} style={{ display: 'none' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 15L4 9C4 8.44772 4.44772 8 5 8L10 8L13 5L16 8L19 8C19.5523 8 20 8.44772 20 9L20 15M4 15C4 16.6569 5.34315 18 7 18C8.65685 18 10 16.6569 10 15M4 15C4 13.3431 5.34315 12 7 12C8.65685 12 10 13.3431 10 15M20 15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15M20 15C20 13.3431 18.6569 12 17 12C15.3431 12 14 13.3431 14 15M10 15L14 15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </>
          ) : (
            <div className={styles.detailImagePlaceholder}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15L4 9C4 8.44772 4.44772 8 5 8L10 8L13 5L16 8L19 8C19.5523 8 20 8.44772 20 9L20 15M4 15C4 16.6569 5.34315 18 7 18C8.65685 18 10 16.6569 10 15M4 15C4 13.3431 5.34315 12 7 12C8.65685 12 10 13.3431 10 15M20 15C20 16.6569 18.6569 18 17 18C15.3431 18 14 16.6569 14 15M20 15C20 13.3431 18.6569 12 17 12C15.3431 12 14 13.3431 14 15M10 15L14 15" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
        <div className={styles.detailInfo}>
          <h4 className={styles.detailName}>{equipment.name}</h4>
          <p className={styles.detailDescription}>{equipment.description}</p>
          <div className={styles.detailSpecs}>
            <strong>{specificationsLabel || "제원"}</strong>
            <p>{equipment.specifications}</p>
          </div>
        </div>
      </div>
    </div>
  )
}