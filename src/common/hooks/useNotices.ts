import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { noticeApi } from "@/api/notice"
import type {
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
} from "@/common/types/notice"

// Query Keys
export const NOTICE_QUERY_KEYS = {
  all: ["notices"] as const,
  list: ["notices", "list"] as const,
  published: ["notices", "published"] as const,
  modal: ["notices", "modal"] as const,
  stats: ["notices", "stats"] as const,
  detail: (id: string) => ["notices", "detail", id] as const,
} as const

// 모든 공지사항 조회 (관리자용)
export function useNotices() {
  return useQuery({
    queryKey: NOTICE_QUERY_KEYS.list,
    queryFn: noticeApi.getAll,
    staleTime: 2 * 60 * 1000, // 2분
    retry: 1,
  })
}

// 공개된 공지사항 조회
export function usePublishedNotices() {
  return useQuery({
    queryKey: NOTICE_QUERY_KEYS.published,
    queryFn: noticeApi.getPublished,
    staleTime: 5 * 60 * 1000, // 5분
    retry: 1,
  })
}

// 모달용 공지사항 조회
export function useModalNotices() {
  return useQuery({
    queryKey: NOTICE_QUERY_KEYS.modal,
    queryFn: noticeApi.getModal,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

// 공지사항 통계 조회
export function useNoticeStats() {
  return useQuery({
    queryKey: NOTICE_QUERY_KEYS.stats,
    queryFn: noticeApi.getStats,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

// 단일 공지사항 조회
export function useNotice(id: string) {
  return useQuery({
    queryKey: NOTICE_QUERY_KEYS.detail(id),
    queryFn: () => noticeApi.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  })
}

// 공지사항 생성
export function useCreateNotice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateNoticeDto) => noticeApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTICE_QUERY_KEYS.all })
    },
    onError: (error) => {
      console.error("공지사항 생성 실패:", error)
    },
  })
}

// 공지사항 수정
export function useUpdateNotice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateNoticeDto }) =>
      noticeApi.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: NOTICE_QUERY_KEYS.all })
      queryClient.invalidateQueries({ queryKey: NOTICE_QUERY_KEYS.detail(id) })
    },
    onError: (error) => {
      console.error("공지사항 수정 실패:", error)
    },
  })
}

// 공지사항 삭제
export function useDeleteNotice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => noticeApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: NOTICE_QUERY_KEYS.all })
    },
    onError: (error) => {
      console.error("공지사항 삭제 실패:", error)
    },
  })
}
