"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"
import * as styles from "../../styles/Header.css"
import * as mobileStyles from "../../styles/MobileMenu.css"

const navItems = [
  { href: "/service-guide", label: "서비스 안내", icon: "🛠️" },
  { href: "/pricing", label: "이용 요금", icon: "💰" },
  { href: "/work-showcases", label: "작업 사례", icon: "🏆" },
  { href: "/customer-reviews", label: "고객 후기", icon: "💬" },
  { href: "/notice", label: "공지사항", icon: "📢" },
  { href: "/contact", label: "견적 문의", icon: "📞" },
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
  const toggleMobileMenu = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("햄버거 버튼 클릭됨! 현재 상태:", isMobileMenuOpen)
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    console.log("새로운 상태:", newState)
  }

  // 모바일 메뉴 닫기 함수
  const closeMobileMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    console.log("모바일 메뉴 닫기")
    setIsMobileMenuOpen(false)
  }

  // 링크 클릭 시 메뉴 닫기 함수
  const handleLinkClick = () => {
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
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isMobileMenuOpen])

  // ESC 키로 모바일 메뉴 닫기
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isMobileMenuOpen])

  return (
    <>
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

        {/* CTA 버튼 */}
        <div className={styles.ctaButtonContainer}>
          <button
            className={styles.ctaButton}
            onClick={() => {
              window.location.href = "tel:010-1234-5678"
            }}
          >
            {isMobile ? "빠른 상담" : "빠른 상담: 010-1234-5678"}
          </button>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className={mobileStyles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </header>

      {/* 모바일 사이드바 오버레이 */}
      <div
        className={`${mobileStyles.mobileNavOverlay} ${
          isMobileMenuOpen ? mobileStyles.mobileNavOverlayOpen : ""
        }`}
        onClick={closeMobileMenu}
        data-testid="mobile-overlay"
        style={{
          // 디버깅을 위한 강제 스타일
          ...(isMobileMenuOpen && {
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
          }),
        }}
      />

      {/* 모바일 사이드바 */}
      <div
        className={`${mobileStyles.mobileNav} ${
          isMobileMenuOpen ? mobileStyles.mobileNavOpen : ""
        }`}
        data-testid="mobile-sidebar"
        style={{
          // 디버깅을 위한 강제 스타일
          ...(isMobileMenuOpen && {
            transform: "translateX(0)",
            WebkitTransform: "translateX(0)",
            visibility: "visible",
          }),
        }}
      >
        {/* 사이드바 헤더 */}
        <div className={mobileStyles.sidebarHeader}>
          <div className={mobileStyles.sidebarLogo}>EOULLIM SKY</div>
          <button
            className={mobileStyles.sidebarCloseButton}
            onClick={closeMobileMenu}
            aria-label="메뉴 닫기"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* 사이드바 콘텐츠 */}
        <div className={mobileStyles.sidebarContent}>
          {/* 서비스 안내 섹션 */}
          <div className={mobileStyles.sidebarSectionTitle}>서비스 안내</div>

          {/* 네비게이션 링크 */}
          <div className={mobileStyles.sidebarNavLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${mobileStyles.sidebarNavLink} ${
                  isActive(item.href) ? mobileStyles.sidebarNavLinkActive : ""
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={mobileStyles.divider} />

          {/* CTA 버튼 - 모바일 메뉴 내부 */}
          <button
            className={mobileStyles.sidebarCTAButton}
            onClick={() => {
              // 전화 기능이나 상담 페이지로 이동
              window.location.href = "tel:010-1234-5678"
            }}
          >
            <FaPhoneAlt size={16} />
            빠른 상담
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
