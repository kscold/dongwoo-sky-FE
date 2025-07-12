"use client"

import React, { useEffect } from "react"
import { usePathname } from "next/navigation"

import { useNoticeModal } from "../../hooks/useNoticeModal"
import { ContentModal } from "./ContentModal"

export default function NoticeModalManager() {
  const pathname = usePathname()
  const {
    notice,
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    openModal,
    isLoading,
  } = useNoticeModal()

  // 홈페이지에서만 공지사항 모달 표시
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      return
    }

    if (isLoading || !notice) {
      return
    }

    // 쿠키 확인 (오늘 하루 보지 않기가 설정되어 있는지)
    const noticeModalClosed = document.cookie
      .split("; ")
      .find((row) => row.startsWith("noticeModalClosed="))
      ?.split("=")[1]

    if (noticeModalClosed !== "true") {
      openModal(notice)
    }
  }, [isHomePage, isLoading, notice, openModal])

  // 홈페이지가 아니거나 조건을 만족하지 않으면 모달을 표시하지 않음
  if (!isHomePage || isLoading || !currentNotice || !isModalOpen) {
    return null
  }

  return (
    <ContentModal
      notice={currentNotice}
      onClose={closeModal}
      onCloseToday={closeTodayModal}
    />
  )
}
