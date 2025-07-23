"use client"

import React from "react"
import { usePricingCalculator } from "../../../common/hooks/usePricingCalculator"
import { useHomePageData } from "../../../common/hooks/useHome"
import { PricingHeroSection } from "../../../common/components/pricing/PricingHeroSection"
import { EquipmentSelector } from "../../../common/components/pricing/EquipmentSelector"
import { WorkingHoursSelector } from "../../../common/components/pricing/WorkingHoursSelector"
import { PriceCalculatorCard } from "../../../common/components/pricing/PriceCalculatorCard"
import { EquipmentDetailCard } from "../../../common/components/pricing/EquipmentDetailCard"
import ErrorComponent from "../../../common/components/error/ErrorComponent"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import * as styles from "../../../styles/page/pricing-page.css"

export default function PricingPage() {
  const {
    activeEquipments,
    selectedEquipment,
    pricingSetting,
    selectedId,
    workingHours,
    setWorkingHours,
    estimatedPrice,
    discountedPrice,
    savings,
    discountPercentage,
    handleEquipmentSelect,
    isLoading,
    isError,
    equipmentsErrorData,
    refetchEquipments,
  } = usePricingCalculator()

  const { data: homePageData } = useHomePageData()

  if (isLoading && !pricingSetting) {
    return <PageSkeleton variant="pricing" />
  }

  if (isError) {
    return (
      <div className={styles.container}>
        <ErrorComponent
          error={equipmentsErrorData as Error}
          reset={refetchEquipments}
        />
      </div>
    )
  }

  const settings = pricingSetting || {
    mainTitle: "투명한 가격으로 바로 견적을 받아보세요",
    mainSubtitle:
      "투명하고 합리적인 비용으로 최상의 서비스를 제공합니다.\n원하시는 장비를 선택하고 작업 시간을 조절하여 예상 비용을 확인해보세요.",
    discountBannerTitle: "지금 온라인 견적시",
    discountBannerSubtitle: `최대 ${discountPercentage}% 할인!`,
    equipmentSectionTitle: "장비 선택",
    equipmentSectionDescription: "개의 장비 중에서 선택하세요",
    timeSectionTitle: "작업 시간 선택",
    timeSectionDescription: "시간부터 시간까지 선택 가능",
    priceCardTitle: "예상 이용 요금",
    onlinePriceLabel: "온라인 견적",
    contactPriceLabel: "직접 문의 시",
    savingsLabel: "원 절약!",
    ctaButtonText: "📞 직접 문의하고 할인받기",
    ctaSubtext: "전화 상담을 통해 더 정확한 견적과 할인 혜택을 받아보세요",
    detailCardTitle: "선택한 장비 정보",
  }

  const handleContactClick = () => {
    const phoneNumber =
      homePageData?.contactInfo?.contactPhoneNumber || "010-1234-5678"
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <PricingHeroSection settings={settings} />
        <EquipmentSelector
          activeEquipments={activeEquipments}
          selectedId={selectedId}
          onEquipmentSelect={handleEquipmentSelect}
          settings={settings}
          scrollLeftAriaLabel={pricingSetting?.scrollLeftAriaLabel}
          scrollRightAriaLabel={pricingSetting?.scrollRightAriaLabel}
        />
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{settings.timeSectionTitle}</h2>
          <p className={styles.sectionDescription}>
            {settings.timeSectionDescription}
          </p>
        </div>
        <div className={styles.resultSection}>
          <WorkingHoursSelector
            selectedEquipment={selectedEquipment}
            workingHours={workingHours}
            onWorkingHoursChange={setWorkingHours}
            settings={settings}
            timeSelectionLabel={pricingSetting?.timeSelectionLabel}
            hourUnit={pricingSetting?.hourUnit}
            onContactClick={handleContactClick}
          />

          <PriceCalculatorCard
            selectedEquipment={selectedEquipment}
            workingHours={workingHours}
            estimatedPrice={estimatedPrice}
            discountedPrice={discountedPrice}
            savings={savings}
            settings={settings}
            infoNotes={pricingSetting?.infoNotes}
            baseHoursLabel={pricingSetting?.baseHoursLabel}
            additionalHoursLabel={pricingSetting?.additionalHoursLabel}
            hourUnit={pricingSetting?.hourUnit}
            hourlyRateLabel={pricingSetting?.hourlyRateLabel}
            onContactClick={handleContactClick}
          />

          {selectedEquipment && (
            <EquipmentDetailCard
              equipment={selectedEquipment}
              title={settings.detailCardTitle}
              specificationsLabel={pricingSetting?.specificationsLabel}
            />
          )}
        </div>
      </div>
    </div>
  )
}
