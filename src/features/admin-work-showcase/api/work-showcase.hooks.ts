import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { workShowcaseApi } from "./work-showcase.api"
import type {
  WorkShowcaseResponse,
  WorkShowcaseRequest,
  WorkShowcaseUpdateRequest,
} from "../types/work-showcase"

const workShowcaseKeys = {
  all: ["work-showcase"] as const,
  admin: () => [...workShowcaseKeys.all, "admin"] as const,
  adminList: (page: number) => [...workShowcaseKeys.admin(), "list", page] as const,
  adminDetail: (id: string) => [...workShowcaseKeys.admin(), "detail", id] as const,
}

export const useWorkShowcases = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: workShowcaseKeys.adminList(page),
    queryFn: () => workShowcaseApi.getAllAdmin(page, limit),
  })
}

export const useWorkShowcase = (id: string) => {
  return useQuery({
    queryKey: workShowcaseKeys.adminDetail(id),
    queryFn: () => workShowcaseApi.getByIdAdmin(id),
    enabled: !!id,
  })
}

export const useCreateWorkShowcase = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (data: WorkShowcaseRequest) => workShowcaseApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      alert("작업자 자랑거리가 생성되었습니다.")
      router.push("/admin/work-showcase")
    },
    onError: () => {
      alert("작업자 자랑거리 생성에 실패했습니다.")
    },
  })
}

export const useUpdateWorkShowcase = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: WorkShowcaseUpdateRequest }) =>
      workShowcaseApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      alert("작업자 자랑거리가 수정되었습니다.")
      router.push("/admin/work-showcase")
    },
    onError: () => {
      alert("작업자 자랑거리 수정에 실패했습니다.")
    },
  })
}

export const useDeleteWorkShowcase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => workShowcaseApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      alert("작업자 자랑거리가 삭제되었습니다.")
    },
    onError: () => {
      alert("작업자 자랑거리 삭제에 실패했습니다.")
    },
  })
}

export const useToggleWorkShowcaseActive = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      workShowcaseApi.toggleActive(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
    },
  })
}

export const useUploadWorkShowcaseImages = () => {
  return useMutation({
    mutationFn: (files: File[]) => workShowcaseApi.uploadImages(files),
  })
}

export const useWorkShowcaseManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedItem, setSelectedItem] = useState<WorkShowcaseResponse | null>(null)
  
  const { data, isLoading, error } = useWorkShowcases(currentPage)
  const deleteMutation = useDeleteWorkShowcase()
  const toggleActiveMutation = useToggleWorkShowcaseActive()

  const handleDelete = async (id: string) => {
    if (window.confirm("정말로 이 작업자 자랑거리를 삭제하시겠습니까?")) {
      deleteMutation.mutate(id)
    }
  }

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    toggleActiveMutation.mutate({ id, isActive: !currentStatus })
  }

  return {
    data,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
    selectedItem,
    setSelectedItem,
    handleDelete,
    handleToggleActive,
  }
}