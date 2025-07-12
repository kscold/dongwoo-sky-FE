import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { profileApi } from "../../api/profile"
import { fileUploadApi } from "../../api/fileUpload"
import { AdminProfile } from "../types/profile"

const profileQueryKeys = {
    profile: ["profile"] as const,
}

/** 관리자 프로필 조회 */
export const useProfile = () => {
    return useQuery<AdminProfile, Error>({
        queryKey: profileQueryKeys.profile,
        queryFn: profileApi.getProfile,
    })
}

/** 관리자 프로필 수정 */
export const useUpdateProfile = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: Partial<AdminProfile>) => profileApi.updateProfile(data),
        onSuccess: (updatedProfile) => {
            queryClient.setQueryData(profileQueryKeys.profile, updatedProfile)
        },
    })
}

/** 프로필 이미지 업로드 */
export const useUploadProfileImage = () => {
    return useMutation({
        mutationFn: (file: File) =>
            fileUploadApi.uploadFile("/admin/file-upload/image", file),
    })
} 