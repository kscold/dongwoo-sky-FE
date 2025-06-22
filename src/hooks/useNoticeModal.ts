import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useModalNotices } from "./useNotices"
import type { Notice } from "@/types/notice"

interface UseNoticeModalReturn {
  currentNotice: Notice | null
  isModalOpen: boolean
  closeModal: () => void
  closeTodayModal: () => void
  loadingState: {
    isLoading: boolean
  }
}

export function useNoticeModal(): UseNoticeModalReturn {
  const [currentNotice, setCurrentNotice] = useState<Notice | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const { data: modalNotices, isLoading } = useModalNotices()

  // admin 페이지인지 확인
  const isAdminPage = pathname?.startsWith("/admin")

  // 모달 공지사항이 있으면 첫 번째 것을 표시 (admin 페이지가 아닐 때만)
  useEffect(() => {
    if (isAdminPage) {
      // admin 페이지에서는 모달을 표시하지 않음
      return
    }

    if (modalNotices && modalNotices.length > 0) {
      const notice = modalNotices[0]

      // 오늘 하루 보지 않기 체크
      const today = new Date().toDateString()
      const hideKey = `notice_hide_${notice._id}_${today}`
      const shouldHide = localStorage.getItem(hideKey) === "true"

      if (!shouldHide) {
        setCurrentNotice(notice)
        setIsModalOpen(true)
      }
    }
  }, [modalNotices, isAdminPage])

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentNotice(null)
  }

  const closeTodayModal = () => {
    if (currentNotice) {
      const today = new Date().toDateString()
      const hideKey = `notice_hide_${currentNotice._id}_${today}`
      localStorage.setItem(hideKey, "true")
    }
    closeModal()
  }

  return {
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    loadingState: {
      isLoading,
    },
  }
}
