import { useState, useCallback, useEffect } from "react"
import { noticeApi } from "@/api/notice"
import { Notice, CreateNoticeDto, UpdateNoticeDto } from "@/types/notice"

// 공지사항 목록 조회 훅
export const useNoticeList = () => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 모든 공지사항 불러오기
  const fetchAllNotices = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await noticeApi.getAll()
      setNotices(data)
      return data
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("공지사항을 불러오는 중 오류가 발생했습니다.")
      )
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  // 공개된 공지사항만 불러오기
  const fetchPublishedNotices = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await noticeApi.getPublished()
      setNotices(data)
      return data
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("공지사항을 불러오는 중 오류가 발생했습니다.")
      )
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  // 모달 공지사항 불러오기
  const fetchModalNotices = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await noticeApi.getModal()
      setNotices(data)
      return data
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("모달 공지사항을 불러오는 중 오류가 발생했습니다.")
      )
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    notices,
    loading,
    error,
    fetchAllNotices,
    fetchPublishedNotices,
    fetchModalNotices,
  }
}

// 단일 공지사항 상세 훅
export const useNoticeDetail = (initialId?: string) => {
  const [notice, setNotice] = useState<Notice | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 공지사항 상세정보 불러오기
  const fetchNotice = useCallback(async (id: string) => {
    if (!id) return null

    setLoading(true)
    setError(null)
    try {
      const data = await noticeApi.getById(id)
      setNotice(data)
      return data
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("공지사항을 불러오는 중 오류가 발생했습니다.")
      )
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // 컴포넌트 마운트시 ID가 제공되면 자동으로 불러오기
  useEffect(() => {
    if (initialId) {
      fetchNotice(initialId)
    }
  }, [initialId, fetchNotice])

  return {
    notice,
    loading,
    error,
    fetchNotice,
  }
}

// 공지사항 관리 훅 (생성, 수정, 삭제)
export const useNoticeManagement = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 공지사항 생성
  const createNotice = useCallback(async (noticeData: CreateNoticeDto) => {
    setLoading(true)
    setError(null)
    try {
      const result = await noticeApi.create(noticeData)
      return result
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("공지사항 생성 중 오류가 발생했습니다.")
      )
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // 공지사항 수정
  const updateNotice = useCallback(
    async (id: string, noticeData: UpdateNoticeDto) => {
      setLoading(true)
      setError(null)
      try {
        const result = await noticeApi.update(id, noticeData)
        return result
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("공지사항 수정 중 오류가 발생했습니다.")
        )
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  // 공지사항 삭제
  const deleteNotice = useCallback(async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      await noticeApi.delete(id)
      return true
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("공지사항 삭제 중 오류가 발생했습니다.")
      )
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    createNotice,
    updateNotice,
    deleteNotice,
  }
}

// 파일 업로드 훅
export const useFileUpload = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // 단일 파일 업로드
  const uploadFile = useCallback(async (file: File) => {
    setLoading(true)
    setError(null)
    try {
      const result = await noticeApi.uploadFile(file)
      return result
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("파일 업로드 중 오류가 발생했습니다.")
      )
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // 다중 파일 업로드
  const uploadFiles = useCallback(async (files: File[]) => {
    setLoading(true)
    setError(null)
    try {
      const result = await noticeApi.uploadFiles(files)
      return result
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("파일 업로드 중 오류가 발생했습니다.")
      )
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    uploadFile,
    uploadFiles,
  }
}
