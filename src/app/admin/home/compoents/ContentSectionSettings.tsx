import React from "react"
import { HomeSettings } from "../../../../types/home"
import * as styles from "../../../../styles/admin/admin-home-page.css"

interface ContentSectionSettingsProps {
  contentSettings: HomeSettings['contentSettings']
  isEditing: boolean
  onUpdateContentSettings: (updatedSettings: HomeSettings['contentSettings']) => void
}

export const ContentSectionSettings: React.FC<ContentSectionSettingsProps> = ({
  contentSettings,
  isEditing,
  onUpdateContentSettings
}) => {
  const handleSectionUpdate = (index: number, field: string, value: any) => {
    if (!contentSettings) return
    
    const updatedSettings = [...contentSettings]
    updatedSettings[index] = {
      ...updatedSettings[index],
      [field]: value
    }
    onUpdateContentSettings(updatedSettings)
  }

  const handleAddSection = () => {
    const newSection = {
      key: `section-${Date.now()}`,
      title: "",
      description: "",
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    const updatedSettings = contentSettings ? [...contentSettings, newSection] : [newSection]
    onUpdateContentSettings(updatedSettings)
  }

  const handleRemoveSection = (index: number) => {
    if (!contentSettings) return
    
    const updatedSettings = contentSettings.filter((_, i) => i !== index)
    onUpdateContentSettings(updatedSettings)
  }

  return (
    <div className={styles.formSection}>
      <div className={styles.field}>
        <label className={styles.label}>홈페이지 컨텐츠 섹션</label>
        <p className={styles.value} style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
          작업자 자랑거리, 고객 리뷰 등 홈페이지에 표시될 섹션들을 관리합니다.
        </p>
        
        {contentSettings?.map((section, index) => (
          <div key={section.key || index} className={styles.formGroup} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div className={styles.field}>
              <label className={styles.label}>섹션 키</label>
              {isEditing ? (
                <input
                  type="text"
                  value={section.key || ""}
                  onChange={(e) => handleSectionUpdate(index, 'key', e.target.value)}
                  className={styles.input}
                  placeholder="예: section-1, work-showcase"
                />
              ) : (
                <div className={styles.value}>{section.key || "키 없음"}</div>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>섹션 제목</label>
              {isEditing ? (
                <input
                  type="text"
                  value={section.title || ""}
                  onChange={(e) => handleSectionUpdate(index, 'title', e.target.value)}
                  className={styles.input}
                  placeholder="예: 🏆작업자 자랑거리, 💬고객 리뷰"
                />
              ) : (
                <div className={styles.value}>{section.title || "제목 없음"}</div>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>섹션 설명</label>
              {isEditing ? (
                <textarea
                  value={section.description || ""}
                  onChange={(e) => handleSectionUpdate(index, 'description', e.target.value)}
                  className={styles.textarea}
                  placeholder="예: 현장에서의 전문성과 성과를 확인해보세요"
                  rows={2}
                />
              ) : (
                <div className={styles.value}>{section.description || "설명 없음"}</div>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>활성화 상태</label>
              {isEditing ? (
                <div className={styles.toggleContainer}>
                  <label className={styles.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={section.isActive !== false}
                      onChange={(e) => handleSectionUpdate(index, 'isActive', e.target.checked)}
                      className={styles.toggleInput}
                    />
                    <span className={`${styles.slider} ${section.isActive !== false ? styles.toggleActive : ''}`}></span>
                  </label>
                  <span className={styles.toggleLabel}>
                    {section.isActive !== false ? "활성화" : "비활성화"}
                  </span>
                </div>
              ) : (
                <div className={`${styles.statusBadge} ${section.isActive !== false ? styles.statusActive : styles.statusInactive}`}>
                  {section.isActive !== false ? "활성화" : "비활성화"}
                </div>
              )}
            </div>

            {isEditing && (
              <div className={styles.field}>
                <button
                  type="button"
                  onClick={() => handleRemoveSection(index)}
                  className={styles.deleteButton}
                  style={{ 
                    position: 'relative', 
                    top: 'auto', 
                    right: 'auto', 
                    width: 'auto', 
                    height: 'auto', 
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem'
                  }}
                >
                  섹션 삭제
                </button>
              </div>
            )}
          </div>
        ))}

        {isEditing && (
          <button
            type="button"
            onClick={handleAddSection}
            className={styles.uploadButton}
            style={{ marginTop: '1rem' }}
          >
            새 섹션 추가
          </button>
        )}
      </div>
    </div>
  )
}