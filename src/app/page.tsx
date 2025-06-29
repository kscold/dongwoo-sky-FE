"use client"

import ContentSection from "../common/components/home/ContentSection"
import HeroSection from "../common/components/home/HeroSection"
import NoticeSection from "../common/components/home/NoticeSection"
import NoticeModalManager from "../common/components/notice-modal/NoticeModalManager"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <NoticeSection />
      <NoticeModalManager />
    </>
  )
}
