import { useState, useEffect } from "react"
import { contactApi, ContactInquiry as ApiContactInquiry } from "../../../../api/contact"
import {
  discordApi,
  DiscordWebhookSettings,
  ContactNotification,
} from "../../../../api/discord"

// Use the API type but map it to the local component type
interface ContactInquiry {
  id: string
  name: string
  phone: string
  location?: string
  details: string
  status: string
  createdAt: string
  updatedAt: string
}

const mapApiContactToLocal = (apiContact: ApiContactInquiry): ContactInquiry => ({
  id: apiContact._id,
  name: apiContact.name,
  phone: apiContact.phone,
  location: apiContact.company || "",
  details: apiContact.message,
  status: apiContact.status,
  createdAt: apiContact.createdAt.toISOString(),
  updatedAt: apiContact.updatedAt.toISOString(),
})

export const useContactManagement = () => {
  const [contacts, setContacts] = useState<ContactInquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedContact, setSelectedContact] = useState<ContactInquiry | null>(
    null
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<"all" | "pending" | "processing">("all")
  const [webhookSettings, setWebhookSettings] =
    useState<DiscordWebhookSettings | null>(null)

  const loadContacts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await contactApi.getContactInquiries(1, 100)
      const mappedContacts = response.data.map(mapApiContactToLocal)
      setContacts(mappedContacts)
    } catch (err) {
      setError("연락처 문의 데이터를 불러오는데 실패했습니다.")
      console.error("연락처 데이터 로드 실패:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (
    contactId: string,
    newStatus: ContactInquiry["status"]
  ) => {
    const contact = contacts.find((c) => c.id === contactId)
    if (!contact) return

    try {
      await contactApi.updateInquiryStatus(contactId, newStatus)
      
      setContacts((prev) =>
        prev.map((contact) =>
          contact.id === contactId
            ? {
                ...contact,
                status: newStatus,
                updatedAt: new Date().toISOString(),
              }
            : contact
        )
      )

      if (selectedContact?.id === contactId) {
        setSelectedContact((prev) =>
          prev ? { ...prev, status: newStatus } : null
        )
      }

      if (webhookSettings?.isEnabled && webhookSettings.webhookUrl) {
        try {
          const notification: ContactNotification = {
            name: contact.name,
            phone: contact.phone,
            location: contact.location,
            details: contact.details,
            status: newStatus,
            createdAt: contact.createdAt,
          }
          await discordApi.sendContactNotification(notification)
        } catch (error) {
          console.error("Discord 알림 전송 실패:", error)
        }
      }
    } catch (error) {
      console.error("상태 업데이트 실패:", error)
      setError("상태 업데이트에 실패했습니다.")
    }
  }

  const handleDelete = (contactId: string) => {
    if (window.confirm("정말로 이 문의를 삭제하시겠습니까?")) {
      setContacts((prev) => prev.filter((contact) => contact.id !== contactId))
      setIsModalOpen(false)
      setSelectedContact(null)
    }
  }

  const filteredContacts =
    filter === "all"
      ? contacts
      : contacts.filter((contact) => contact.status === filter)

  const handleContactSelect = (contact: ContactInquiry) => {
    setSelectedContact(contact)
    setIsModalOpen(true)
  }

  useEffect(() => {
    const initializeData = async () => {
      await loadContacts()
      
      try {
        const settings = await discordApi.getWebhookSettings()
        if (settings) {
          setWebhookSettings(settings)
        }
      } catch (error) {
        console.error("웹훅 설정 로드 실패:", error)
      }
    }
    
    initializeData()
  }, [])

  return {
    contacts,
    selectedContact,
    isModalOpen,
    filter,
    filteredContacts,
    webhookSettings,
    loading,
    error,
    setFilter,
    setIsModalOpen,
    setSelectedContact,
    setWebhookSettings,
    handleStatusChange,
    handleDelete,
    handleContactSelect,
    loadContacts,
  }
}