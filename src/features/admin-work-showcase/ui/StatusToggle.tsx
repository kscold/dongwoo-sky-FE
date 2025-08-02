import * as styles from "./status-toggle.css"

interface StatusToggleProps {
  isActive: boolean
  onChange: () => void
}

export function StatusToggle({ isActive, onChange }: StatusToggleProps) {
  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={isActive}
        onChange={onChange}
        className={styles.input}
      />
      <span className={`${styles.slider} ${isActive ? styles.sliderActive : ""}`} />
      <span className={`${styles.label} ${isActive ? styles.labelActive : ""}`}>
        {isActive ? "활성" : "비활성"}
      </span>
    </label>
  )
}