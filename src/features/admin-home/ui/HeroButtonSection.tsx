import React from "react"
import { HomeSettings } from "../../../types/home"
import * as styles from "./hero-button.css"

interface HeroButtonSectionProps {
  currentButtons: HomeSettings['heroButtons']
  isEditing: boolean
  onUpdateButton: (field: keyof HomeSettings['heroButtons'], value: string) => void
}

export const HeroButtonSection: React.FC<HeroButtonSectionProps> = ({
  currentButtons,
  isEditing,
  onUpdateButton
}) => {
  const handleInputChange = (field: keyof HomeSettings['heroButtons']) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onUpdateButton(field, e.target.value)
    }

  return (
    <div className={styles.formSection}>
      <div className={styles.field}>
        <label className={styles.label}>메인 버튼 텍스트</label>
        {isEditing ? (
          <input
            type="text"
            value={currentButtons?.primaryButtonText || ""}
            onChange={handleInputChange('primaryButtonText')}
            className={styles.input}
            placeholder="메인 버튼 텍스트를 입력하세요 (예: 🏗️ 무료 견적 받기)"
          />
        ) : (
          <div className={styles.value}>
            {currentButtons?.primaryButtonText || "메인 버튼 텍스트 없음"}
          </div>
        )}
      </div>
      
      <div className={styles.field}>
        <label className={styles.label}>메인 버튼 링크</label>
        {isEditing ? (
          <input
            type="text"
            value={currentButtons?.primaryButtonLink || ""}
            onChange={handleInputChange('primaryButtonLink')}
            className={styles.input}
            placeholder="메인 버튼 링크를 입력하세요 (예: /contact)"
          />
        ) : (
          <div className={styles.value}>
            {currentButtons?.primaryButtonLink || "메인 버튼 링크 없음"}
          </div>
        )}
      </div>
      
      <div className={styles.field}>
        <label className={styles.label}>서브 버튼 텍스트</label>
        {isEditing ? (
          <input
            type="text"
            value={currentButtons?.secondaryButtonText || ""}
            onChange={handleInputChange('secondaryButtonText')}
            className={styles.input}
            placeholder="서브 버튼 텍스트를 입력하세요 (예: 📋 서비스 안내)"
          />
        ) : (
          <div className={styles.value}>
            {currentButtons?.secondaryButtonText || "서브 버튼 텍스트 없음"}
          </div>
        )}
      </div>
      
      <div className={styles.field}>
        <label className={styles.label}>서브 버튼 링크</label>
        {isEditing ? (
          <input
            type="text"
            value={currentButtons?.secondaryButtonLink || ""}
            onChange={handleInputChange('secondaryButtonLink')}
            className={styles.input}
            placeholder="서브 버튼 링크를 입력하세요 (예: /service-guide)"
          />
        ) : (
          <div className={styles.value}>
            {currentButtons?.secondaryButtonLink || "서브 버튼 링크 없음"}
          </div>
        )}
      </div>
    </div>
  )
}