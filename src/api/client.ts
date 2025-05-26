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
