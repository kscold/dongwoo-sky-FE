import React from "react"
import { Input, Textarea } from "../../../../common/components/atoms"
import { Card, CardHeader, CardBody, CardTitle, CardDescription, FormGroup } from "../../../../common/components/molecules"
import { UpdateContactSettingsDto } from "../../../../api/contact"
import * as styles from "../../../../styles/admin/admin-contact-settings.css"

interface PricingServiceSectionProps {
  formData: UpdateContactSettingsDto
  onInputChange: (field: keyof UpdateContactSettingsDto, value: any) => void
  isEditing: boolean
}

export const PricingServiceSection: React.FC<PricingServiceSectionProps> = ({
  formData,
  onInputChange,
  isEditing,
}) => {
  return (
    <Card variant="admin">
      <CardHeader>
        <CardTitle>요금 서비스 설정</CardTitle>
        <CardDescription>요금 견적 서비스를 관리합니다.</CardDescription>
      </CardHeader>
      <CardBody>
        <div className={styles.formGrid}>
          <FormGroup>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={formData.pricingService?.enabled || false}
                onChange={(e) =>
                  onInputChange("pricingService", {
                    ...formData.pricingService,
                    enabled: e.target.checked
                  })
                }
                className={styles.checkbox}
                disabled={!isEditing}
              />
              요금 문의 서비스 활성화
            </label>
            <p className={styles.helpText}>
              활성화하면 문의 폼에서 견적 계산 기능을 사용할 수 있습니다.
            </p>
          </FormGroup>

          <FormGroup>
            <Input
              label="서비스 제목"
              variant="admin"
              value={formData.pricingService?.title || ""}
              onChange={(e) =>
                onInputChange("pricingService", {
                  ...formData.pricingService,
                  title: e.target.value
                })
              }
              disabled={!isEditing}
              placeholder="예: 장비 렌탈 견적 서비스"
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <Textarea
              label="서비스 설명"
              variant="admin"
              value={formData.pricingService?.description || ""}
              onChange={(e) =>
                onInputChange("pricingService", {
                  ...formData.pricingService,
                  description: e.target.value
                })
              }
              disabled={!isEditing}
              placeholder="서비스 설명을 입력하세요"
              rows={3}
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <Textarea
              label="면책 조항"
              variant="admin"
              value={formData.pricingService?.disclaimerText || ""}
              onChange={(e) =>
                onInputChange("pricingService", {
                  ...formData.pricingService,
                  disclaimerText: e.target.value
                })
              }
              disabled={!isEditing}
              placeholder="견적은 참고용이며, 실제 요금은 현장 상황에 따라 달라질 수 있습니다."
              rows={3}
              fullWidth
            />
          </FormGroup>
        </div>
      </CardBody>
    </Card>
  )
}