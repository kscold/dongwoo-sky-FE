import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { serviceNoticeApi } from "./notice.api"

export const usePublishedNotices = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ["service-notices", page, limit],
    queryFn: () => serviceNoticeApi.getPublishedNotices(page, limit),
  })
}

export const useServiceNotice = (id: string) => {
  return useQuery({
    queryKey: ["service-notice", id],
    queryFn: () => serviceNoticeApi.getNoticeById(id),
    enabled: !!id,
  })
}

export const useIncrementNoticeView = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (id: string) => serviceNoticeApi.incrementViewCount(id),
    onSuccess: (_, id) => {
      // 특정 공지사항 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["service-notice", id] })
      // 목록 캐시도 무효화 (조회수 업데이트 반영)
      queryClient.invalidateQueries({ queryKey: ["service-notices"] })
    },
  })
}