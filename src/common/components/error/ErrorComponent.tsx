"use client"

import React from "react"
import Link from "next/link"

import * as errorStyles from "../../../styles/common/error-fallback.css"

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
  const title =
    type === "admin" ? "관리자 페이지 오류" : "서비스 오류가 발생했습니다"

  const displayMessage =
    message || error.message || "알 수 없는 오류가 발생했습니다."

  return (
    <div className={errorStyles.container}>
      <div className={errorStyles.content}>
        <div className={errorStyles.iconContainer}>
          <span className={errorStyles.icon}>{icon || "⚠️"}</span>
        </div>
        
        <h1 className={errorStyles.title}>{title}</h1>
        <p className={errorStyles.description}>{displayMessage}</p>
        
        {error && (
          <div className={errorStyles.errorDetails}>
            <details className={errorStyles.details}>
              <summary className={errorStyles.summary}>오류 상세 정보</summary>
              <pre className={errorStyles.errorMessage}>
                {error.message}
                {error.stack && (
                  <>
                    {"\n\n"}
                    {error.stack}
                  </>
                )}
              </pre>
            </details>
          </div>
        )}
        
        <div className={errorStyles.actions}>
          <button 
            onClick={reset}
            className={errorStyles.retryButton}
          >
            다시 시도
          </button>
          <Link 
            href={homeLink}
            className={errorStyles.homeButton}
          >
            {type === "admin" ? "대시보드로 돌아가기" : "홈으로 돌아가기"}
          </Link>
        </div>
      </div>
    </div>
  )
}
