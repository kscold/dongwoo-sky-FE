import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { seoApi } from "../../api/seo"
import { PageSEO, EquipmentSEO, CreateSEODto, UpdateSEODto } from "../../types/seo"

const seoQueryKeys = {
  all: ["seo"] as const,
  page: (page: string) => ["seo", "page", page] as const,
  path: (path: string) => ["seo", "path", path] as const,
  equipment: (equipmentId: string) => ["seo", "equipment", equipmentId] as const,
  admin: () => ["seo", "admin"] as const,
}

/** 페이지별 SEO 메타데이터 조회 */
export const usePageSEO = (page: string) => {
  return useQuery<PageSEO | null, Error>({
    queryKey: seoQueryKeys.page(page),
    queryFn: () => seoApi.getPageSEO(page),
    staleTime: 5 * 60 * 1000, // 5분간 캐시
  })
}

/** 경로별 SEO 메타데이터 조회 */
export const usePathSEO = (path: string) => {
  return useQuery<PageSEO | null, Error>({
    queryKey: seoQueryKeys.path(path),
    queryFn: () => seoApi.getPathSEO(path),
    staleTime: 5 * 60 * 1000, // 5분간 캐시
  })
}

/** 장비별 SEO 메타데이터 조회 */
export const useEquipmentSEO = (equipmentId: string) => {
  return useQuery<EquipmentSEO | null, Error>({
    queryKey: seoQueryKeys.equipment(equipmentId),
    queryFn: () => seoApi.getEquipmentSEO(equipmentId),
    enabled: !!equipmentId,
    staleTime: 5 * 60 * 1000, // 5분간 캐시
  })
}

/** 모든 SEO 설정 조회 (관리자용) */
export const useAllSEO = () => {
  return useQuery<PageSEO[], Error>({
    queryKey: seoQueryKeys.admin(),
    queryFn: seoApi.getAllSEO,
  })
}

/** SEO 메타데이터 생성 */
export const useCreateSEO = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateSEODto) => seoApi.createSEO(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoQueryKeys.all })
    },
  })
}

/** SEO 메타데이터 수정 */
export const useUpdateSEO = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSEODto }) =>
      seoApi.updateSEO(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoQueryKeys.all })
    },
  })
}

/** SEO 메타데이터 삭제 */
export const useDeleteSEO = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => seoApi.deleteSEO(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seoQueryKeys.all })
    },
  })
}

/** 구조화 데이터 생성 */
export const useStructuredData = (type: 'equipment' | 'service', id?: string) => {
  return useQuery<Record<string, any>, Error>({
    queryKey: ["structured-data", type, id],
    queryFn: () => seoApi.generateStructuredData(type, id),
    enabled: !!type,
    staleTime: 10 * 60 * 1000, // 10분간 캐시
  })
}