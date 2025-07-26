import { apiClient } from "./client"
import { Notice } from "../types/notice"
import { processAttachment } from "../common/utils/fileUtils"

export interface PaginatedNotices {
  data: Notice[]
  total: number
}

/**
 * 공지사항 데이터를 정리하고 첨부파일을 처리합니다.
 */
const processNoticeData = (notice: any): Notice => {
  const processedNotice = { ...notice }
  
  // 첨부파일 처리
  if (processedNotice.attachments && Array.isArray(processedNotice.attachments)) {
    processedNotice.attachments = processedNotice.attachments.map((attachment: any) => {
      const processed = processAttachment(attachment)
      return {
        ...attachment,
        displayName: processed.displayName,
        fileExtension: processed.fileExtension,
        isImage: processed.isImage,
        originalName: processed.originalName
      }
    })
  }
  
  // 날짜 정규화
  if (processedNotice.createdAt) {
    processedNotice.createdAt = new Date(processedNotice.createdAt).toISOString()
  }
  if (processedNotice.updatedAt) {
    processedNotice.updatedAt = new Date(processedNotice.updatedAt).toISOString()
  }
  
  // 기본값 설정
  processedNotice.author = processedNotice.author || '관리자'
  processedNotice.isPublished = processedNotice.isPublished ?? true
  processedNotice.isModal = processedNotice.isModal ?? false
  
  return processedNotice as Notice
}

export const noticeApi = {
  /** 공개용 공지사항 목록 조회 */
  getAll: async (page: number, limit: number): Promise<PaginatedNotices> => {
    try {
      const response = await apiClient.get("/service/notice", {
        params: { page, limit },
      })
      
      const processedData = {
        ...response.data,
        data: response.data.data.map(processNoticeData)
      }
      
      return processedData
    } catch (error) {
      console.error("공지사항 목록 조회 실패:", error)
      throw error
    }
  },

  /** 전체 공지사항 (관리자용, 페이지네이션) */
  getAllAdmin: async (
    page: number,
    limit: number
  ): Promise<PaginatedNotices> => {
    try {
      const response = await apiClient.get("/admin/notice", {
        params: { page, limit },
      })
      
      const processedData = {
        ...response.data,
        data: response.data.data.map(processNoticeData)
      }
      
      return processedData
    } catch (error) {
      console.error("관리자 공지사항 목록 조회 실패:", error)
      throw error
    }
  },

  /** 공개용 단일 공지사항 조회 */
  getById: async (id: string): Promise<Notice> => {
    if (!id) {
      throw new Error("공지사항 ID가 필요합니다.")
    }
    
    try {
      const response = await apiClient.get(`/service/notice/${id}`)
      return processNoticeData(response.data)
    } catch (error) {
      console.error(`공지사항 조회 실패 (ID: ${id}):`, error)
      throw error
    }
  },

  /** 관리자용 단일 공지사항 조회 */
  getByIdAdmin: async (id: string): Promise<Notice> => {
    if (!id) {
      throw new Error("공지사항 ID가 필요합니다.")
    }
    
    try {
      const response = await apiClient.get(`/admin/notice/${id}`)
      return processNoticeData(response.data)
    } catch (error) {
      console.error(`관리자 공지사항 조회 실패 (ID: ${id}):`, error)
      throw error
    }
  },

  /** 공지사항 생성 */
  create: async (
    data: Omit<Notice, "_id" | "createdAt" | "updatedAt">
  ): Promise<Notice> => {
    try {
      // 데이터 검증
      if (!data.title?.trim()) {
        throw new Error("제목을 입력해주세요.")
      }
      if (!data.content?.trim()) {
        throw new Error("내용을 입력해주세요.")
      }
      
      const response = await apiClient.post("/admin/notice", data)
      return processNoticeData(response.data)
    } catch (error) {
      console.error("공지사항 생성 실패:", error)
      throw error
    }
  },

  /** 공지사항 수정 */
  update: async (
    id: string,
    data: Partial<Omit<Notice, "id" | "createdAt" | "updatedAt">>
  ): Promise<Notice> => {
    if (!id) {
      throw new Error("공지사항 ID가 필요합니다.")
    }
    
    try {
      const response = await apiClient.patch(`/admin/notice/${id}`, data)
      return processNoticeData(response.data)
    } catch (error) {
      console.error(`공지사항 수정 실패 (ID: ${id}):`, error)
      throw error
    }
  },

  /** 공지사항 삭제 */
  delete: async (id: string): Promise<void> => {
    if (!id) {
      throw new Error("공지사항 ID가 필요합니다.")
    }
    
    try {
      await apiClient.delete(`/admin/notice/${id}`)
    } catch (error) {
      console.error(`공지사항 삭제 실패 (ID: ${id}):`, error)
      throw error
    }
  },

  /** 팝업으로 띄울 공지사항 조회 */
  getModalNotice: async (): Promise<Notice | null> => {
    try {
      const response = await apiClient.get("/service/notice/modal")
      return processNoticeData(response.data)
    } catch (error: any) {
      // 404 Not Found의 경우, null을 반환하여 처리
      if (error.response && error.response.status === 404) {
        return null
      }
      console.error("모달 공지사항 조회 실패:", error)
      throw error // 그 외 다른 에러는 다시 던짐
    }
  },

  /** 공지사항 상태 토글 (게시/비게시) */
  togglePublish: async (id: string, isPublished: boolean): Promise<Notice> => {
    return noticeApi.update(id, { isPublished })
  },

  /** 공지사항 모달 설정 토글 */
  toggleModal: async (id: string, isModal: boolean): Promise<Notice> => {
    return noticeApi.update(id, { isModal })
  },
}
