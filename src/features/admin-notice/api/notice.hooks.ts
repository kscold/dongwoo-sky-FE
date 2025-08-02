import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { noticeApi } from "./notice.api"
import type { Notice } from "@/types/notice"

export const noticeKeys = {
  all: ["notice"] as const,
  admin: () => [...noticeKeys.all, "admin"] as const,
  adminList: (page: number) => [...noticeKeys.admin(), "list", page] as const,
  adminDetail: (id: string) => [...noticeKeys.admin(), "detail", id] as const,
}

export const useNoticeManagement = () => {
  const [page, setPage] = useState(1)
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)
  const queryClient = useQueryClient()
  const router = useRouter()

  const { data: noticesData, isLoading } = useQuery({
    queryKey: noticeKeys.adminList(page),
    queryFn: () => noticeApi.getAllAdmin(page, 10),
  })

  const totalPages = noticesData ? Math.ceil(noticesData.totalItems / 10) : 0

  const deleteMutation = useMutation({
    mutationFn: noticeApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.admin() })
      alert("공지사항이 삭제되었습니다.")
    },
    onError: () => {
      alert("공지사항 삭제에 실패했습니다.")
    },
  })

  const togglePublishMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      noticeApi.togglePublish(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.admin() })
    },
  })

  const toggleModalMutation = useMutation({
    mutationFn: ({ id, isModal }: { id: string; isModal: boolean }) =>
      noticeApi.toggleModal(id, isModal),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeKeys.admin() })
    },
  })

  const handleDelete = async (id: string) => {
    if (window.confirm("정말로 이 공지사항을 삭제하시겠습니까?")) {
      deleteMutation.mutate(id)
    }
  }

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    togglePublishMutation.mutate({ id, isActive: !currentStatus })
  }

  const handleToggleModal = async (id: string, currentStatus: boolean) => {
    toggleModalMutation.mutate({ id, isModal: !currentStatus })
  }

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