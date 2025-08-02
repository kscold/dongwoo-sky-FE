import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { customerReviewApi } from "./customer-review.api"
import type {
  CustomerReviewResponse,
  CustomerReviewRequest,
  CustomerReviewUpdateRequest,
} from "../types/customer-review"

const customerReviewKeys = {
  all: ["customer-review"] as const,
  admin: () => [...customerReviewKeys.all, "admin"] as const,
  adminList: (page: number) => [...customerReviewKeys.admin(), "list", page] as const,
  adminDetail: (id: string) => [...customerReviewKeys.admin(), "detail", id] as const,
}

export const useCustomerReviews = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: customerReviewKeys.adminList(page),
    queryFn: () => customerReviewApi.getAllAdmin(page, limit),
  })
}

export const useCustomerReview = (id: string) => {
  return useQuery({
    queryKey: customerReviewKeys.adminDetail(id),
    queryFn: () => customerReviewApi.getByIdAdmin(id),
    enabled: !!id,
  })
}

export const useCreateCustomerReview = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (data: CustomerReviewRequest) => customerReviewApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      alert("고객 리뷰가 생성되었습니다.")
      router.push("/admin/customer-review")
    },
    onError: () => {
      alert("고객 리뷰 생성에 실패했습니다.")
    },
  })
}

export const useUpdateCustomerReview = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CustomerReviewUpdateRequest }) =>
      customerReviewApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      alert("고객 리뷰가 수정되었습니다.")
      router.push("/admin/customer-review")
    },
    onError: () => {
      alert("고객 리뷰 수정에 실패했습니다.")
    },
  })
}

export const useDeleteCustomerReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => customerReviewApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      alert("고객 리뷰가 삭제되었습니다.")
    },
    onError: () => {
      alert("고객 리뷰 삭제에 실패했습니다.")
    },
  })
}

export const useToggleCustomerReviewActive = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      customerReviewApi.toggleActive(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
    },
  })
}

export const useToggleCustomerReviewFeatured = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, featured }: { id: string; featured: boolean }) =>
      customerReviewApi.toggleFeatured(id, featured),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
    },
  })
}

export const useUploadCustomerReviewImages = () => {
  return useMutation({
    mutationFn: (files: File[]) => customerReviewApi.uploadImages(files),
  })
}

export const useCustomerReviewManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useCustomerReviews(currentPage)
  const deleteMutation = useDeleteCustomerReview()
  const toggleActiveMutation = useToggleCustomerReviewActive()
  const toggleFeaturedMutation = useToggleCustomerReviewFeatured()

  const handleDelete = async (id: string) => {
    if (window.confirm("정말로 이 고객 리뷰를 삭제하시겠습니까?")) {
      deleteMutation.mutate(id)
    }
  }

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    toggleActiveMutation.mutate({ id, isActive: !currentStatus })
  }

  const handleToggleFeatured = async (id: string, currentStatus: boolean) => {
    toggleFeaturedMutation.mutate({ id, featured: !currentStatus })
  }

  return {
    data,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
    handleDelete,
    handleToggleActive,
    handleToggleFeatured,
  }
}