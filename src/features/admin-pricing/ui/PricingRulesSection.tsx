import React from "react"
import { Card, CardHeader, CardBody, CardTitle, CardDescription } from "../../../common/components/molecules"
import { CalculationRule } from "../../../api/contact"
import * as styles from "./pricing-rules-section.css"

interface PricingRulesSectionProps {
  rules: CalculationRule[]
  onAddRule: () => void
  onRemoveRule: (index: number) => void
  onUpdateRule: (index: number, field: keyof CalculationRule, value: any) => void
}

export const PricingRulesSection: React.FC<PricingRulesSectionProps> = ({
  rules,
  onAddRule,
  onRemoveRule,
  onUpdateRule
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>요금 계산 규칙</CardTitle>
        <CardDescription>
          특수 상황에 적용되는 할증 규칙을 설정합니다.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <div className={styles.rulesContainer}>
          {rules.map((rule, index) => (
            <div key={index} className={styles.ruleItem}>
              <div className={styles.ruleFields}>
                <input
                  type="text"
                  value={rule.name}
                  onChange={(e) => onUpdateRule(index, "name", e.target.value)}
                  placeholder="규칙 이름"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={rule.description}
                  onChange={(e) => onUpdateRule(index, "description", e.target.value)}
                  placeholder="설명"
                  className={styles.input}
                />
                <input
                  type="number"
                  value={rule.multiplier}
                  onChange={(e) => onUpdateRule(index, "multiplier", Number(e.target.value))}
                  step="0.1"
                  min="1"
                  placeholder="배율"
                  className={styles.numberInput}
                />
                <button
                  onClick={() => onRemoveRule(index)}
                  className={styles.removeButton}
                >
                  삭제
                </button>
              </div>
              <div className={styles.conditionsField}>
                <label className={styles.label}>적용 조건:</label>
                <input
                  type="text"
                  value={rule.conditions.join(", ")}
                  onChange={(e) => 
                    onUpdateRule(index, "conditions", e.target.value.split(",").map(c => c.trim()))
                  }
                  placeholder="조건1, 조건2 (쉼표로 구분)"
                  className={styles.input}
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={onAddRule} className={styles.addButton}>
          + 규칙 추가
        </button>
      </CardBody>
    </Card>
  )
}