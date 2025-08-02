import React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAdmin } from "../../context/AdminContext"
import {
  adminNav,
  adminNavHeader,
  adminNavBrand,
  adminNavBrandTitle,
  adminNavBrandSubtitle,
  adminNavUser,
  adminNavUserSpan,
  siteViewBtn,
  logoutBtn,
  adminNavMenu,
  adminNavItem,
  adminNavItemActive,
  adminNavIcon,
  adminNavContent,
  adminNavTitle,
  adminNavDescription,
  adminNavDescriptionActive,
} from "../../../styles/admin/admin-navigation.css"

const adminMenuItems = [
  {
    title: "대시보드",
    href: "/admin/dashboard",
    icon: "🏠",
    description: "전체 현황",
  },
  {
    title: "홈 페이지 관리",
    href: "/admin/home",
    icon: "🌐",
    description: "메인 페이지 설정",
  },
  {
    title: "서비스 안내",
    href: "/admin/service-guide",
    icon: "📋",
    description: "서비스 가이드",
  },
  {
    title: "장비 관리",
    href: "/admin/equipment",
    icon: "🚛",
    description: "장비 정보",
  },
  {
    title: "작업 자랑거리",
    href: "/admin/work-showcase",
    icon: "🎨",
    description: "포트폴리오",
  },
  {
    title: "고객 리뷰",
    href: "/admin/customer-review",
    icon: "⭐",
    description: "리뷰 관리",
  },
  {
    title: "공지사항",
    href: "/admin/notice",
    icon: "📢",
    description: "공지 관리",
  },
  {
    title: "연락 관리",
    href: "/admin/contact",
    icon: "📞",
    description: "문의 내역",
  },
  {
    title: "요금 관리",
    href: "/admin/pricing",
    icon: "💰",
    description: "견적 및 요금",
  },
  {
    title: "SEO 관리",
    href: "/admin/seo",
    icon: "🔍",
    description: "검색 최적화",
  },
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
    <div className={adminNav}>
      <div className={adminNavHeader}>
        <div className={adminNavBrand}>
          <h1 className={adminNavBrandTitle}>어울림 스카이</h1>
          <span className={adminNavBrandSubtitle}>관리자</span>
        </div>
      </div>

      <nav className={adminNavMenu}>
        {adminMenuItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${adminNavItem} ${isActive ? adminNavItemActive : ""}`}
            >
              <span className={adminNavIcon}>{item.icon}</span>
              <div className={adminNavContent}>
                <span className={adminNavTitle}>{item.title}</span>
                <span className={`${adminNavDescription} ${isActive ? adminNavDescriptionActive : ""}`}>
                  {item.description}
                </span>
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
