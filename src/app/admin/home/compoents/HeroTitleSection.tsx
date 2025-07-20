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
      <div className={styles.field}>
        <label className={styles.label}>메인 제목 (상단)</label>
        {isEditing ? (
          <input
            type="text"
            value={currentTitle?.preTitle || ""}
            onChange={handleInputChange('preTitle')}
            className={styles.input}
            placeholder="상단 제목을 입력하세요 (예: 하늘 위 모든 솔루션)"
          />
        ) : (
          <div className={styles.value}>
            {currentTitle?.preTitle || "상단 제목 없음"}
          </div>
        )}
      </div>
      
      <div className={styles.field}>
        <label className={styles.label}>메인 제목 (중앙)</label>
        {isEditing ? (
          <input
            type="text"
            value={currentTitle?.mainTitle || ""}
            onChange={handleInputChange('mainTitle')}
            className={styles.input}
            placeholder="중앙 제목을 입력하세요 (예: 안전하고 신뢰할 수 있는 중장비 렌탈 서비스)"
          />
        ) : (
          <div className={styles.value}>
            {currentTitle?.mainTitle || "중앙 제목 없음"}
          </div>
        )}
      </div>
      
      <div className={styles.field}>
        <label className={styles.label}>메인 제목 (하단)</label>
        {isEditing ? (
          <textarea
            value={currentTitle?.postTitle || ""}
            onChange={(e) => onUpdateTitle('postTitle', e.target.value)}
            className={styles.textarea}
            placeholder="하단 제목을 입력하세요 (예: 최신 스카이 장비로 어떤 높이의 작업이든 신속하고 안전하게!)"
            rows={3}
          />
        ) : (
          <div className={styles.value}>
            {currentTitle?.postTitle || "하단 제목 없음"}
          </div>
        )}
      </div>
    </div>
  )
}