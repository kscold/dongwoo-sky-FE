import {
  Equipment,
  CreateEquipmentDto,
  UpdateEquipmentDto,
} from "@/types/equipment"
import { apiClient } from "./client"

export const equipmentApi = {
  // 모든 장비 조회 (활성화된 것만)
  getAll: async (): Promise<Equipment[]> => {
    const response = await apiClient.get<Equipment[]>("/equipment")
    return response.data
  },

  // 관리자용 모든 장비 조회
  getAllAdmin: async (): Promise<Equipment[]> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.get<Equipment[]>("/equipment/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  // 특정 장비 조회
  getById: async (id: string): Promise<Equipment> => {
    const response = await apiClient.get<Equipment>(`/equipment/${id}`)
    return response.data
  },

  // 장비 생성
  create: async (data: CreateEquipmentDto): Promise<Equipment> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.post<Equipment>("/equipment", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  },

  // 장비 수정
  update: async (id: string, data: UpdateEquipmentDto): Promise<Equipment> => {
    const token = localStorage.getItem("adminToken")
    const response = await apiClient.patch<Equipment>(
      `/equipment/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  },

  // 장비 삭제
  delete: async (id: string): Promise<void> => {
    const token = localStorage.getItem("adminToken")
    await apiClient.delete(`/equipment/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },

  // 이미지 업로드
  uploadImage: async (file: File): Promise<{ imageUrl: string }> => {
    const token = localStorage.getItem("adminToken")
    const formData = new FormData()
    formData.append("file", file)

    const response = await apiClient.post<{ imageUrl: string }>(
      "/equipment/upload-image",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return response.data
  },

  // 정렬 순서 업데이트
  updateSortOrder: async (equipmentIds: string[]): Promise<void> => {
    const token = localStorage.getItem("adminToken")
    await apiClient.put(
      "/equipment/sort-order",
      { equipmentIds },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
}
