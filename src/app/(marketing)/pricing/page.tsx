"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  FaTruckMoving,
  FaBuilding,
  FaCalculator,
  FaInfoCircle,
} from "react-icons/fa"
import Image from "next/image"

import * as styles from "@/styles/pricing.css"
import { VehicleType } from "@/types/vehicle-type"
import { vehicleTypeApi } from "@/api/vehicle-type"

// 아이콘 맵핑
const getVehicleIcon = (type: string) => {
  switch (type) {
    case "ladder":
      return FaTruckMoving
    case "sky":
      return FaBuilding
    default:
      return FaTruckMoving
  }
}

export default function PricingPage() {
  const router = useRouter()
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0)
  const [workingHours, setWorkingHours] = useState<number>(4)
  const [basePrice, setBasePrice] = useState<number>(0)
  const [hourlyRate, setHourlyRate] = useState<number>(0)

  // 차량 타입 데이터 로드
  useEffect(() => {
    const loadVehicleTypes = async () => {
      try {
        const data = await vehicleTypeApi.getAll()
        const activeVehicleTypes = data
          .filter((v: VehicleType) => v.isActive)
          .sort((a: VehicleType, b: VehicleType) => a.sortOrder - b.sortOrder)
        setVehicleTypes(activeVehicleTypes)
        if (activeVehicleTypes.length > 0) {
          setSelectedVehicle(activeVehicleTypes[0]._id)
        }
      } catch (error) {
        console.error("차량 타입 로드 실패:", error)
      } finally {
        setLoading(false)
      }
    }
    loadVehicleTypes()
  }, [])

  useEffect(() => {
    // 선택된 차량이 변경될 때 가격 정보 파싱
    if (selectedVehicle) {
      const currentVehicle = vehicleTypes.find(
        (v: VehicleType) => v._id === selectedVehicle
      )
      if (currentVehicle) {
        // 가격대 정보에서 기본 가격과 시간당 요금 파싱
        let parsedBasePrice = 0
        let parsedHourlyRate = 0

        currentVehicle.priceRanges.forEach((priceRange) => {
          // "기본 4시간: 180,000원" 패턴 매칭
          const baseMatch = priceRange.match(
            /기본\s*(\d+)시간:\s*(\d{1,3}(?:,\d{3})*)원/
          )
          if (baseMatch) {
            const hours = parseInt(baseMatch[1])
            const price = parseInt(baseMatch[2].replace(/,/g, ""))
            parsedBasePrice = price
            // 기본 시간을 기준으로 시간당 요금 계산
            parsedHourlyRate = Math.round(price / hours)
            setWorkingHours(hours) // 기본 시간으로 설정
          }

          // "시간당 추가: 45,000원" 패턴 매칭
          const hourlyMatch = priceRange.match(
            /시간당\s*추가:\s*(\d{1,3}(?:,\d{3})*)원/
          )
          if (hourlyMatch) {
            parsedHourlyRate = parseInt(hourlyMatch[1].replace(/,/g, ""))
          }
        })

        setBasePrice(parsedBasePrice)
        setHourlyRate(parsedHourlyRate)

        // 초기 가격 계산
        setEstimatedPrice(parsedBasePrice)
      }
    }
  }, [selectedVehicle, vehicleTypes])

  // 작업 시간이 변경될 때 가격 재계산
  useEffect(() => {
    if (basePrice > 0 && hourlyRate > 0) {
      // 기본 4시간 기준으로 가격 계산
      const baseHours = 4
      if (workingHours <= baseHours) {
        setEstimatedPrice(basePrice)
      } else {
        const additionalHours = workingHours - baseHours
        setEstimatedPrice(basePrice + additionalHours * hourlyRate)
      }
    }
  }, [workingHours, basePrice, hourlyRate])

  const handleVehicleChange = (vehicleId: string) => {
    setSelectedVehicle(vehicleId)
  }

  const handleInquiry = () => {
    const currentVehicle = vehicleTypes.find(
      (v: VehicleType) => v._id === selectedVehicle
    )
    if (!currentVehicle) return

    const inquiryDetails = {
      vehicleType: currentVehicle.name,
      workingHours: `${workingHours}시간`,
      specifications: currentVehicle.specifications,
      estimatedPrice: estimatedPrice.toLocaleString(),
      priceRanges: currentVehicle.priceRanges,
      basePrice: basePrice.toLocaleString(),
      hourlyRate: hourlyRate.toLocaleString(),
    }
    const query = encodeURIComponent(JSON.stringify(inquiryDetails))
    router.push(`/contact?details=${query}`)
  }

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.mainTitle}>로딩 중...</h1>
          </div>
        </div>
      </div>
    )
  }

  const currentVehicle = vehicleTypes.find((v) => v._id === selectedVehicle)
  const CurrentIcon = currentVehicle
    ? getVehicleIcon(currentVehicle.type)
    : FaTruckMoving

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>실시간 요금 계산기</h1>
          <p className={styles.subTitle}>
            필요한 장비와 작업 조건을 선택하고, 합리적인 예상 비용을 바로
            확인해보세요.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>1. 차량 종류 선택</h2>
          <div className={styles.truckSelectorGrid}>
            {vehicleTypes.map((vehicle) => {
              const Icon = getVehicleIcon(vehicle.type)
              const isSelected = selectedVehicle === vehicle._id
              return (
                <button
                  key={vehicle._id}
                  onClick={() => handleVehicleChange(vehicle._id)}
                  className={
                    isSelected
                      ? styles.truckButtonSelected
                      : styles.truckButtonDefault
                  }
                >
                  {vehicle.iconUrl ? (
                    <div className={styles.vehicleIconContainer}>
                      <Image
                        src={vehicle.iconUrl}
                        alt={vehicle.name}
                        width={32}
                        height={32}
                        className={styles.vehicleIconImage}
                      />
                    </div>
                  ) : (
                    <Icon
                      className={`${styles.truckIcon} ${
                        isSelected
                          ? styles.truckIconSelected
                          : styles.truckIconDefault
                      }`}
                    />
                  )}
                  <span className={styles.truckButtonText}>{vehicle.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {currentVehicle && (
          <div className={styles.card}>
            <div
              className={`${styles.cardTitle} ${styles.optionHeaderContainer}`}
            >
              <CurrentIcon className={styles.optionHeaderIcon} />
              <h2>{currentVehicle.name} 상세 정보</h2>
            </div>

            <div className={styles.optionsSectionContainer}>
              <div className={styles.optionItem}>
                <label className={styles.optionLabel}>작업 시간 선택</label>
                <div className={styles.sliderContainer}>
                  <div className={styles.sliderHeader}>
                    <span className={styles.sliderLabel}>작업 시간</span>
                    <span className={styles.sliderValue}>
                      {workingHours}시간
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={workingHours}
                    onChange={(e) => setWorkingHours(parseInt(e.target.value))}
                    className={styles.slider}
                  />
                  <div className={styles.sliderTicks}>
                    <span>1시간</span>
                    <span>6시간</span>
                    <span>12시간</span>
                  </div>
                </div>
              </div>

              <div className={styles.optionItem}>
                <label className={styles.optionLabel}>차량 사양</label>
                <p className={styles.optionDescription}>
                  {currentVehicle.specifications}
                </p>
              </div>

              <div className={styles.optionItem}>
                <label className={styles.optionLabel}>가격 정보</label>
                <div className={styles.priceRangeList}>
                  {currentVehicle.priceRanges.map((priceRange, index) => (
                    <div key={index} className={styles.priceRangeItem}>
                      {priceRange}
                    </div>
                  ))}
                </div>
              </div>

              {currentVehicle.description && (
                <div className={styles.optionItem}>
                  <label className={styles.optionLabel}>설명</label>
                  <p className={styles.optionDescription}>
                    {currentVehicle.description}
                  </p>
                </div>
              )}
            </div>

            <div className={styles.priceDisplaySection}>
              <div className={styles.priceDisplayCard}>
                <FaCalculator className={styles.priceIcon} />
                <p className={styles.priceLabel}>예상 총 비용</p>
                <p className={styles.priceValue}>
                  {estimatedPrice > 0
                    ? `${estimatedPrice.toLocaleString()} 원`
                    : "가격 정보를 확인하세요"}
                </p>
                {workingHours > 4 && hourlyRate > 0 && (
                  <div className={styles.priceBreakdown}>
                    <p className={styles.priceBreakdownItem}>
                      기본 4시간: {basePrice.toLocaleString()}원
                    </p>
                    <p className={styles.priceBreakdownItem}>
                      추가 {workingHours - 4}시간:{" "}
                      {((workingHours - 4) * hourlyRate).toLocaleString()}원
                    </p>
                  </div>
                )}
                <p className={styles.priceInfoText}>
                  <FaInfoCircle className={styles.infoIcon} /> 위 금액은 예상
                  요금이며, 실제 현장 조건, 작업 난이도, 추가 요청 사항에 따라
                  변동될 수 있습니다.
                </p>
              </div>
            </div>

            <div className={styles.inquiryButtonContainer}>
              <button
                onClick={handleInquiry}
                disabled={!currentVehicle}
                className={styles.inquiryButton}
              >
                {currentVehicle?.name} ({workingHours}시간) 견적 문의하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
