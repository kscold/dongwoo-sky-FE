import { apiClient } from "./client"
import { Equipment, CreateEquipmentDto } from "@/common/types/equipment"

// API 요청 및 응답 타입 정의
export type EquipmentCreationData = CreateEquipmentDto
export type EquipmentUpdateData = Partial<EquipmentCreationData>

export const equipmentApi = {
  /** 전체 장비 목록 (관리자용) */
  getAllAdmin: async (): Promise<Equipment[]> => {
    const response = await apiClient.get<Equipment[]>("/admin/equipment/admin")
    return response.data
  },

  /** 단일 장비 조회 */
  getById: async (id: string): Promise<Equipment> => {
    const response = await apiClient.get(`/admin/equipment/${id}`)
    return response.data
  },

  /** 장비 생성 */
  create: async (data: EquipmentCreationData): Promise<Equipment> => {
    const response = await apiClient.post("/admin/equipment", data)
    return response.data
  },

  /** 장비 수정 */
  update: async (
    id: string,
    data: EquipmentUpdateData
  ): Promise<Equipment> => {
    const response = await apiClient.patch(`/admin/equipment/${id}`, data)
    return response.data
  },

  /** 장비 삭제 */
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/equipment/${id}`)
  },

  /** 장비 순서 업데이트 */
  updateSortOrder: async (equipmentIds: string[]): Promise<void> => {
    await apiClient.patch("/admin/equipment/sort-order", { equipmentIds })
  },
}
