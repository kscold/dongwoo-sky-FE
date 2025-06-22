"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { usePublishedNotices } from "@/hooks/useNotices"
import { useLandingPageData } from "@/hooks/useLandingPage"
import { getLocationBasedBrandName, testFunction } from "@/utils/location"
import ContentSection from "@/components/landing/ContentSection"
import type { LandingPageData } from "@/types/landing-page"
import * as heroStyles from "@/styles/landing/HeroSection.css"
import * as noticeStyles from "@/styles/landing/NoticeSection.css"

// 기본 폴백 이미지들
const defaultImages = [
  "https://images.unsplash.com/photo-1506784983877-45594efa4c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [brandName, setBrandName] = useState<string>("어울림 스카이")
  const [scrollY, setScrollY] = useState(0)

  // 백엔드 데이터 가져오기
  const { data, isLoading } = useLandingPageData()

  // Cast data to proper type
  const landingPageData = data as LandingPageData | undefined

  // 현재 히어로 섹션 데이터 (백엔드 데이터가 있으면 사용, 없으면 기본값)
  const heroData = landingPageData?.heroSection || {
    title: "어울림 스카이",
    subtitle: "안전하고 신뢰할 수 있는 중장비 렌탈 서비스",
    backgroundImageUrl: defaultImages[0],
    description:
      "전문적인 고공작업과 중장비 렌탈 서비스를 제공합니다. 안전하고 효율적인 작업으로 고객님의 프로젝트를 성공으로 이끌어드립니다.",
    ctaText: "무료 견적 문의",
    ctaLink: "/contact",
    isActive: true,
  }

  // 배경 이미지 배열 (백엔드에서 여러 이미지를 지원할 때까지 기본 이미지 사용)
  const backgroundImages = heroData.backgroundImageUrl
    ? [heroData.backgroundImageUrl, ...defaultImages.slice(1)]
    : defaultImages

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      )
    }, 6000) // 6초로 변경하여 더 여유롭게
    return () => clearInterval(timer)
  }, [backgroundImages.length])

  useEffect(() => {
    const fetchBrandName = async () => {
      try {
        // 먼저 테스트 함수 호출
        console.log("🧪 메인 페이지 테스트 함수 결과:", testFunction())

        console.log("🚀 위치 기반 브랜드명 가져오기 시작...")
        const locationBrandName = await getLocationBasedBrandName()
        console.log("🎯 받아온 브랜드명:", locationBrandName)
        setBrandName(locationBrandName)
      } catch (error) {
        console.log(
          "📍 위치 기반 브랜드명을 가져올 수 없어서 기본값을 사용합니다."
        )
        console.log("에러 상세:", error)
        // 기본값 유지 - 사용자에게는 영향 없음
        setBrandName("어울림 스카이")
      }
    }

    fetchBrandName()
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

  return (
    <section className={heroStyles.heroSection}>
      <div
        className={heroStyles.heroBackgroundImage}
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
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
            <span className={heroStyles.heroMainTitle}>{brandName}</span>
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

        {/* 스크롤 인디케이터 - 자연스러운 마크업 흐름으로 배치 */}
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

const NoticeSection = () => {
  const { data: notices, isLoading, error } = usePublishedNotices()

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  // 내용 줄임 표시 함수
  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content
    return content.slice(0, maxLength) + "..."
  }

  // React Query handles data fetching automatically

  return (
    <section className={noticeStyles.noticeSection}>
      <div className={noticeStyles.noticeContainer}>
        <div className={noticeStyles.noticeSectionHeader}>
          <h2 className={noticeStyles.sectionTitle}>📢 어울림 스카이 소식</h2>
          <p className={noticeStyles.sectionSubtitle}>
            최신 공지사항과 중요한 업데이트를 확인하세요
          </p>
        </div>

        {isLoading ? (
          <div className={noticeStyles.noticeLoadingContainer}>
            <div className={noticeStyles.noticeLoadingSpinner}>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
            </div>
            <p>공지사항을 불러오는 중입니다...</p>
          </div>
        ) : error ? (
          <div className={noticeStyles.noticeErrorContainer}>
            <div className={noticeStyles.noticeErrorIcon}>⚠️</div>
            <p>공지사항을 불러오는데 실패했습니다.</p>
            <p className={noticeStyles.noticeErrorSubtext}>
              서버 연결을 확인해주세요.
            </p>
          </div>
        ) : notices && notices.length > 0 ? (
          <div className={noticeStyles.noticeGrid}>
            {notices.slice(0, 3).map((notice, index) => (
              <Link
                key={notice._id}
                href={`/notice/${notice._id}`}
                className={`${noticeStyles.noticeCard} ${
                  index === 0 ? noticeStyles.noticeCardFeatured : ""
                }`}
              >
                <div className={noticeStyles.noticeCardHeader}>
                  <div className={noticeStyles.noticeBadge}>
                    {index === 0 ? "📌 중요" : "📄 공지"}
                  </div>
                  <span className={noticeStyles.noticeDate}>
                    {formatDate(notice.publishedAt || notice.createdAt)}
                  </span>
                </div>
                <h3 className={noticeStyles.noticeTitle}>{notice.title}</h3>
                <p className={noticeStyles.noticeExcerpt}>
                  {truncateContent(notice.content)}
                </p>
                <div className={noticeStyles.noticeCardFooter}>
                  <span className={noticeStyles.readMoreText}>
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={noticeStyles.noticeEmptyContainer}>
            <div className={noticeStyles.noticeEmptyIcon}>📝</div>
            <p>등록된 공지사항이 없습니다.</p>
            <p className={noticeStyles.noticeEmptySubtext}>
              새로운 소식이 있으면 즉시 업데이트됩니다.
            </p>
          </div>
        )}

        {notices && notices.length > 3 && (
          <div className={noticeStyles.noticeViewMore}>
            <Link href="/notice" className={noticeStyles.viewMoreButton}>
              모든 공지사항 보기
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default function MarketingPage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <NoticeSection />
    </>
  )
}
