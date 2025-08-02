import React from "react"
import * as styles from "./section-wrapper.css"

interface SectionWrapperProps {
  title: string
  children: React.ReactNode
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  )
}