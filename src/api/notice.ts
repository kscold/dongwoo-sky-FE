import { apiClient } from "./client"
import {
  CreateNoticeDto,
  Notice,
  UpdateNoticeDto,
  FileUploadResponse,
  NoticeStats,
} from "@/common/types/notice"

interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  error?: string
}

// 공지사항 API 함수
export const noticeApi = {
  // 모든 공지사항 가져오기
  getAll: async (): Promise<Notice[]> => {
    try {
      const response = await apiClient.get<ApiResponse<Notice[]>>("/notices")
      if (response.data.success && response.data.data) {
        return response.data.data
      }
      throw new Error(response.data.message || "공지사항 조회에 실패했습니다.")
    } catch (error) {
      console.error("공지사항 조회 오류:", error)
      throw error
    }
  },

  // 공개된 공지사항만 가져오기
  getPublished: async (): Promise<Notice[]> => {
    console.log(
      "API 요청 URL:",
      `${apiClient.defaults.baseURL}/notices/published`
    )
    try {
      const response = await apiClient.get<ApiResponse<Notice[]>>(
        "/notices/published"
      )
      console.log("API 응답:", response.data)

      if (response.data.success && response.data.data) {
        // isModal이 false인 공지사항만 필터링
        const filteredNotices = response.data.data.filter(
          (notice) => notice.isModal !== true
        )
        console.log("필터링된 공지사항:", filteredNotices)
        return filteredNotices
      }
      throw new Error(response.data.message || "공지사항 조회에 실패했습니다.")
    } catch (error: unknown) {
      console.error("API 오류:", error)
      // 네트워크 오류인 경우 빈 배열 반환
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        (error as { code: string }).code === "ERR_NETWORK"
      ) {
        console.warn(
          "백엔드 서버에 연결할 수 없습니다. 빈 데이터를 반환합니다."
        )
        return []
      }
      throw error
    }
  },

  // 모달로 표시할 공지사항 가져오기
  getModal: async (): Promise<Notice[]> => {
    console.log("API 요청 URL:", `${apiClient.defaults.baseURL}/notices/modal`)
    try {
      const response = await apiClient.get<ApiResponse<Notice[]>>(
        "/notices/modal"
      )
      console.log("API 응답:", response.data)

      if (response.data.success && response.data.data) {
        const modalNotices = response.data.data.filter(
          (notice) => notice.isModal === true
        )
        console.log("모달 공지사항:", modalNotices)
        return modalNotices
      }
      return []
    } catch (error) {
      console.error("모달 공지사항 조회 오류:", error)
      return []
    }
  },

  // 단일 공지사항 가져오기
  getById: async (id: string): Promise<Notice> => {
    const response = await apiClient.get<ApiResponse<Notice>>(`/notices/${id}`)
    if (response.data.success && response.data.data) {
      return response.data.data
    }
    throw new Error(response.data.message || "공지사항을 찾을 수 없습니다.")
  },

  // 공지사항 생성하기
  create: async (notice: CreateNoticeDto): Promise<Notice> => {
    const response = await apiClient.post<ApiResponse<Notice>>(
      "/notices",
      notice
    )
    if (response.data.success && response.data.data) {
      return response.data.data
    }
    throw new Error(response.data.message || "공지사항 생성에 실패했습니다.")
  },

  // 공지사항 수정하기
  update: async (id: string, notice: UpdateNoticeDto): Promise<Notice> => {
    const response = await apiClient.patch<ApiResponse<Notice>>(
      `/notices/${id}`,
      notice
    )
    if (response.data.success && response.data.data) {
      return response.data.data
    }
    throw new Error(response.data.message || "공지사항 수정에 실패했습니다.")
  },

  // 공지사항 삭제하기
  delete: async (id: string): Promise<void> => {
    const response = await apiClient.delete<ApiResponse<void>>(`/notices/${id}`)
    if (!response.data.success) {
      throw new Error(response.data.message || "공지사항 삭제에 실패했습니다.")
    }
  },

  // 통계 정보 가져오기
  getStats: async (): Promise<NoticeStats> => {
    try {
      const response = await apiClient.get<ApiResponse<NoticeStats>>(
        "/notices/stats"
      )
      if (response.data.success && response.data.data) {
        return response.data.data
      }
      throw new Error(response.data.message || "통계 정보 조회에 실패했습니다.")
    } catch (error: unknown) {
      console.error("통계 정보 조회 오류:", error)
      // 네트워크 오류인 경우 기본값 반환
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        (error as { code: string }).code === "ERR_NETWORK"
      ) {
        return {
          totalNotices: 0,
          publishedNotices: 0,
          modalNotices: 0,
          recentNotices: 0,
        }
      }
      throw error
    }
  },

  // 파일 업로드 - 단일 파일
  uploadFile: async (file: File): Promise<FileUploadResponse> => {
    const formData = new FormData()
    formData.append("file", file)

    const response = await apiClient.post<FileUploadResponse>(
      "/files/notice/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

    return response.data
  },

  // 파일 업로드 - 다중 파일
  uploadFiles: async (files: File[]): Promise<FileUploadResponse[]> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    const response = await apiClient.post<FileUploadResponse[]>(
      "/files/notice/uploads",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

    return response.data
  },
}
