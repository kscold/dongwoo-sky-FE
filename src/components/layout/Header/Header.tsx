"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import * as styles from "../../../styles/Header.css"

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
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
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
          <span className={styles.logoText}>DONGWOO SKY</span>
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
        <GiHamburgerMenu size={28} />
      </button>

      {/* CTA 버튼 */}
      <div className={styles.ctaButtonContainer}>
        <button className={styles.ctaButton}>
          {isMobile ? "빠른 상담" : "빠른 상담: 010-1234-5678"}
        </button>
      </div>
      
      {/* 모바일 메뉴 - 왼쪽 사이드바로 변경 */}
      {isMobileMenuOpen && (
        <>
          {/* 오버레이 - 배경 암막 */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(26, 58, 109, 0.7)', // 프로젝트 primary 색상 적용
              backdropFilter: 'blur(5px)',
              zIndex: 1000,
            }}
            onClick={closeMobileMenu}
            data-testid="mobile-overlay"
          />
          
          {/* 왼쪽 사이드바 네비게이션 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column' as const,
              position: 'fixed',
              top: 0,
              left: 0,
              width: '80vw',
              maxWidth: '320px',
              height: '100vh',
              background: '#FFFFFF',
              boxShadow: '5px 0 15px rgba(0,0,0,0.1)',
              zIndex: 2000,
              padding: '12px 16px',
              overflowY: 'auto',
            }}
            data-testid="mobile-sidebar"
          >
            {/* 사이드바 헤더 */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '8px 4px',
              marginBottom: '15px'
            }}>
              <div style={{ 
                fontSize: '1.125rem', 
                fontWeight: 'bold',
                color: '#1A3A6D',
                letterSpacing: '-0.02em'
              }}>
                DONGWOO SKY
              </div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#666',
                  transition: 'all 0.2s ease',
                }}
                onClick={closeMobileMenu}
                aria-label="메뉴 닫기"
              >
                <IoClose size={22} />
              </button>
            </div>
            
            {/* 서비스 안내 텍스트 */}
            <div style={{ 
              marginBottom: '8px', 
              color: '#666',
              fontSize: '0.9rem',
              paddingLeft: '4px'
            }}>
              서비스 안내
            </div>
            
            {/* 네비게이션 링크 */}
            <div style={{ marginBottom: '24px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: isActive(item.href) ? '#1A3A6D' : '#333',
                    backgroundColor: isActive(item.href) ? '#EDF2F7' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: isActive(item.href) ? 'bold' : 'normal',
                    padding: '12px 16px',
                    margin: '4px 0',
                    borderRadius: '8px',
                    transition: 'all 0.15s ease-in-out',
                  }}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* 구분선 */}
            <div style={{ 
              height: '1px', 
              backgroundColor: '#EDF2F7',
              margin: '8px 0 16px'
            }}></div>
            
            {/* CTA 버튼 - 모바일 메뉴 내부 */}
            <div style={{ padding: '8px 0' }}>
              <button style={{
                width: '100%',
                padding: '14px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#1A73E8', // 이미지의 버튼 색상과 일치하도록 파란색으로 변경
                color: 'white',
                transition: 'all 0.2s ease-in-out',
              }}>
                빠른 상담
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
