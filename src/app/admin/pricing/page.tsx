"use client"

import React from "react"
import { Button } from "../../../common/components/atoms"
import { Card, CardHeader, CardBody, CardTitle, CardDescription } from "../../../common/components/molecules"
import ProtectedRoute from "../../../common/auth/ProtectedRoute"
import {
  PricingServiceToggle,
  EquipmentPricingCard,
  PricingRulesSection,
  usePricingManagement
} from "../../../features/admin-pricing"
import * as styles from "../../../features/admin-pricing/ui/page.css"

function PricingManagementContent() {
  const {
    equipments,
    pricingConfig,
    editingEquipment,
    setEditingEquipment,
    isLoading,
    isSaving,
    handleConfigChange,
    handleEquipmentPricingChange,
    handleSave,
    handleAddRule,
    handleRemoveRule,
    handleUpdateRule
  } = usePricingManagement()

  if (isLoading) {
    return <div className={styles.loadingContainer}>로딩 중...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>요금 관리</h1>
        <p className={styles.subtitle}>
          장비별 요금과 견적 서비스 설정을 관리합니다.
        </p>
      </div>

      <PricingServiceToggle
        enabled={pricingConfig.enabled}
        title={pricingConfig.title}
        description={pricingConfig.description}
        disclaimerText={pricingConfig.disclaimerText}
        onChange={(field, value) => handleConfigChange(field as keyof typeof pricingConfig, value)}
      />

      {pricingConfig.enabled && (
        <>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>장비별 요금 설정</h2>
            <div className={styles.equipmentGrid}>
              {pricingConfig.equipmentPricing.map((pricing) => {
                const equipment = equipments.find(eq => eq.id === pricing.equipmentId)
                if (!equipment) return null

                return (
                  <EquipmentPricingCard
                    key={pricing.equipmentId}
                    pricing={pricing}
                    isEditing={editingEquipment === pricing.equipmentId}
                    imageSrc={equipment.imageUrl}
                    onEdit={() => setEditingEquipment(pricing.equipmentId)}
                    onCancel={() => setEditingEquipment(null)}
                    onChange={(field, value) => 
                      handleEquipmentPricingChange(pricing.equipmentId, field, value)
                    }
                  />
                )
              })}
            </div>
          </div>

          <PricingRulesSection
            rules={pricingConfig.baseCalculationRules}
            onAddRule={handleAddRule}
            onRemoveRule={handleRemoveRule}
            onUpdateRule={handleUpdateRule}
          />
        </>
      )}

      <div className={styles.actionButtons}>
        <Button
          variant="admin"
          onClick={handleSave}
          loading={isSaving}
          size="lg"
        >
          설정 저장
        </Button>
      </div>
    </div>
  )
}

export default function PricingManagementPage() {
  return (
    <ProtectedRoute>
      <PricingManagementContent />
    </ProtectedRoute>
  )
}