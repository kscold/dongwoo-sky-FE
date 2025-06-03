"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import * as styles from "../../styles/floating-call.css"
import { getLocationBasedBrandName, testFunction } from "@/utils/location"

const FloatingCallButton: React.FC = () => {
  const pathname = usePathname()
  const [brandName, setBrandName] = useState<string>("어울림 스카이")

  // 위치 기반 브랜드명 가져오기
  useEffect(() => {
    const fetchBrandName = async () => {
      try {
        // 먼저 테스트 함수 호출
        console.log("🧪 테스트 함수 결과:", testFunction())

        const locationBrandName = await getLocationBasedBrandName()
        setBrandName(locationBrandName)
      } catch (error) {
        console.error("Failed to get location-based brand name:", error)
        // 기본값 유지
      }
    }

    fetchBrandName()
  }, [])

  // 홈화면이 아닌 경우 렌더링하지 않음
  if (pathname !== "/") {
    return null
  }

  const handleCall = () => {
    // 실제 전화번호로 변경 필요
    window.location.href = "tel:+82-2-1234-5678"
  }

  return (
    <div className={styles.floatingContainer}>
      <div className={styles.buttonWrapper}>
        <div className={styles.pulseRingEffect}></div>
        <button
          onClick={handleCall}
          type="button"
          aria-label={`${brandName}에 전화걸기`}
          className={styles.phoneButton}
        >
          <div className={styles.consultationSection}>
            <span className={styles.consultationText}>상담</span>
            <span className={styles.consultationText}>문의</span>
          </div>
          <div className={styles.phoneSection}>
            <span className={styles.phoneIcon}>📞</span>
            <span className={styles.phoneText}>02-1234-5678</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default FloatingCallButton
