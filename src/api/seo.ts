import { apiClient } from "./client"
import { PageSEO, EquipmentSEO, CreateSEODto, UpdateSEODto, SEOMetadata } from "../types/seo"
import { mockSEOData } from "./mock/seo.mock"

// 개발 환경에서 mock 데이터 사용 여부
const USE_MOCK = process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL

export const seoApi = {
  /** 페이지별 SEO 메타데이터 조회 */
  getPageSEO: async (page: string): Promise<PageSEO | null> => {
    if (USE_MOCK) {
      const seo = mockSEOData.find(item => item.page === page)
      return seo || null
    }
    
    try {
      const response = await apiClient.get<PageSEO>(`/seo/page/${page}`)
      return response.data
    } catch (error) {
      console.warn(`SEO metadata not found for page: ${page}`)
      return null
    }
  },

  /** 경로별 SEO 메타데이터 조회 */
  getPathSEO: async (path: string): Promise<PageSEO | null> => {
    try {
      const response = await apiClient.get<PageSEO>(`/seo/path`, {
        params: { path }
      })
      return response.data
    } catch (error) {
      console.warn(`SEO metadata not found for path: ${path}`)
      return null
    }
  },

  /** 장비별 SEO 메타데이터 조회 */
  getEquipmentSEO: async (equipmentId: string): Promise<EquipmentSEO | null> => {
    try {
      const response = await apiClient.get<EquipmentSEO>(`/seo/equipment/${equipmentId}`)
      return response.data
    } catch (error) {
      console.warn(`SEO metadata not found for equipment: ${equipmentId}`)
      return null
    }
  },

  /** 모든 SEO 설정 조회 (관리자용) */
  getAllSEO: async (): Promise<PageSEO[]> => {
    if (USE_MOCK) {
      return mockSEOData
    }
    
    try {
      const response = await apiClient.get<{ data: PageSEO[] } | PageSEO[]>("/admin/seo")
      // 백엔드 응답이 { data: [...] } 형태일 수도 있음
      if (response.data && 'data' in response.data) {
        return response.data.data
      }
      return Array.isArray(response.data) ? response.data : []
    } catch (error) {
      console.error("Failed to fetch SEO data:", error)
      // 개발 환경에서는 mock 데이터 반환
      if (process.env.NODE_ENV === 'development') {
        return mockSEOData
      }
      return []
    }
  },

  /** SEO 메타데이터 생성 */
  createSEO: async (data: CreateSEODto): Promise<PageSEO> => {
    const response = await apiClient.post<PageSEO>("/admin/seo", data)
    return response.data
  },

  /** SEO 메타데이터 수정 */
  updateSEO: async (id: string, data: UpdateSEODto): Promise<PageSEO> => {
    const response = await apiClient.patch<PageSEO>(`/admin/seo/${id}`, data)
    return response.data
  },

  /** SEO 메타데이터 삭제 */
  deleteSEO: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/seo/${id}`)
  },

  /** 구글 구조화 데이터 생성 */
  generateStructuredData: async (type: 'equipment' | 'service', id?: string): Promise<Record<string, any>> => {
    const response = await apiClient.get<Record<string, any>>(`/seo/structured-data/${type}`, {
      params: id ? { id } : {}
    })
    return response.data
  }
}