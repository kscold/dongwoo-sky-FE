import { useState } from "react"
import {
  useNoticesAdmin,
  useDeleteNotice,
  useUpdateNotice,
} from "../../../../common/hooks/useNotices"

const NOTICES_PER_PAGE = 10

export const useNoticeManagement = () => {
  const [page, setPage] = useState(1)
  const [selectedNotice, setSelectedNotice] = useState<string | null>(null)

  const { data: noticesData, isLoading } = useNoticesAdmin(
    page,
    NOTICES_PER_PAGE
  )
  const deleteNoticeMutation = useDeleteNotice()
  const updateNoticeMutation = useUpdateNotice()

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`정말로 "${title}" 공지사항을 삭제하시겠습니까?`)) {
      deleteNoticeMutation.mutate(id)
    }
  }

  const handleTogglePublish = async (id: string, isActive: boolean) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id,
        data: { isActive: !isActive }
      })
    } catch (error) {
      alert("상태 변경 중 오류가 발생했습니다.")
    }
  }

  const handleToggleModal = async (id: string, isModal: boolean) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id,
        data: { isModal: !isModal }
      })
    } catch (error) {
      alert("모달 설정 변경 중 오류가 발생했습니다.")
    }
  }

  const totalPages = noticesData?.totalPages || 0

  return {
    page,
    setPage,
    selectedNotice,
    setSelectedNotice,
    noticesData,
    isLoading,
    totalPages,
    handleDelete,
    handleTogglePublish,
    handleToggleModal,
  }
}