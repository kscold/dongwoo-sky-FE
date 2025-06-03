"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import * as styles from "../../../styles/login.css"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { login, isLoggedIn, loading, error: adminError } = useAdmin()

  // 이미 로그인된 경우 대시보드로 리다이렉트
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/admin/dashboard")
    }
  }, [isLoggedIn, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.")
      setIsSubmitting(false)
      return
    }

    try {
      const success = await login({ username, password })

      if (success) {
        router.push("/admin/dashboard")
      } else {
        setError(adminError || "로그인에 실패했습니다.")
      }
    } catch {
      setError("로그인 중 오류가 발생했습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>관리자 로그인</h1>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.inputLabel}>
              관리자 아이디
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              placeholder="관리자 아이디 입력"
              disabled={isSubmitting || loading}
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
              disabled={isSubmitting || loading}
            />
          </div>

          <button
            type="submit"
            className={styles.loginButton}
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <p className={styles.loginInfo}>
          관리자 계정으로 로그인하면 공지사항과 웹사이트를 관리할 수 있습니다.
        </p>
      </div>
    </div>
  )
}
