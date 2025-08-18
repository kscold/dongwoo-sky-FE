import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  getPublishedWorkShowcases,
  getWorkShowcaseById,
  likeWorkShowcase,
  getAdminWorkShowcases,
  getAdminWorkShowcaseById,
  createWorkShowcase,
  updateWorkShowcase,
  deleteWorkShowcase,
  uploadWorkShowcaseImages,
} from "../../api/work-showcase"
import type {
  WorkShowcase,
  CreateWorkShowcaseDto,
  UpdateWorkShowcaseDto,
  PaginatedWorkShowcases,
} from "../../types/work-showcase"

export const workShowcaseKeys = {
  all: ["work-showcases"] as const,
  public: () => [...workShowcaseKeys.all, "public"] as const,
  detail: (id: string) => [...workShowcaseKeys.all, "detail", id] as const,
  admin: () => [...workShowcaseKeys.all, "admin"] as const,
  adminList: (page: number, limit: number) =>
    [...workShowcaseKeys.admin(), "list", page, limit] as const,
  adminDetail: (id: string) =>
    [...workShowcaseKeys.admin(), "detail", id] as const,
}

// =================================================================
// 공개용 훅들 (Service API)
// =================================================================

export const usePublishedWorkShowcases = () => {
  return useQuery({
    queryKey: workShowcaseKeys.public(),
    queryFn: async () => {
      const result = await getPublishedWorkShowcases()
      console.log("[usePublishedWorkShowcases] API 결과:", result)
      return result
    },
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 메모리에 유지
  })
}

export const useWorkShowcase = (id: string) => {
  return useQuery({
    queryKey: workShowcaseKeys.detail(id),
    queryFn: () => getWorkShowcaseById(id),
    enabled: !!id,
  })
}

export const useLikeWorkShowcase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: likeWorkShowcase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// =================================================================
// 관리자용 훅들 (Admin API)
// =================================================================

export const useAdminWorkShowcases = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: workShowcaseKeys.adminList(page, limit),
    queryFn: () => getAdminWorkShowcases(page, limit),
    staleTime: 2 * 60 * 1000,
  })
}

export const useAdminWorkShowcase = (id: string) => {
  return useQuery({
    queryKey: workShowcaseKeys.adminDetail(id),
    queryFn: () => getAdminWorkShowcaseById(id),
    enabled: !!id,
  })
}

export const useCreateWorkShowcase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createWorkShowcase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useUpdateWorkShowcase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateWorkShowcaseDto }) =>
      updateWorkShowcase(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.public() })
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.detail(id) })
      queryClient.invalidateQueries({
        queryKey: workShowcaseKeys.adminDetail(id),
      })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useDeleteWorkShowcase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteWorkShowcase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.admin() })
      queryClient.invalidateQueries({ queryKey: workShowcaseKeys.public() })
    },
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

export const useUploadWorkShowcaseImages = () => {
  return useMutation({
    mutationFn: uploadWorkShowcaseImages,
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// =================================================================
// Customer Review 관련 훅들 (빌드 오류 해결을 위한 추가)
// =================================================================

export const useCustomerReview = (id: string) => {
  return useQuery({
    queryKey: [...workShowcaseKeys.all, "customer-review", id],
    queryFn: () => getWorkShowcaseById(id), // 임시로 동일한 API 사용
    enabled: !!id,
  })
}

// This hook is deprecated - use useCustomerReviews from useCustomerReview.ts instead
// export const useCustomerReviews = (page: number = 1, limit: number = 10) => {
//   return useQuery({
//     queryKey: [...workShowcaseKeys.all, "customer-reviews", page, limit],
//     queryFn: async () => {
//       const data = await getPublishedWorkShowcases(1, limit)
//       return data
//     },
//     staleTime: 5 * 60 * 1000,
//   })
// }

export const useTopWorkShowcases = (limit: number = 5) => {
  return useQuery({
    queryKey: [...workShowcaseKeys.all, "top", limit],
    queryFn: async () => {
      const data = await getPublishedWorkShowcases(1, limit)
      return data.data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

export const useTopCustomerReviews = (limit: number = 5) => {
  return useQuery({
    queryKey: [...workShowcaseKeys.all, "top-customer-reviews", limit],
    queryFn: async () => {
      const data = await getPublishedWorkShowcases(1, limit)
      return data.data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

export const useWorkShowcases = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: [...workShowcaseKeys.all, "showcases", page, limit],
    queryFn: async () => {
      const result = await getPublishedWorkShowcases(page, limit)
      console.log("[useWorkShowcases] API 결과:", result)
      return result
    },
    staleTime: 5 * 60 * 1000,
  })
}
