import { apiClient } from "./client"
import { AuthResponse, LoginRequest, RegisterRequest, User } from "@/types/auth"

export const authApi = {
  login: async (loginData: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
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

  logout: () => {
    // JWT 토큰 제거 - 일관된 키 사용
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")
    }
  },

  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await apiClient.get<{ user: User }>("/auth/me")
      return response.data.user
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error)
      return null
    }
  },
}
