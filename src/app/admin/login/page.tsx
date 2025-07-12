"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { useAdmin } from "../../../common/context/AdminContext"
import * as styles from "../../../styles/admin/admin-login.css"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { login, user, isLoading } = useAdmin()

  // 이미 로그인된 경우 대시보드로 리다이렉트
  useEffect(() => {
    if (user && user.role === "admin") {
      // 리다이렉트할 페이지가 있다면 해당 페이지로, 없다면 대시보드로
      const redirectPath = localStorage.getItem("redirect_after_login")
      if (redirectPath) {
        localStorage.removeItem("redirect_after_login")
        router.push(redirectPath)
      } else {
        router.push("/admin/dashboard")
      }
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.")
      setIsSubmitting(false)
      return
    }

    try {
      const success = await login(email, password)

      if (success) {
        router.push("/admin/dashboard")
      } else {
        setError("관리자 계정이 아니거나 로그인 정보가 올바르지 않습니다.")
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "로그인 중 오류가 발생했습니다."
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  // 로딩 중일 때 표시
  if (isLoading) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <p>로그인 상태를 확인하는 중입니다...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>관리자 로그인</h1>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>
              관리자 이메일
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="관리자 이메일 입력"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="비밀번호 입력"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <p className={styles.loginInfo}>
          관리자 계정으로 로그인하면 공지사항과 웹사이트를 관리할 수 있습니다.
        </p>
      </div>
    </div>
  )
}
