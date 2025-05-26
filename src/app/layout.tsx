"use client"

// import type { Metadata } from "next"; // 사용하지 않으므로 제거
import { Inter } from "next/font/google"
import "@/styles/reset.css"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// metadata export 제거
// export const metadata: Metadata = {
//   title: "동우스카이 | 최신 스카이 장비, 신속하고 안전한 작업",
//   description: "동우스카이는 전국 어디든 신속하게 출동하는 최신 스카이 장비 임대 서비스를 제공합니다. 안전하고 효율적인 고소 작업을 경험하세요.",
// };

// 동적 임포트로 모달 컴포넌트 가져오기
import dynamic from "next/dynamic"

// 모달은 클라이언트 사이드에서만 렌더링되도록 동적 임포트
const NoticeModal = dynamic(() => import("@/components/common/NoticeModal"), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body>
        {children}
        <NoticeModal />
      </body>
    </html>
  )
}
