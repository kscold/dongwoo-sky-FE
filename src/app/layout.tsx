import React from "react"

import QueryProvider from "../common/providers/query-provider"
import Header from "../common/components/layout/Header"
import Footer from "../common/components/layout/Footer"
import "./globals.css"

export const metadata = {
  title: "어울림 스카이 - 중장비 렌탈 서비스",
  description: "안전하고 신뢰할 수 있는 중장비 렌탈 서비스",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
