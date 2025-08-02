import React from "react"
import { ProcessStep } from "../../../types/service-guide"
import { iconMap } from "../../../common/components/ui/iconMap"
import ProcessSwiper from "../../../common/components/swiper/ProcessSwiper"
import * as styles from "../styles"

interface ServiceProcessSectionProps {
  processSteps: ProcessStep[]
}

export const ServiceProcessSection: React.FC<ServiceProcessSectionProps> = ({ processSteps }) => {
  if (!processSteps || processSteps.length === 0) return null

  return (
    <section className={styles.serviceProcessSection}>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>서비스 계약 프로세스</h2>

        {/* Desktop Grid */}
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => {
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

        {/* Mobile Swiper */}
        <div className={styles.processSlider}>
          <ProcessSwiper processSteps={processSteps} iconMap={iconMap} />
        </div>
      </div>
    </section>
  )
}