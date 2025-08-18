import React from "react"
import * as styles from "../styles"

interface HeroSectionProps {
  title: string
  subtitle: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
    </section>
  )
}