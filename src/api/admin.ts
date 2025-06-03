import { apiClient } from "./client"

export interface AdminLoginDto {
  username: string
  password: string
}

export interface AdminLoginResponse {
  success: boolean
  message: string
  token?: string
}

export interface AdminDashboardResponse {
  success: boolean
  message: string
  admin: {
    username: string
    token: string
  }
  stats: {
    totalNotices: number
    publishedNotices: number
    modalNotices: number
  }
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

  // 관리자 대시보드 정보 가져오기
  async getDashboard(token: string): Promise<AdminDashboardResponse> {
    const response = await apiClient.get<AdminDashboardResponse>(
      "/admin/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
}
