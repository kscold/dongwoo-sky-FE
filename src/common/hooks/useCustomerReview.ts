import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  getPublishedCustomerReviews,
  getCustomerReviewById,
  markReviewHelpful,
  getAdminCustomerReviews,
  getAdminCustomerReviewById,
  createCustomerReview,
  updateCustomerReview,
  deleteCustomerReview,
  uploadCustomerReviewImages,
} from "@/api/customer-review"
import type {
  CustomerReview,
  CreateCustomerReviewDto,
  UpdateCustomerReviewDto,
  PaginatedCustomerReviews,
} from "@/common/types/customer-review"

export const customerReviewKeys = {
  all: ["customer-reviews"] as const,
  public: () => [...customerReviewKeys.all, "public"] as const,
  detail: (id: string) => [...customerReviewKeys.all, "detail", id] as const,
  admin: () => [...customerReviewKeys.all, "admin"] as const,
  adminList: (page: number, limit: number) => [...customerReviewKeys.admin(), "list", page, limit] as const,
  adminDetail: (id: string) => [...customerReviewKeys.admin(), "detail", id] as const,
}

// =================================================================
// 공개용 훅들 (Service API)
// =================================================================

export const usePublishedCustomerReviews = () => {
  return useQuery({
    queryKey: customerReviewKeys.public(),
    queryFn: getPublishedCustomerReviews,
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 메모리에 유지
  })
}

export const useCustomerReview = (id: string) => {
  return useQuery({
    queryKey: customerReviewKeys.detail(id),
    queryFn: () => getCustomerReviewById(id),
    enabled: !!id,
  })
}

export const useMarkReviewHelpful = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: markReviewHelpful,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// =================================================================
// 관리자용 훅들 (Admin API)
// =================================================================

export const useAdminCustomerReviews = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: customerReviewKeys.adminList(page, limit),
    queryFn: () => getAdminCustomerReviews(page, limit),
    staleTime: 2 * 60 * 1000,
  })
}

export const useAdminCustomerReview = (id: string) => {
  return useQuery({
    queryKey: customerReviewKeys.adminDetail(id),
    queryFn: () => getAdminCustomerReviewById(id),
    enabled: !!id,
  })
}

export const useCreateCustomerReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCustomerReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useUpdateCustomerReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string
      data: UpdateCustomerReviewDto
    }) => updateCustomerReview(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.public() })
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.adminDetail(id) })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useDeleteCustomerReview = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCustomerReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.admin() })
      queryClient.invalidateQueries({ queryKey: customerReviewKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useUploadCustomerReviewImages = () => {
  return useMutation({
    mutationFn: uploadCustomerReviewImages,
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}
