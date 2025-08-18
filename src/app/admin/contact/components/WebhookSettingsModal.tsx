import React from "react"
import { DiscordWebhookSettings } from "../../../../api/discord"
import { formatDate } from "../utils"
import * as styles from "../../../../features/admin/styles/admin-contact.css"

interface WebhookSettingsModalProps {
  isOpen: boolean
  onClose: () => void
  webhookUrl: string
  setWebhookUrl: (url: string) => void
  isWebhookEnabled: boolean
  setIsWebhookEnabled: (enabled: boolean) => void
  webhookSettings: DiscordWebhookSettings | null
  onSave: () => void
  onTest: () => void
  isTestingWebhook: boolean
}

export const WebhookSettingsModal: React.FC<WebhookSettingsModalProps> = ({
  isOpen,
  onClose,
  webhookUrl,
  setWebhookUrl,
  isWebhookEnabled,
  setIsWebhookEnabled,
  webhookSettings,
  onSave,
  onTest,
  isTestingWebhook,
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>디스코드 웹훅 설정</h2>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>웹훅 활성화</h3>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isWebhookEnabled}
                onChange={(e) => setIsWebhookEnabled(e.target.checked)}
                className={styles.checkbox}
              />
              디스코드 알림 활성화
            </label>
          </div>

          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>웹훅 URL</h3>
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://discord.com/api/webhooks/.../..."
              className={styles.webhookInput}
              disabled={!isWebhookEnabled}
            />
            <p className={styles.helpText}>
              디스코드 서버 설정 → 연동 → 웹훅에서 생성할 수 있습니다.
            </p>
          </div>

          {webhookSettings && (
            <div className={styles.detailSection}>
              <h3 className={styles.detailSectionTitle}>현재 상태</h3>
              <p>
                활성화:{" "}
                {webhookSettings.isEnabled ? "✅ 활성화됨" : "❌ 비활성화됨"}
              </p>
              {webhookSettings.updatedAt && (
                <p>마지막 수정: {formatDate(webhookSettings.updatedAt)}</p>
              )}
            </div>
          )}
        </div>

        <div className={styles.modalActions}>
          <button
            onClick={onTest}
            disabled={!webhookUrl || isTestingWebhook}
            className={styles.testButton}
          >
            {isTestingWebhook ? "테스트 중..." : "🧪 웹훅 테스트"}
          </button>
          <div className={styles.statusActions}>
            <button onClick={onClose} className={styles.cancelButton}>
              취소
            </button>
            <button onClick={onSave} className={styles.saveButton}>
              💾 저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}