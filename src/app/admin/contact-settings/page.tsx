"use client"

import React, { useEffect, useState } from "react"
import { useContactSettings, useUpdateContactSettings } from "../../../common/hooks/useContact"
import { UpdateContactSettingsDto } from "../../../api/contact"
import { BasicInfoSection } from "./components/BasicInfoSection"
import { CompanyInfoSection } from "./components/CompanyInfoSection"
import { PricingServiceSection } from "./components/PricingServiceSection"
import { DiscordWebhookSection } from "./components/DiscordWebhookSection"
import { ActionButtons } from "./components/ActionButtons"
import * as styles from "../../../styles/admin/admin-contact-settings.css"

export default function ContactSettingsPage() {
  const { data: settings, isLoading, error } = useContactSettings()
  const updateSettingsMutation = useUpdateContactSettings()

  const [formData, setFormData] = useState<UpdateContactSettingsDto>({})
  const [isEditing, setIsEditing] = useState(false)

  // 설정 데이터가 로드되면 폼 데이터 초기화
  useEffect(() => {
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
        // Discord 웹훅 설정
        discordWebhookUrl: settings.discordWebhookUrl,
        discordEnabled: settings.discordEnabled,
        discordMessageTitle: settings.discordMessageTitle,
        discordEmbedColor: settings.discordEmbedColor,
        // 요금 서비스 설정
        pricingService: settings.pricingService,
        isActive: settings.isActive,
      })
    }
  }, [settings])

  const handleInputChange = (
    field: keyof UpdateContactSettingsDto,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await updateSettingsMutation.mutateAsync(formData)
      setIsEditing(false)
      alert("설정이 성공적으로 업데이트되었습니다.")
    } catch (error) {
      console.error("설정 업데이트 실패:", error)
      alert("설정 업데이트에 실패했습니다.")
    }
  }

  const handleDiscordTest = async () => {
    if (!formData.discordWebhookUrl) {
      alert("디스코드 웹훅 URL을 먼저 입력해주세요.")
      return
    }

    try {
      // 테스트 메시지 전송
      const testInquiry = {
        name: "테스트 사용자",
        email: "test@example.com",
        phone: "010-1234-5678",
        company: "테스트 회사",
        inquiryType: "테스트 문의",
        subject: "디스코드 웹훅 테스트",
        message: "이것은 디스코드 웹훅 테스트 메시지입니다.",
        isUrgent: false,
      }

      await fetch("/api/service/contact/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testInquiry),
      })

      alert("테스트 메시지가 전송되었습니다. 디스코드 채널을 확인해주세요.")
    } catch (error) {
      console.error("테스트 메시지 전송 실패:", error)
      alert("테스트 메시지 전송에 실패했습니다.")
    }
  }

  if (isLoading)
    return <div className={styles.loadingContainer}>로딩 중...</div>
  if (error)
    return <div className={styles.errorContainer}>오류가 발생했습니다.</div>

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>연락처 설정 관리</h1>
        <p className={styles.subtitle}>
          웹사이트 연락처 페이지와 디스코드 웹훅 설정을 관리합니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <BasicInfoSection
          formData={formData}
          onInputChange={handleInputChange}
          isEditing={isEditing}
        />

        <CompanyInfoSection
          formData={formData}
          onInputChange={handleInputChange}
          isEditing={isEditing}
        />

        <PricingServiceSection
          formData={formData}
          onInputChange={handleInputChange}
          isEditing={isEditing}
        />

        <DiscordWebhookSection
          formData={formData}
          onInputChange={handleInputChange}
          isEditing={isEditing}
          onDiscordTest={handleDiscordTest}
        />

        <ActionButtons
          isEditing={isEditing}
          isLoading={updateSettingsMutation.isPending}
          onEdit={() => setIsEditing(true)}
          onCancel={() => setIsEditing(false)}
          settings={settings}
          setFormData={setFormData}
        />
      </form>
    </div>
  )
}
