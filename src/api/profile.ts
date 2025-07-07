import {
    Profile,
    CreateProfileDto,
    UpdateProfileDto,
    AdminProfile,
} from "@/common/types/profile"
import { apiClient } from "./client"

export const profileApi = {
    // 모든 프로필 조회 (활성화된 것만)
    getAll: async (): Promise<Profile[]> => {
        const response = await apiClient.get<Profile[]>("/profile")
        return response.data
    },

    // 관리자용 모든 프로필 조회
    getAllAdmin: async (): Promise<Profile[]> => {
        const token = localStorage.getItem("adminToken")
        const response = await apiClient.get<Profile[]>("/profile/admin", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    },

    // 특정 프로필 조회
    getOne: async (id: string): Promise<Profile> => {
        const response = await apiClient.get<Profile>(`/profile/${id}`)
        return response.data
    },

    // 프로필 생성 (관리자용)
    create: async (data: CreateProfileDto): Promise<Profile> => {
        const token = localStorage.getItem("adminToken")
        const response = await apiClient.post<Profile>("/profile", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    },

    // 프로필 수정 (관리자용)
    update: async (id: string, data: UpdateProfileDto): Promise<Profile> => {
        const token = localStorage.getItem("adminToken")
        const response = await apiClient.patch<Profile>(`/profile/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    },

    // 프로필 삭제 (관리자용)
    delete: async (id: string): Promise<Profile> => {
        const token = localStorage.getItem("adminToken")
        const response = await apiClient.delete<Profile>(`/profile/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    },

    /** 관리자 프로필 조회 */
    getProfile: async (): Promise<AdminProfile> => {
        const response = await apiClient.get("/admin/profile")
        return response.data
    },

    /** 관리자 프로필 수정 */
    updateProfile: async (
        data: Partial<AdminProfile>
    ): Promise<AdminProfile> => {
        const response = await apiClient.patch("/admin/profile", data)
        return response.data
    },
} 