import type { Metadata } from "next"
import localFont from "next/font/local"

import QueryProvider from "../common/providers/query-provider"
import { AdminProvider } from "../common/context/AdminContext"
import NoticeModalManager from "../common/components/notice-modal/NoticeModalManager"
import LayoutClientComponent from "../common/components/layout/LayoutClientComponent"
import "./globals.css"

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata: Metadata = {
  title: "어울림스카이",
  description: "어울림스카이",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <QueryProvider>
          <AdminProvider>
            <LayoutClientComponent>{children}</LayoutClientComponent>
            <NoticeModalManager />
          </AdminProvider>
        </QueryProvider>
        <div id="modal-root" />
      </body>
    </html>
  )
}
