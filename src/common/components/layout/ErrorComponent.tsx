"use client"

import Link from "next/link"
import * as errorStyles from "../../../styles/components/error.css"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
  title?: string
  message?: string
  icon?: string
  showHome?: boolean
  homeLink?: string
  type?: "admin" | "service"
}

export default function ErrorComponent({
  error,
  reset,
  title = "오류가 발생했습니다",
  message,
  icon = "⚠️",
  showHome = true,
  homeLink = "/",
  type = "service",
}: ErrorProps) {
  const containerClass =
    type === "admin"
      ? errorStyles.adminErrorContainer
      : errorStyles.serviceErrorContainer

  const displayMessage =
    message || error.message || "알 수 없는 오류가 발생했습니다."

  return (
    <div className={containerClass}>
      <div className={errorStyles.errorIcon}>{icon}</div>
      <h2 className={errorStyles.errorTitle}>{title}</h2>
      <p className={errorStyles.errorMessage}>{displayMessage}</p>
      <div className={errorStyles.errorActions}>
        <button onClick={reset} className={errorStyles.retryButton}>
          🔄 다시 시도
        </button>
        {showHome && (
          <Link href={homeLink} className={errorStyles.homeButton}>
            🏠 {type === "admin" ? "대시보드" : "홈"}으로
          </Link>
        )}
      </div>
    </div>
  )
}
