"use client"

import React from "react"
import { usePathname } from "next/navigation"

import Header from "./Header"
import Footer from "./Footer"
import QueryProvider from "../../providers/query-provider"

export default function LayoutClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith("/admin")

  return (
    <QueryProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {!isAdminPage && <Header />}
        <main style={{ flex: 1 }}>{children}</main>
        {!isAdminPage && <Footer />}
      </div>
    </QueryProvider>
  )
}
