"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import {
  useNoticeAdmin,
  useUpdateNotice,
} from "../../../../../common/hooks/useNotices"
import { useNoticeAttachmentsUpload } from "../../../../../common/hooks/useFileUpload"
import { UpdateNoticeDto } from "../../../../../types/notice"
import { Uploader } from "../../../../../common/components/upload/Uploader"
import { isImageFile, getFileIcon, formatFileSize } from "../../../../../utils/fileUtils"

import * as notice from "../../../../../styles/admin/admin-notice.css"

export default function EditNoticePage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const { data: noticeData, isLoading: isLoadingNotice } = useNoticeAdmin(id)
  const updateNoticeMutation = useUpdateNotice()
  const uploadAttachmentsMutation = useNoticeAttachmentsUpload()

  const [formData, setFormData] = useState<UpdateNoticeDto>({
    title: "",
    content: "",
    isPublished: true,
    isModal: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newAttachments, setNewAttachments] = useState<any[]>([])

  // 공지사항 데이터 로드 시 폼 데이터 설정
  useEffect(() => {
    if (noticeData) {
      setFormData({
        title: noticeData.title,
        content: noticeData.content,
        isPublished: noticeData.isPublished,
        isModal: noticeData.isModal || false,
        attachments: noticeData.attachments,
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

      // 파일 업로드 처리
      let attachments = formData.attachments || []
      
      // 새로 업로드된 첨부파일이 있으면 기존 첨부파일에 추가
      if (newAttachments.length > 0) {
        const newAttachmentObjects = newAttachments.map((attachment) => ({
          url: attachment.url,
          key: attachment.key,
          name: attachment.name,
        }))
        attachments = [...attachments, ...newAttachmentObjects]
      }

      // 공지사항 수정
      const updatedNotice = await updateNoticeMutation.mutateAsync({
        id,
        data: {
          ...formData,
          attachments,
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

  // 새 첨부파일 업로드 핸들러
  const handleAttachmentUpload = async (files: FileList) => {
    try {
      const fileArray = Array.from(files)
      const result = await uploadAttachmentsMutation.mutateAsync(fileArray)
      
      if (result?.attachments && Array.isArray(result.attachments)) {
        setNewAttachments(prev => [...prev, ...result.attachments])
        alert(`${result.attachments.length}개의 파일이 성공적으로 업로드되었습니다.`)
      }
    } catch (error) {
      console.error("파일 업로드 실패:", error)
      alert("파일 업로드에 실패했습니다. 다시 시도해주세요.")
    }
  }

  // 새 첨부파일 삭제 핸들러
  const handleNewAttachmentDelete = (index: number) => {
    setNewAttachments(prev => prev.filter((_, i) => i !== index))
  }

  // 첨부파일 삭제 핸들러
  const handleRemoveAttachment = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments?.filter((_, i) => i !== index),
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
              id="isPublished"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className={notice.checkbox}
            />
            <label htmlFor="isPublished" className={notice.checkboxLabel}>
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

        {/* 기존 첨부파일 표시 */}
        {formData.attachments && formData.attachments.length > 0 && (
          <div className={notice.formGroup}>
            <label className={notice.label}>기존 첨부파일</label>
            <div className={notice.attachmentGrid}>
              {formData.attachments.map((attachment, index) => (
                <div key={index} className={notice.attachmentCard}>
                  {isImageFile(attachment.name) ? (
                    <div className={notice.imagePreviewContainer}>
                      <Image
                        src={attachment.url}
                        alt={attachment.name}
                        width={200}
                        height={150}
                        className={notice.attachmentImage}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className={notice.imageErrorFallback} style={{ display: 'none' }}>
                        🖼️ 이미지 로드 실패
                      </div>
                    </div>
                  ) : (
                    <div className={notice.filePreviewContainer}>
                      <div className={notice.fileIcon}>
                        {getFileIcon(attachment.name)}
                      </div>
                    </div>
                  )}
                  <div className={notice.attachmentInfo}>
                    <div className={notice.attachmentName} title={attachment.name}>
                      {attachment.name}
                    </div>
                    <div className={notice.attachmentMeta}>
                      {isImageFile(attachment.name) ? '이미지' : '문서'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAttachment(index)}
                    className={notice.attachmentRemoveButton}
                    title="첨부파일 삭제"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={notice.formGroup}>
          <Uploader
            value={newAttachments}
            onFilesChange={() => {}} // 사용하지 않음
            maxFiles={10}
            uploadType="new"
            label="새 첨부 파일"
            isEditing={true}
            isUploading={uploadAttachmentsMutation.isPending}
            onImageUpload={handleAttachmentUpload}
            onImageDelete={handleNewAttachmentDelete}
            accept={{
              "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp"],
              "application/pdf": [".pdf"],
              "application/msword": [".doc"],
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
              "application/vnd.ms-excel": [".xls"],
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
              "text/plain": [".txt"],
              "application/x-hwp": [".hwp"]
            }}
          />
          <small className={notice.helpText}>
            최대 10개의 파일을 첨부할 수 있습니다. (최대 용량: 15MB)
            <br />
            지원 형식: 이미지, PDF, Word, Excel, 텍스트, HWP
          </small>
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
