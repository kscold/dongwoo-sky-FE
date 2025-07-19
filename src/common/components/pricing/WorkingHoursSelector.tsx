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
  }
  timeSelectionLabel?: string
  hourUnit?: string
}

export const WorkingHoursSelector: React.FC<WorkingHoursSelectorProps> = ({
  selectedEquipment,
  workingHours,
  onWorkingHoursChange,
  settings,
  timeSelectionLabel = "선택한 작업 시간",
  hourUnit = "시간"
}) => {
  const minHours = selectedEquipment?.minHours || 1
  const maxHours = selectedEquipment?.maxHours || 12

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.stepNumber}>2</span>
          {settings.timeSectionTitle}
        </h2>
        <p className={styles.sectionDescription}>
          {minHours}
          {settings.timeSectionDescription.replace(
            "시간부터 시간까지",
            `시간부터 ${maxHours}시간까지`
          )}
        </p>
      </div>

      <div className={styles.timeSelector}>
        <div className={styles.timeDisplay}>
          <span className={styles.timeLabel}>{timeSelectionLabel}</span>
          <span className={styles.timeValue}>
            {workingHours}{hourUnit}
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
            style={{
              "--value": `${((workingHours - minHours) / (maxHours - minHours)) * 100}%`
            } as React.CSSProperties}
          />
          <div className={styles.sliderLabels}>
            <span>{minHours}{hourUnit}</span>
            <span>{maxHours}{hourUnit}</span>
          </div>
        </div>
      </div>
    </div>
  )
}