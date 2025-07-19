import React from "react"
import { HomeSettings } from "../../../../types/home"
import * as styles from "../../../../styles/admin/admin-home-page.css"

interface HeroSectionSettingsProps {
  heroSection: HomeSettings['heroSection']
  isEditing: boolean
  onUpdateHeroSection: (updates: Partial<HomeSettings['heroSection']>) => void
}

export const HeroSectionSettings: React.FC<HeroSectionSettingsProps> = ({
  heroSection,
  isEditing,
  onUpdateHeroSection
}) => {
  const handleInputChange = (field: keyof HomeSettings['heroSection']) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdateHeroSection({ [field]: e.target.value })
    }

  return (
    <div className={styles.formSection}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Company Name</label>
        <input
          type="text"
          value={heroSection?.companyName || ""}
          onChange={handleInputChange('companyName')}
          className={styles.input}
          placeholder="회사명을 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Business Type</label>
        <input
          type="text"
          value={heroSection?.businessType || ""}
          onChange={handleInputChange('businessType')}
          className={styles.input}
          placeholder="사업 유형을 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Business Description</label>
        <textarea
          value={heroSection?.businessDescription || ""}
          onChange={handleInputChange('businessDescription')}
          className={styles.textarea}
          placeholder="사업 설명을 입력하세요"
          disabled={!isEditing}
          rows={3}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Location Info</label>
        <input
          type="text"
          value={heroSection?.locationInfo || ""}
          onChange={handleInputChange('locationInfo')}
          className={styles.input}
          placeholder="위치 정보를 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Operating Hours</label>
        <input
          type="text"
          value={heroSection?.operatingHours || ""}
          onChange={handleInputChange('operatingHours')}
          className={styles.input}
          placeholder="운영 시간을 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Contact Info</label>
        <input
          type="text"
          value={heroSection?.contactInfo || ""}
          onChange={handleInputChange('contactInfo')}
          className={styles.input}
          placeholder="연락처 정보를 입력하세요"
          disabled={!isEditing}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>Additional Info</label>
        <textarea
          value={heroSection?.additionalInfo || ""}
          onChange={handleInputChange('additionalInfo')}
          className={styles.textarea}
          placeholder="추가 정보를 입력하세요"
          disabled={!isEditing}
          rows={3}
        />
      </div>
    </div>
  )
}