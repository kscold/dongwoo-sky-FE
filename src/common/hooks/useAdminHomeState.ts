import { useState, useCallback } from "react"
import { HomeSettings } from "../../types/home"

export const useAdminHomeState = (homeSettings?: HomeSettings) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<Partial<HomeSettings>>({})
  const [isUploading, setIsUploading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentTitle = isEditing
    ? editData.heroTitle || homeSettings?.heroTitle || {}
    : homeSettings?.heroTitle || {}
  
  const currentButtons = isEditing
    ? editData.heroButtons || homeSettings?.heroButtons || {}
    : homeSettings?.heroButtons || {}
  
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
        heroSection: {
          companyName: homeSettings.heroSection?.companyName || "어울림 스카이",
          businessType: homeSettings.heroSection?.businessType || "건설장비 대여",
          businessDescription: homeSettings.heroSection?.businessDescription || "",
          locationInfo: homeSettings.heroSection?.locationInfo || "",
          operatingHours: homeSettings.heroSection?.operatingHours || "",
          contactInfo: homeSettings.heroSection?.contactInfo || "",
          additionalInfo: homeSettings.heroSection?.additionalInfo || "",
        },
      })
    }
    setIsEditing(true)
  }, [homeSettings])

  const handleCancel = useCallback(() => {
    setIsEditing(false)
    setEditData({})
  }, [])

  const updateEditData = useCallback((updates: Partial<HomeSettings>) => {
    setEditData(prev => ({ ...prev, ...updates }))
  }, [])

  const updateTitleField = useCallback((field: keyof HomeSettings['heroTitle'], value: string) => {
    setEditData(prev => ({
      ...prev,
      heroTitle: {
        ...prev.heroTitle,
        [field]: value
      }
    }))
  }, [])

  const updateButtonField = useCallback((field: keyof HomeSettings['heroButtons'], value: string) => {
    setEditData(prev => ({
      ...prev,
      heroButtons: {
        ...prev.heroButtons,
        [field]: value
      }
    }))
  }, [])

  const updateHeroSection = useCallback((updates: Partial<HomeSettings['heroSection']>) => {
    setEditData(prev => ({
      ...prev,
      heroSection: {
        ...prev.heroSection,
        ...updates
      }
    }))
  }, [])

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
    updateHeroSection
  }
}