import axios from "axios"

// API 기본 설정
const API_URL = '/api';

// Axios 인스턴스 생성 및 내보내기
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// 요청 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    // localStorage는 브라우저 환경에서만 접근 가능
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
  },
)

// 응답 인터셉터 - 401 에러 시 로그아웃 처리
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // 로그인 페이지가 아닐 때만 리다이렉트
      const isLoginPage = window.location.pathname === "/admin/login"

      // 토큰이 만료되거나 유효하지 않은 경우 로그아웃 처리
      localStorage.removeItem("auth_token")
      localStorage.removeItem("user_data")

      if (!isLoginPage) {
        // 현재 페이지 정보를 저장하고 로그인 페이지로 이동
        const currentPath = window.location.pathname
        localStorage.setItem("redirect_after_login", currentPath)
        window.location.href = "/admin/login"
      }
    }

    // 더 나은 에러 메시지 처리
    if (error.response?.data?.message) {
      error.message = error.response.data.message
    }

    return Promise.reject(error)
  }
)
