import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useNoticeAdmin, useUpdateNotice } from "../../../common/hooks/useNotices"
import { useNoticeAttachmentsUpload } from "../../../common/hooks/useFileUpload"
import { UpdateNoticeDto } from "../../../types/notice"

export const useNoticeEdit = (id: string) => {
  const router = useRouter()
  const { data: noticeData, isLoading: isLoadingNotice } = useNoticeAdmin(id)
  const updateNoticeMutation = useUpdateNotice()
  const uploadAttachmentsMutation = useNoticeAttachmentsUpload()

  const [formData, setFormData] = useState<UpdateNoticeDto>({
    title: "",
    content: "",
    isActive: true,
    isModal: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title?.trim() || !formData.content?.trim()) {
      setError("제목과 내용은 필수 항목입니다.")
      return
    }

    try {
      setLoading(true)
      setError(null)

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

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

  const handleAttachmentUpload = async (files: FileList) => {
    try {
      const fileArray = Array.from(files)
      const result = await uploadAttachmentsMutation.mutateAsync(fileArray)

      if (result?.attachments && Array.isArray(result.attachments)) {
        alert(
          `${result.attachments.length}개의 파일이 성공적으로 업로드되었습니다.`
        )
      }
    } catch (error) {
      console.error("파일 업로드 실패:", error)
      alert("파일 업로드에 실패했습니다. 다시 시도해주세요.")
    }
  }

  const handleNewAttachmentDelete = (index: number) => {
    // Implementation for new attachment deletion if needed
  }

  const handleRemoveAttachment = (index: number) => {
    // Implementation for attachment removal if needed
  }

  return {
    noticeData,
    isLoadingNotice,
    formData,
    loading,
    error,
    uploadAttachmentsMutation,
    handleSubmit,
    handleChange,
    handleAttachmentUpload,
    handleNewAttachmentDelete,
    handleRemoveAttachment
  }
}