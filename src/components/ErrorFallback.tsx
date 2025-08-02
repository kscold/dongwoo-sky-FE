"use client"

import React from "react"
import Link from "next/link"
import * as styles from "../styles/common/error-fallback.css"

interface ErrorFallbackProps {
  error?: Error
  resetError?: () => void
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ 
  error, 
  resetError 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>⚠️</span>
        </div>
        
        <h1 className={styles.title}>관리자 페이지 오류</h1>
        <p className={styles.description}>
          관리자 페이지에서 오류가 발생했습니다
        </p>
        
        {error && (
          <div className={styles.errorDetails}>
            <details className={styles.details}>
              <summary className={styles.summary}>오류 상세 정보</summary>
              <pre className={styles.errorMessage}>
                {error.message}
              </pre>
            </details>
          </div>
        )}
        
        <div className={styles.actions}>
          {resetError && (
            <button 
              onClick={resetError}
              className={styles.retryButton}
            >
              다시 시도
            </button>
          )}
          <Link 
            href="/admin/dashboard"
            className={styles.homeButton}
          >
            대시보드로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorFallback