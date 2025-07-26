"use client"

import React, { useState } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"

import { useCreateNotice } from "../../../../common/hooks/useNotices"
import { Uploader } from "../../../../common/components/upload/Uploader"
import { useAdmin } from "../../../../common/context/AdminContext"
import { useFileUpload } from "../../../../common/hooks/useFileUpload"
import * as commonStyles from "../../../../styles/common/admin-common.css"

const attachmentSchema = z.object({
  name: z.string(),
  url: z.string(),
  key: z.string(),
})

const noticeSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  content: z.string().min(1, "내용을 입력해주세요."),
  isPublished: z.boolean(),
  isPinned: z.boolean(),
  attachments: z.array(attachmentSchema),
})

type NoticeFormData = z.infer<typeof noticeSchema>

export default function CreateNoticePage() {
  const { user } = useAdmin()
  const router = useRouter()
  const createNoticeMutation = useCreateNotice()
  const { uploadFiles, isLoading: isUploading } = useFileUpload("notices")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<NoticeFormData>({
    resolver: zodResolver(noticeSchema),
    defaultValues: {
      title: "",
      content: "",
      isPublished: false,
      isPinned: false,
      attachments: [],
    },
  })

  const handleFilesSelect = async (files: any[]) => {
    // File 객체만 필터링
    const newFiles = files.filter((file) => file instanceof File)
    if (newFiles.length > 0) {
      const newAttachments = await uploadFiles(newFiles)
      const currentAttachments = watch("attachments")
      setValue("attachments", [...currentAttachments, ...newAttachments], {
        shouldValidate: true,
      })
    }
  }

  const onSubmit: SubmitHandler<NoticeFormData> = async (data) => {
    setIsSubmitting(true)
    try {
      // @ts-ignore - The useCreateNotice hook has a wrong type definition that will be fixed separately
      await createNoticeMutation.mutateAsync({
        ...data,
        author: "관리자",
        isModal: false,
      })
      router.push("/admin/notice")
    } catch (error) {
      console.error("Failed to create notice:", error)
      // 여기에 사용자에게 보여줄 에러 처리 로직 추가 가능
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.title}>새 공지사항 작성</h1>
        <p className={commonStyles.description}>새로운 소식을 등록합니다.</p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={commonStyles.formGroup}>
          <label htmlFor="title" className={commonStyles.label}>
            제목
          </label>
          <input
            id="title"
            {...register("title")}
            className={commonStyles.input}
            placeholder="공지사항 제목"
          />
          {errors.title && (
            <p className={commonStyles.description}>{errors.title.message}</p>
          )}
        </div>

        <div className={commonStyles.formGroup}>
          <label htmlFor="content" className={commonStyles.label}>
            내용
          </label>
          <textarea
            id="content"
            {...register("content")}
            className={commonStyles.textarea}
            rows={10}
            placeholder="공지사항 내용"
          />
          {errors.content && (
            <p className={commonStyles.description}>{errors.content.message}</p>
          )}
        </div>

        <div className={commonStyles.formGroup}>
          <label className={commonStyles.label}>첨부파일</label>
          <Uploader
            onFilesChange={handleFilesSelect}
            value={watch("attachments")}
            uploadType="new"
            disabled={isSubmitting}
          />
          {isUploading && <p>파일 업로드 중...</p>}
        </div>

        <div className={commonStyles.formGroup}>
          <Controller
            name="isPublished"
            control={control}
            render={({ field }) => (
              <label className={commonStyles.label}>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
                게시
              </label>
            )}
          />
          <Controller
            name="isPinned"
            control={control}
            render={({ field }) => (
              <label className={commonStyles.label}>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                />
                상단 고정
              </label>
            )}
          />
        </div>

        <div className={commonStyles.modalActions}>
          <button
            type="button"
            onClick={() => router.back()}
            className={commonStyles.cancelButton}
            disabled={isSubmitting}
          >
            취소
          </button>
          <button
            type="submit"
            className={commonStyles.saveButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "등록 중..." : "등록"}
          </button>
        </div>
      </form>
    </div>
  )
}
