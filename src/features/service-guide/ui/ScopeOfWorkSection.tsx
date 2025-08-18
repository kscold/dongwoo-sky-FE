import React from "react"
import { ScopeOfWork } from "../../../types/service-guide"
import { iconMap } from "../../../common/components/ui/iconMap"
import * as styles from "../styles"

interface ScopeOfWorkSectionProps {
  scopeOfWork: ScopeOfWork[]
}

export const ScopeOfWorkSection: React.FC<ScopeOfWorkSectionProps> = ({ scopeOfWork }) => {
  if (!scopeOfWork || scopeOfWork.length === 0) return null

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>작업 가능 범위</h2>
      <ul className={styles.capabilitiesList}>
        {scopeOfWork.map((item, index) => {
          const Icon = item.icon && iconMap[item.icon] ? iconMap[item.icon] : null
          return (
            <li key={index} className={styles.capabilityItem}>
              {Icon && <Icon className={styles.capabilityIcon} />}
              <span className={Icon ? "" : styles.capabilityTextNoIcon}>
                {item.text}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}