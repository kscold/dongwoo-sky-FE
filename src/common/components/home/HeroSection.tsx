import React, { useState, useEffect } from "react"
import Link from "next/link"

import { useHeroSettings } from "../../hooks/useHeroSettings"
import ErrorComponent from "../layout/ErrorComponent"

import * as heroStyles from "../../../styles/components/hero-section.css"

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 백엔드에서 히어로 설정 데이터 가져오기
  const { data: heroData, isLoading, error } = useHeroSettings()

  // 활성화된 이미지들만 필터링
  const activeImages =
    heroData?.backgroundImages?.filter((img) => img.isActive) || []

  // 이미지 자동 전환 설정
  useEffect(() => {
    if (activeImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % activeImages.length
        )
      }, 6000) // 6초마다 이미지 변경
      return () => clearInterval(timer)
    }
  }, [activeImages.length])

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <section className={heroStyles.heroSection}>
        <div className={heroStyles.heroOverlay} />
        <div className={heroStyles.heroContent}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div className={heroStyles.loadingSpinner}>
              <div className={heroStyles.loadingSpinnerDot}></div>
              <div className={heroStyles.loadingSpinnerDot}></div>
              <div className={heroStyles.loadingSpinnerDot}></div>
            </div>
            <p
              style={{ color: "white", fontSize: "1.2rem", marginTop: "1rem" }}
            >
              페이지를 불러오는 중입니다...
            </p>
          </div>
        </div>
      </section>
    )
  }

  // 에러 상태 처리
  if (error || !heroData) {
    return (
      <ErrorComponent
        error={error || new Error("히어로 섹션 데이터를 불러올 수 없습니다")}
        reset={() => window.location.reload()}
        title="메인 페이지를 불러오는데 실패했습니다"
        message="히어로 섹션 설정을 관리자 페이지에서 먼저 설정해주세요."
        icon="🏠"
        type="service"
        showHome={true}
        homeLink="/"
      />
    )
  }

  // 배경 이미지가 설정되지 않은 경우 에러 처리
  if (!activeImages.length) {
    return (
      <ErrorComponent
        error={new Error("배경 이미지가 설정되지 않았습니다")}
        reset={() => window.location.reload()}
        title="메인 페이지 설정이 완료되지 않았습니다"
        message="관리자 페이지에서 히어로 섹션의 배경 이미지를 설정해주세요."
        icon="🖼️"
        type="service"
        showHome={false}
      />
    )
  }

  // 현재 표시할 이미지 URL
  const currentImageUrl =
    activeImages[currentImageIndex]?.url || activeImages[0]?.url

  return (
    <section className={heroStyles.heroSection}>
      <div
        className={heroStyles.heroBackgroundImage}
        style={{
          backgroundImage: `url('${currentImageUrl}')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className={heroStyles.heroOverlay} />
      <div className={heroStyles.heroContent}>
        <div className={heroStyles.heroTextContainer}>
          <h1 className={heroStyles.heroTitle}>
            <span className={heroStyles.heroPreTitle}>
              하늘 위 모든 솔루션,
            </span>
            <span className={heroStyles.heroMainTitle}>{heroData.title}</span>
            <span className={heroStyles.heroPostTitle}>와 함께합니다.</span>
          </h1>
          <p className={heroStyles.heroSubtitle}>{heroData.subtitle}</p>
          <div className={heroStyles.heroDescription}>
            <p className={heroStyles.heroDescriptionText}>
              {heroData.description}
            </p>
          </div>
        </div>
        <div className={heroStyles.heroButtonContainer}>
          <Link href={heroData.ctaLink} className={heroStyles.primaryButton}>
            <span>🏗️</span>
            {heroData.ctaText}
          </Link>
          <Link href="/service-guide" className={heroStyles.secondaryButton}>
            <span>📋</span>
            서비스 안내
          </Link>
        </div>

        {/* 이미지 인디케이터 (이미지가 여러 개일 때만 표시) */}
        {activeImages.length > 1 && (
          <div className={heroStyles.imageIndicators}>
            {activeImages.map((_, index) => (
              <button
                key={index}
                className={`${heroStyles.indicator} ${
                  index === currentImageIndex ? heroStyles.active : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`${index + 1}번째 이미지로 이동`}
              />
            ))}
          </div>
        )}

        {/* 스크롤 인디케이터 */}
        <div
          className={heroStyles.scrollIndicator}
          style={{
            opacity: scrollY > 200 ? 0 : 1,
            pointerEvents: scrollY > 200 ? "none" : "auto",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }}
        >
          <div className={heroStyles.scrollMouse}>
            <div className={heroStyles.scrollWheel}></div>
          </div>
          <span>아래로 스크롤</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
