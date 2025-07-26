"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

import {
  useNoticeAdmin,
  useUpdateNotice,
} from "../../../../common/hooks/useNotices"
import { useNoticeImagesUpload } from "../../../../common/hooks/useFileUpload"
import { UpdateNoticeDto } from "../../../../types/notice"

import * as notice from "../../../../styles/admin/admin-notice.css"

export default function EditNoticePage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const { data: noticeData, isLoading: isLoadingNotice } = useNoticeAdmin(id)
  const updateNoticeMutation = useUpdateNotice()
  const uploadImagesMutation = useNoticeImagesUpload()

  const [formData, setFormData] = useState<UpdateNoticeDto>({
    title: "",
    content: "",
    isActive: true,
    isModal: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 공지사항 데이터 로드 시 폼 데이터 설정
  useEffect(() => {
    if (noticeData) {
      setFormData({
        title: noticeData.title,
        content: noticeData.content,
        isActive: noticeData.isActive || true,
        isModal: noticeData.isModal || false,
      })
    }
  }, [noticeData])

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title?.trim() || !formData.content?.trim()) {
      setError("제목과 내용은 필수 항목입니다.")
      return
    }

    try {
      setLoading(true)
      setError(null)

      // 공지사항 수정
      const updatedNotice = await updateNoticeMutation.mutateAsync({
        id,
        data: {
          ...formData,
        },
      })

      if (updatedNotice) {
        alert("공지사항이 성공적으로 수정되었습니다.")
        router.push("/admin/notice")
      } else {
        throw new Error("공지사항 수정에 실패했습니다.")
      }
    } catch (err: unknown) {
      setError(
        "공지사항 수정에 실패했습니다: " +
          ((err as Error).message || "알 수 없는 오류")
      )
      console.error("공지사항 수정 오류:", err)
    } finally {
      setLoading(false)
    }
  }

  // 입력 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    // 체크박스 처리
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isLoadingNotice) {
    return (
      <div className={notice.container}>
        <div className={notice.loading}>공지사항을 불러오는 중...</div>
      </div>
    )
  }

  if (!noticeData) {
    return (
      <div className={notice.container}>
        <div className={notice.error}>공지사항을 찾을 수 없습니다.</div>
      </div>
    )
  }

  return (
    <div className={notice.container}>
      <div className={notice.header}>
        <h1 className={notice.title}>공지사항 수정</h1>
        <Link href="/admin/notice" className={notice.backButton}>
          목록으로 돌아가기
        </Link>
      </div>

      {error && <div className={notice.error}>{error}</div>}

      <form onSubmit={handleSubmit} className={notice.form}>
        <div className={notice.formGroup}>
          <label htmlFor="title" className={notice.label}>
            제목 *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={notice.input}
            placeholder="공지사항 제목을 입력하세요"
            required
          />
        </div>

        <div className={notice.formGroup}>
          <label htmlFor="content" className={notice.label}>
            내용 *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={notice.textarea}
            placeholder="공지사항 내용을 입력하세요"
            rows={10}
            required
          />
        </div>

        <div className={notice.formRow}>
          <div className={notice.checkboxGroup}>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className={notice.checkbox}
            />
            <label htmlFor="isActive" className={notice.checkboxLabel}>
              공개 상태
            </label>
          </div>

          <div className={notice.checkboxGroup}>
            <input
              type="checkbox"
              id="isModal"
              name="isModal"
              checked={formData.isModal}
              onChange={handleChange}
              className={notice.checkbox}
            />
            <label htmlFor="isModal" className={notice.checkboxLabel}>
              모달로 표시
            </label>
          </div>
        </div>

        <div className={notice.formActions}>
          <button
            type="submit"
            className={notice.submitButton}
            disabled={loading}
          >
            {loading ? "처리 중..." : "수정하기"}
          </button>
          <Link href="/admin/notice" className={notice.cancelButton}>
            취소
          </Link>
        </div>
      </form>
    </div>
  )
}
