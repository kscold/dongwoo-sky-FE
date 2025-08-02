import React from "react"
import { Input, Textarea } from "../../../../common/components/atoms"
import { Card, CardHeader, CardBody, CardTitle, CardDescription, FormGroup } from "../../../../common/components/molecules"
import { UpdateContactSettingsDto } from "../../../../api/contact"
import * as styles from "../../../../styles/admin/admin-contact-settings.css"

interface BasicInfoSectionProps {
  formData: UpdateContactSettingsDto
  onInputChange: (field: keyof UpdateContactSettingsDto, value: any) => void
  isEditing: boolean
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  formData,
  onInputChange,
  isEditing,
}) => {
  return (
    <Card variant="admin">
      <CardHeader>
        <CardTitle>기본 정보</CardTitle>
        <CardDescription>연락처 페이지의 기본 정보를 설정합니다.</CardDescription>
      </CardHeader>
      <CardBody>
        <div className={styles.formGrid}>
          <FormGroup>
            <Input
              label="페이지 제목"
              variant="admin"
              value={formData.pageTitle || ""}
              onChange={(e) => onInputChange("pageTitle", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="페이지 부제목"
              variant="admin"
              value={formData.pageSubtitle || ""}
              onChange={(e) => onInputChange("pageSubtitle", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Textarea
              label="페이지 설명"
              variant="admin"
              value={formData.pageDescription || ""}
              onChange={(e) => onInputChange("pageDescription", e.target.value)}
              disabled={!isEditing}
              rows={3}
              fullWidth
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}