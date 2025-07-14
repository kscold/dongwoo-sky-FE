import { apiClient } from "./client"
import { ServiceGuide, UpdateServiceGuideDto } from "../types/service-guide"

export interface AdminLoginDto {
  username: string
  password: string
}

export interface AdminLoginResponse {
  success: boolean
  message: string
  token?: string
}


export const adminApi = {
  // 관리자 로그인
  async login(credentials: AdminLoginDto): Promise<AdminLoginResponse> {
    const response = await apiClient.post<AdminLoginResponse>(
      "/admin/login",
      credentials
    )
    return response.data
  },


  // 관리자 로그아웃
  async logout(token: string): Promise<{ success: boolean; message: string }> {
    const response = await apiClient.post<{
      success: boolean
      message: string
    }>(
      "/admin/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  },

  // === 서비스 안내(Service Guide) 관리 ===
  getServiceGuide: async (): Promise<ServiceGuide> => {
    const response = await apiClient.get<ServiceGuide>("/admin/service-guide")
    return response.data
  },

  updateServiceGuide: async (
    data: UpdateServiceGuideDto
  ): Promise<ServiceGuide> => {
    const response = await apiClient.patch<ServiceGuide>(
      "/admin/service-guide",
      data
    )
    return response.data
  },
}
