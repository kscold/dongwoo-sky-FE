"use client"

import React from "react"
import NoticeModalManager from "@/common/components/notice-modal/NoticeModalManager"

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <NoticeModalManager />
    </>
  )
}
