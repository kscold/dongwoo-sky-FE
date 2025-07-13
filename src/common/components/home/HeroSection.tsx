"use client"

import React, { useState, useEffect, useMemo, useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import * as styles from "../../../styles/service/components/home/hero-section.css"
import { Home } from "../../types/home"

interface HeroSectionProps {
  home: Home
}

interface LocationInfo {
  city?: string
  district?: string
  isLoading: boolean
  error?: string
}

export default function HeroSection({ home }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [location, setLocation] = useState<LocationInfo>({ isLoading: true })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Memoize computed values for better performance
  const heroSection = useMemo(() => home?.heroSection, [home?.heroSection])
  
  const backgroundImages = useMemo(() => {
    return heroSection?.backgroundImageUrls && heroSection.backgroundImageUrls.length > 0
      ? heroSection.backgroundImageUrls.filter(img => img.isActive !== false)
      : []
  }, [heroSection?.backgroundImageUrls])

  const currentBgImageUrl = useMemo(() => {
    return backgroundImages.length > 0
      ? backgroundImages[currentImageIndex]?.url
      : "/assets/images/hero-background.jpg"
  }, [backgroundImages, currentImageIndex])

  // 배경 이미지 자동 전환 (5초마다)
  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % backgroundImages.length
        )
      }, 5000) // 5초마다 전환

      return () => clearInterval(interval)
    }
  }, [backgroundImages.length])

  // 이미지 프리로드
  useEffect(() => {
    if (currentBgImageUrl) {
      const img = new Image()
      img.onload = () => {
        setImageLoaded(true)
        setImageError(false)
      }
      img.onerror = () => {
        setImageError(true)
        setImageLoaded(false)
      }
      img.src = currentBgImageUrl
    }
  }, [currentBgImageUrl])

  // 위치 정보 가져오기
  useEffect(() => {
    const getLocation = async () => {
      try {
        if (!navigator.geolocation) {
          setLocation({ isLoading: false, error: "위치 서비스를 지원하지 않습니다." })
          return
        }

        // 카카오 API 키가 없으면 위치 정보 기능 비활성화
        if (!process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY) {
          console.warn('카카오 REST API 키가 설정되지 않았습니다.')
          setLocation({ isLoading: false })
          return
        }

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords

              // Vercel 프록시를 통한 카카오 API 호출
              const response = await fetch(
                `/api/kakao/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
                {
                  headers: {
                    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
                  },
                }
              )

              if (response.ok) {
                const data = await response.json()
                if (data.documents && data.documents.length > 0) {
                  const address = data.documents[0].address
                  setLocation({
                    city: address.region_1depth_name,
                    district: address.region_2depth_name,
                    isLoading: false
                  })
                } else {
                  setLocation({ isLoading: false })
                }
              } else {
                console.error('카카오 API 호출 실패:', response.status)
                setLocation({ isLoading: false })
              }
            } catch (err) {
              console.error('주소 변환 실패:', err)
              setLocation({ isLoading: false })
            }
          },
          (err) => {
            console.error('위치 정보 가져오기 실패:', err)
            setLocation({ isLoading: false, error: "위치 정보를 가져올 수 없습니다." })
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000 // 5분 캐시
          }
        )
      } catch (err) {
        console.error('위치 서비스 오류:', err)
        setLocation({ isLoading: false, error: "위치 서비스 오류" })
      }
    }

    getLocation()
  }, [])

  // early return을 모든 useEffect 이후에 배치
  if (!home || !heroSection) return null

  console.log('[HeroSection] 전체 home 데이터:', home)
  console.log('[HeroSection] heroSection 데이터:', heroSection)
  console.log('[HeroSection] backgroundImageUrls:', heroSection.backgroundImageUrls)
  console.log('[HeroSection] 배경 이미지 배열:', backgroundImages)
  console.log('[HeroSection] 현재 이미지 인덱스:', currentImageIndex)
  console.log('[HeroSection] 현재 배경 이미지 URL:', currentBgImageUrl)

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  // 제목을 파싱하여 pre/main/post로 분리
  const parseTitle = (title: string) => {
    // HTML 태그 제거 후 파싱
    const cleanTitle = title.replace(/<[^>]*>/g, '')

    // 기본값 설정
    const defaultTitle = {
      preTitle: "하늘 위 모든 솔루션,",
      mainTitle: "어울림 스카이와 함께합니다.",
      postTitle: ""
    }

    // 쉼표나 줄바꿈으로 분리 시도
    if (cleanTitle.includes(',')) {
      const parts = cleanTitle.split(',')
      return {
        preTitle: parts[0]?.trim() || defaultTitle.preTitle,
        mainTitle: parts[1]?.trim() || defaultTitle.mainTitle,
        postTitle: parts[2]?.trim() || defaultTitle.postTitle
      }
    }

    // 기본값 반환
    return {
      preTitle: defaultTitle.preTitle,
      mainTitle: cleanTitle || defaultTitle.mainTitle,
      postTitle: defaultTitle.postTitle
    }
  }

  const titleParts = parseTitle(heroSection.title || "")

  // 회사명 표시 로직 (위치 정보 포함)
  const getCompanyDisplayName = () => {
    const baseName = heroSection.highlightText || heroSection.companyName || "어울림 스카이"

    if (location.isLoading) {
      return `${baseName}(위치 확인 중...)`
    }

    if (location.city && location.district) {
      return `${baseName}(${location.district})`
    }

    if (location.city) {
      return `${baseName}(${location.city})`
    }

    return baseName
  }

  // "와 함께합니다" 부분 추출
  const getCompanySuffix = () => {
    const mainTitle = titleParts.mainTitle
    if (mainTitle.includes('와 함께합니다')) {
      return '와 함께합니다.'
    }
    return '와 함께합니다.'
  }

  return (
    <section className={styles.heroSection}>
      {/* 배경 이미지 */}
      <div
        className={styles.heroBackgroundImage}
        style={{
          backgroundImage: imageLoaded && !imageError ? `url(${currentBgImageUrl})` : 'none',
          backgroundColor: imageLoaded && !imageError ? 'transparent' : '#1a1a1a'
        }}
      />

      {/* 오버레이 */}
      <div className={styles.heroOverlay} />

      {/* 메인 콘텐츠 */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          {/* 제목 */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* "하늘 위 모든 솔루션," 부분 */}
            <span style={{
              fontSize: '1.0em', // 기본 크기
              fontWeight: 'normal',
              color: 'white',
              textShadow: '3px 3px 30px rgba(0,0,0,0.8)',
              display: 'block',
              marginBottom: '0.2em'
            }}>
              {titleParts.preTitle}
            </span>

            {/* "어울림 스카이" 부분 */}
            <span style={{
              fontSize: '1.0em', // 같은 크기
              fontWeight: 'bold',
              color: '#00C2B8',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              display: 'block',
              marginBottom: '0.1em'
            }}>
              {getCompanyDisplayName()}
            </span>

            {/* "와 함께합니다." 부분 */}
            <span style={{
              fontSize: '1.0em', // 같은 크기
              fontWeight: 'normal',
              color: 'white',
              textShadow: '3px 3px 30px rgba(0,0,0,0.8)',
              display: 'block'
            }}>
              {getCompanySuffix()}
            </span>

            {titleParts.postTitle && (
              <span className={styles.heroPostTitle}>{titleParts.postTitle}</span>
            )}
          </motion.h1>

          {/* 부제목 */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {heroSection.subtitle}
          </motion.p>

          {/* 설명 */}
          <motion.div
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className={styles.heroDescriptionText}>
              {heroSection.description}
            </p>
          </motion.div>
        </div>

        {/* CTA 버튼 */}
        <motion.div
          className={styles.heroButtonContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {heroSection.ctaButtons && heroSection.ctaButtons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
              className={index === 0 ? styles.primaryButton : styles.secondaryButton}
            >
              {button.text}
            </Link>
          ))}
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          onClick={handleScrollDown}
        >
          <span>스크롤하여 더 보기</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
        </motion.div>
      </div>

      {/* 이미지 로딩 상태 표시 */}
      {!imageLoaded && !imageError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          zIndex: 10
        }}>
          <div className={styles.loadingSpinner}>
            <div className={styles.loadingSpinnerDot}></div>
            <div className={styles.loadingSpinnerDot}></div>
            <div className={styles.loadingSpinnerDot}></div>
          </div>
        </div>
      )}
    </section>
  )
}
