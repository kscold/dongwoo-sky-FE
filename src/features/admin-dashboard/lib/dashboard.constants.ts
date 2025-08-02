import type { QuickAction } from "../model/dashboard.types"

export const QUICK_ACTIONS: QuickAction[] = [
  {
    href: "/admin/home",
    icon: "🎨",
    title: "서비스 홈 페이지 관리",
    description: "메인 페이지의 내용과 이미지를 관리할 수 있습니다.",
  },
  {
    href: "/admin/service-guide",
    icon: "🗺️",
    title: "서비스 안내 관리",
    description: "서비스 안내 페이지의 내용과 구성을 관리합니다.",
  },
  {
    href: "/admin/equipment",
    icon: "🏗️",
    title: "장비 관리",
    description: "렌탈 장비 정보와 이미지를 관리할 수 있습니다.",
  },
  {
    href: "/admin/work-showcase",
    icon: "🎯",
    title: "작업자 자랑거리 관리",
    description: "작업자 자랑거리를 작성, 수정, 삭제할 수 있습니다.",
  },
  {
    href: "/admin/customer-review",
    icon: "⭐",
    title: "고객 리뷰 관리",
    description: "고객 리뷰를 작성, 수정, 삭제할 수 있습니다.",
  },
  {
    href: "/admin/notice",
    icon: "📢",
    title: "공지사항 관리",
    description: "사이트 공지사항을 작성, 수정, 삭제할 수 있습니다.",
  },
  {
    href: "/admin/contact",
    icon: "📞",
    title: "연락 관리",
    description: "고객 문의 내역을 관리하고 상태를 업데이트합니다.",
  },
  {
    href: "/admin/seo",
    icon: "🔍",
    title: "SEO 관리",
    description: "검색 엔진 최적화 설정을 관리합니다.",
  },
]