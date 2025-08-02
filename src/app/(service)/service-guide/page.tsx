"use client"

import React from "react"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import { SEOHead } from "../../../common/components/seo/SEOHead"
import {
  HeroSection,
  EquipmentShowcase,
  ScopeOfWorkSection,
  OperatorProfileSection,
  ServiceProcessSection,
  PricingCTA,
  useServiceGuideContent,
} from "../../../features/service-guide"
import * as styles from "../../../features/service-guide/styles"

const ServiceGuidePage = () => {
  const { serviceGuideData, isLoading, isError, seoMetadata } =
    useServiceGuideContent()

  if (isLoading) {
    return <PageSkeleton variant="service-guide" />
  }

  if (isError || !serviceGuideData) {
    return <div>서비스 안내 데이터를 불러오는 데 실패했습니다.</div>
  }

  const { serviceGuide, equipments } = serviceGuideData

  return (
    <>
      <SEOHead metadata={seoMetadata} path="/service-guide" />
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <HeroSection
            title={serviceGuide.heroTitle}
            subtitle={serviceGuide.heroSubtitle}
          />

          <div className={styles.sectionContainer}>
            <EquipmentShowcase equipments={equipments} />
            <ScopeOfWorkSection scopeOfWork={serviceGuide.scopeOfWork} />
            <OperatorProfileSection profile={serviceGuide.profile} />
            <ServiceProcessSection processSteps={serviceGuide.processSteps} />
            <PricingCTA />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceGuidePage
