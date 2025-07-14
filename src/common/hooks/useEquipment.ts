import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  equipmentApi,
  EquipmentCreationData,
  EquipmentUpdateData,
} from "../../api/equipment"
import { Equipment } from "../../types/equipment"
import { fileUploadApi } from "../../api/fileUpload"

const equipmentQueryKeys = {
  all: ["equipments"] as const,
}

/** 장비 목록 조회 */
export const useEquipments = () => {
  return useQuery<Equipment[], Error>({
    queryKey: equipmentQueryKeys.all,
    queryFn: equipmentApi.getAllAdmin,
  })
}

/** 장비 생성 */
export const useCreateEquipment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: EquipmentCreationData) => equipmentApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: equipmentQueryKeys.all })
    },
  })
}

/** 장비 수정 */
export const useUpdateEquipment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: EquipmentUpdateData }) =>
      equipmentApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: equipmentQueryKeys.all })
    },
  })
}

/** 장비 삭제 */
export const useDeleteEquipment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => equipmentApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: equipmentQueryKeys.all })
    },
  })
}

/** 장비 순서 변경 */
export const useUpdateEquipmentOrder = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (equipmentIds: string[]) =>
      equipmentApi.updateSortOrder(equipmentIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: equipmentQueryKeys.all })
    },
  })
}

/** 장비 이미지 업로드 */
export const useUploadEquipmentImage = () => {
  return useMutation({
    mutationFn: (file: File) =>
      fileUploadApi.uploadFile("/admin/equipment/upload-image", file),
  })
}
