"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useAdmin } from "../../common/context/AdminContext"

export default function AdminRedirectPage() {
  const { isAuthenticated } = useAdmin()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      // 로그인 되어 있으면 대시보드로 이동
      router.push("/admin/dashboard")
    } else {
      // 로그인 되어 있지 않으면 로그인 페이지로 이동
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  // 리다이렉트 중인 상태를 보여주는 로딩 화면
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#4f46e5", marginBottom: "16px" }}>
          관리자 페이지로 이동 중...
        </h2>
        <p style={{ color: "#6b7280" }}>잠시만 기다려주세요.</p>
      </div>
    </div>
  )
}
