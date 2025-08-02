"use client"

import React from "react"
import * as styles from "../../styles"

interface PricingHeroProps {
  settings: {
    mainTitle: string
    mainSubtitle: string
    discountBannerTitle: string
    discountBannerSubtitle: string
  }
}

export function PricingHero({ settings }: PricingHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainTitle}>{settings.mainTitle}</h1>
        <p className={styles.mainSubtitle}>{settings.mainSubtitle}</p>
        <div className={styles.discountBanner}>
          <span className={styles.discountIcon}>🎉</span>
          <div className={styles.discountText}>
            <strong className={styles.discountText_strong}>
              {settings.discountBannerTitle}
            </strong>
            <span className={styles.discountText_span}>
              {settings.discountBannerSubtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}