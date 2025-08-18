import React from "react"
import { Card, CardHeader, CardBody, CardTitle, CardDescription, FormGroup } from "../../../common/components/molecules"
import { Input, Textarea } from "../../../common/components/atoms"
import * as styles from "./pricing-service-toggle.css"

interface PricingServiceToggleProps {
  enabled: boolean
  title: string
  description: string
  disclaimerText: string
  onChange: (field: keyof any, value: any) => void
}

export const PricingServiceToggle: React.FC<PricingServiceToggleProps> = ({
  enabled,
  title,
  description,
  disclaimerText,
  onChange
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>견적 서비스 설정</CardTitle>
        <CardDescription>
          온라인 견적 기능 활성화 여부와 기본 정보를 설정합니다.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <FormGroup>
          <label className={styles.label}>
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => onChange("enabled", e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>견적 기능 활성화</span>
          </label>
        </FormGroup>

        {enabled && (
          <>
            <FormGroup>
              <label className={styles.label}>서비스 제목</label>
              <Input
                value={title}
                onChange={(e) => onChange("title", e.target.value)}
                placeholder="장비 렌탈 견적 서비스"
              />
            </FormGroup>

            <FormGroup>
              <label className={styles.label}>서비스 설명</label>
              <Textarea
                value={description}
                onChange={(e) => onChange("description", e.target.value)}
                placeholder="서비스에 대한 설명을 입력하세요"
                rows={3}
              />
            </FormGroup>

            <FormGroup>
              <label className={styles.label}>면책 조항</label>
              <Textarea
                value={disclaimerText}
                onChange={(e) => onChange("disclaimerText", e.target.value)}
                placeholder="견적은 참고용이며..."
                rows={3}
              />
            </FormGroup>
          </>
        )}
      </CardBody>
    </Card>
  )
}