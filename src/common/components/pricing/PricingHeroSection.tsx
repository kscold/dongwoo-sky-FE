import React from "react"
import Head from "next/head"
import * as styles from "../../../styles/page/pricing-page.css"

interface PricingHeroSectionProps {
  settings: {
    mainTitle: string
    mainSubtitle: string
    discountBannerTitle: string
    discountBannerSubtitle: string
  }
}

export const PricingHeroSection: React.FC<PricingHeroSectionProps> = ({
  settings
}) => {
  return (
    <>
      <Head>
        <title>{settings.mainTitle} - 어울림 스카이</title>
        <meta
          name="description"
          content={settings.mainSubtitle.replace("\n", " ")}
        />
      </Head>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{settings.mainTitle}</h1>
          <p className={styles.mainSubtitle}>
            {settings.mainSubtitle.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < settings.mainSubtitle.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <div className={styles.discountBanner}>
            <div className={styles.discountIcon}>💰</div>
            <div className={styles.discountText}>
              <strong>{settings.discountBannerTitle}</strong>
              <span>{settings.discountBannerSubtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}