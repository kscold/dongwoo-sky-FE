import { useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import {
  useAdminServiceGuide,
  useUpdateAdminServiceGuide,
  useUploadProfileImage,
  useDeleteProfileImage,
} from "../../../app/admin/service-guide/hooks/useAdminServiceGuide"
import { UpdateServiceGuideDto } from "../../../types/service-guide"

export const useServiceGuideForm = () => {
  const { data: serviceGuide, isLoading: isLoadingServiceGuide } = useAdminServiceGuide()
  const mutation = useUpdateAdminServiceGuide()
  const uploadMutation = useUploadProfileImage()
  const deleteMutation = useDeleteProfileImage()

  const { control, register, handleSubmit, reset, setValue, watch } = useForm<UpdateServiceGuideDto>({
    defaultValues: serviceGuide || {},
  })

  useEffect(() => {
    if (serviceGuide) {
      reset(serviceGuide)
    }
  }, [serviceGuide, reset])

  const scopeOfWorkFieldArray = useFieldArray({ control, name: "scopeOfWork" })
  const processStepsFieldArray = useFieldArray({ control, name: "processSteps" })

  const onSubmit = (data: UpdateServiceGuideDto) => {
    mutation.mutate(data)
  }

  const handleImageUpload = async (files: FileList) => {
    try {
      const file = files[0]
      if (file) {
        const result = await uploadMutation.mutateAsync(file)
        setValue("profile.imageUrl", result.imageUrl)
        alert("대표 사진이 성공적으로 업로드되었습니다.")
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error)
      alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.")
    }
  }

  const handleImageDelete = async (index: number) => {
    try {
      const currentFormData = watch()
      const currentImageUrl = currentFormData.profile?.imageUrl
      if (currentImageUrl && !currentImageUrl.startsWith("blob:")) {
        await deleteMutation.mutateAsync(currentImageUrl)
        setValue("profile.imageUrl", "")
        alert("대표 사진이 성공적으로 삭제되었습니다.")
      }
    } catch (error) {
      console.error("이미지 삭제 실패:", error)
      alert("이미지 삭제 중 오류가 발생했습니다.")
    }
  }

  return {
    serviceGuide,
    isLoadingServiceGuide,
    control,
    register,
    handleSubmit,
    watch,
    scopeOfWorkFieldArray,
    processStepsFieldArray,
    onSubmit,
    handleImageUpload,
    handleImageDelete,
    isSubmitting: mutation.isPending,
    isUploading: uploadMutation.isPending,
  }
}