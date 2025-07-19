import React from "react"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

interface PriceCalculatorCardProps {
  selectedEquipment: Equipment | undefined
  workingHours: number
  estimatedPrice: number
  discountedPrice: number
  savings: number
  settings: {
    priceCardTitle: string
    onlinePriceLabel: string
    contactPriceLabel: string
    savingsLabel: string
    ctaButtonText: string
    ctaSubtext: string
  }
  infoNotes?: string[]
  baseHoursLabel?: string
  additionalHoursLabel?: string
  hourUnit?: string
  hourlyRateLabel?: string
  onContactClick: () => void
}

export const PriceCalculatorCard: React.FC<PriceCalculatorCardProps> = ({
  selectedEquipment,
  workingHours,
  estimatedPrice,
  discountedPrice,
  savings,
  settings,
  infoNotes = [
    "VAT 별도, 현장 상황에 따라 변동될 수 있습니다",
    "직접 문의 시 현장 조건을 고려한 정확한 견적을 제공합니다",
    "장기 이용 시 추가 할인 혜택이 있습니다",
  ],
  baseHoursLabel = "기본",
  additionalHoursLabel = "추가",
  hourUnit = "시간",
  hourlyRateLabel = "시간당",
  onContactClick
}) => {
  const baseHours = selectedEquipment?.baseHours || 4
  const basePrice = selectedEquipment?.basePrice || 0
  const hourlyRate = selectedEquipment?.hourlyRate || 0

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHeader}>
        <h3 className={styles.priceTitle}>{settings.priceCardTitle}</h3>
        <div className={styles.priceComparison}>
          <div className={styles.originalPrice}>
            <span className={styles.originalPriceLabel}>
              {settings.onlinePriceLabel}
            </span>
            <span className={styles.originalPriceValue}>
              {estimatedPrice.toLocaleString()}원
            </span>
          </div>
          <div className={styles.discountPrice}>
            <span className={styles.discountPriceLabel}>
              {settings.contactPriceLabel}
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
      </div>

      <div className={styles.priceBreakdown}>
        <div className={styles.breakdownItem}>
          <span>
            {baseHoursLabel} {baseHours}{hourUnit}
          </span>
          <span>{basePrice.toLocaleString()}원</span>
        </div>
        {workingHours > baseHours && (
          <div className={styles.breakdownItem}>
            <span>
              {additionalHoursLabel} {workingHours - baseHours}{hourUnit}(
              {hourlyRateLabel} {hourlyRate.toLocaleString()}원)
            </span>
            <span>
              {((workingHours - baseHours) * hourlyRate).toLocaleString()}원
            </span>
          </div>
        )}
      </div>

      <div className={styles.priceNote}>
        <div className={styles.noteIcon}>ℹ️</div>
        <div className={styles.noteText}>
          {infoNotes.map((note, index) => (
            <p key={index}>• {note}</p>
          ))}
        </div>
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