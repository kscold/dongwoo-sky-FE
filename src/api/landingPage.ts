import { apiClient } from "./client"
import { LandingPageData } from "@/common/types/landing-page"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

export const landingPageApi = {
  // 현재 활성화된 랜딩 페이지 데이터 가져오기
  getCurrentLandingPage: async (): Promise<LandingPageData> => {
    try {
      const response = await apiClient.get<LandingPageData>(
        "/landing-pages/current"
      )
      return response.data
    } catch (error) {
      console.error("Failed to fetch landing page data:", error)
      // 폴백 데이터 반환
      return getDefaultLandingPageData()
    }
  },

  // 모든 랜딩 페이지 데이터 가져오기 (관리자용)
  getAllLandingPages: async (): Promise<LandingPageData[]> => {
    const response = await apiClient.get<LandingPageData[]>("/landing-pages")
    return response.data
  },

  // 랜딩 페이지 데이터 생성 (관리자용)
  createLandingPage: async (
    data: Partial<LandingPageData>
  ): Promise<LandingPageData> => {
    const response = await apiClient.post<LandingPageData>(
      "/landing-pages",
      data
    )
    return response.data
  },

  // 랜딩 페이지 데이터 업데이트 (관리자용)
  updateLandingPage: async (
    id: string,
    data: Partial<LandingPageData>
  ): Promise<LandingPageData> => {
    const response = await apiClient.patch<LandingPageData>(
      `/landing-pages/${id}`,
      data
    )
    return response.data
  },

  // 히어로 섹션 이미지 업로드 (관리자용)
  uploadHeroImage: async (file: File): Promise<{ imageUrl: string }> => {
    const formData = new FormData()
    formData.append("file", file)

    console.log("Uploading hero image:", {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
    })

    try {
      // JWT 토큰 가져오기
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("auth_token")
          : null

      const response = await fetch(
        `${BASE_URL}/landing-pages/upload-hero-image`,
        {
          method: "POST",
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: formData,
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP ${response.status}: ${errorText}`)
      }

      const result = await response.json()
      console.log("Upload successful:", result)
      return result
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Upload failed"
      console.error("Upload failed:", errorMessage)
      throw new Error(errorMessage)
    }
  },

  // 히어로 섹션 다중 이미지 업로드 (관리자용)
  uploadHeroImages: async (files: File[]): Promise<{ imageUrls: string[] }> => {
    const formData = new FormData()

    files.forEach((file) => {
      formData.append("files", file)
    })

    console.log("Uploading multiple hero images:", {
      fileCount: files.length,
      files: files.map((f) => ({
        fileName: f.name,
        fileSize: f.size,
        fileType: f.type,
      })),
    })

    try {
      // JWT 토큰 가져오기
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("auth_token")
          : null

      const response = await fetch(
        `${BASE_URL}/landing-pages/upload-hero-images`,
        {
          method: "POST",
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: formData,
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP ${response.status}: ${errorText}`)
      }

      const result = await response.json()
      console.log("Multiple upload successful:", result)
      return result
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Multiple upload failed"
      console.error("Multiple upload failed:", errorMessage)
      throw new Error(errorMessage)
    }
  },

  // 업로드된 히어로 이미지들 조회 (관리자용)
  getHeroImages: async (): Promise<{ images: string[] }> => {
    try {
      const response = await apiClient.get<{ images: string[] }>(
        "/landing-pages/hero-images"
      )
      console.log("Hero images retrieved:", response.data)
      return response.data
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to get hero images"
      console.error("Failed to get hero images:", errorMessage)
      throw new Error(errorMessage)
    }
  },

  // 히어로 이미지를 메인 배경으로 설정 (관리자용)
  setHeroImage: async (imageUrl: string): Promise<LandingPageData> => {
    try {
      const response = await apiClient.patch<LandingPageData>(
        "/landing-pages/set-hero-image",
        { imageUrl }
      )
      console.log("Hero image set successfully:", response.data)
      return response.data
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to set hero image"
      console.error("Failed to set hero image:", errorMessage)
      throw new Error(errorMessage)
    }
  },

  // 히어로 이미지 삭제 (관리자용)
  deleteHeroImage: async (imageUrl: string): Promise<{ message: string }> => {
    try {
      const response = await apiClient.delete<{ message: string }>(
        "/landing-pages/hero-images",
        { data: { imageUrl } }
      )
      console.log("Hero image deleted successfully:", response.data)
      return response.data
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete hero image"
      console.error("Failed to delete hero image:", errorMessage)
      throw new Error(errorMessage)
    }
  },
}

// 기본 폴백 데이터
function getDefaultLandingPageData(): LandingPageData {
  return {
    title: "어울림 스카이 - 중장비 렌탈 서비스",
    heroSection: {
      title: "어울림 스카이",
      subtitle: "안전하고 신뢰할 수 있는 중장비 렌탈 서비스",
      backgroundImageUrl: "/images/hero-default.jpg",
      description:
        "다양한 중장비를 합리적인 가격에 제공합니다. 전문적인 운영진과 함께하는 안전한 작업을 경험해보세요.",
      ctaText: "서비스 문의하기",
      ctaLink: "/contact",
      isActive: true,
    },
  }
}
