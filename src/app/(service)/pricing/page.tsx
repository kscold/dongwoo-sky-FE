"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"

import { usePricingEquipments } from "../../../common/hooks/usePricing"
import { useServicePricingSettings } from "../../../common/hooks/usePricingSettings"
import { useHomePageData } from "../../../common/hooks/useHome"
import ErrorComponent from "../../../common/components/error/ErrorComponent"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

export default function PricingPage() {
  // 기존 hooks 사용 (이미 캐싱 최적화되어 있음)
  const {
    data: equipments,
    isLoading: equipmentsLoading,
    isError: equipmentsError,
    error: equipmentsErrorData,
    refetch: refetchEquipments,
  } = usePricingEquipments()

  const {
    data: pricingSetting,
    isLoading: settingsLoading,
    isError: settingsError,
  } = useServicePricingSettings()

  // 연락처 정보만 필요하므로 조건부 쿼리 사용
  const { data: homePageData } = useHomePageData()

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [workingHours, setWorkingHours] = useState<number>(4)
  const scrollRef = useRef<HTMLDivElement>(null)

  const activeEquipments = useMemo(
    () =>
      equipments
        ?.filter((e) => e.showInPricing && e.isPublished)
        .sort((a, b) => a.sortOrder - b.sortOrder) || [],
    [equipments]
  )

  useEffect(() => {
    if (!selectedId && activeEquipments.length > 0) {
      setSelectedId(activeEquipments[0]._id || activeEquipments[0].id)
    }
  }, [activeEquipments, selectedId])

  const selectedEquipment = useMemo(
    () => activeEquipments.find((e) => (e._id || e.id) === selectedId),
    [activeEquipments, selectedId]
  )

  const calculatePrice = (equipment: Equipment, hours: number) => {
    const basePrice = equipment.basePrice || 0
    const hourlyRate = equipment.hourlyRate || 0
    const baseHours = equipment.baseHours || 4

    if (hours <= baseHours) {
      return basePrice
    }

    return basePrice + (hours - baseHours) * hourlyRate
  }

  const estimatedPrice = useMemo(() => {
    if (!selectedEquipment) return 0
    return calculatePrice(selectedEquipment, workingHours)
  }, [selectedEquipment, workingHours])

  // 관리자 설정에서 할인율 가져오기
  const discountPercentage = pricingSetting?.discountPercentage || 5
  const discountedPrice = Math.floor(
    estimatedPrice * (1 - discountPercentage / 100)
  )
  const savings = estimatedPrice - discountedPrice

  const isLoading = equipmentsLoading || settingsLoading
  const isError = equipmentsError || settingsError

  // 개선된 로딩 상태 - 데이터가 부분적으로 로드되더라도 UI 렌더링
  if (isLoading && !equipments && !pricingSetting) {
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

  // 기본값 설정 (pricingSetting이 없는 경우)
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

  const handleEquipmentSelect = (equipmentId: string) => {
    setSelectedId(equipmentId)
    const equipment = activeEquipments.find(
      (e) => (e._id || e.id) === equipmentId
    )
    if (equipment) {
      // 선택된 장비의 작업 시간 범위에 맞게 조정
      const minHours = equipment.minHours || 1
      const maxHours = equipment.maxHours || 12
      if (workingHours < minHours) {
        setWorkingHours(minHours)
      } else if (workingHours > maxHours) {
        setWorkingHours(maxHours)
      }
    }
  }

  const scrollToEquipment = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return
    
    const scrollAmount = 300 // 고정 스크롤 양
    
    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <Head>
        <title>{settings.mainTitle} - 어울림 스카이</title>
        <meta
          name="description"
          content={settings.mainSubtitle.replace("\n", " ")}
        />
      </Head>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{settings.mainTitle}</h1>
            <p className={styles.mainSubtitle}>
              {settings.mainSubtitle.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < settings.mainSubtitle.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </p>
            <div className={styles.discountBanner}>
              <div className={styles.discountIcon}>💰</div>
              <div className={styles.discountText}>
                <strong>{settings.discountBannerTitle}</strong>
                <span>{settings.discountBannerSubtitle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 장비 선택 섹션 */}
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.stepNumber}>1</span>
              {settings.equipmentSectionTitle}
            </h2>
            <p className={styles.sectionDescription}>
              {activeEquipments.length}
              {settings.equipmentSectionDescription}
            </p>
          </div>

          <div className={styles.equipmentSelector}>
            <button
              className={styles.scrollButton}
              onClick={() => scrollToEquipment("left")}
              aria-label={
                pricingSetting?.scrollLeftAriaLabel || "왼쪽으로 스크롤"
              }
            >
              ←
            </button>

            <div className={styles.equipmentScrollContainer}>
              <div className={styles.equipmentList} ref={scrollRef}>
                {activeEquipments.map((equipment) => (
                  <div
                    key={equipment._id || equipment.id}
                    className={`${styles.equipmentCard} ${
                      selectedId === (equipment._id || equipment.id)
                        ? styles.equipmentCardActive
                        : ""
                    }`}
                    onClick={() =>
                      handleEquipmentSelect(equipment._id || equipment.id)
                    }
                  >
                    <div className={styles.equipmentImageWrapper}>
                      {equipment.imageUrl ? (
                        <Image
                          src={equipment.imageUrl}
                          alt={equipment.name}
                          className={styles.equipmentImage}
                          width={200}
                          height={150}
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className={styles.equipmentImagePlaceholder}>
                          🚧
                        </div>
                      )}
                    </div>
                    <div className={styles.equipmentInfo}>
                      <h3 className={styles.equipmentName}>{equipment.name}</h3>
                      <p className={styles.equipmentPrice}>
                        {equipment.basePrice
                          ? `${equipment.basePrice.toLocaleString()}원~`
                          : "문의"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className={styles.scrollButton}
              onClick={() => scrollToEquipment("right")}
              aria-label={
                pricingSetting?.scrollRightAriaLabel || "오른쪽으로 스크롤"
              }
            >
              →
            </button>
          </div>

        </div>

        {/* 작업 시간 선택 섹션 */}
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.stepNumber}>2</span>
              {settings.timeSectionTitle}
            </h2>
            <p className={styles.sectionDescription}>
              {selectedEquipment?.minHours || 1}
              {settings.timeSectionDescription.replace(
                "시간부터 시간까지",
                `시간부터 ${selectedEquipment?.maxHours || 12}시간까지`
              )}
            </p>
          </div>

          <div className={styles.timeSelector}>
            <div className={styles.timeDisplay}>
              <span className={styles.timeLabel}>
                {pricingSetting?.timeSelectionLabel || "선택한 작업 시간"}
              </span>
              <span className={styles.timeValue}>
                {workingHours}
                {pricingSetting?.hourUnit || "시간"}
              </span>
            </div>

            <div className={styles.timeSlider}>
              <input
                type="range"
                min={selectedEquipment?.minHours || 1}
                max={selectedEquipment?.maxHours || 12}
                step="1"
                value={workingHours}
                onChange={(e) => setWorkingHours(parseInt(e.target.value))}
                className={styles.slider}
                style={{
                  "--value": `${((workingHours - (selectedEquipment?.minHours || 1)) / ((selectedEquipment?.maxHours || 12) - (selectedEquipment?.minHours || 1))) * 100}%`
                } as React.CSSProperties}
              />
              <div className={styles.sliderLabels}>
                <span>
                  {selectedEquipment?.minHours || 1}
                  {pricingSetting?.hourUnit || "시간"}
                </span>
                <span>
                  {selectedEquipment?.maxHours || 12}
                  {pricingSetting?.hourUnit || "시간"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 요금 계산 결과 섹션 */}
        <div className={styles.resultSection}>
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
                  {pricingSetting?.baseHoursLabel || "기본"}{" "}
                  {selectedEquipment?.baseHours || 4}
                  {pricingSetting?.hourUnit || "시간"}
                </span>
                <span>
                  {(selectedEquipment?.basePrice || 0).toLocaleString()}원
                </span>
              </div>
              {workingHours > (selectedEquipment?.baseHours || 4) && (
                <div className={styles.breakdownItem}>
                  <span>
                    {pricingSetting?.additionalHoursLabel || "추가"}{" "}
                    {workingHours - (selectedEquipment?.baseHours || 4)}
                    {pricingSetting?.hourUnit || "시간"}(
                    {pricingSetting?.hourlyRateLabel || "시간당"}{" "}
                    {(selectedEquipment?.hourlyRate || 0).toLocaleString()}원)
                  </span>
                  <span>
                    {(
                      (workingHours - (selectedEquipment?.baseHours || 4)) *
                      (selectedEquipment?.hourlyRate || 0)
                    ).toLocaleString()}
                    원
                  </span>
                </div>
              )}
            </div>

            <div className={styles.priceNote}>
              <div className={styles.noteIcon}>ℹ️</div>
              <div className={styles.noteText}>
                {(
                  pricingSetting?.infoNotes || [
                    "VAT 별도, 현장 상황에 따라 변동될 수 있습니다",
                    "직접 문의 시 현장 조건을 고려한 정확한 견적을 제공합니다",
                    "장기 이용 시 추가 할인 혜택이 있습니다",
                  ]
                ).map((note, index) => (
                  <p key={index}>• {note}</p>
                ))}
              </div>
            </div>

            <div className={styles.ctaSection}>
              <button
                className={styles.ctaButton}
                onClick={() => {
                  // 전화번호로 직접 연결
                  const phoneNumber = homePageData?.contactInfo?.contactPhoneNumber || "010-1234-5678"
                  window.open(`tel:${phoneNumber}`, "_self")
                }}
              >
                {settings.ctaButtonText}
              </button>
              <p className={styles.ctaSubtext}>{settings.ctaSubtext}</p>
            </div>
          </div>

          {/* 선택된 장비 상세 정보 */}
          {selectedEquipment && (
            <div className={styles.equipmentDetailCard}>
              <h3 className={styles.detailTitle}>{settings.detailCardTitle}</h3>
              <div className={styles.detailContent}>
                <div className={styles.detailImageWrapper}>
                  {selectedEquipment.imageUrl ? (
                    <Image
                      src={selectedEquipment.imageUrl}
                      alt={selectedEquipment.name}
                      className={styles.detailImage}
                      width={400}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className={styles.detailImagePlaceholder}>🚧</div>
                  )}
                </div>
                <div className={styles.detailInfo}>
                  <h4 className={styles.detailName}>
                    {selectedEquipment.name}
                  </h4>
                  <p className={styles.detailDescription}>
                    {selectedEquipment.description}
                  </p>
                  {selectedEquipment.specifications && (
                    <div className={styles.detailSpecs}>
                      <h5>
                        {pricingSetting?.specificationsLabel || "주요 사양"}
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: selectedEquipment.specifications,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
