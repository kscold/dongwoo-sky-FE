"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircleIcon,
  UserCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  CalendarIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  SparklesIcon,
  ArchiveBoxIcon,
  SunIcon,
  PlusCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  TruckIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid"

import EquipmentSwiper from "../../../common/components/equipment/EquipmentSwiper"
import { ProcessStep, ScopeOfWork } from "../../../common/types/service-guide"
import * as styles from "../../../styles/service/page/service-guide.css"
import { useServiceGuide } from "../../../common/hooks/useServiceGuide"

const iconMap: { [key: string]: React.ElementType } = {
  CheckCircleIcon,
  UserCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  CalendarIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  SparklesIcon,
  ArchiveBoxIcon,
  SunIcon,
  PlusCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  TruckIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
}

const ServiceGuidePage = () => {
  const { data: serviceGuideData, isLoading, isError } = useServiceGuide()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !serviceGuideData) {
    return <div>서비스 안내 데이터를 불러오는 데 실패했습니다.</div>
  }

  const { serviceGuide, equipments } = serviceGuideData

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{serviceGuide.heroTitle}</h1>
        <p className={styles.heroSubtitle}>{serviceGuide.heroSubtitle}</p>
      </section>

      <div className={styles.sectionContainer}>
        {/* Equipment Swiper Section */}
        {equipments && equipments.length > 0 && (
          <section className={styles.equipmentSwiperSection}>
            <h2 className={styles.sectionTitle}>대표 장비 보기</h2>
            <EquipmentSwiper equipments={equipments} />
          </section>
        )}

        {/* Scope of Work Section */}
        {serviceGuide.scopeOfWork && serviceGuide.scopeOfWork.length > 0 && (
          <section>
            <h2 className={styles.sectionTitle}>작업 가능 범위</h2>
            <ul className={styles.capabilitiesList}>
              {serviceGuide.scopeOfWork.map((item: ScopeOfWork, index: number) => {
                const Icon = iconMap[item.icon || ""] || UserCircleIcon
                return (
                  <li key={index} className={styles.capabilityItem}>
                    <Icon className={styles.capabilityIcon} />
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
      </div>



      {/* Operator Profile Section */}
      {serviceGuide.profile && (
        <section className={styles.operatorProfileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageContainer}>
              {serviceGuide.profile.imageUrl ? (
                <Image
                  src={serviceGuide.profile.imageUrl}
                  alt={serviceGuide.profile.name}
                  width={300}
                  height={300}
                  className={styles.profileImagePlaceholder}
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                />
              ) : (
                <div className={styles.profileImagePlaceholder}>
                  <UserCircleIcon />
                </div>
              )}
            </div>
            <div className={styles.profileInfo}>
              <h3 className={styles.profileName}>
                {serviceGuide.profile.name}
              </h3>
              <p className={styles.profileRole}>
                {serviceGuide.profile.role}
              </p>
              <div>
                <h4 className={styles.profileSectionTitle}>주요 경력</h4>
                <ul className={styles.profileList}>
                  {serviceGuide.profile.career.map((career: string, i: number) => (
                    <li key={i} className={styles.profileListItem}>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={styles.profileSectionTitle}>인사말</h4>
                <p className={styles.profileBio}>
                  {serviceGuide.profile.introduction}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Service Process Section */}
      {serviceGuide.processSteps && serviceGuide.processSteps.length > 0 && (
        <section className={styles.serviceProcessSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>서비스 계약 프로세스</h2>
            <div className={styles.processGrid}>
              {serviceGuide.processSteps.map((step: ProcessStep, index: number) => {
                const IconComponent = (step.icon && iconMap[step.icon]) || null
                return (
                  <div key={index} className={styles.processStep}>
                    <div className={styles.processStepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {IconComponent && (
                      <IconComponent className={styles.processStepIcon} />
                    )}
                    <h3 className={styles.processStepTitle}>{step.title}</h3>
                    <p className={styles.processStepDescription}>
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}



      {/* Pricing Button Section */}
      <div className={styles.pricingButtonContainer}>
        <Link href="/pricing" passHref>
          <button className={styles.pricingButton}>이용 요금 확인하기</button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceGuidePage
