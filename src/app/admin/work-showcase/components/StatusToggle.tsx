import React from "react"
import * as commonStyles from "../../../../styles/admin/admin-notice.css"

interface StatusToggleProps {
  isActive: boolean
  onToggle: () => void
}

export const StatusToggle: React.FC<StatusToggleProps> = ({
  isActive,
  onToggle,
}) => {
  return (
    <div className={commonStyles.statusContainer}>
      <span
        className={
          isActive
            ? commonStyles.publishedBadge
            : commonStyles.unpublishedBadge
        }
      >
        {isActive ? "활성화" : "비활성화"}
      </span>
      <label className={commonStyles.toggle}>
        <input
          type="checkbox"
          checked={isActive || false}
          onChange={onToggle}
          className={commonStyles.toggleInput}
        />
        <span
          className={`${commonStyles.slider} ${
            isActive ? commonStyles.sliderChecked : ""
          }`}
        ></span>
      </label>
    </div>
  )
}