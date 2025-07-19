import React from "react"
import { HomeSettings } from "../../../../types/home"
import * as styles from "../../../../styles/admin/admin-home-page.css"

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
      <div className={styles.formGroup}>
        <label className={styles.label}>Primary Button Text</label>
        <input
          type="text"
          value={currentButtons?.primaryButtonText || ""}
          onChange={handleInputChange('primaryButtonText')}
          className={styles.input}
          placeholder="Primary Button Text를 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Primary Button Link</label>
        <input
          type="url"
          value={currentButtons?.primaryButtonLink || ""}
          onChange={handleInputChange('primaryButtonLink')}
          className={styles.input}
          placeholder="Primary Button Link를 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Secondary Button Text</label>
        <input
          type="text"
          value={currentButtons?.secondaryButtonText || ""}
          onChange={handleInputChange('secondaryButtonText')}
          className={styles.input}
          placeholder="Secondary Button Text를 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Secondary Button Link</label>
        <input
          type="url"
          value={currentButtons?.secondaryButtonLink || ""}
          onChange={handleInputChange('secondaryButtonLink')}
          className={styles.input}
          placeholder="Secondary Button Link를 입력하세요"
          disabled={!isEditing}
        />
      </div>
    </div>
  )
}