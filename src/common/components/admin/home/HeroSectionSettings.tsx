import React from "react"
import "../../../../../styles/admin/admin-home-page.css"

interface HeroSectionSettingsProps {
  heroSection: any
  isEditing: boolean
  onUpdateHeroSection: (updates: any) => void
}

export const HeroSectionSettings: React.FC<HeroSectionSettingsProps> = ({
  heroSection,
  isEditing,
  onUpdateHeroSection,
}) => {
  if (!isEditing) {
    return (
      <div className="settingsContainer">
        <div className="field">
          <label className="label">백그라운드 색상</label>
          <div className="value">{heroSection?.backgroundColor || "기본값"}</div>
        </div>
        <div className="field">
          <label className="label">텍스트 정렬</label>
          <div className="value">{heroSection?.textAlign || "중앙"}</div>
        </div>
        <div className="field">
          <label className="label">높이 설정</label>
          <div className="value">{heroSection?.height || "자동"}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="settingsContainer">
      <div className="field">
        <label className="label">백그라운드 색상</label>
        <select
          className="input"
          value={heroSection?.backgroundColor || "default"}
          onChange={(e) => onUpdateHeroSection({ backgroundColor: e.target.value })}
        >
          <option value="default">기본값</option>
          <option value="primary">메인 컬러</option>
          <option value="secondary">보조 컬러</option>
          <option value="dark">다크</option>
          <option value="light">라이트</option>
        </select>
      </div>

      <div className="field">
        <label className="label">텍스트 정렬</label>
        <select
          className="input"
          value={heroSection?.textAlign || "center"}
          onChange={(e) => onUpdateHeroSection({ textAlign: e.target.value })}
        >
          <option value="left">왼쪽 정렬</option>
          <option value="center">중앙 정렬</option>
          <option value="right">오른쪽 정렬</option>
        </select>
      </div>

      <div className="field">
        <label className="label">높이 설정</label>
        <select
          className="input"
          value={heroSection?.height || "auto"}
          onChange={(e) => onUpdateHeroSection({ height: e.target.value })}
        >
          <option value="auto">자동</option>
          <option value="small">작게 (400px)</option>
          <option value="medium">보통 (600px)</option>
          <option value="large">크게 (800px)</option>
          <option value="full">전체 화면</option>
        </select>
      </div>

      <div className="field">
        <label className="label">오버레이 투명도</label>
        <input
          type="range"
          className="input"
          min="0"
          max="100"
          value={heroSection?.overlayOpacity || 30}
          onChange={(e) => onUpdateHeroSection({ overlayOpacity: parseInt(e.target.value) })}
        />
        <div className="value">{heroSection?.overlayOpacity || 30}%</div>
      </div>

      <div className="field">
        <label className="label">애니메이션 효과</label>
        <div className="checkboxGroup">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={heroSection?.enableFadeIn || false}
              onChange={(e) => onUpdateHeroSection({ enableFadeIn: e.target.checked })}
            />
            페이드인 효과
          </label>
          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={heroSection?.enableSlideUp || false}
              onChange={(e) => onUpdateHeroSection({ enableSlideUp: e.target.checked })}
            />
            슬라이드 업 효과
          </label>
        </div>
      </div>
    </div>
  )
}