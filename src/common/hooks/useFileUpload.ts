import { useMutation } from "@tanstack/react-query"
import { fileUploadApi } from "@/api/fileUpload"

// 범용 파일 업로드 훅
export function useFileUpload() {
  return useMutation({
    mutationFn: ({ endpoint, files }: { endpoint: string; files: File[] }) =>
      fileUploadApi.uploadFiles(endpoint, files),
    onError: (error) => {
      console.error("파일 업로드 실패:", error)
    },
  })
}

// 단일 파일 업로드 훅
export function useSingleFileUpload() {
  return useMutation({
    mutationFn: ({ endpoint, file }: { endpoint: string; file: File }) =>
      fileUploadApi.uploadFile(endpoint, file),
    onError: (error) => {
      console.error("단일 파일 업로드 실패:", error)
    },
  })
}

// 공지사항 이미지 업로드 전용 훅
export function useNoticeImageUpload() {
  return useMutation({
    mutationFn: (file: File) =>
      fileUploadApi.uploadFile("/files/notice/upload", file),
    onError: (error) => {
      console.error("공지사항 이미지 업로드 실패:", error)
    },
  })
}

// 공지사항 다중 이미지 업로드 전용 훅
export function useNoticeImagesUpload() {
  return useMutation({
    mutationFn: (files: File[]) =>
      fileUploadApi.uploadFiles("/files/notice/uploads", files),
    onError: (error) => {
      console.error("공지사항 다중 이미지 업로드 실패:", error)
    },
  })
}
