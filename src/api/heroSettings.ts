const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

export interface HeroImage {
  url: string
  key: string
  name: string
  order: number
  isActive: boolean
}

export interface HeroSettings {
  _id?: string
  key: string
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImageUrl: string // 하위 호환성
  backgroundImages: HeroImage[] // 새로운 이미지 배열
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

export const heroSettingsApi = {
  // 히어로 설정 조회
  getHeroSettings: async (): Promise<HeroSettings> => {
    const response = await fetch(`${BASE_URL}/content/hero-settings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`히어로 설정 조회 실패: ${response.status}`)
    }

    const data = await response.json()
    return data.data
  },

  // 히어로 설정 업데이트 (관리자용)
  updateHeroSettings: async (
    settings: Partial<HeroSettings>
  ): Promise<HeroSettings> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(`${BASE_URL}/content/hero-settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(settings),
    })

    if (!response.ok) {
      throw new Error(`히어로 설정 업데이트 실패: ${response.status}`)
    }

    const data = await response.json()
    return data.data
  },

  // 히어로 이미지 업로드
  uploadHeroImage: async (
    file: File
  ): Promise<{ url: string; key: string; name: string }> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const formData = new FormData()
    formData.append("file", file)

    const response = await fetch(`${BASE_URL}/content/hero-images/upload`, {
      method: "POST",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`히어로 이미지 업로드 실패: ${response.status}`)
    }

    const data = await response.json()
    return data.data
  },

  // 히어로 이미지 삭제
  deleteHeroImage: async (key: string): Promise<void> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(
      `${BASE_URL}/content/hero-images/${encodeURIComponent(key)}`,
      {
        method: "DELETE",
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      }
    )

    if (!response.ok) {
      throw new Error(`히어로 이미지 삭제 실패: ${response.status}`)
    }
  },

  // 히어로 이미지 순서 변경
  updateHeroImagesOrder: async (
    orderData: { key: string; order: number }[]
  ): Promise<void> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(`${BASE_URL}/content/hero-images/order`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      throw new Error(`히어로 이미지 순서 변경 실패: ${response.status}`)
    }
  },

  // 히어로 이미지 활성화/비활성화
  toggleHeroImageStatus: async (
    key: string,
    isActive: boolean
  ): Promise<void> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null

    const response = await fetch(
      `${BASE_URL}/content/hero-images/${encodeURIComponent(key)}/toggle`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({ isActive }),
      }
    )

    if (!response.ok) {
      throw new Error(`히어로 이미지 상태 변경 실패: ${response.status}`)
    }
  },
}
