"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import Link from "next/link"
import * as styles from "../../../styles/dashboard.css"

export default function AdminDashboardPage() {
  const {
    isLoggedIn,
    logout,
    dashboardData,
    loading: adminLoading,
    refreshDashboard,
  } = useAdmin()
  const router = useRouter()

  // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login")
    } else {
      refreshDashboard()
    }
  }, [isLoggedIn, router, refreshDashboard])

  // 로그아웃 핸들러
  const handleLogout = async () => {
    await logout()
    router.push("/admin/login")
  }

  if (!isLoggedIn) {
    return null // 로그인 체크 중에는 아무것도 표시하지 않음
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>관리자 대시보드</h1>
        <div className={styles.headerActions}>
          <Link href="/" className={styles.viewSiteButton}>
            사이트 보기
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            로그아웃
          </button>
        </div>
      </div>

      {adminLoading && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>대시보드 정보를 불러오는 중...</p>
        </div>
      )}

      {dashboardData && (
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <h3 className={styles.statTitle}>공지사항 총개수</h3>
            <p className={styles.statValue}>
              {dashboardData.stats.totalNotices}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statTitle}>공개 공지사항</h3>
            <p className={styles.statValue}>
              {dashboardData.stats.publishedNotices}
            </p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statTitle}>모달 표시 공지사항</h3>
            <p className={styles.statValue}>
              {dashboardData.stats.modalNotices}
            </p>
          </div>
        </div>
      )}

      <div className={styles.dashboardContent}>
        <h2 className={styles.sectionTitle}>관리 메뉴</h2>
        <div className={styles.menuGrid}>
          <Link href="/admin/notices" className={styles.menuCard}>
            <div className={styles.menuIconWrapper}>
              <span className={styles.menuIcon}>📝</span>
            </div>
            <div className={styles.menuInfo}>
              <h2 className={styles.menuTitle}>공지사항 관리</h2>
              <p className={styles.menuDescription}>
                공지사항을 등록, 수정, 삭제하고 모달 표시 여부를 설정할 수
                있습니다.
              </p>
            </div>
            <div className={styles.menuAction}>
              <span className={styles.actionArrow}>→</span>
            </div>
          </Link>

          <Link href="/admin/notices/create" className={styles.menuCard}>
            <div className={styles.menuIconWrapper}>
              <span className={styles.menuIcon}>➕</span>
            </div>
            <div className={styles.menuInfo}>
              <h2 className={styles.menuTitle}>새 공지사항 작성</h2>
              <p className={styles.menuDescription}>
                새로운 공지사항을 작성하고 모달 표시 여부를 설정할 수 있습니다.
              </p>
            </div>
            <div className={styles.menuAction}>
              <span className={styles.actionArrow}>→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
