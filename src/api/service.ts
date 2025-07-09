import { apiClient } from "./client"
import type { Service, CreateServiceDto, UpdateServiceDto } from "@/common/types/service"

export const serviceApi = {
    // 공개 API
    async getAll(): Promise<Service[]> {
        try {
            const response = await apiClient.get<Service[]>("/service")
            return response.data
        } catch (error) {
            throw error
        }
    },

    async getById(id: string): Promise<Service> {
        try {
            const response = await apiClient.get<Service>(`/service/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    // 관리자 API
    async getAllAdmin(): Promise<Service[]> {
        try {
            const response = await apiClient.get<Service[]>("/admin/service")
            return response.data
        } catch (error) {
            throw error
        }
    },

    async getByIdAdmin(id: string): Promise<Service> {
        try {
            const response = await apiClient.get<Service>(`/admin/service/${id}`)
            return response.data
        } catch (error) {
            throw error
        }
    },

    async create(data: CreateServiceDto): Promise<Service> {
        try {
            const response = await apiClient.post<Service>("/admin/service", data)
            return response.data
        } catch (error) {
            throw error
        }
    },

    async update(id: string, data: UpdateServiceDto): Promise<Service> {
        try {
            const response = await apiClient.patch<Service>(`/admin/service/${id}`, data)
            return response.data
        } catch (error) {
            throw error
        }
    },

    async delete(id: string): Promise<void> {
        try {
            await apiClient.delete(`/admin/service/${id}`)
        } catch (error) {
            throw error
        }
    }
} 