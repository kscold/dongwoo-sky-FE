"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import * as styles from "../../../styles/login.css"

export default function AdminLoginPage() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAdmin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!id || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.")
      return
    }

    const success = login(id, password)

    if (success) {
      router.push("/admin/dashboard")
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.")
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>관리자 로그인</h1>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="id" className={styles.inputLabel}>
              관리자 아이디
            </label>
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className={styles.input}
              placeholder="관리자 아이디 입력"
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
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            로그인
          </button>
        </form>

        <p className={styles.loginInfo}>
          관리자 계정으로 로그인하면 공지사항과 웹사이트를 관리할 수 있습니다.
        </p>
      </div>
    </div>
  )
}
