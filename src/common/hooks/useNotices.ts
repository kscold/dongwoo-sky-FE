import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { noticeApi } from "../../api/notice"
import type {
  Notice,
  UpdateNoticeDto,
} from "../../types/notice"

const noticeQueryKeys = {
  all: ["notices"] as const,
  lists: () => [...noticeQueryKeys.all, "list"] as const,
  list: (page: number, limit: number) =>
    [...noticeQueryKeys.lists(), { page, limit }] as const,
  details: () => [...noticeQueryKeys.all, "detail"] as const,
  detail: (id: string) => [...noticeQueryKeys.details(), id] as const,
  published: () => [...noticeQueryKeys.all, "published"] as const,
}

/** 공개용 공지사항 목록 조회 (페이지네이션) */
export const useNotices = (page: number, limit: number) => {
  return useQuery({
    queryKey: noticeQueryKeys.list(page, limit),
    queryFn: () => noticeApi.getAll(page, limit),
    placeholderData: (previousData) => previousData,
  })
}

/** 관리자용 공지사항 목록 조회 (페이지네이션) */
export const useNoticesAdmin = (page: number, limit: number) => {
  return useQuery({
    queryKey: [...noticeQueryKeys.list(page, limit), "admin"],
    queryFn: () => noticeApi.getAllAdmin(page, limit),
    placeholderData: (previousData) => previousData,
  })
}

// 공개용 단일 공지사항을 가져오는 훅
export const useNotice = (id: string) => {
  return useQuery({
    queryKey: noticeQueryKeys.detail(id),
    queryFn: () => noticeApi.getById(id),
    enabled: !!id, // id가 있을 때만 쿼리 실행
  })
}

// 관리자용 단일 공지사항을 가져오는 훅
export const useNoticeAdmin = (id: string) => {
  return useQuery({
    queryKey: [...noticeQueryKeys.detail(id), "admin"],
    queryFn: () => noticeApi.getByIdAdmin(id),
    enabled: !!id, // id가 있을 때만 쿼리 실행
  })
}

/** 공지사항 생성 */
export const useCreateNotice = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Omit<Notice, "_id" | "createdAt" | "updatedAt">) =>
      noticeApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeQueryKeys.lists() })
    },
  })
}

/** 공지사항 수정 */
export const useUpdateNotice = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateNoticeDto }) =>
      noticeApi.update(id, data),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: noticeQueryKeys.lists() })
      queryClient.invalidateQueries({ queryKey: noticeQueryKeys.detail(id) })
    },
  })
}

/** 공지사항 삭제 */
export const useDeleteNotice = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => noticeApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: noticeQueryKeys.lists() })
    },
  })
}
