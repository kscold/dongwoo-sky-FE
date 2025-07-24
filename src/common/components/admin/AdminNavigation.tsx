import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAdmin } from "../../context/AdminContext"
import "./AdminNavigation.css"

const adminMenuItems = [
  {
    title: "대시보드",
    href: "/admin/dashboard",
    icon: "🏠",
    description: "전체 현황"
  },
  {
    title: "홈 페이지 관리",
    href: "/admin/home",
    icon: "🌐",
    description: "메인 페이지 설정"
  },
  {
    title: "서비스 안내",
    href: "/admin/service-guide",
    icon: "📋",
    description: "서비스 가이드"
  },
  {
    title: "장비 관리",
    href: "/admin/equipment",
    icon: "🚛",
    description: "장비 정보"
  },
  {
    title: "이용요금 관리",
    href: "/admin/pricing-setting",
    icon: "💰",
    description: "요금 설정"
  },
  {
    title: "작업 자랑거리",
    href: "/admin/work-showcase",
    icon: "🎨",
    description: "포트폴리오"
  },
  {
    title: "고객 리뷰",
    href: "/admin/customer-review",
    icon: "⭐",
    description: "리뷰 관리"
  },
  {
    title: "공지사항",
    href: "/admin/notice",
    icon: "📢",
    description: "공지 관리"
  }
]

export const AdminNavigation: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { logout, user } = useAdmin()

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  const handleSiteView = () => {
    window.open("/", "_blank")
  }

  // 로그인 페이지에서는 네비게이션 숨김
  if (pathname === "/admin/login") {
    return null
  }

  return (
    <div className="admin-nav">
      <div className="admin-nav-header">
        <div className="admin-nav-brand">
          <h1>어울림 스카이</h1>
          <span>관리자</span>
        </div>
        <div className="admin-nav-user">
          <span>👤 {user?.username || "관리자"}</span>
          <button onClick={handleSiteView} className="site-view-btn">
            🌐 사이트 보기
          </button>
          <button onClick={handleLogout} className="logout-btn">
            🚪 로그아웃
          </button>
        </div>
      </div>

      <nav className="admin-nav-menu">
        {adminMenuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-item ${isActive ? "active" : ""}`}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <div className="admin-nav-content">
                <span className="admin-nav-title">{item.title}</span>
                <span className="admin-nav-description">{item.description}</span>
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}