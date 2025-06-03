"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { useNoticeList } from "@/hooks/useNotice"
import { getLocationBasedBrandName, testFunction } from "@/utils/location"
import * as heroStyles from "@/styles/landing/HeroSection.css"
import * as noticeStyles from "@/styles/landing/NoticeSection.css"

const placeholderImages = [
  "https://images.unsplash.com/photo-1506784983877-45594efa4c88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=2117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [brandName, setBrandName] = useState<string>("어울림 스카이")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % placeholderImages.length
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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

  return (
    <section className={heroStyles.heroSection}>
      <div
        className={heroStyles.heroBackgroundImage}
        style={{
          backgroundImage: `url('${placeholderImages[currentImageIndex]}')`,
        }}
      />
      <div className={heroStyles.heroOverlay} />
      <div className={heroStyles.heroContent}>
        <h1 className={heroStyles.heroTitle}>
          <span className={heroStyles.heroPreTitle}>하늘 위 모든 솔루션,</span>
          <span className={heroStyles.heroMainTitle}>{brandName}</span>
          <span className={heroStyles.heroPostTitle}>함께합니다.</span>
        </h1>
        <p className={heroStyles.heroSubtitle}>
          최신 스카이 장비로 어떤 높이의 작업이든 신속하고 안전하게! 지금 바로
          전문가와 상담하세요.
        </p>
        <div className={heroStyles.heroButtonContainer}>
          <Link href="/contact" className={heroStyles.primaryButton}>
            무료 견적 받기
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
        <p className={noticeStyles.noticeEmptyMessage}>
          공지사항을 불러오는 중입니다...
        </p>
      ) : error ? (
        <p className={noticeStyles.noticeEmptyMessage}>
          공지사항을 불러오는데 실패했습니다.
        </p>
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
      <NoticeSection /> {/* 기존 컨텐츠 영역을 공지사항 섹션으로 대체 */}
    </>
  )
}
