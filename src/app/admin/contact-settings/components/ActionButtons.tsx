import React from "react"
import { Button } from "../../../../common/components/atoms"
import { ContactSettings, UpdateContactSettingsDto } from "../../../../api/contact"
import * as styles from "../../../../styles/admin/admin-contact-settings.css"

interface ActionButtonsProps {
  isEditing: boolean
  isLoading: boolean
  onEdit: () => void
  onCancel: () => void
  settings: ContactSettings | undefined
  setFormData: (data: UpdateContactSettingsDto) => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isEditing,
  isLoading,
  onEdit,
  onCancel,
  settings,
  setFormData,
}) => {
  const handleCancel = () => {
    onCancel()
    // 폼 데이터를 원래 설정으로 되돌리기
    if (settings) {
      setFormData({
        pageTitle: settings.pageTitle,
        pageSubtitle: settings.pageSubtitle,
        pageDescription: settings.pageDescription,
        contactSectionTitle: settings.contactSectionTitle,
        contactSectionDescription: settings.contactSectionDescription,
        businessName: settings.businessName,
        businessAddress: settings.businessAddress,
        businessPhone: settings.businessPhone,
        businessEmail: settings.businessEmail,
        businessFax: settings.businessFax,
        operatingHours: settings.operatingHours,
        businessDays: settings.businessDays,
        kakaoTalkId: settings.kakaoTalkId,
        naverTalkId: settings.naverTalkId,
        instagramUrl: settings.instagramUrl,
        facebookUrl: settings.facebookUrl,
        youtubeUrl: settings.youtubeUrl,
        formTitle: settings.formTitle,
        formDescription: settings.formDescription,
        inquiryTypes: settings.inquiryTypes,
        submitButtonText: settings.submitButtonText,
        successMessage: settings.successMessage,
        errorMessage: settings.errorMessage,
        privacyNotes: settings.privacyNotes,
        emergencyContactTitle: settings.emergencyContactTitle,
        emergencyContactDescription: settings.emergencyContactDescription,
        emergencyPhone: settings.emergencyPhone,
        emergencyHours: settings.emergencyHours,
        mapTitle: settings.mapTitle,
        mapDescription: settings.mapDescription,
        latitude: settings.latitude,
        longitude: settings.longitude,
        mapApiKey: settings.mapApiKey,
        discordWebhookUrl: settings.discordWebhookUrl,
        discordEnabled: settings.discordEnabled,
        discordMessageTitle: settings.discordMessageTitle,
        discordEmbedColor: settings.discordEmbedColor,
        pricingService: settings.pricingService,
        isActive: settings.isActive,
      })
    }
  }

  return (
    <div className={styles.actionButtons}>
      {!isEditing ? (
        <Button variant="admin" onClick={onEdit}>
          편집하기
        </Button>
      ) : (
        <>
          <Button type="submit" variant="admin" loading={isLoading}>
            저장
          </Button>
          <Button type="button" variant="secondary" onClick={handleCancel}>
            취소
          </Button>
        </>
      )}
    </div>
  )
}