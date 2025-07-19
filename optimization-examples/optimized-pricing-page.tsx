"use client"

import React, { useState, useMemo, useEffect, useRef, Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Head from "next/head"

import { useQueries } from "@tanstack/react-query"
import { usePricingEquipments } from "../../../common/hooks/usePricing"
import { useServicePricingSettings } from "../../../common/hooks/usePricingSettings"
import { useConditionalQuery } from "./optimized-hooks"
import ErrorComponent from "../../../common/components/error/ErrorComponent"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

// 동적 임포트로 번들 크기 최적화
const PricingCalculator = dynamic(
  () => import("../../../common/components/pricing/PricingCalculator"),
  { 
    loading: () => <div className={styles.calculatorSkeleton}>계산기 로딩 중...</div>,
    ssr: false 
  }
)

const EquipmentDetailModal = dynamic(
  () => import("../../../common/components/equipment/EquipmentDetailModal"),
  { ssr: false }
)

export default function OptimizedPricingPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [workingHours, setWorkingHours] = useState<number>(4)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // 병렬 쿼리 실행으로 로딩 시간 단축
  const queries = useQueries({
    queries: [
      {
        queryKey: ['pricingEquipments'],
        queryFn: () => import('../../../api/pricing').then(api => api.pricingApi.getPricingEquipments()),
        staleTime: 10 * 60 * 1000, // 장비 정보는 자주 변경되지 않으므로 10분간 캐시
      },
      {
        queryKey: ['servicePricingSetting'],
        queryFn: () => import('../../../api/pricingSettings').then(api => api.servicePricingApi.getPricingSettings()),
        staleTime: 15 * 60 * 1000, // 설정은 더 오래 캐시
      },
    ],
    combine: (results) => {
      const [equipmentsResult, settingsResult] = results
      return {
        equipments: equipmentsResult.data,
        pricingSetting: settingsResult.data,
        isLoading: results.some(result => result.isLoading),
        isError: results.some(result => result.isError),
        errors: results.filter(result => result.error).map(result => result.error),
      }
    }
  })

  // 연락처 정보는 조건부로만 로드 (CTA 버튼 클릭 시에만 필요)
  const { data: contactInfo } = useConditionalQuery(
    ['home', 'contact'],
    () => import('../../../api/home').then(api => 
      api.getHomePageData().then(data => data.contactInfo)
    ),
    false, // 초기에는 로드하지 않음
    { staleTime: 30 * 60 * 1000 } // 연락처 정보는 30분간 캐시
  )

  const activeEquipments = useMemo(
    () =>
      queries.equipments
        ?.filter((e: Equipment) => e.showInPricing && e.isPublished)
        .sort((a: Equipment, b: Equipment) => a.sortOrder - b.sortOrder) || [],
    [queries.equipments]
  )

  // 선택된 장비 정보 메모이제이션
  const selectedEquipment = useMemo(
    () => activeEquipments.find((e: Equipment) => (e._id || e.id) === selectedId),
    [activeEquipments, selectedId]
  )

  // 가격 계산 메모이제이션
  const estimatedPrice = useMemo(() => {
    if (!selectedEquipment) return 0
    const basePrice = selectedEquipment.basePrice || 0
    const hourlyRate = selectedEquipment.hourlyRate || 0
    const baseHours = selectedEquipment.baseHours || 4

    if (workingHours <= baseHours) {
      return basePrice
    }
    return basePrice + (workingHours - baseHours) * hourlyRate
  }, [selectedEquipment, workingHours])

  // 초기 장비 선택
  useEffect(() => {
    if (!selectedId && activeEquipments.length > 0) {
      setSelectedId(activeEquipments[0]._id || activeEquipments[0].id)
    }
  }, [activeEquipments, selectedId])

  // 스켈레톤 UI 개선
  if (queries.isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.heroSkeleton}>
          <div className={styles.titleSkeleton} />
          <div className={styles.subtitleSkeleton} />
          <div className={styles.bannerSkeleton} />
        </div>
        <div className={styles.equipmentGridSkeleton}>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className={styles.equipmentCardSkeleton} />
          ))}
        </div>
        <div className={styles.calculatorSkeleton} />
      </div>
    )
  }

  if (queries.isError) {
    return (
      <div className={styles.container}>
        <ErrorComponent
          error={queries.errors[0] || new Error('데이터를 불러올 수 없습니다')}
          reset={() => window.location.reload()}
        />
      </div>
    )
  }

  const settings = queries.pricingSetting || {
    mainTitle: "투명한 가격으로 바로 견적을 받아보세요",
    mainSubtitle: "투명하고 합리적인 비용으로 최상의 서비스를 제공합니다.",
    discountPercentage: 5,
  }

  const discountPercentage = settings.discountPercentage || 5
  const discountedPrice = Math.floor(estimatedPrice * (1 - discountPercentage / 100))
  const savings = estimatedPrice - discountedPrice

  const handleEquipmentSelect = (equipmentId: string) => {
    setSelectedId(equipmentId)
    const equipment = activeEquipments.find(
      (e: Equipment) => (e._id || e.id) === equipmentId
    )
    if (equipment) {
      const minHours = equipment.minHours || 1
      const maxHours = equipment.maxHours || 12
      if (workingHours < minHours) {
        setWorkingHours(minHours)
      } else if (workingHours > maxHours) {
        setWorkingHours(maxHours)
      }
    }
  }

  const handleContactClick = async () => {
    // 연락처 정보가 없으면 로드
    if (!contactInfo) {
      // 이때 조건부 쿼리가 실행됨
    }
    const phoneNumber = contactInfo?.contactPhoneNumber || "010-1234-5678"
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <>
      <Head>
        <title>{settings.mainTitle} - 어울림 스카이</title>
        <meta name="description" content={settings.mainSubtitle} />
        <link rel="preload" href="/images/equipment-placeholder.webp" as="image" />
      </Head>

      <div className={styles.container}>
        {/* 헤더 섹션 */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{settings.mainTitle}</h1>
            <p className={styles.mainSubtitle}>{settings.mainSubtitle}</p>
            <div className={styles.discountBanner}>
              <div className={styles.discountIcon}>💰</div>
              <div className={styles.discountText}>
                <strong>지금 온라인 견적시</strong>
                <span>최대 {discountPercentage}% 할인!</span>
              </div>
            </div>
          </div>
        </div>

        {/* 장비 선택 섹션 - 가상 스크롤링 적용 */}
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.stepNumber}>1</span>
              장비 선택
            </h2>
            <p className={styles.sectionDescription}>
              {activeEquipments.length}개의 장비 중에서 선택하세요
            </p>
          </div>

          <div className={styles.equipmentGrid}>
            {activeEquipments.map((equipment: Equipment) => (
              <div
                key={equipment._id || equipment.id}
                className={`${styles.equipmentCard} ${
                  selectedId === (equipment._id || equipment.id)
                    ? styles.equipmentCardActive
                    : ""
                }`}
                onClick={() => handleEquipmentSelect(equipment._id || equipment.id)}
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
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHR8f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9vYWtjcahdpBEZvJV1eXy8v/Qjxin+2n8uN8v8pZYbRgRVVlY7J7P/2Q=="
                    />
                  ) : (
                    <div className={styles.equipmentImagePlaceholder}>🚧</div>
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

        {/* 작업 시간 선택 섹션 */}
        <Suspense fallback={<div className={styles.calculatorSkeleton} />}>
          <PricingCalculator
            selectedEquipment={selectedEquipment}
            workingHours={workingHours}
            onWorkingHoursChange={setWorkingHours}
            estimatedPrice={estimatedPrice}
            discountedPrice={discountedPrice}
            savings={savings}
            settings={settings}
            onContactClick={handleContactClick}
            onShowDetail={() => setShowDetailModal(true)}
          />
        </Suspense>

        {/* 장비 상세 모달 */}
        {showDetailModal && selectedEquipment && (
          <Suspense fallback={null}>
            <EquipmentDetailModal
              equipment={selectedEquipment}
              onClose={() => setShowDetailModal(false)}
            />
          </Suspense>
        )}
      </div>
    </>
  )
}