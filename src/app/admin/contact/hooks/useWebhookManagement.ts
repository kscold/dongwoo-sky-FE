import { useState, useEffect } from "react"
import { discordApi, DiscordWebhookSettings } from "../../../../api/discord"

export const useWebhookManagement = (webhookSettings: DiscordWebhookSettings | null, setWebhookSettings: (settings: DiscordWebhookSettings) => void) => {
  const [isWebhookModalOpen, setIsWebhookModalOpen] = useState(false)
  const [webhookUrl, setWebhookUrl] = useState("")
  const [isWebhookEnabled, setIsWebhookEnabled] = useState(false)
  const [isTestingWebhook, setIsTestingWebhook] = useState(false)

  useEffect(() => {
    if (webhookSettings) {
      setWebhookUrl(webhookSettings.webhookUrl)
      setIsWebhookEnabled(webhookSettings.isEnabled)
    }
  }, [webhookSettings])

  const handleSaveWebhookSettings = async () => {
    try {
      const newSettings = await discordApi.updateWebhookSettings({
        webhookUrl,
        isEnabled: isWebhookEnabled,
      })
      setWebhookSettings(newSettings)
      setIsWebhookModalOpen(false)
      alert("웹훅 설정이 저장되었습니다.")
    } catch (error) {
      console.error("웹훅 설정 저장 실패:", error)
      alert("웹훅 설정 저장에 실패했습니다.")
    }
  }

  const handleTestWebhook = async () => {
    if (!webhookUrl) {
      alert("웹훅 URL을 입력해주세요.")
      return
    }

    setIsTestingWebhook(true)
    try {
      const success = await discordApi.testWebhook(webhookUrl)
      if (success) {
        alert("웹훅 테스트가 성공했습니다! 디스코드를 확인해보세요.")
      } else {
        alert("웹훅 테스트가 실패했습니다. URL을 확인해주세요.")
      }
    } catch (error) {
      console.error("웹훅 테스트 실패:", error)
      alert("웹훅 테스트 중 오류가 발생했습니다.")
    } finally {
      setIsTestingWebhook(false)
    }
  }

  return {
    isWebhookModalOpen,
    webhookUrl,
    isWebhookEnabled,
    isTestingWebhook,
    setIsWebhookModalOpen,
    setWebhookUrl,
    setIsWebhookEnabled,
    handleSaveWebhookSettings,
    handleTestWebhook,
  }
}