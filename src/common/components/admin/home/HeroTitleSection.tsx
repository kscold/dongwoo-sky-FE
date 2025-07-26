import React from "react"
import "../../../../../styles/admin/admin-home-page.css"

interface HeroTitleSectionProps {
  currentTitle: any
  isEditing: boolean
  onUpdateTitle: (field: string, value: any) => void
}

export const HeroTitleSection: React.FC<HeroTitleSectionProps> = ({
  currentTitle,
  isEditing,
  onUpdateTitle,
}) => {
  if (!isEditing) {
    return (
      <div className="titleContainer">
        <div className="field">
          <label className="label">메인 타이틀</label>
          <div className="value">{currentTitle?.main || "타이틀 없음"}</div>
        </div>
        <div className="field">
          <label className="label">서브 타이틀</label>
          <div className="value">{currentTitle?.sub || "서브타이틀 없음"}</div>
        </div>
        <div className="field">
          <label className="label">강조 텍스트</label>
          <div className="value">{currentTitle?.highlight || "강조 텍스트 없음"}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="titleContainer">
      <div className="field">
        <label className="label">메인 타이틀</label>
        <input
          type="text"
          className="input"
          value={currentTitle?.main || ""}
          onChange={(e) => onUpdateTitle("main", e.target.value)}
          placeholder="메인 타이틀을 입력하세요"
        />
      </div>

      <div className="field">
        <label className="label">서브 타이틀</label>
        <input
          type="text"
          className="input"
          value={currentTitle?.sub || ""}
          onChange={(e) => onUpdateTitle("sub", e.target.value)}
          placeholder="서브 타이틀을 입력하세요"
        />
      </div>

      <div className="field">
        <label className="label">강조 텍스트</label>
        <input
          type="text"
          className="input"
          value={currentTitle?.highlight || ""}
          onChange={(e) => onUpdateTitle("highlight", e.target.value)}
          placeholder="강조할 텍스트를 입력하세요"
        />
      </div>

      <div className="field">
        <label className="label">타이틀 크기</label>
        <select
          className="input"
          value={currentTitle?.size || "large"}
          onChange={(e) => onUpdateTitle("size", e.target.value)}
        >
          <option value="small">작게</option>
          <option value="medium">보통</option>
          <option value="large">크게</option>
          <option value="xl">매우 크게</option>
        </select>
      </div>

      <div className="field">
        <label className="label">타이틀 색상</label>
        <select
          className="input"
          value={currentTitle?.color || "default"}
          onChange={(e) => onUpdateTitle("color", e.target.value)}
        >
          <option value="default">기본색</option>
          <option value="primary">메인 컬러</option>
          <option value="secondary">보조 컬러</option>
          <option value="white">흰색</option>
          <option value="dark">어두운색</option>
        </select>
      </div>
    </div>
  )
}