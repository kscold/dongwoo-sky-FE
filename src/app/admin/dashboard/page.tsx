"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import Link from "next/link"
import * as styles from "../../../styles/dashboard.css"

export default function AdminDashboardPage() {
  const { isLoggedIn, logout } = useAdmin()
  const router = useRouter()

  // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login")
    }
  }, [isLoggedIn, router])

  // 로그아웃 핸들러
  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  if (!isLoggedIn) {
    return null // 로그인 체크 중에는 아무것도 표시하지 않음
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>관리자 대시보드</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          로그아웃
        </button>
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.menuGrid}>
          <Link href="/admin/notices" className={styles.menuCard}>
            <h2 className={styles.menuTitle}>공지사항 관리</h2>
            <p className={styles.menuDescription}>
              공지사항을 등록, 수정, 삭제하고 모달 표시 여부를 설정할 수
              있습니다.
            </p>
          </Link>

          <Link href="/" className={styles.menuCard}>
            <h2 className={styles.menuTitle}>웹사이트로 돌아가기</h2>
            <p className={styles.menuDescription}>
              웹사이트 메인 페이지로 이동합니다.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
