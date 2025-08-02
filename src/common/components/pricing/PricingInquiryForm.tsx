"use client"

import React, { useState } from "react"
import { useEquipments } from "../../hooks/useEquipment"
import { useContactSettings } from "../../hooks/useContact"
import { PricingInquiryData } from "../../../api/contact"
import * as styles from "../../../styles/service/components/pricing-inquiry.css"

interface PricingInquiryFormProps {
  onPricingDataChange: (data: PricingInquiryData | null) => void
  disabled?: boolean
}

export default function PricingInquiryForm({ 
  onPricingDataChange, 
  disabled = false 
}: PricingInquiryFormProps) {
  const { data: equipments = [] } = useEquipments()
  const { data: settings } = useContactSettings()
  const [pricingData, setPricingData] = useState<PricingInquiryData>({
    equipmentIds: [],
    workLocation: "",
    workingHours: 8,
    workingDays: 1,
    workStartDate: undefined,
    workEndDate: undefined,
    specialRequirements: "",
    siteConditions: "",
    accessRequirements: "",
  })

  const handleInputChange = (field: keyof PricingInquiryData, value: any) => {
    const updatedData = {
      ...pricingData,
      [field]: value,
    }
    setPricingData(updatedData)
    onPricingDataChange(updatedData)
  }

  const handleEquipmentSelection = (equipmentId: string, selected: boolean) => {
    const updatedIds = selected
      ? [...pricingData.equipmentIds, equipmentId]
      : pricingData.equipmentIds.filter(id => id !== equipmentId)
    
    handleInputChange("equipmentIds", updatedIds)
  }

  // 요금 서비스가 비활성화된 경우 렌더링하지 않음
  if (!settings?.pricingService?.enabled) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {settings?.pricingService?.title || "장비 렌탈 견적 문의"}
        </h3>
        <p className={styles.description}>
          {settings?.pricingService?.description || 
           "필요한 장비와 작업 조건을 선택하시면 대략적인 견적을 제공해드립니다."}
        </p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>필요한 장비 선택</h4>
        <div className={styles.equipmentGrid}>
          {equipments
            .filter(eq => eq.isPublished && eq.showInPricing)
            .map((equipment) => (
              <div key={equipment.id} className={styles.equipmentCard}>
                <label className={styles.equipmentLabel}>
                  <input
                    type="checkbox"
                    checked={pricingData.equipmentIds.includes(equipment.id)}
                    onChange={(e) => handleEquipmentSelection(equipment.id, e.target.checked)}
                    disabled={disabled}
                    className={styles.equipmentCheckbox}
                  />
                  <div className={styles.equipmentInfo}>
                    {equipment.imageUrl && (
                      <img 
                        src={equipment.imageUrl} 
                        alt={equipment.name}
                        className={styles.equipmentImage}
                      />
                    )}
                    <div className={styles.equipmentDetails}>
                      <h5 className={styles.equipmentName}>{equipment.name}</h5>
                      <p className={styles.equipmentDescription}>{equipment.description}</p>
                      {equipment.tonnage && (
                        <span className={styles.equipmentSpec}>톤급: {equipment.tonnage}</span>
                      )}
                    </div>
                  </div>
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>작업 정보</h4>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>작업 현장 주소</label>
            <input
              type="text"
              value={pricingData.workLocation}
              onChange={(e) => handleInputChange("workLocation", e.target.value)}
              className={styles.input}
              placeholder="예: 서울시 강남구 테헤란로 123"
              disabled={disabled}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>일일 작업 시간</label>
            <select
              value={pricingData.workingHours}
              onChange={(e) => handleInputChange("workingHours", parseInt(e.target.value))}
              className={styles.select}
              disabled={disabled}
            >
              <option value={4}>4시간</option>
              <option value={8}>8시간 (기본)</option>
              <option value={10}>10시간</option>
              <option value={12}>12시간</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>예상 작업 일수</label>
            <input
              type="number"
              min="1"
              max="365"
              value={pricingData.workingDays}
              onChange={(e) => handleInputChange("workingDays", parseInt(e.target.value))}
              className={styles.input}
              disabled={disabled}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>작업 시작 예정일</label>
            <input
              type="date"
              value={pricingData.workStartDate ? pricingData.workStartDate.toISOString().split('T')[0] : ''}
              onChange={(e) => handleInputChange("workStartDate", e.target.value ? new Date(e.target.value) : undefined)}
              className={styles.input}
              disabled={disabled}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>작업 종료 예정일</label>
            <input
              type="date"
              value={pricingData.workEndDate ? pricingData.workEndDate.toISOString().split('T')[0] : ''}
              onChange={(e) => handleInputChange("workEndDate", e.target.value ? new Date(e.target.value) : undefined)}
              className={styles.input}
              disabled={disabled}
            />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>추가 정보</h4>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>특수 요구사항</label>
            <textarea
              value={pricingData.specialRequirements || ""}
              onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
              className={styles.textarea}
              placeholder="특별한 작업 조건이나 요구사항이 있으시면 입력해주세요"
              rows={3}
              disabled={disabled}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>현장 상황</label>
            <textarea
              value={pricingData.siteConditions || ""}
              onChange={(e) => handleInputChange("siteConditions", e.target.value)}
              className={styles.textarea}
              placeholder="현장의 지형, 접근성, 주변 환경 등을 설명해주세요"
              rows={3}
              disabled={disabled}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>진입로 및 접근 조건</label>
            <textarea
              value={pricingData.accessRequirements || ""}
              onChange={(e) => handleInputChange("accessRequirements", e.target.value)}
              className={styles.textarea}
              placeholder="장비 진입을 위한 도로 상황, 제약사항 등을 알려주세요"
              rows={3}
              disabled={disabled}
            />
          </div>
        </div>
      </div>

      {settings?.pricingService?.disclaimerText && (
        <div className={styles.disclaimer}>
          <p>{settings.pricingService.disclaimerText}</p>
        </div>
      )}
    </div>
  )
}