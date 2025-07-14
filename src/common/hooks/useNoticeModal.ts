import { create } from "zustand"
import { useQuery } from "@tanstack/react-query"

import { noticeApi } from "../../api/notice"
import type { Notice } from "../../types/notice"

interface NoticeModalState {
  isModalOpen: boolean
  currentNotice: Notice | null
  isLoading: boolean
  openModal: (notice: Notice) => void
  closeModal: () => void
  closeTodayModal: () => void
}

export const useNoticeModalStore = create<NoticeModalState>((set) => ({
  isModalOpen: false, // 초기에는 닫혀있도록 변경
  currentNotice: null,
  isLoading: true,
  openModal: (notice) => set({ isModalOpen: true, currentNotice: notice }),
  closeModal: () => set({ isModalOpen: false, currentNotice: null }),
  closeTodayModal: () => {
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 1)
    expiryDate.setHours(0, 0, 0, 0)
    document.cookie = `noticeModalClosed=true; expires=${expiryDate.toUTCString()}; path=/`
    set({ isModalOpen: false, currentNotice: null })
  },
}))

export function useNoticeModal() {
  const { data, isLoading } = useQuery({
    queryKey: ["notices", "modal"],
    queryFn: noticeApi.getModalNotice,
  })

  // zustand 스토어의 상태와 함수들을 가져옴
  const { isModalOpen, currentNotice, openModal, closeModal, closeTodayModal } =
    useNoticeModalStore()

  // 쿠키 확인 로직은 여기서 처리하지 않고 NoticeModalManager 등에서 처리
  return {
    notice: data,
    isLoading,
    isModalOpen,
    currentNotice,
    openModal,
    closeModal,
    closeTodayModal,
  }
}
