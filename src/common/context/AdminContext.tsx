"use client"

import { create } from "zustand"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { User } from "../../types/auth"
import { authApi } from "../../api/auth"

interface AdminState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

interface AdminActions {
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => Promise<void>
  setLoading: (isLoading: boolean) => void
}

const useAdminStore = create<AdminState & AdminActions>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  setLoading: (isLoading) => set({ isLoading }),

  login: async (email, password) => {
    set({ isLoading: true })
    try {
      const response = await authApi.login({ email, password })
      if (
        response.success &&
        response.user?.role === "admin" &&
        response.access_token
      ) {
        localStorage.setItem("auth_token", response.access_token)
        set({ user: response.user, isAuthenticated: true, isLoading: false })
        return true
      }
      throw new Error(response.message || "Login failed")
    } catch (error) {
      localStorage.removeItem("auth_token")
      set({ user: null, isAuthenticated: false, isLoading: false })
      return false
    }
  },

  logout: () => {
    localStorage.removeItem("auth_token")
    set({ user: null, isAuthenticated: false, isLoading: false })
    // 페이지 이동은 이 함수를 호출하는 UI 컴포넌트(e.g., Header)에서 담당하는 것이
    // 상태 관리와 UI 로직을 분리하는 더 좋은 패턴입니다.
    // 예: const handleLogout = () => { logout(); router.push('/admin/login'); }
  },

  checkAuth: async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    if (!token) {
      set({ isLoading: false, user: null, isAuthenticated: false })
      return
    }

    try {
      const currentUser = await authApi.getCurrentUser()
      if (currentUser?.role === "admin") {
        set({ user: currentUser, isAuthenticated: true, isLoading: false })
      } else {
        throw new Error("User is not an admin.")
      }
    } catch (error) {
      localStorage.removeItem("auth_token")
      set({ user: null, isAuthenticated: false, isLoading: false })
    }
  },
}))

/**
 * 앱이 로드될 때나 페이지 이동 시 인증 상태를 초기화하고 확인하는 역할을 합니다.
 * 이 Provider는 Admin 관련 레이아웃의 최상위에서 사용되어야 합니다.
 */
export function AdminProvider({ children }: { children: React.ReactNode }) {
  const { checkAuth, setLoading } = useAdminStore()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/admin/login") {
      setLoading(false)
    } else {
      checkAuth()
    }
  }, [pathname, checkAuth, setLoading])

  return <>{children}</>
}

/**
 * 관리자 인증 상태 및 액션을 컴포넌트에서 사용하기 위한 훅입니다.
 */
export const useAdmin = useAdminStore
