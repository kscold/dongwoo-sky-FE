import { LandingPageData } from "@/types/landing-page"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

class LandingPageService {
  private async fetchApi<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${BASE_URL}${endpoint}`

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("API fetch error:", error)
      throw error
    }
  }

  // 현재 활성화된 랜딩 페이지 데이터 가져오기
  async getCurrentLandingPage(): Promise<LandingPageData> {
    try {
      const response = await this.fetchApi<LandingPageData>(
        "/landing-pages/current"
      )
      return response
    } catch (error) {
      console.error("Failed to fetch landing page data:", error)
      // 폴백 데이터 반환
      return this.getDefaultLandingPageData()
    }
  }

  // 모든 랜딩 페이지 데이터 가져오기 (관리자용)
  async getAllLandingPages(): Promise<LandingPageData[]> {
    const response = await this.fetchApi<LandingPageData[]>("/landing-pages")
    return response
  }

  // 랜딩 페이지 데이터 생성 (관리자용)
  async createLandingPage(
    data: Partial<LandingPageData>
  ): Promise<LandingPageData> {
    const response = await this.fetchApi<LandingPageData>("/landing-pages", {
      method: "POST",
      body: JSON.stringify(data),
    })
    return response
  }

  // 랜딩 페이지 데이터 업데이트 (관리자용)
  async updateLandingPage(
    id: string,
    data: Partial<LandingPageData>
  ): Promise<LandingPageData> {
    const response = await this.fetchApi<LandingPageData>(
      `/landing-pages/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
      }
    )
    return response
  }

  // 히어로 섹션 이미지 업로드 (관리자용)
  async uploadHeroImage(file: File): Promise<{ imageUrl: string }> {
    const formData = new FormData()
    formData.append("file", file)

    const response = await fetch(
      `${BASE_URL}/landing-pages/upload-hero-image`,
      {
        method: "POST",
        body: formData,
        // Content-Type을 설정하지 않음 (FormData가 자동으로 설정)
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  }

  // 기본 폴백 데이터
  private getDefaultLandingPageData(): LandingPageData {
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
}

export const landingPageService = new LandingPageService()
export default landingPageService
