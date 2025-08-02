import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/common/context/AdminContext"
import * as styles from "./dashboard-header.css"

export function DashboardHeader() {
  const { user, logout } = useAdmin()
  const router = useRouter()

  const handleLogout = async () => {
    logout()
    router.push("/admin/login")
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>어울림 스카이 관리자</h1>
        <p className={styles.subtitle}>중장비 렌탈 서비스 관리 시스템</p>
        <div className={styles.userInfo}>
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
  )
}