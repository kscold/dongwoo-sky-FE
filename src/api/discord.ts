import { apiClient } from "./client"

export interface DiscordWebhookSettings {
  id?: string
  webhookUrl: string
  isEnabled: boolean
  createdAt?: string
  updatedAt?: string
}

export interface ContactNotification {
  name: string
  phone: string
  location?: string
  details: string
  status: string
  createdAt: string
}

export const discordApi = {
  // 웹훅 설정 조회
  getWebhookSettings: async (): Promise<DiscordWebhookSettings | null> => {
    try {
      const response = await apiClient.get<DiscordWebhookSettings>("/admin/discord-webhook")
      return response.data
    } catch (error) {
      console.warn("Discord webhook settings not found")
      // 개발 환경에서는 기본값 반환
      if (process.env.NODE_ENV === 'development') {
        return {
          webhookUrl: "",
          isEnabled: false
        }
      }
      return null
    }
  },

  // 웹훅 설정 업데이트
  updateWebhookSettings: async (settings: Partial<DiscordWebhookSettings>): Promise<DiscordWebhookSettings> => {
    try {
      const response = await apiClient.put<DiscordWebhookSettings>("/admin/discord-webhook", settings)
      return response.data
    } catch (error) {
      console.error("Failed to update webhook settings:", error)
      // 개발 환경에서는 mock 응답
      if (process.env.NODE_ENV === 'development') {
        return {
          id: "mock-id",
          webhookUrl: settings.webhookUrl || "",
          isEnabled: settings.isEnabled || false,
          updatedAt: new Date().toISOString()
        }
      }
      throw error
    }
  },

  // 디스코드로 알림 전송
  sendContactNotification: async (contact: ContactNotification): Promise<void> => {
    try {
      await apiClient.post("/admin/discord-webhook/send", contact)
    } catch (error) {
      console.error("Failed to send Discord notification:", error)
      // 개발 환경에서는 콘솔에만 출력
      if (process.env.NODE_ENV === 'development') {
        console.log("📢 Discord 알림 (개발 모드):", {
          title: "새로운 문의가 접수되었습니다",
          name: contact.name,
          phone: contact.phone,
          location: contact.location,
          details: contact.details,
          timestamp: contact.createdAt
        })
        return
      }
      throw error
    }
  },

  // 웹훅 URL 테스트
  testWebhook: async (webhookUrl: string): Promise<boolean> => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: "🔧 동우스카이 관리자 - 웹훅 연결 테스트",
          embeds: [{
            title: "웹훅 테스트",
            description: "디스코드 웹훅이 정상적으로 작동합니다!",
            color: 0x3B82F6,
            timestamp: new Date().toISOString(),
            footer: {
              text: "동우스카이 관리 시스템"
            }
          }]
        })
      })
      
      return response.ok
    } catch (error) {
      console.error("Webhook test failed:", error)
      return false
    }
  }
}

// 디스코드 메시지 포맷 유틸리티
export const formatDiscordMessage = (contact: ContactNotification) => {
  const statusEmoji = contact.status === 'pending' ? '🔔' : '⚡'
  const statusText = contact.status === 'pending' ? '대기중' : '처리중'
  
  return {
    content: `${statusEmoji} **새로운 문의가 접수되었습니다**`,
    embeds: [{
      title: "📞 고객 문의 정보",
      color: contact.status === 'pending' ? 0xF59E0B : 0x3B82F6,
      fields: [
        {
          name: "👤 고객명",
          value: contact.name,
          inline: true
        },
        {
          name: "📱 연락처", 
          value: contact.phone,
          inline: true
        },
        {
          name: "📍 작업 위치",
          value: contact.location || "미제공",
          inline: true
        },
        {
          name: "📝 문의 내용",
          value: contact.details.length > 100 
            ? contact.details.substring(0, 100) + "..."
            : contact.details,
          inline: false
        },
        {
          name: "📊 처리 상태",
          value: statusText,
          inline: true
        }
      ],
      timestamp: contact.createdAt,
      footer: {
        text: "동우스카이 관리 시스템",
        icon_url: "https://dongwoo-sky.com/favicon.ico"
      }
    }]
  }
}