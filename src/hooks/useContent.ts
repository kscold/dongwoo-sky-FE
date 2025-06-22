import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { contentApi } from "@/api/content"
import type {
  WorkShowcase,
  CustomerReview,
  CreateWorkShowcaseDto,
  UpdateWorkShowcaseDto,
  CreateCustomerReviewDto,
  UpdateCustomerReviewDto,
} from "@/api/content"

// Query Keys
export const CONTENT_QUERY_KEYS = {
  all: ["content"] as const,
  workShowcases: ["content", "work-showcases"] as const,
  workShowcasesTop: ["content", "work-showcases", "top"] as const,
  workShowcasesList: (page: number, limit: number) =>
    ["content", "work-showcases", "list", page, limit] as const,
  workShowcase: (id: string) => ["content", "work-showcases", id] as const,
  customerReviews: ["content", "customer-reviews"] as const,
  customerReviewsTop: ["content", "customer-reviews", "top"] as const,
  customerReviewsList: (page: number, limit: number) =>
    ["content", "customer-reviews", "list", page, limit] as const,
  customerReview: (id: string) => ["content", "customer-reviews", id] as const,
} as const

// 작업자 자랑거리 훅들
export function useTopWorkShowcases() {
  return useQuery<WorkShowcase[], Error>({
    queryKey: CONTENT_QUERY_KEYS.workShowcasesTop,
    queryFn: () => contentApi.getTopWorkShowcases(),
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
    gcTime: 10 * 60 * 1000, // 10분간 메모리에 유지
  })
}

export function useWorkShowcases(page: number = 1, limit: number = 10) {
  return useQuery({
    queryKey: CONTENT_QUERY_KEYS.workShowcasesList(page, limit),
    queryFn: () => contentApi.getAllWorkShowcases(page, limit),
    staleTime: 2 * 60 * 1000,
  })
}

export function useWorkShowcase(id: string) {
  return useQuery({
    queryKey: CONTENT_QUERY_KEYS.workShowcase(id),
    queryFn: () => contentApi.getWorkShowcaseById(id),
    enabled: !!id,
  })
}

export function useCreateWorkShowcase() {
  const queryClient = useQueryClient()

  return useMutation<WorkShowcase, Error, CreateWorkShowcaseDto>({
    mutationFn: (data) => contentApi.createWorkShowcase(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.workShowcases,
      })
    },
  })
}

export function useUpdateWorkShowcase() {
  const queryClient = useQueryClient()

  return useMutation<
    WorkShowcase,
    Error,
    { id: string; data: UpdateWorkShowcaseDto }
  >({
    mutationFn: ({ id, data }) => contentApi.updateWorkShowcase(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.workShowcases,
      })
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.workShowcase(id),
      })
    },
  })
}

export function useDeleteWorkShowcase() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: (id) => contentApi.deleteWorkShowcase(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.workShowcases,
      })
    },
  })
}

export function useLikeWorkShowcase() {
  const queryClient = useQueryClient()

  return useMutation<{ likes: number }, Error, string>({
    mutationFn: (id) => contentApi.likeWorkShowcase(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.workShowcases,
      })
    },
  })
}

// 고객 후기 훅들
export function useTopCustomerReviews() {
  return useQuery<CustomerReview[], Error>({
    queryKey: CONTENT_QUERY_KEYS.customerReviewsTop,
    queryFn: () => contentApi.getTopCustomerReviews(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  })
}

export function useCustomerReviews(page: number = 1, limit: number = 10) {
  return useQuery({
    queryKey: CONTENT_QUERY_KEYS.customerReviewsList(page, limit),
    queryFn: () => contentApi.getAllCustomerReviews(page, limit),
    staleTime: 2 * 60 * 1000,
  })
}

export function useCustomerReview(id: string) {
  return useQuery({
    queryKey: CONTENT_QUERY_KEYS.customerReview(id),
    queryFn: () => contentApi.getCustomerReviewById(id),
    enabled: !!id,
  })
}

export function useCreateCustomerReview() {
  const queryClient = useQueryClient()

  return useMutation<CustomerReview, Error, CreateCustomerReviewDto>({
    mutationFn: (data) => contentApi.createCustomerReview(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.customerReviews,
      })
    },
  })
}

export function useUpdateCustomerReview() {
  const queryClient = useQueryClient()

  return useMutation<
    CustomerReview,
    Error,
    { id: string; data: UpdateCustomerReviewDto }
  >({
    mutationFn: ({ id, data }) => contentApi.updateCustomerReview(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.customerReviews,
      })
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.customerReview(id),
      })
    },
  })
}

export function useDeleteCustomerReview() {
  const queryClient = useQueryClient()

  return useMutation<void, Error, string>({
    mutationFn: (id) => contentApi.deleteCustomerReview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.customerReviews,
      })
    },
  })
}

export function useMarkReviewHelpful() {
  const queryClient = useQueryClient()

  return useMutation<{ helpful: number }, Error, string>({
    mutationFn: (id) => contentApi.markReviewHelpful(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CONTENT_QUERY_KEYS.customerReviews,
      })
    },
  })
}

export function useUploadContentImages() {
  return useMutation<{ imageUrls: string[] }, Error, File[]>({
    mutationFn: (files) => contentApi.uploadImages(files),
    onError: (error) => {
      console.error("Content images upload failed:", error)
    },
  })
}
