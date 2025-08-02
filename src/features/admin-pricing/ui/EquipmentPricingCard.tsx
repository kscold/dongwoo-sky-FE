import React from "react"
import { Input, Button } from "../../../common/components/atoms"
import { EquipmentPricing } from "../../../api/contact"
import * as styles from "./equipment-pricing-card.css"

interface EquipmentPricingCardProps {
  pricing: EquipmentPricing
  isEditing: boolean
  imageSrc?: string
  onEdit: () => void
  onCancel: () => void
  onChange: (field: keyof EquipmentPricing, value: any) => void
}

export const EquipmentPricingCard: React.FC<EquipmentPricingCardProps> = ({
  pricing,
  isEditing,
  imageSrc,
  onEdit,
  onCancel,
  onChange
}) => {
  return (
    <div className={styles.equipmentCard}>
      <div className={styles.equipmentHeader}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={pricing.equipmentName}
            className={styles.equipmentImage}
          />
        )}
        <div className={styles.equipmentInfo}>
          <h4 className={styles.equipmentName}>{pricing.equipmentName}</h4>
          <div className={styles.headerActions}>
            {!isEditing ? (
              <Button size="sm" variant="secondary" onClick={onEdit}>
                수정
              </Button>
            ) : (
              <Button size="sm" variant="ghost" onClick={onCancel}>
                취소
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.equipmentBody}>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingField}>
            <label className={styles.fieldLabel}>기본 요금</label>
            {isEditing ? (
              <Input
                type="number"
                value={pricing.basePrice}
                onChange={(e) => onChange("basePrice", Number(e.target.value))}
              />
            ) : (
              <span className={styles.fieldValue}>
                {pricing.basePrice.toLocaleString()}원
              </span>
            )}
          </div>

          <div className={styles.pricingField}>
            <label className={styles.fieldLabel}>시간당 요금</label>
            {isEditing ? (
              <Input
                type="number"
                value={pricing.hourlyRate}
                onChange={(e) => onChange("hourlyRate", Number(e.target.value))}
              />
            ) : (
              <span className={styles.fieldValue}>
                {pricing.hourlyRate.toLocaleString()}원
              </span>
            )}
          </div>

          <div className={styles.pricingField}>
            <label className={styles.fieldLabel}>기본 시간</label>
            {isEditing ? (
              <Input
                type="number"
                value={pricing.baseHours}
                onChange={(e) => onChange("baseHours", Number(e.target.value))}
              />
            ) : (
              <span className={styles.fieldValue}>{pricing.baseHours}시간</span>
            )}
          </div>

          <div className={styles.pricingField}>
            <label className={styles.fieldLabel}>최소/최대 시간</label>
            {isEditing ? (
              <div className={styles.timeRange}>
                <Input
                  type="number"
                  value={pricing.minHours}
                  onChange={(e) => onChange("minHours", Number(e.target.value))}
                  placeholder="최소"
                />
                <span>~</span>
                <Input
                  type="number"
                  value={pricing.maxHours}
                  onChange={(e) => onChange("maxHours", Number(e.target.value))}
                  placeholder="최대"
                />
              </div>
            ) : (
              <span className={styles.fieldValue}>
                {pricing.minHours}시간 ~ {pricing.maxHours}시간
              </span>
            )}
          </div>
        </div>

        {isEditing && (
          <div className={styles.notesField}>
            <label className={styles.fieldLabel}>요금 메모</label>
            <input
              type="text"
              value={pricing.calculationNotes || ""}
              onChange={(e) => onChange("calculationNotes", e.target.value)}
              className={styles.notesInput}
              placeholder="요금 관련 메모 입력"
            />
          </div>
        )}
      </div>
    </div>
  )
}