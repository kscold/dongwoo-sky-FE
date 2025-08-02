"use client"

import React from "react"
import { Equipment } from "../../../../types/equipment"
import * as styles from "../../styles"

interface PriceCardProps {
  selectedEquipment: Equipment | null
  workingHours: number
  estimatedPrice: number
  discountedPrice: number
  savings: number
  settings: any
  infoNotes?: string[]
  baseHoursLabel?: string
  additionalHoursLabel?: string
  hourUnit?: string
  hourlyRateLabel?: string
  onContactClick: () => void
}

export function PriceCard({
  selectedEquipment,
  workingHours,
  estimatedPrice,
  discountedPrice,
  savings,
  settings,
  infoNotes,
  baseHoursLabel,
  additionalHoursLabel,
  hourUnit,
  hourlyRateLabel,
  onContactClick,
}: PriceCardProps) {
  if (!selectedEquipment) {
    return (
      <div className={styles.priceCard}>
        <div className={styles.priceHeader}>
          <h3 className={styles.priceTitle}>{settings.priceCardTitle}</h3>
        </div>
        <div className={styles.priceNote}>
          <span className={styles.noteIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <p className={styles.noteText}>
            장비와 작업 시간을 선택하시면 예상 견적을 확인할 수 있습니다.
          </p>
        </div>
        <div className={styles.ctaSection}>
          <button className={styles.ctaButton} onClick={onContactClick}>
            {settings.ctaButtonText}
          </button>
          <p className={styles.ctaSubtext}>{settings.ctaSubtext}</p>
        </div>
      </div>
    )
  }

  const additionalHours = Math.max(0, workingHours - selectedEquipment.baseHours)

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHeader}>
        <h3 className={styles.priceTitle}>{settings.priceCardTitle}</h3>
      </div>

      <div className={styles.priceComparison}>
        <div className={styles.originalPrice}>
          <span className={styles.originalPriceLabel}>
            {settings.contactPriceLabel}
          </span>
          <span className={styles.originalPriceValue}>
            {estimatedPrice.toLocaleString()}원
          </span>
        </div>
        <div className={styles.discountPrice}>
          <span className={styles.discountPriceLabel}>
            {settings.onlinePriceLabel}
          </span>
          <span className={styles.discountPriceValue}>
            {discountedPrice.toLocaleString()}원
          </span>
          <span className={styles.savings}>
            {savings.toLocaleString()}
            {settings.savingsLabel}
          </span>
        </div>
      </div>

      <div className={styles.priceBreakdown}>
        <div className={styles.breakdownItem}>
          <span>
            {baseHoursLabel || "기본"} {selectedEquipment.baseHours} {hourUnit || "시간"}
          </span>
          <span>{selectedEquipment.basePrice.toLocaleString()}원</span>
        </div>
        {additionalHours > 0 && (
          <div className={styles.breakdownItem}>
            <span>
              {additionalHoursLabel || "추가"} {additionalHours} {hourUnit || "시간"}
            </span>
            <span>
              {(additionalHours * selectedEquipment.hourlyRate).toLocaleString()}원
            </span>
          </div>
        )}
        <div className={styles.breakdownItem}>
          <span>{hourlyRateLabel || "시간당 요금"}</span>
          <span>{selectedEquipment.hourlyRate.toLocaleString()}원</span>
        </div>
      </div>

      {infoNotes && infoNotes.length > 0 && (
        <div className={styles.priceNote}>
          <span className={styles.noteIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className={styles.noteText}>
            {infoNotes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      )}

      <div className={styles.ctaSection}>
        <button className={styles.ctaButton} onClick={onContactClick}>
          {settings.ctaButtonText}
        </button>
        <p className={styles.ctaSubtext}>{settings.ctaSubtext}</p>
      </div>
    </div>
  )
}