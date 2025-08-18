import { apiClient } from "./client"
import type {
  Notice,
  CreateNoticeDto,
  UpdateNoticeDto,
  PaginatedNotices,
} from "../types/notice"

/**
 * 공개용 공지사항 목록 조회 (페이지네이션)
 */
export const getAll = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedNotices> => {
  try {
    const response = await apiClient.get<PaginatedNotices>(
      "/service/notice",
      {
        params: { page, limit },
      }
    )
    console.log(`[getAll] 공지사항 목록:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAll] 공지사항 목록 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 공지사항 목록 조회 (페이지네이션)
 */
export const getAllAdmin = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedNotices> => {
  try {
    const response = await apiClient.get<PaginatedNotices>(
      "/admin/notice",
      {
        params: { page, limit },
      }
    )
    console.log(`[getAllAdmin] 관리자 공지사항 목록:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getAllAdmin] 관리자 공지사항 목록 조회 실패:`, error)
    throw error
  }
}

/**
 * 공개용 단일 공지사항 조회
 */
export const getById = async (id: string): Promise<Notice> => {
  try {
    const response = await apiClient.get<Notice>(`/service/notice/${id}`)
    console.log(`[getById] 공지사항 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getById] 공지사항 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 관리자용 단일 공지사항 조회
 */
export const getByIdAdmin = async (id: string): Promise<Notice> => {
  try {
    const response = await apiClient.get<Notice>(`/admin/notice/${id}`)
    console.log(`[getByIdAdmin] 관리자 공지사항 상세:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getByIdAdmin] 관리자 공지사항 상세 조회 실패:`, error)
    throw error
  }
}

/**
 * 공지사항 생성
 */
export const create = async (data: CreateNoticeDto): Promise<Notice> => {
  try {
    const response = await apiClient.post<Notice>("/admin/notice", data)
    console.log(`[create] 공지사항 생성 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[create] 공지사항 생성 실패:`, error)
    throw error
  }
}

/**
 * 공지사항 수정
 */
export const update = async (id: string, data: UpdateNoticeDto): Promise<Notice> => {
  try {
    const response = await apiClient.patch<Notice>(`/admin/notice/${id}`, data)
    console.log(`[update] 공지사항 수정 성공:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[update] 공지사항 수정 실패:`, error)
    throw error
  }
}

/**
 * 공지사항 삭제
 */
export const deleteNotice = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/admin/notice/${id}`)
    console.log(`[delete] 공지사항 삭제 성공`)
  } catch (error) {
    console.error(`[delete] 공지사항 삭제 실패:`, error)
    throw error
  }
}

/**
 * 모달용 공지사항 조회
 */
export const getModalNotice = async (): Promise<Notice | null> => {
  try {
    const response = await apiClient.get<Notice>("/service/notice/modal")
    console.log(`[getModalNotice] 모달 공지사항:`, response.data)
    return response.data
  } catch (error) {
    console.error(`[getModalNotice] 모달 공지사항 조회 실패:`, error)
    // 모달 공지사항이 없을 수 있으므로 null 반환
    return null
  }
}

// named export로 noticeApi 객체 생성
export const noticeApi = {
  getAll,
  getAllAdmin,
  getById,
  getByIdAdmin,
  create,
  update,
  delete: deleteNotice,
  getModalNotice,
}

// default export (이전 버전과의 호환성)
export default noticeApi