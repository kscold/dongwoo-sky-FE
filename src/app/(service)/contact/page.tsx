"use client"

import React from "react"
import { ContactHero } from "../../../features/service-contact/ui/ContactHero"
import { ContactForm } from "../../../features/service-contact/ui/ContactForm"
import { SEOHead } from "../../../common/components/seo/SEOHead"
import { usePageSEO } from "../../../common/hooks/useSEO"
import * as styles from "../../../features/service-contact/ui/page.css"

export default function ContactPage() {
  const { data: seoData } = usePageSEO('contact')

  return (
    <>
      {seoData && <SEOHead metadata={seoData.metadata} path="/contact" />}
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <ContactHero />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
