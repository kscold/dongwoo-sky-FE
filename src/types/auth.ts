export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  isActive?: boolean
  lastLoginAt?: string
  profileImage?: string
  phoneNumber?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export interface AuthResponse {
  success: boolean
  access_token: string
  user: User
  message: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message: string
  error?: string
}
