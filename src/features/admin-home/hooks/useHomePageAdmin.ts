import { useCallback } from "react"
import {
  useMainHomeSettings,
  useSaveAdminHomeSettings,
  useUploadHeroImages,
  useDeleteHeroImage,
} from "../../../common/hooks/useHome"
import { useAdminHomeState } from "../../../common/hooks/useAdminHomeState"
import { HomeSettings } from "../../../types/home"

export const useHomePageAdmin = () => {
  const { data: homeSettings, isLoading, error } = useMainHomeSettings()
  const saveHomeSettingsMutation = useSaveAdminHomeSettings()
  const uploadImagesMutation = useUploadHeroImages()
  const deleteImageMutation = useDeleteHeroImage()

  const {
    isEditing,
    editData,
    isUploading,
    setIsUploading,
    currentImageIndex,
    setCurrentImageIndex,
    currentTitle,
    currentButtons,
    currentImages,
    handleEdit,
    handleCancel,
    updateEditData,
    updateTitleField,
    updateButtonField,
    updateContentSettings,
  } = useAdminHomeState(homeSettings || undefined)

  const handleSave = async () => {
    if (editData && Object.keys(editData).length > 0) {
      try {
        const sanitizedData: Partial<HomeSettings> = {
          pageId: editData.pageId || homeSettings?.pageId || "main",
          heroTitle: editData.heroTitle ? {
            preTitle: String(editData.heroTitle.preTitle || ""),
            mainTitle: String(editData.heroTitle.mainTitle || ""),
            postTitle: String(editData.heroTitle.postTitle || "")
          } : undefined,
          heroSubtitle: editData.heroSubtitle ? String(editData.heroSubtitle) : undefined,
          heroButtons: editData.heroButtons ? {
            primaryButtonText: String(editData.heroButtons.primaryButtonText || ""),
            primaryButtonLink: String(editData.heroButtons.primaryButtonLink || ""),
            secondaryButtonText: String(editData.heroButtons.secondaryButtonText || ""),
            secondaryButtonLink: String(editData.heroButtons.secondaryButtonLink || "")
          } : undefined,
          heroImages: editData.heroImages
            ? editData.heroImages.map((img: any) => {
                if (typeof img === "string") {
                  return { url: img, alt: "", name: "", key: "" }
                }
                return {
                  url: String(img.url || ""),
                  alt: String(img.alt || ""),
                  name: String(img.name || ""),
                  key: String(img.key || "")
                }
              })
            : undefined,
          contentSettings: editData.contentSettings
            ? editData.contentSettings.map((setting: any) => ({
                key: String(setting.key || ""),
                title: String(setting.title || ""),
                description: String(setting.description || ""),
                isActive: Boolean(setting.isActive),
                _id: setting._id ? String(setting._id) : undefined
              }))
            : undefined,
          isActive: typeof editData.isActive === "boolean" ? editData.isActive : true,
          sortOrder: typeof editData.sortOrder === "number" ? editData.sortOrder : 0
        }

        Object.keys(sanitizedData).forEach(key => {
          if (sanitizedData[key as keyof HomeSettings] === undefined) {
            delete sanitizedData[key as keyof HomeSettings]
          }
        })

        await saveHomeSettingsMutation.mutateAsync(sanitizedData)
        handleCancel()
        alert("홈 페이지 설정이 성공적으로 업데이트되었습니다!")
      } catch (error) {
        alert("업데이트 중 오류가 발생했습니다.")
        console.error("Save error:", error)
      }
    }
  }

  const handleImageUpload = useCallback(
    async (files: FileList) => {
      setIsUploading(true)
      try {
        const fileArray = Array.from(files)
        const result = await uploadImagesMutation.mutateAsync(fileArray)

        if (result?.images && Array.isArray(result.images)) {
          const existingImages = editData.heroImages || homeSettings?.heroImages || []
          const newImages = result.images.map((img: any) => ({
            url: img.url,
            name: img.name || img.key || "Uploaded Image",
            key: img.key || "",
            alt: img.alt || "",
          }))

          const updatedImages = [...existingImages, ...newImages]
          updateEditData({ heroImages: updatedImages })

          alert(`${result.images.length}개의 이미지가 성공적으로 업로드되었습니다.`)
        } else {
          alert("이미지 업로드에 실패했습니다. 응답 형식이 올바르지 않습니다.")
        }
      } catch (error) {
        console.error("이미지 업로드 실패:", error)
        alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.")
      } finally {
        setIsUploading(false)
      }
    },
    [editData.heroImages, homeSettings?.heroImages, updateEditData, uploadImagesMutation, setIsUploading]
  )

  const handleImageDelete = useCallback(
    async (index: number) => {
      try {
        const imageToDelete = currentImages[index]
        const imageUrl = typeof imageToDelete === "string" ? imageToDelete : imageToDelete?.url

        if (imageUrl) {
          await deleteImageMutation.mutateAsync(imageUrl)
          const updatedImages = currentImages.filter((_, i) => i !== index)
          updateEditData({ heroImages: updatedImages })
          alert("이미지가 성공적으로 삭제되었습니다.")
        }
      } catch (error) {
        console.error("이미지 삭제 실패:", error)
        alert("이미지 삭제 중 오류가 발생했습니다.")
      }
    },
    [currentImages, updateEditData, deleteImageMutation]
  )

  const handleInputChange = (field: string, value: any) => {
    if (field.startsWith("heroTitle.")) {
      const heroField = field.replace("heroTitle.", "")
      updateTitleField(heroField as keyof HomeSettings["heroTitle"], value)
    } else if (field.startsWith("heroButtons.")) {
      const buttonField = field.replace("heroButtons.", "")
      updateButtonField(buttonField as keyof HomeSettings["heroButtons"], value)
    } else {
      updateEditData({ [field]: value })
    }
  }

  return {
    homeSettings,
    isLoading,
    error,
    isEditing,
    editData,
    isUploading,
    currentImageIndex,
    setCurrentImageIndex,
    currentTitle,
    currentButtons,
    currentImages,
    handleEdit,
    handleCancel,
    handleSave,
    handleImageUpload,
    handleImageDelete,
    handleInputChange,
    updateTitleField,
    updateButtonField,
    updateContentSettings,
    isSaving: saveHomeSettingsMutation.isPending,
  }
}