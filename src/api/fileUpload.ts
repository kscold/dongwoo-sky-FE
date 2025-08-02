// Next.js rewrite를 사용하므로 BASE_URL 불필요
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const fileUploadApi = {
  // 범용 파일 업로드 함수
  uploadFiles: async (
    endpoint: string,
    files: File[]
  ): Promise<{
    imageUrls?: string[]
    url?: string
    urls?: string[]
    attachments?: any[]
  }> => {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })

    // JWT 토큰 가져오기
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(endpoint, {
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
    console.log("파일 업로드 API 응답:", data)

    // 백엔드에서 AttachmentDto[] 배열을 직접 반환하는 경우 처리
    if (Array.isArray(data)) {
      const urls = data.map((item) => item.url)
      console.log("추출된 URLs:", urls)
      return { urls, attachments: data }
    }

    return data.data || data
  },

  // 단일 파일 업로드
  uploadFile: async (
    endpoint: string,
    file: File
  ): Promise<{ imageUrl?: string; url?: string; attachment?: any }> => {
    const formData = new FormData()
    formData.append("file", file)

    // JWT 토큰 가져오기
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(endpoint, {
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
    console.log("단일 파일 업로드 API 응답:", data)

    // 백엔드에서 { imageUrl: "..." } 형태로 반환하는 경우 처리
    if (data && data.imageUrl) {
      return { url: data.imageUrl, imageUrl: data.imageUrl, attachment: data }
    }

    // 백엔드에서 AttachmentDto 객체를 직접 반환하는 경우 처리
    if (data && data.url) {
      return { url: data.url, attachment: data }
    }

    return data.data || data
  },
}
