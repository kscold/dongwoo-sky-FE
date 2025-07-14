"use client"

import React from "react"
import Link from "next/link"

import * as errorStyles from "../../../styles/service/components/error.css"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
  message?: string
  icon?: React.ReactNode
  homeLink?: string
  showHome?: boolean
  type?: "admin" | "service"
}

export default function ErrorComponent({
  error,
  reset,
  message,
  icon,
  type = "service",
}: ErrorProps) {
  const homeLink = type === "admin" ? "/admin/dashboard" : "/"
  const showHome = type !== "admin"
  const containerClass = errorStyles.errorContainer
  const title =
    type === "admin" ? "관리자 페이지 오류" : "서비스 오류가 발생했습니다"

  const displayMessage =
    message || error.message || "알 수 없는 오류가 발생했습니다."

  return (
    <div className={containerClass}>
      <h2 className={errorStyles.errorTitle}>{title}</h2>
      <p className={errorStyles.errorMessage}>{displayMessage}</p>
      <div className={errorStyles.errorActions}>
        <button onClick={reset} className={errorStyles.button}>
          다시 시도
        </button>
        {showHome && (
          <Link href={homeLink} className={errorStyles.button}>
            홈으로 돌아가기
          </Link>
        )}
      </div>
    </div>
  )
}
