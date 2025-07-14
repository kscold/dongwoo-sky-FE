"use client"

import React from "react"

import { useHomePageData } from "../common/hooks/useHome"
import HeroSection from "../common/components/home/HeroSection"
import ContentSection from "../common/components/home/ContentSection"
import NoticeSection from "../common/components/home/NoticeSection"
import FloatingCallButton from "../common/components/button/FloatingCallButton"
import PageSkeleton from "../common/components/ui/PageSkeleton"
import ErrorComponent from "../common/components/error/ErrorComponent"

export default function Home() {
  const {
    data: homePageData,
    isLoading,
    isError,
    error,
    refetch,
  } = useHomePageData()

  if (isLoading) {
    return <PageSkeleton variant="default" />
  }

  if (isError || !homePageData) {
    return (
      <ErrorComponent
        error={error || new Error("Failed to load data")}
        reset={refetch}
      />
    )
  }

  const workShowcaseSection = homePageData.home.contentSettings.find(
    (s: any) => s.key === "section-1"
  )
  const customerReviewSection = homePageData.home.contentSettings.find(
    (s: any) => s.key === "section-2"
  )

  return (
    <main>
      {homePageData?.home && <HeroSection home={homePageData.home} />}

      {/* 작업자 자랑거리 섹션 */}
      {workShowcaseSection?.isActive && homePageData?.workShowcases && (
        <ContentSection
          title={workShowcaseSection.title}
          description={workShowcaseSection.description}
          items={homePageData.workShowcases}
          type="work"
          link="/work-showcases"
        />
      )}

      {/* 고객 리뷰 섹션 */}
      {customerReviewSection?.isActive && homePageData?.customerReviews && (
        <ContentSection
          title={customerReviewSection.title}
          description={customerReviewSection.description}
          items={homePageData.customerReviews}
          type="review"
          link="/customer-reviews"
        />
      )}

      {homePageData?.notices && (
        <NoticeSection notices={homePageData.notices} />
      )}

      <FloatingCallButton />
    </main>
  )
}
