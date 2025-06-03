"use client"

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import { adminApi, AdminLoginDto, AdminDashboardResponse } from "@/api/admin"

interface AdminContextType {
  isLoggedIn: boolean
  adminToken: string | null
  dashboardData: AdminDashboardResponse | null
  loading: boolean
  error: string | null
  login: (credentials: AdminLoginDto) => Promise<boolean>
  logout: () => Promise<void>
  refreshDashboard: () => Promise<void>
}

const AdminContext = createContext<AdminContextType>({
  isLoggedIn: false,
  adminToken: null,
  dashboardData: null,
  loading: false,
  error: null,
  login: async () => false,
  logout: async () => {},
  refreshDashboard: async () => {},
})

export const useAdmin = () => useContext(AdminContext)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [adminToken, setAdminToken] = useState<string | null>(null)
  const [dashboardData, setDashboardData] =
    useState<AdminDashboardResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // refreshDashboard 함수를 useCallback으로 메모이제이션
  const refreshDashboard = useCallback(async (): Promise<void> => {
    if (!adminToken) return

    setLoading(true)
    setError(null)

    try {
      const data = await adminApi.getDashboard(adminToken)
      setDashboardData(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "대시보드 정보를 불러오는 중 오류가 발생했습니다."
      setError(errorMessage)
      // 토큰이 유효하지 않은 경우 로그아웃 처리
      if (errorMessage.includes("토큰") || errorMessage.includes("인증")) {
        setIsLoggedIn(false)
        setAdminToken(null)
        setDashboardData(null)
        localStorage.removeItem("adminToken")
      }
    } finally {
      setLoading(false)
    }
  }, [adminToken])

  // 컴포넌트 마운트 시 로컬 스토리지에서 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (token) {
      setAdminToken(token)
      setIsLoggedIn(true)
      refreshDashboard()
    }
  }, [refreshDashboard])

  const login = async (credentials: AdminLoginDto): Promise<boolean> => {
    setLoading(true)
    setError(null)

    try {
      const response = await adminApi.login(credentials)

      if (response.success && response.token) {
        setIsLoggedIn(true)
        setAdminToken(response.token)
        localStorage.setItem("adminToken", response.token)
        await refreshDashboard()
        return true
      } else {
        setError(response.message)
        return false
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "로그인 중 오류가 발생했습니다."
      setError(errorMessage)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    setLoading(true)

    try {
      if (adminToken) {
        await adminApi.logout(adminToken)
      }
    } catch (err) {
      console.error("로그아웃 요청 실패:", err)
    } finally {
      setIsLoggedIn(false)
      setAdminToken(null)
      setDashboardData(null)
      localStorage.removeItem("adminToken")
      setLoading(false)
    }
  }

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn,
        adminToken,
        dashboardData,
        loading,
        error,
        login,
        logout,
        refreshDashboard,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}
