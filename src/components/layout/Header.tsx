"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"
import * as styles from "../../styles/Header.css"

const navItems = [
  { href: "/service-guide", label: "서비스 안내" },
  { href: "/pricing", label: "이용 요금" },
  { href: "/contact", label: "견적 문의" },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // 링크가 현재 페이지와 일치하는지 확인하는 함수
  const isActive = (href: string): boolean => {
    return pathname === href
  }

  // 모바일 메뉴 토글 함수
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // 모바일 메뉴 닫기 함수
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // 모바일 장치 감지
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // 초기 상태 설정
    checkIfMobile()

    // 화면 크기 변경 시 반응
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // 모바일 메뉴가 열리면 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none" // 터치 액션 비활성화
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = "" // 터치 액션 되돌리기
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>EOULLIM SKY</span>
        </Link>
      </div>
      {/* 데스크탑 네비 */}
      <nav className={styles.navContainer}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${
              isActive(item.href) ? styles.activeLink : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {/* 모바일 햄버거 버튼 */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isMobileMenuOpen}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* CTA 버튼 */}
      <div className={styles.ctaButtonContainer}>
        <button className={styles.ctaButton}>
          {isMobile ? "빠른 상담" : "빠른 상담: 010-1234-5678"}
        </button>
      </div>

      {/* 모바일 사이드바 오버레이 */}
      <div
        className={styles.mobileSidebarOverlay}
        data-open={isMobileMenuOpen}
        onClick={closeMobileMenu}
        data-testid="mobile-overlay"
      />

      {/* 모바일 사이드바 */}
      <div
        className={styles.mobileSidebar}
        data-open={isMobileMenuOpen}
        data-testid="mobile-sidebar"
      >
        {/* 사이드바 헤더 */}
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>EOULLIM SKY</div>
          <button
            className={styles.sidebarCloseButton}
            onClick={closeMobileMenu}
            aria-label="메뉴 닫기"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* 사이드바 콘텐츠 */}
        <div className={styles.sidebarContent}>
          {/* 서비스 안내 섹션 */}
          <div className={styles.sidebarSectionTitle}>서비스 안내</div>

          {/* 네비게이션 링크 */}
          <div className={styles.sidebarNavLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.sidebarNavLink} ${
                  isActive(item.href) ? styles.sidebarNavLinkActive : ""
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.divider} />

          {/* CTA 버튼 - 모바일 메뉴 내부 */}
          <button className={styles.sidebarCTAButton}>
            <FaPhoneAlt size={16} />
            빠른 상담
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
