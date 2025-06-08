import { Service, CreateServiceDto, UpdateServiceDto } from "@/types/service"
import { apiClient } from "./client"

export const serviceApi = {
  // 모든 서비스 조회 (활성화된 것만)
  getAll: async (): Promise<Service[]> => {
    const response = await apiClient.get<Service[]>("/service")
    return response.data
  },

  // 관리자용 모든 서비스 조회
  getAllAdmin: async (): Promise<Service[]> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.get<Service[]>("/service/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  // 특정 서비스 조회
  getOne: async (id: string): Promise<Service> => {
    const response = await apiClient.get<Service>(`/service/${id}`)
    return response.data
  },
  // 서비스 생성 (관리자용)
  create: async (data: CreateServiceDto): Promise<Service> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.post<Service>("/service", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  // 서비스 수정 (관리자용)
  update: async (id: string, data: UpdateServiceDto): Promise<Service> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.patch<Service>(`/service/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  // 서비스 삭제 (관리자용)
  delete: async (id: string): Promise<Service> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.delete<Service>(`/service/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },
}
