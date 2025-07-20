import { useMutation } from "@tanstack/react-query"

import { fileUploadApi } from "../../api/fileUpload"
import { Attachment } from "../../types/notice"

// 범용 파일 업로드 훅
export function useFileUpload(endpoint: string) {
  const mutation = useMutation({
    mutationFn: (files: File[]) => fileUploadApi.uploadFiles(endpoint, files),
  })

  const uploadFiles = async (files: File[]): Promise<Attachment[]> => {
    try {
      const result = await mutation.mutateAsync(files)
      // 백엔드 응답 형식에 따라 달라질 수 있음
      return result.attachments || []
    } catch (error) {
      throw error
    }
  }

  return {
    uploadFiles,
    isLoading: mutation.isPending,
  }
}

// 단일 파일 업로드 훅
export function useSingleFileUpload() {
  return useMutation({
    mutationFn: ({ endpoint, file }: { endpoint: string; file: File }) =>
      fileUploadApi.uploadFile(endpoint, file),
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// 공지사항 첨부파일 업로드 전용 훅
export function useNoticeAttachmentsUpload() {
  return useMutation({
    mutationFn: (files: File[]) =>
      fileUploadApi.uploadFiles("/admin/notice/upload-attachments", files),
    onError: (error) => {
      // Error handling can be added here if needed
    },
  })
}

// 이전 버전과의 호환성을 위한 alias
export const useNoticeImagesUpload = useNoticeAttachmentsUpload;
