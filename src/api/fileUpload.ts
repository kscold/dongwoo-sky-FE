const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api"

export const fileUploadApi = {
  // 범용 파일 업로드 함수
  uploadFiles: async (
    endpoint: string,
    files: File[]
  ): Promise<{ imageUrls?: string[]; url?: string; urls?: string[] }> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    // JWT 토큰 가져오기
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data || data
  },

  // 단일 파일 업로드
  uploadFile: async (
    endpoint: string,
    file: File
  ): Promise<{ imageUrl?: string; url?: string }> => {
    const formData = new FormData()
    formData.append("file", file)

    // JWT 토큰 가져오기
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data || data
  },
}
