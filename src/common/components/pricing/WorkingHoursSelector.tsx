import React from "react"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

interface WorkingHoursSelectorProps {
  selectedEquipment: Equipment | undefined
  workingHours: number
  onWorkingHoursChange: (hours: number) => void
  settings: {
    timeSectionTitle: string
    timeSectionDescription: string
    ctaButtonText?: string
    ctaSubtext?: string
  }
  timeSelectionLabel?: string
  hourUnit?: string
  onContactClick?: () => void
}

export const WorkingHoursSelector: React.FC<WorkingHoursSelectorProps> = ({
  selectedEquipment,
  workingHours,
  onWorkingHoursChange,
  settings,
  timeSelectionLabel = "선택한 작업 시간",
  hourUnit = "시간",
  onContactClick,
}) => {
  const minHours = selectedEquipment?.minHours || 1
  const maxHours = selectedEquipment?.maxHours || 12

  return (
    <div className={styles.timeSelector}>
      <div className={styles.timeDisplay}>
        <span className={styles.timeLabel}>{timeSelectionLabel}</span>
        <span className={styles.timeValue}>
          {workingHours}
          {hourUnit}
        </span>
      </div>

      <div className={styles.timeSlider}>
        <input
          type="range"
          min={minHours}
          max={maxHours}
          step="1"
          value={workingHours}
          onChange={(e) => onWorkingHoursChange(parseInt(e.target.value))}
          className={styles.slider}
          style={
            {
              "--value": `${
                ((workingHours - minHours) / (maxHours - minHours)) * 100
              }%`,
            } as React.CSSProperties
          }
        />
        <div className={styles.sliderLabels}>
          <span>
            {minHours}
            {hourUnit}
          </span>
          <span>
            {maxHours}
            {hourUnit}
          </span>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <button className={styles.ctaButton} onClick={onContactClick}>
          {settings.ctaButtonText || "지금 전화하기"}
        </button>
        <p className={styles.ctaSubtext}>
          {settings.ctaSubtext || "전문 상담사가 친절하게 안내해드립니다"}
        </p>
      </div>
    </div>
  )
}
