import { apiClient } from "./client"
import type { Service, CreateServiceDto, UpdateServiceDto } from "@/common/types/service"

export const serviceApi = {
    // 공개 API
    async getAll(): Promise<Service[]> {
        try {
            const response = await apiClient.get<Service[]>("/service")
            return response.data
        } catch (error) {
            console.error("[getAll] 서비스 목록 조회 실패:", error)
            throw error
        }
    },

    async getById(id: string): Promise<Service> {
        try {
            const response = await apiClient.get<Service>(`/service/${id}`)
            return response.data
        } catch (error) {
            console.error("[getById] 서비스 조회 실패:", error)
            throw error
        }
    },

    // 관리자 API
    async getAllAdmin(): Promise<Service[]> {
        try {
            const response = await apiClient.get<Service[]>("/admin/service")
            return response.data
        } catch (error) {
            console.error("[getAllAdmin] 관리자 서비스 목록 조회 실패:", error)
            throw error
        }
    },

    async getByIdAdmin(id: string): Promise<Service> {
        try {
            const response = await apiClient.get<Service>(`/admin/service/${id}`)
            return response.data
        } catch (error) {
            console.error("[getByIdAdmin] 관리자 서비스 조회 실패:", error)
            throw error
        }
    },

    async create(data: CreateServiceDto): Promise<Service> {
        try {
            const response = await apiClient.post<Service>("/admin/service", data)
            return response.data
        } catch (error) {
            console.error("[create] 서비스 생성 실패:", error)
            throw error
        }
    },

    async update(id: string, data: UpdateServiceDto): Promise<Service> {
        try {
            const response = await apiClient.patch<Service>(`/admin/service/${id}`, data)
            return response.data
        } catch (error) {
            console.error("[update] 서비스 수정 실패:", error)
            throw error
        }
    },

    async delete(id: string): Promise<void> {
        try {
            await apiClient.delete(`/admin/service/${id}`)
        } catch (error) {
            console.error("[delete] 서비스 삭제 실패:", error)
            throw error
        }
    }
} 