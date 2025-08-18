import { apiClient } from "@/api/client"
import { fileUploadApi } from "@/api/fileUpload"
import type { Equipment } from "@/types/equipment"

export interface EquipmentCreationData {
  name: string
  description: string
  imageUrl: string
}

export interface EquipmentUpdateData {
  name?: string
  description?: string
  imageUrl?: string
}

export const equipmentApi = {
  getAllAdmin: async (): Promise<Equipment[]> => {
    const response = await apiClient.get<Equipment[]>("/admin/equipment")
    return response.data
  },

  create: async (data: EquipmentCreationData): Promise<Equipment> => {
    const response = await apiClient.post<Equipment>("/admin/equipment", data)
    return response.data
  },

  update: async (id: string, data: EquipmentUpdateData): Promise<Equipment> => {
    const response = await apiClient.patch<Equipment>(`/admin/equipment/${id}`, data)
    return response.data
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/admin/equipment/${id}`)
  },

  updateSortOrder: async (equipmentIds: string[]): Promise<void> => {
    await apiClient.patch("/admin/equipment/sort-order", { equipmentIds })
  },

  uploadImage: async (file: File): Promise<{ imageUrl: string }> => {
    const result = await fileUploadApi.uploadFile("/api/admin/equipment/upload-image", file)
    if (!result.imageUrl) {
      throw new Error("Image upload failed: no imageUrl returned")
    }
    return { imageUrl: result.imageUrl }
  },
}