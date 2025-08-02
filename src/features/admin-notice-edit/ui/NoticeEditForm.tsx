import React from "react"
import Link from "next/link"
import { UpdateNoticeDto } from "../../../types/notice"
import { Uploader } from "../../../common/components/upload/Uploader"
import * as notice from "../../../styles/admin/admin-notice.css"

interface NoticeEditFormProps {
  formData: UpdateNoticeDto
  loading: boolean
  error: string | null
  isUploadingAttachments: boolean
  onSubmit: (e: React.FormEvent) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onAttachmentUpload: (files: FileList) => void
  onNewAttachmentDelete: (index: number) => void
}

export const NoticeEditForm: React.FC<NoticeEditFormProps> = ({
  formData,
  loading,
  error,
  isUploadingAttachments,
  onSubmit,
  onChange,
  onAttachmentUpload,
  onNewAttachmentDelete
}) => {
  return (
    <>
      {error && <div className={notice.error}>{error}</div>}

      <form onSubmit={onSubmit} className={notice.form}>
        <div className={notice.formGroup}>
          <label htmlFor="title" className={notice.label}>
            제목 *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={onChange}
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
            onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
              className={notice.checkbox}
            />
            <label htmlFor="isModal" className={notice.checkboxLabel}>
              모달로 표시
            </label>
          </div>
        </div>

        <div className={notice.formGroup}>
          <Uploader
            onFilesChange={() => {}}
            maxFiles={10}
            uploadType="new"
            label="새 첨부 파일"
            isEditing={true}
            isUploading={isUploadingAttachments}
            onImageUpload={onAttachmentUpload}
            onImageDelete={onNewAttachmentDelete}
            accept={{
              "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp"],
              "application/pdf": [".pdf"],
              "application/msword": [".doc"],
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                [".docx"],
              "application/vnd.ms-excel": [".xls"],
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                [".xlsx"],
              "text/plain": [".txt"],
              "application/x-hwp": [".hwp"],
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
    </>
  )
}