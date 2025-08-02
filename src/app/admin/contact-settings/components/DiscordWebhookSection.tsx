import React from "react"
import { Input, Button } from "../../../../common/components/atoms"
import { Card, CardHeader, CardBody, CardTitle, CardDescription, FormGroup } from "../../../../common/components/molecules"
import { UpdateContactSettingsDto } from "../../../../api/contact"
import * as styles from "../../../../styles/admin/admin-contact-settings.css"

interface DiscordWebhookSectionProps {
  formData: UpdateContactSettingsDto
  onInputChange: (field: keyof UpdateContactSettingsDto, value: any) => void
  isEditing: boolean
  onDiscordTest: () => void
}

export const DiscordWebhookSection: React.FC<DiscordWebhookSectionProps> = ({
  formData,
  onInputChange,
  isEditing,
  onDiscordTest,
}) => {
  return (
    <Card variant="admin">
      <CardHeader>
        <CardTitle>디스코드 웹훅 설정</CardTitle>
        <CardDescription>문의 접수 시 디스코드로 알림을 보냅니다.</CardDescription>
      </CardHeader>
      <CardBody>
        <div className={styles.discordSection}>
          <FormGroup>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={formData.discordEnabled || false}
                onChange={(e) => onInputChange("discordEnabled", e.target.checked)}
                className={styles.checkbox}
                disabled={!isEditing}
              />
              디스코드 웹훅 활성화
            </label>
          </FormGroup>

          <FormGroup>
            <Input
              label="디스코드 웹훅 URL"
              type="url"
              variant="admin"
              value={formData.discordWebhookUrl || ""}
              onChange={(e) => onInputChange("discordWebhookUrl", e.target.value)}
              disabled={!isEditing}
              placeholder="https://discord.com/api/webhooks/..."
              helperText="디스코드 채널에서 웹훅을 생성하고 URL을 입력하세요."
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <Input
              label="메시지 제목"
              variant="admin"
              value={formData.discordMessageTitle || ""}
              onChange={(e) => onInputChange("discordMessageTitle", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <label className={styles.label}>임베드 색상</label>
            <input
              type="color"
              value={formData.discordEmbedColor || "#00ff00"}
              onChange={(e) => onInputChange("discordEmbedColor", e.target.value)}
              className={styles.colorInput}
              disabled={!isEditing}
            />
          </FormGroup>

          {isEditing && (
            <FormGroup>
              <Button
                type="button"
                variant="secondary"
                onClick={onDiscordTest}
              >
                테스트 메시지 전송
              </Button>
            </FormGroup>
          )}
        </div>
      </CardBody>
    </Card>
  )
}