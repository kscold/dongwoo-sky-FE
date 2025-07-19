import React from "react"
import { HomeSettings } from "../../../../types/home"
import * as styles from "../../../../styles/admin/admin-home-page.css"

interface HeroTitleSectionProps {
  currentTitle: HomeSettings['heroTitle']
  isEditing: boolean
  onUpdateTitle: (field: keyof HomeSettings['heroTitle'], value: string) => void
}

export const HeroTitleSection: React.FC<HeroTitleSectionProps> = ({
  currentTitle,
  isEditing,
  onUpdateTitle
}) => {
  const handleInputChange = (field: keyof HomeSettings['heroTitle']) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onUpdateTitle(field, e.target.value)
    }

  return (
    <div className={styles.formSection}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Pre Title</label>
        <input
          type="text"
          value={currentTitle?.preTitle || ""}
          onChange={handleInputChange('preTitle')}
          className={styles.input}
          placeholder="Pre Title을 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Main Title</label>
        <input
          type="text"
          value={currentTitle?.mainTitle || ""}
          onChange={handleInputChange('mainTitle')}
          className={styles.input}
          placeholder="Main Title을 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Post Title</label>
        <input
          type="text"
          value={currentTitle?.postTitle || ""}
          onChange={handleInputChange('postTitle')}
          className={styles.input}
          placeholder="Post Title을 입력하세요"
          disabled={!isEditing}
        />
      </div>
    </div>
  )
}