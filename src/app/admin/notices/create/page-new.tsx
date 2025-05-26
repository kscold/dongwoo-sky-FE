"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import { useNoticeManagement, useFileUpload } from "@/hooks/useNotice"
import { CreateNoticeDto } from "@/types/notice"
import Link from "next/link"
import * as styles from "../../../../styles/notice.css"

export default function CreateNoticePage() {
  const { isLoggedIn } = useAdmin()
  const router = useRouter()
  const { createNotice } = useNoticeManagement()
  const { uploadFiles } = useFileUpload()
  const [formData, setFormData] = useState<CreateNoticeDto>({
    title: "",
    content: "",
    isPublished: true,
    isModal: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.content.trim()) {
      setError("제목과 내용은 필수 항목입니다.")
      return
    }

    try {
      setLoading(true)
      setError(null)

      // 파일 업로드 처리
      let attachments: Array<{
        url: string
        key: string
        name: string
      }> = []

      if (files.length > 0) {
        try {
          const uploadedFiles = await uploadFiles(files)
          if (uploadedFiles && uploadedFiles.length > 0) {
            attachments = uploadedFiles
          }
        } catch (err) {
          console.error("파일 업로드 오류:", err)
          throw new Error("파일 업로드에 실패했습니다.")
        }
      }

      // 공지사항 생성
      const newNotice = await createNotice({
        ...formData,
        attachments,
      })

      if (newNotice) {
        alert("공지사항이 성공적으로 생성되었습니다.")
        router.push("/admin/notices")
      } else {
        throw new Error("공지사항 생성에 실패했습니다.")
      }
    } catch (err: unknown) {
      setError(
        "공지사항 생성에 실패했습니다: " +
          ((err as Error).message || "알 수 없는 오류")
      )
      console.error("공지사항 생성 오류:", err)
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

  // 파일 선택 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files)
      setFiles(fileList)
    }
  }

  // 로그인 상태가 아니면 아무것도 표시하지 않음
  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      router.push("/admin/login")
    }
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>새 공지사항 작성</h1>
        <Link href="/admin/notices" className={styles.backButton}>
          목록으로 돌아가기
        </Link>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            제목 *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="공지사항 제목을 입력하세요"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            내용 *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="공지사항 내용을 입력하세요"
            rows={10}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="isPublished" className={styles.checkboxLabel}>
              공개 상태
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="isModal"
              name="isModal"
              checked={formData.isModal}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor="isModal" className={styles.checkboxLabel}>
              모달로 표시
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="files" className={styles.label}>
            첨부 파일
          </label>
          <input
            type="file"
            id="files"
            onChange={handleFileChange}
            className={styles.fileInput}
            multiple
          />
          <small className={styles.helpText}>
            최대 5개의 파일을 첨부할 수 있습니다. (최대 용량: 15MB)
          </small>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "처리 중..." : "저장하기"}
          </button>
          <Link href="/admin/notices" className={styles.cancelButton}>
            취소
          </Link>
        </div>
      </form>
    </div>
  )
}
