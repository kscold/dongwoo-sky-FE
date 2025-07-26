import React from "react"
import "../../../../../styles/admin/admin-home-page.css"

interface HeroButtonSectionProps {
  currentButtons: any
  isEditing: boolean
  onUpdateButton: (field: string, value: any) => void
}

export const HeroButtonSection: React.FC<HeroButtonSectionProps> = ({
  currentButtons,
  isEditing,
  onUpdateButton,
}) => {
  if (!isEditing) {
    return (
      <div className="buttonContainer">
        <div className="buttonGroup">
          <h3 className="groupTitle">메인 버튼</h3>
          <div className="field">
            <label className="label">버튼 텍스트</label>
            <div className="value">{currentButtons?.primary?.text || "버튼 텍스트 없음"}</div>
          </div>
          <div className="field">
            <label className="label">버튼 링크</label>
            <div className="value">{currentButtons?.primary?.link || "링크 없음"}</div>
          </div>
        </div>

        <div className="buttonGroup">
          <h3 className="groupTitle">보조 버튼</h3>
          <div className="field">
            <label className="label">버튼 텍스트</label>
            <div className="value">{currentButtons?.secondary?.text || "버튼 텍스트 없음"}</div>
          </div>
          <div className="field">
            <label className="label">버튼 링크</label>
            <div className="value">{currentButtons?.secondary?.link || "링크 없음"}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="buttonContainer">
      <div className="buttonGroup">
        <h3 className="groupTitle">메인 버튼</h3>
        <div className="field">
          <label className="label">버튼 텍스트</label>
          <input
            type="text"
            className="input"
            value={currentButtons?.primary?.text || ""}
            onChange={(e) => onUpdateButton("primary.text", e.target.value)}
            placeholder="메인 버튼 텍스트를 입력하세요"
          />
        </div>
        <div className="field">
          <label className="label">버튼 링크</label>
          <input
            type="url"
            className="input"
            value={currentButtons?.primary?.link || ""}
            onChange={(e) => onUpdateButton("primary.link", e.target.value)}
            placeholder="https://example.com"
          />
        </div>
        <div className="field">
          <label className="label">버튼 스타일</label>
          <select
            className="input"
            value={currentButtons?.primary?.style || "primary"}
            onChange={(e) => onUpdateButton("primary.style", e.target.value)}
          >
            <option value="primary">메인 스타일</option>
            <option value="secondary">보조 스타일</option>
            <option value="outline">테두리만</option>
            <option value="ghost">투명</option>
          </select>
        </div>
        <div className="field">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={currentButtons?.primary?.enabled || false}
              onChange={(e) => onUpdateButton("primary.enabled", e.target.checked)}
            />
            버튼 활성화
          </label>
        </div>
      </div>

      <div className="buttonGroup">
        <h3 className="groupTitle">보조 버튼</h3>
        <div className="field">
          <label className="label">버튼 텍스트</label>
          <input
            type="text"
            className="input"
            value={currentButtons?.secondary?.text || ""}
            onChange={(e) => onUpdateButton("secondary.text", e.target.value)}
            placeholder="보조 버튼 텍스트를 입력하세요"
          />
        </div>
        <div className="field">
          <label className="label">버튼 링크</label>
          <input
            type="url"
            className="input"
            value={currentButtons?.secondary?.link || ""}
            onChange={(e) => onUpdateButton("secondary.link", e.target.value)}
            placeholder="https://example.com"
          />
        </div>
        <div className="field">
          <label className="label">버튼 스타일</label>
          <select
            className="input"
            value={currentButtons?.secondary?.style || "outline"}
            onChange={(e) => onUpdateButton("secondary.style", e.target.value)}
          >
            <option value="primary">메인 스타일</option>
            <option value="secondary">보조 스타일</option>
            <option value="outline">테두리만</option>
            <option value="ghost">투명</option>
          </select>
        </div>
        <div className="field">
          <label className="checkboxLabel">
            <input
              type="checkbox"
              checked={currentButtons?.secondary?.enabled || false}
              onChange={(e) => onUpdateButton("secondary.enabled", e.target.checked)}
            />
            버튼 활성화
          </label>
        </div>
      </div>
    </div>
  )
}