import { apiClient } from "./client"
import {
  VehicleType,
  CreateVehicleTypeDto,
  UpdateVehicleTypeDto,
} from "@/common/types/vehicle-type"

export const vehicleTypeApi = {
  // 활성화된 차량 타입 목록 조회 (공개)
  getAll: async (): Promise<VehicleType[]> => {
    const response = await apiClient.get("/vehicle-types")
    return response.data
  },

  // 타입별 차량 조회 (공개)
  getByType: async (type: "ladder" | "sky"): Promise<VehicleType[]> => {
    const response = await apiClient.get(`/vehicle-types?type=${type}`)
    return response.data
  },

  // 단일 차량 타입 조회 (공개)
  getById: async (id: string): Promise<VehicleType> => {
    const response = await apiClient.get(`/vehicle-types/${id}`)
    return response.data
  },

  // 관리자용 전체 차량 타입 목록 조회
  getAllAdmin: async (): Promise<VehicleType[]> => {
    const response = await apiClient.get("/vehicle-types/admin")
    return response.data
  },

  // 차량 타입 생성 (관리자)
  create: async (data: CreateVehicleTypeDto): Promise<VehicleType> => {
    const response = await apiClient.post("/vehicle-types", data)
    return response.data
  },

  // 차량 타입 수정 (관리자)
  update: async (
    id: string,
    data: UpdateVehicleTypeDto
  ): Promise<VehicleType> => {
    const response = await apiClient.patch(`/vehicle-types/${id}`, data)
    return response.data
  },

  // 차량 타입 삭제 (관리자)
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/vehicle-types/${id}`)
  },
}
