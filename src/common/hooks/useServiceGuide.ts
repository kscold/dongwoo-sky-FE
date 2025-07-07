import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
    getServiceGuideData,
    getAdminServiceGuide,
    updateAdminServiceGuide,
    uploadServiceGuideImages,
} from "@/api/service-guide"
import type {
    ServiceGuideData,
    AdminServiceGuide,
    UpdateServiceGuideDto
} from "@/common/types/service-guide"

export const serviceGuideKeys = {
    all: ["service-guide"] as const,
    public: () => [...serviceGuideKeys.all, "public"] as const,
    admin: () => [...serviceGuideKeys.all, "admin"] as const,
}

// =================================================================
// 공개용 훅들 (Service API)
// =================================================================

export const useServiceGuideData = () => {
    return useQuery({
        queryKey: serviceGuideKeys.public(),
        queryFn: getServiceGuideData,
        staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
        gcTime: 10 * 60 * 1000, // 10분간 메모리에 유지
    })
}

// =================================================================
// 관리자용 훅들 (Admin API)
// =================================================================

export const useAdminServiceGuide = () => {
    return useQuery({
        queryKey: serviceGuideKeys.admin(),
        queryFn: getAdminServiceGuide,
        staleTime: 2 * 60 * 1000,
    })
}

export const useUpdateAdminServiceGuide = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateAdminServiceGuide,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: serviceGuideKeys.admin() })
            queryClient.invalidateQueries({ queryKey: serviceGuideKeys.public() })
        },
        onError: (error) => {
            console.error("서비스 가이드 업데이트 실패:", error)
        },
    })
}

export const useUploadServiceGuideImages = () => {
    return useMutation({
        mutationFn: uploadServiceGuideImages,
        onError: (error) => {
            console.error("서비스 가이드 이미지 업로드 실패:", error)
        },
    })
}

// =================================================================
// 호환성을 위한 Alias
// =================================================================

// 기존 코드 호환성을 위한 alias
export const useServiceGuide = useServiceGuideData 