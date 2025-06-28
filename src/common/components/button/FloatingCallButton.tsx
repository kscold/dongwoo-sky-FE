"use client"

import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

import {
  getLocationBasedBrandName,
  testFunction,
} from "@/common/utils/location"
import * as styles from "../../../styles/components/floating-call.css"

const FloatingCallButton: React.FC = () => {
  const pathname = usePathname()
  const [brandName, setBrandName] = useState<string>("어울림 스카이")

  // 위치 기반 브랜드명 가져오기
  useEffect(() => {
    const fetchBrandName = async () => {
      try {
        // 먼저 테스트 함수 호출
        console.log("🧪 FloatingButton 테스트 함수 결과:", testFunction())

        console.log("🔵 FloatingButton에서 위치 기반 브랜드명 가져오기 시작...")
        const locationBrandName = await getLocationBasedBrandName()
        console.log("🔵 FloatingButton에서 받아온 브랜드명:", locationBrandName)
        setBrandName(locationBrandName)
      } catch (error) {
        console.log(
          "📍 위치 기반 브랜드명을 가져올 수 없어서 기본값을 사용합니다."
        )
        console.log("FloatingButton 에러 상세:", error)
        // 기본값 유지 - 사용자에게는 영향 없음
        setBrandName("어울림 스카이")
      }
    }

    fetchBrandName()
  }, [])

  // 관리자 페이지에서는 렌더링하지 않음
  if (pathname.startsWith("/admin")) {
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
