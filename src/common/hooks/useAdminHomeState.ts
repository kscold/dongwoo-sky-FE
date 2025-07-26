import { useState, useCallback } from "react"
import { HomeSettings } from "../../types/home"

export const useAdminHomeState = (homeSettings?: HomeSettings) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<Partial<HomeSettings>>({})
  const [isUploading, setIsUploading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentTitle = isEditing
    ? editData.heroTitle ||
      homeSettings?.heroTitle || { preTitle: "", mainTitle: "", postTitle: "" }
    : homeSettings?.heroTitle || { preTitle: "", mainTitle: "", postTitle: "" }

  const currentButtons = isEditing
    ? editData.heroButtons ||
      homeSettings?.heroButtons || {
        primaryButtonText: "",
        primaryButtonLink: "",
        secondaryButtonText: "",
        secondaryButtonLink: "",
      }
    : homeSettings?.heroButtons || {
        primaryButtonText: "",
        primaryButtonLink: "",
        secondaryButtonText: "",
        secondaryButtonLink: "",
      }

  const currentImages = isEditing
    ? editData.heroImages || homeSettings?.heroImages || []
    : homeSettings?.heroImages || []

  const handleEdit = useCallback(() => {
    if (homeSettings) {
      setEditData({
        pageId: homeSettings.pageId,
        heroTitle: homeSettings.heroTitle
          ? { ...homeSettings.heroTitle }
          : {
              preTitle: "",
              mainTitle: "",
              postTitle: "",
            },
        heroSubtitle: homeSettings.heroSubtitle,
        heroImages: homeSettings.heroImages ? [...homeSettings.heroImages] : [],
        heroButtons: homeSettings.heroButtons
          ? { ...homeSettings.heroButtons }
          : {
              primaryButtonText: "",
              primaryButtonLink: "",
              secondaryButtonText: "",
              secondaryButtonLink: "",
            },
        contentSettings: homeSettings.contentSettings
          ? [...homeSettings.contentSettings]
          : [],
        isActive: homeSettings.isActive,
        sortOrder: homeSettings.sortOrder,
      })
    }
    setIsEditing(true)
  }, [homeSettings])

  const handleCancel = useCallback(() => {
    setIsEditing(false)
    setEditData({})
  }, [])

  const updateEditData = useCallback((updates: Partial<HomeSettings>) => {
    setEditData((prev) => ({ ...prev, ...updates }))
  }, [])

  const updateTitleField = useCallback(
    (field: keyof HomeSettings["heroTitle"], value: string) => {
      setEditData((prev) => ({
        ...prev,
        heroTitle: {
          preTitle: prev.heroTitle?.preTitle || "",
          mainTitle: prev.heroTitle?.mainTitle || "",
          postTitle: prev.heroTitle?.postTitle || "",
          [field]: value,
        },
      }))
    },
    []
  )

  const updateButtonField = useCallback(
    (field: keyof HomeSettings["heroButtons"], value: string) => {
      setEditData((prev) => ({
        ...prev,
        heroButtons: {
          primaryButtonText: prev.heroButtons?.primaryButtonText || "",
          primaryButtonLink: prev.heroButtons?.primaryButtonLink || "",
          secondaryButtonText: prev.heroButtons?.secondaryButtonText || "",
          secondaryButtonLink: prev.heroButtons?.secondaryButtonLink || "",
          [field]: value,
        },
      }))
    },
    []
  )

  const updateContentSettings = useCallback(
    (updatedSettings: HomeSettings["contentSettings"]) => {
      setEditData((prev) => ({
        ...prev,
        contentSettings: updatedSettings,
      }))
    },
    []
  )

  return {
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
  }
}
