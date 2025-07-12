import { apiClient } from "./client"
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "@/common/types/auth"

export const authApi = {
  login: async (loginData: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/admin/user/login",
      loginData
    )
    return response.data
  },

  register: async (registerData: RegisterRequest): Promise<User> => {
    const response = await apiClient.post<User>("/auth/register", registerData)
    return response.data
  },

  registerAdmin: async (registerData: RegisterRequest): Promise<User> => {
    const response = await apiClient.post<User>(
      "/auth/register-admin",
      registerData
    )
    return response.data
  },

  logout: async () => {
    // 백엔드에 로그아웃 요청이 필요하다면 여기에 추가
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await apiClient.get<{ user: User }>("/admin/user/me")
      return response.data.user
    } catch (error) {
      return null
    }
  },
}
