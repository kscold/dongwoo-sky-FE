"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { useNoticeList } from "@/hooks/useNotice"
import { useLandingPageData } from "@/hooks/use-landing-page"
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
      "최신 스카이 장비로 어떤 높이의 작업이든 신속하고 안전하게! 지금 바로 전문가와 상담하세요.",
    ctaText: "무료 견적 받기",
    ctaLink: "/contact",
    isActive: true,
  }

  // 배경 이미지 배열 (백엔드에서 여러 이미지를 지원할 때까지 기본 이미지 사용)
  const backgroundImages = heroData.backgroundImageUrl
    ? [heroData.backgroundImageUrl, ...defaultImages.slice(1)]
    : defaultImages

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [backgroundImages.length])

  useEffect(() => {
    const fetchBrandName = async () => {
      try {
        // 먼저 테스트 함수 호출
        console.log("🧪 메인 페이지 테스트 함수 결과:", testFunction())

        const locationBrandName = await getLocationBasedBrandName()
        setBrandName(locationBrandName)
      } catch (error) {
        console.error("Failed to get location-based brand name:", error)
        // 기본값 유지
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
            <p style={{ color: "white", fontSize: "1.2rem" }}>
              ⏳ 페이지를 불러오는 중입니다...
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
        }}
      />
      <div className={heroStyles.heroOverlay} />
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.heroTitle}>
          <span className={heroStyles.heroPreTitle}>하늘 위 모든 솔루션,</span>
          <span className={heroStyles.heroMainTitle}>
            {landingPageData?.heroSection?.title || brandName}
          </span>
          <span className={heroStyles.heroPostTitle}>함께합니다.</span>
        </h1>
        <p className={heroStyles.heroSubtitle}>{heroData.subtitle}</p>
        <div style={{ margin: "1.5rem 0", maxWidth: "600px" }}>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            {heroData.description}
          </p>
        </div>
        <div className={heroStyles.heroButtonContainer}>
          <Link href={heroData.ctaLink} className={heroStyles.primaryButton}>
            {heroData.ctaText}
          </Link>
          <Link href="/service-guide" className={heroStyles.secondaryButton}>
            서비스 더보기
          </Link>
        </div>
      </div>
    </section>
  )
}

const NoticeSection = () => {
  const { notices, loading, error, fetchPublishedNotices } = useNoticeList()

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

  useEffect(() => {
    const loadNotices = async () => {
      try {
        // 최근 공지사항 불러오기
        await fetchPublishedNotices()
      } catch (err) {
        console.error("공지사항을 불러오는데 실패했습니다:", err)
      }
    }

    loadNotices()
  }, [fetchPublishedNotices])

  return (
    <section className={noticeStyles.noticeSection}>
      <h2 className={noticeStyles.sectionTitle}>어울림 스카이 소식</h2>
      {loading ? (
        <div className={noticeStyles.noticeEmptyMessage}>
          <p>📰 공지사항을 불러오는 중입니다...</p>
        </div>
      ) : error ? (
        <div className={noticeStyles.noticeEmptyMessage}>
          <p>⚠️ 공지사항을 불러오는데 실패했습니다.</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.7, marginTop: "8px" }}>
            서버 연결을 확인해주세요.
          </p>
        </div>
      ) : notices && notices.length > 0 ? (
        <ul className={noticeStyles.noticeList}>
          {notices.slice(0, 3).map((notice) => (
            <li key={notice._id} className={noticeStyles.noticeItem}>
              <Link
                href={`/notice/${notice._id}`}
                className={noticeStyles.noticeLink}
              >
                <h3 className={noticeStyles.noticeTitle}>{notice.title}</h3>
                <p className={noticeStyles.noticeDate}>
                  {formatDate(notice.publishedAt || notice.createdAt)}
                </p>
                <p className={noticeStyles.noticeExcerpt}>
                  {truncateContent(notice.content)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={noticeStyles.noticeEmptyMessage}>
          등록된 공지사항이 없습니다.
        </p>
      )}
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
