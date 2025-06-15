import axios from "axios"

// API 기본 설정
// 백엔드에서 'api' prefix를 전역적으로 사용하므로 여기에 포함
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

// Axios 인스턴스 생성 및 내보내기
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// JWT 토큰을 자동으로 포함하는 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    // 브라우저 환경에서만 localStorage 접근
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth_token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터 - 401 에러 시 로그아웃 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // 로그인 페이지가 아닐 때만 리다이렉트
      const isLoginPage = window.location.pathname === "/admin/login"

      // 토큰이 만료되거나 유효하지 않은 경우 로그아웃 처리
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")

      if (!isLoginPage) {
        window.location.href = "/admin/login"
      }
    }
    return Promise.reject(error)
  }
)
