"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

import { AdminProvider, useAdmin } from "../../common/context/AdminContext"

// 어드민 인증 체크 컴포넌트
function AdminAuthCheck({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdmin()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // 로그인 페이지가 아닌데 인증되지 않은 경우 로그인 페이지로 리다이렉트
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [isAuthenticated, pathname, router])

  // 로그인 페이지가 아닌데 인증되지 않은 경우 로딩 표시
  if (!isAuthenticated && pathname !== "/admin/login") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
          color: "#666",
        }}
      >
        로그인 확인 중...
      </div>
    )
  }

  return <>{children}</>
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminProvider>
      <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
        <AdminAuthCheck>
          <main style={{ padding: "0", margin: "0" }}>{children}</main>
        </AdminAuthCheck>
      </div>
    </AdminProvider>
  )
}
