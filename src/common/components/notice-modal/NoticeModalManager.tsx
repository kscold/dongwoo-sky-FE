"use client"

import React, { useEffect, useState } from "react"
import { usePublishedNotices } from "../../hooks/useNotices"
import { ContentModal } from "./ContentModal"

const NoticeModalManager: React.FC = () => {
  const { data: allNotices, isLoading, error } = usePublishedNotices()
  const [currentModalIndex, setCurrentModalIndex] = useState(0)
  const [closedToday, setClosedToday] = useState<string[]>([])
  const [allModalsClosed, setAllModalsClosed] = useState(false)

  // isModal이 true인 공지사항만 필터링
  const modalNotices =
    allNotices?.filter((notice) => notice.isModal === true) || []

  // 임시 테스트용 더미 데이터
  const dummyModalNotice = {
    _id: "test-modal-1",
    title: "테스트 모달 공지사항",
    content: "이것은 테스트용 모달 공지사항입니다.",
    isModal: true,
    isPublished: true,
    createdAt: new Date().toISOString(),
    attachments: [],
  }

  // 테스트: modalNotices가 비어있으면 더미 데이터 사용
  const finalModalNotices =
    modalNotices.length > 0 ? modalNotices : [dummyModalNotice]

  // 디버깅을 위한 로그
  console.log("NoticeModalManager - allNotices:", allNotices)
  console.log("NoticeModalManager - modalNotices:", modalNotices)
  console.log("NoticeModalManager - finalModalNotices:", finalModalNotices)
  console.log("NoticeModalManager - isLoading:", isLoading)
  console.log("NoticeModalManager - error:", error)

  useEffect(() => {
    // 로컬스토리지에서 오늘 닫은 모달 목록 불러오기
    const today = new Date().toDateString()
    const stored = localStorage.getItem(`closedModals_${today}`)
    if (stored) {
      setClosedToday(JSON.parse(stored))
    }
  }, [])

  // 로딩 중이거나 데이터가 없거나 모든 모달이 닫혔으면 아무것도 렌더링하지 않음
  if (isLoading || !finalModalNotices || finalModalNotices.length === 0) {
    console.log(
      "Not rendering modal - isLoading:",
      isLoading,
      "finalModalNotices:",
      finalModalNotices?.length
    )
    return null
  }

  if (allModalsClosed) {
    console.log("All modals closed - not rendering")
    return null
  }

  const currentNotice = finalModalNotices[currentModalIndex]
  const isModalOpen = Boolean(
    currentNotice && !closedToday.includes(currentNotice._id)
  )

  // 더 자세한 디버깅 로그
  console.log("Current notice:", currentNotice)
  console.log("Closed today:", closedToday)
  console.log("Is modal open:", isModalOpen)
  console.log("Current modal index:", currentModalIndex)
  console.log("All modals closed:", allModalsClosed)

  const handleCloseModal = () => {
    console.log(
      "handleCloseModal called - currentModalIndex:",
      currentModalIndex,
      "total modals:",
      finalModalNotices.length
    )

    if (currentModalIndex < finalModalNotices.length - 1) {
      // 다음 모달이 있으면 다음 모달로
      setCurrentModalIndex(currentModalIndex + 1)
      console.log("Moving to next modal:", currentModalIndex + 1)
    } else {
      // 마지막 모달이면 모든 모달 닫기
      console.log("Closing all modals")
      setAllModalsClosed(true)
    }
  }

  const handleCloseToday = () => {
    if (currentNotice) {
      console.log("handleCloseToday called for notice:", currentNotice._id)
      const today = new Date().toDateString()
      const newClosedToday = [...closedToday, currentNotice._id]
      setClosedToday(newClosedToday)

      // 로컬스토리지에 저장
      localStorage.setItem(
        `closedModals_${today}`,
        JSON.stringify(newClosedToday)
      )

      handleCloseModal()
    }
  }

  if (!isModalOpen || !currentNotice) {
    return null
  }

  return (
    <ContentModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title={currentNotice.title}
      content={currentNotice.content}
      attachments={currentNotice.attachments || []}
      badge="📢 공지사항"
      showTodayClose={true}
      onCloseToday={handleCloseToday}
    />
  )
}

export default NoticeModalManager
