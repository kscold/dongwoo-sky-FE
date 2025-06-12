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
      // 네트워크 오류인 경우 빈 배열 반환하고 오류 로그만 출력
      if (
        err &&
        typeof err === "object" &&
        "code" in err &&
        err.code === "ERR_NETWORK"
      ) {
        console.warn(
          "백엔드 서버에 연결할 수 없습니다. 빈 데이터를 표시합니다."
        )
        setNotices([])
        setError(null) // 사용자에게는 오류 표시하지 않음
        return []
      }

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

// 전역 공지사항 모달 훅
export const useNotice = () => {
  const [currentNotice, setCurrentNotice] = useState<Notice | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loadingState, setLoadingState] = useState({ isLoading: false })

  // 모달 열기
  const openModal = useCallback((notice: Notice) => {
    setCurrentNotice(notice)
    setIsModalOpen(true)
  }, [])

  // 모달 닫기
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setCurrentNotice(null)
  }, [])

  // 오늘 하루 보지 않기
  const closeTodayModal = useCallback(() => {
    if (currentNotice) {
      localStorage.setItem(
        `notice_hidden_${currentNotice._id}`,
        new Date().toDateString()
      )
    }
    closeModal()
  }, [currentNotice, closeModal])

  // 페이지 로드 시 모달 공지사항 확인
  useEffect(() => {
    const checkModalNotices = async () => {
      setLoadingState({ isLoading: true })
      try {
        const notices = await noticeApi.getAll()
        const modalNotices = notices.filter(
          (notice) => notice.isModal && notice.isPublished
        )

        // 오늘 숨김 처리된 공지사항 제외
        const today = new Date().toDateString()
        const visibleNotices = modalNotices.filter((notice) => {
          const hiddenDate = localStorage.getItem(`notice_hidden_${notice._id}`)
          return hiddenDate !== today
        })

        if (visibleNotices.length > 0) {
          // 최신 공지사항을 모달로 표시
          const latestNotice = visibleNotices.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )[0]
          openModal(latestNotice)
        }
      } catch (err) {
        console.error("모달 공지사항 확인 중 오류:", err)
      } finally {
        setLoadingState({ isLoading: false })
      }
    }

    checkModalNotices()
  }, [openModal])

  return {
    currentNotice,
    isModalOpen,
    closeModal,
    closeTodayModal,
    loadingState,
    openModal,
  }
}
