import React from "react"
import { Input } from "../../../../common/components/atoms"
import { Card, CardHeader, CardBody, CardTitle, CardDescription, FormGroup } from "../../../../common/components/molecules"
import { UpdateContactSettingsDto } from "../../../../api/contact"
import * as styles from "../../../../styles/admin/admin-contact-settings.css"

interface CompanyInfoSectionProps {
  formData: UpdateContactSettingsDto
  onInputChange: (field: keyof UpdateContactSettingsDto, value: any) => void
  isEditing: boolean
}

export const CompanyInfoSection: React.FC<CompanyInfoSectionProps> = ({
  formData,
  onInputChange,
  isEditing,
}) => {
  return (
    <Card variant="admin">
      <CardHeader>
        <CardTitle>회사 정보</CardTitle>
        <CardDescription>회사의 기본 정보를 설정합니다.</CardDescription>
      </CardHeader>
      <CardBody>
        <div className={styles.formGrid}>
          <FormGroup>
            <Input
              label="회사명"
              variant="admin"
              value={formData.businessName || ""}
              onChange={(e) => onInputChange("businessName", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="주소"
              variant="admin"
              value={formData.businessAddress || ""}
              onChange={(e) => onInputChange("businessAddress", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="전화번호"
              variant="admin"
              value={formData.businessPhone || ""}
              onChange={(e) => onInputChange("businessPhone", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="이메일"
              type="email"
              variant="admin"
              value={formData.businessEmail || ""}
              onChange={(e) => onInputChange("businessEmail", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="팩스"
              variant="admin"
              value={formData.businessFax || ""}
              onChange={(e) => onInputChange("businessFax", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
          <FormGroup>
            <Input
              label="운영시간"
              variant="admin"
              value={formData.operatingHours || ""}
              onChange={(e) => onInputChange("operatingHours", e.target.value)}
              disabled={!isEditing}
              fullWidth
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}