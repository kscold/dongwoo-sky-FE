import {
  Equipment,
  CreateEquipmentDto,
  UpdateEquipmentDto,
} from "@/types/equipment"
import { apiClient } from "./client"

export const equipmentApi = {
  // 모든 장비 조회 (활성화된 것만)
  getAll: async (): Promise<Equipment[]> => {
    const response = await apiClient.get("/equipment")
    return response.data
  },

  // 관리자용 모든 장비 조회
  getAllAdmin: async (): Promise<Equipment[]> => {
    const response = await apiClient.get("/equipment/admin")
    return response.data
  },

  // 특정 장비 조회
  getById: async (id: string): Promise<Equipment> => {
    const response = await apiClient.get(`/equipment/${id}`)
    return response.data
  },

  // 장비 생성
  create: async (data: CreateEquipmentDto): Promise<Equipment> => {
    const response = await apiClient.post("/equipment", data)
    return response.data
  },

  // 장비 수정
  update: async (id: string, data: UpdateEquipmentDto): Promise<Equipment> => {
    const response = await apiClient.patch(`/equipment/${id}`, data)
    return response.data
  },

  // 장비 삭제
  remove: async (id: string): Promise<void> => {
    await apiClient.delete(`/equipment/${id}`)
  },

  // 이미지 업로드
  uploadImage: async (file: File): Promise<{ imageUrl: string }> => {
    const formData = new FormData()
    formData.append("file", file)

    const response = await apiClient.post("/equipment/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  },

  // 정렬 순서 업데이트
  updateSortOrder: async (equipmentIds: string[]): Promise<void> => {
    await apiClient.put("/equipment/sort-order", { equipmentIds })
  },
}
