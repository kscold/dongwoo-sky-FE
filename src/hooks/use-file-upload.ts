import { useState, useCallback } from "react"
import { uploadFilesUniversal } from "@/services/file-upload.service"

export function useFileUploadUniversal(endpoint: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const uploadFiles = useCallback(
    async (files: File[]) => {
      setLoading(true)
      setError(null)
      try {
        const result = await uploadFilesUniversal(endpoint, files)
        return result
      } catch (err) {
        setError(err instanceof Error ? err : new Error("파일 업로드 오류"))
        return null
      } finally {
        setLoading(false)
      }
    },
    [endpoint]
  )

  return { loading, error, uploadFiles }
}
