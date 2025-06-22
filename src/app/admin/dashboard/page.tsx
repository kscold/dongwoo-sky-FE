"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import * as styles from "../../../styles/Dashboard.css"

function AdminDashboardContent() {
  const { user, logout, isLoading } = useAdmin()
  const router = useRouter()

  // 로그아웃 핸들러
  const handleLogout = async () => {
    logout()
    router.push("/admin/login")
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardWrapper}>
        <div className={styles.dashboardHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.dashboardTitle}>어울림 스카이 관리자</h1>
            <p className={styles.dashboardSubtitle}>
              중장비 렌탈 서비스 관리 시스템
            </p>
            <div
              style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}
            >
              안녕하세요, {user?.name || user?.email}님!
            </div>
          </div>
          <div className={styles.headerActions}>
            <Link href="/" className={styles.viewSiteButton}>
              🌐 사이트 보기
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              👋 로그아웃
            </button>
          </div>
        </div>

        <div className={styles.dashboardContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📄</div>
              <div className={styles.statNumber}>-</div>
              <div className={styles.statLabel}>총 공지사항</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>✅</div>
              <div className={styles.statNumber}>-</div>
              <div className={styles.statLabel}>공개 공지사항</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏗️</div>
              <div className={styles.statNumber}>-</div>
              <div className={styles.statLabel}>등록된 장비</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🔧</div>
              <div className={styles.statNumber}>-</div>
              <div className={styles.statLabel}>제공 서비스</div>
            </div>
          </div>

          <div className={styles.quickActionsGrid}>
            <Link href="/admin/notices" className={styles.actionCard}>
              <div className={styles.actionIcon}>📢</div>
              <h3 className={styles.actionTitle}>공지사항 관리</h3>
              <p className={styles.actionDescription}>
                사이트 공지사항을 작성, 수정, 삭제할 수 있습니다.
              </p>
            </Link>

            <Link href="/admin/equipment" className={styles.actionCard}>
              <div className={styles.actionIcon}>🏗️</div>
              <h3 className={styles.actionTitle}>장비 관리</h3>
              <p className={styles.actionDescription}>
                렌탈 장비 정보와 이미지를 관리할 수 있습니다.
              </p>
            </Link>

            <Link href="/admin/content" className={styles.actionCard}>
              <div className={styles.actionIcon}>📝</div>
              <h3 className={styles.actionTitle}>컨텐츠 관리</h3>
              <p className={styles.actionDescription}>
                작업자 자랑거리와 고객 리뷰를 관리할 수 있습니다.
              </p>
            </Link>

            <Link href="/admin/landing-page" className={styles.actionCard}>
              <div className={styles.actionIcon}>🎨</div>
              <h3 className={styles.actionTitle}>랜딩 페이지 관리</h3>
              <p className={styles.actionDescription}>
                메인 페이지의 내용과 이미지를 관리할 수 있습니다.
              </p>
            </Link>

            <Link href="/admin/service" className={styles.actionCard}>
              <div className={styles.actionIcon}>⚙️</div>
              <h3 className={styles.actionTitle}>서비스 관리</h3>
              <p className={styles.actionDescription}>
                제공하는 서비스의 정보와 가격을 관리할 수 있습니다.
              </p>
            </Link>

            <Link href="/admin/profile" className={styles.actionCard}>
              <div className={styles.actionIcon}>🏢</div>
              <h3 className={styles.actionTitle}>회사 프로필 관리</h3>
              <p className={styles.actionDescription}>
                회사 정보, 연락처, 위치 정보를 관리할 수 있습니다.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminDashboardContent />
    </ProtectedRoute>
  )
}
