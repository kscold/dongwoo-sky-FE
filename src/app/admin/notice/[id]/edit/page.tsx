"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { NoticeEditForm, useNoticeEdit } from "../../../../../features/admin-notice-edit"
import * as notice from "../../../../../styles/admin/admin-notice.css"

export default function EditNoticePage() {
  const params = useParams()
  const id = params.id as string

  const {
    noticeData,
    isLoadingNotice,
    formData,
    loading,
    error,
    uploadAttachmentsMutation,
    handleSubmit,
    handleChange,
    handleAttachmentUpload,
    handleNewAttachmentDelete
  } = useNoticeEdit(id)

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

      <NoticeEditForm
        formData={formData}
        loading={loading}
        error={error}
        isUploadingAttachments={uploadAttachmentsMutation.isPending}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onAttachmentUpload={handleAttachmentUpload}
        onNewAttachmentDelete={handleNewAttachmentDelete}
      />
    </div>
  )
}