"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface AdminContextType {
  isLoggedIn: boolean
  login: (id: string, password: string) => boolean
  logout: () => void
}

const AdminContext = createContext<AdminContextType>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
})

export const useAdmin = () => useContext(AdminContext)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 컴포넌트 마운트 시 로컬 스토리지에서 로그인 상태 확인
  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuth")
    if (adminAuth === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const login = (id: string, password: string) => {
    const adminId = process.env.NEXT_PUBLIC_ADMIN_ID
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    if (id === adminId && password === adminPassword) {
      setIsLoggedIn(true)
      localStorage.setItem("adminAuth", "true")
      return true
    }
    return false
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("adminAuth")
  }

  return (
    <AdminContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}
