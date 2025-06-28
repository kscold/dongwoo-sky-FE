"use client"

import React from "react"
import { useNoticeModal } from "../../../common/hooks/useNoticeModal"
import { ContentModal } from "../../../common/components/notice-modal/ContentModal"

export default function NoticeModal() {
  const {
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    loadingState,
  } = useNoticeModal()

  if (!isModalOpen || !currentNotice || loadingState.isLoading) {
    return null
  }

  return (
    <ContentModal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={currentNotice.title}
      content={currentNotice.content}
      attachments={currentNotice.attachments || []}
      badge="공지사항"
      showTodayClose={true}
      onCloseToday={closeTodayModal}
    />
  )
}
