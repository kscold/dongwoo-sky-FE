import React from "react"
import Head from "next/head"
import * as styles from "../../../features/pricing/styles/hero.css"

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

      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{settings.mainTitle}</h1>
        <p className={styles.heroSubtitle}>
          {settings.mainSubtitle.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < settings.mainSubtitle.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </section>
    </>
  )
}