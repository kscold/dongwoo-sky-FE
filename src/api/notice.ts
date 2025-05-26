import { apiClient } from "./client"
import {
  CreateNoticeDto,
  Notice,
  UpdateNoticeDto,
  FileUploadResponse,
} from "@/types/notice"

// 공지사항 API 함수
export const noticeApi = {
  // 모든 공지사항 가져오기
  getAll: async (): Promise<Notice[]> => {
    const response = await apiClient.get<Notice[]>("/notices")
    return response.data
  },

  // 공개된 공지사항만 가져오기
  getPublished: async (): Promise<Notice[]> => {
    console.log(
      "API 요청 URL:",
      `${apiClient.defaults.baseURL}/notices/published`
    )
    try {
      const response = await apiClient.get<Notice[]>("/notices/published")
      console.log("API 응답:", response.data)
      return response.data
    } catch (error) {
      console.error("API 오류:", error)
      throw error
    }
  },

  // 모달로 표시할 공지사항 가져오기
  getModal: async (): Promise<Notice[]> => {
    console.log("API 요청 URL:", `${apiClient.defaults.baseURL}/notices/modal`)
    try {
      const response = await apiClient.get<Notice[]>("/notices/modal")
      console.log("API 응답:", response.data)
      return response.data
    } catch (error) {
      console.error("API 오류:", error)
      throw error
    }
  },

  // 단일 공지사항 가져오기
  getById: async (id: string): Promise<Notice> => {
    const response = await apiClient.get<Notice>(`/notices/${id}`)
    return response.data
  },

  // 공지사항 생성하기
  create: async (notice: CreateNoticeDto): Promise<Notice> => {
    const response = await apiClient.post<Notice>("/notices", notice)
    return response.data
  },

  // 공지사항 수정하기
  update: async (id: string, notice: UpdateNoticeDto): Promise<Notice> => {
    const response = await apiClient.patch<Notice>(`/notices/${id}`, notice)
    return response.data
  },

  // 공지사항 삭제하기
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/notices/${id}`)
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
