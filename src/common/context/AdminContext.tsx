"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { User } from "../../common/types/auth"
import { authApi } from "../../api/auth"

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

      if (response.success && response.user && response.user.role === "admin") {
        setUser(response.user)

        // JWT 토큰 저장
        if (response.access_token && typeof window !== "undefined") {
          localStorage.setItem("auth_token", response.access_token)
        }

        return true
      } else {
        console.error("로그인 실패:", response.message)
        setUser(null)
        return false
      }
    } catch (error: any) {
      console.error("로그인 실패:", error)
      const errorMessage =
        error.response?.data?.message || "로그인에 실패했습니다."
      setUser(null)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authApi.logout()
    setUser(null)

    // 로그인 페이지로 리다이렉트
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
      window.location.href = "/admin/login"
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
        setIsLoading(false)
      }
    }
  }, [])

  const value: AdminContextType = {
    user,
    isLoading,
    isAuthenticated: !!user && user.role === "admin",
    login,
    logout,
    checkAuth,
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}
