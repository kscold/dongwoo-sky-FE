"use client"

import React from "react"

import { useNoticeModal } from "../../hooks/useNoticeModal"
import { ContentModal } from "./ContentModal"

export default function NoticeModalManager() {
  const {
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    isLoading,
  } = useNoticeModal()

  if (isLoading || !currentNotice || !isModalOpen) {
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
