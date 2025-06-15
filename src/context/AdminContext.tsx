"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { User } from "@/types/auth"
import { authApi } from "@/api/auth"

interface AdminContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => Promise<boolean>
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      const response = await authApi.login({ email, password })

      if (response.user && response.user.role === "admin") {
        setUser(response.user)

        // JWT 토큰 저장
        if (response.access_token && typeof window !== "undefined") {
          localStorage.setItem("auth_token", response.access_token)
        }

        return true
      } else {
        // 관리자가 아닌 경우
        throw new Error("관리자 권한이 필요합니다.")
      }
    } catch (error) {
      console.error("로그인 실패:", error)
      setUser(null)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authApi.logout()
    setUser(null)
    // 브라우저에서 추가 클린업
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
    }
  }

  const checkAuth = async (): Promise<boolean> => {
    try {
      setIsLoading(true)

      // 토큰이 없으면 바로 false 반환
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("auth_token")
        if (!token) {
          setUser(null)
          return false
        }
      }

      const currentUser = await authApi.getCurrentUser()

      if (currentUser && currentUser.role === "admin") {
        setUser(currentUser)
        return true
      } else {
        setUser(null)
        return false
      }
    } catch (error) {
      console.error("인증 확인 실패:", error)
      setUser(null)
      // 인증 실패 시 토큰 제거
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token")
        localStorage.removeItem("user_data")
      }
      return false
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // 브라우저 환경에서만 실행하고, 로그인 페이지가 아닐 때만 checkAuth 실행
    if (typeof window !== "undefined") {
      const isLoginPage = window.location.pathname === "/admin/login"
      if (!isLoginPage) {
        checkAuth()
      } else {
        // 로그인 페이지에서는 로딩 상태만 false로 설정
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <AdminContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
