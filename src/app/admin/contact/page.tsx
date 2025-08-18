"use client"

import React from "react"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import { ContactList } from "./components/ContactList"
import { FilterSection } from "./components/FilterSection"
import { ContactDetailModal } from "./components/ContactDetailModal"
import { WebhookSettingsModal } from "./components/WebhookSettingsModal"
import { useContactManagement } from "./hooks/useContactManagement"
import { useWebhookManagement } from "./hooks/useWebhookManagement"
import * as styles from "../../../features/admin/styles/admin-contact.css"

function ContactAdminContent() {
  const {
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
    setWebhookSettings,
    handleStatusChange,
    handleDelete,
    handleContactSelect,
  } = useContactManagement()

  const {
    isWebhookModalOpen,
    webhookUrl,
    isWebhookEnabled,
    isTestingWebhook,
    setIsWebhookModalOpen,
    setWebhookUrl,
    setIsWebhookEnabled,
    handleSaveWebhookSettings,
    handleTestWebhook,
  } = useWebhookManagement(webhookSettings, setWebhookSettings)


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>연락 관리</h1>
          <p className={styles.subtitle}>
            고객 문의 내역을 관리하고 상태를 업데이트합니다.
          </p>
        </div>
        <button
          onClick={() => setIsWebhookModalOpen(true)}
          className={styles.webhookButton}
        >
          🔗 디스코드 웹훅 설정
        </button>
      </div>

      <FilterSection
        filter={filter}
        onFilterChange={setFilter}
        contacts={contacts}
      />

      {loading && (
        <div className={styles.loadingContainer}>
          <p>연락처 데이터를 불러오는 중...</p>
        </div>
      )}

      {error && (
        <div className={styles.errorContainer}>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <ContactList
          contacts={filteredContacts}
          onContactSelect={handleContactSelect}
          onStatusChange={handleStatusChange}
        />
      )}

      <ContactDetailModal
        contact={selectedContact!}
        isOpen={isModalOpen && selectedContact !== null}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />

      <WebhookSettingsModal
        isOpen={isWebhookModalOpen}
        onClose={() => setIsWebhookModalOpen(false)}
        webhookUrl={webhookUrl}
        setWebhookUrl={setWebhookUrl}
        isWebhookEnabled={isWebhookEnabled}
        setIsWebhookEnabled={setIsWebhookEnabled}
        webhookSettings={webhookSettings}
        onSave={handleSaveWebhookSettings}
        onTest={handleTestWebhook}
        isTestingWebhook={isTestingWebhook}
      />
    </div>
  )
}

export default function ContactAdminPage() {
  return (
    <ProtectedRoute>
      <ContactAdminContent />
    </ProtectedRoute>
  )
}
