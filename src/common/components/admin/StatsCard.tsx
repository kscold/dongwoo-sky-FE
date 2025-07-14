import React from "react"

import * as styles from "../../../styles/admin/stats-card.css"

interface StatsCardProps {
  title: string
  value: number
  subtitle?: string
  icon: string
  color: "blue" | "green" | "purple" | "orange"
  trend?: {
    value: number
    isPositive: boolean
  }
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color,
  trend,
}) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{icon}</span>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.valueContainer}>
        <span className={styles.value}>
          {typeof value === "number" ? value.toLocaleString() : "0"}
        </span>
        {trend && (
          <div
            className={`${styles.trend} ${
              trend.isPositive ? styles.positive : styles.negative
            }`}
          >
            <span className={styles.trendIcon}>
              {trend.isPositive ? "↗" : "↘"}
            </span>
            <span className={styles.trendValue}>{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  )
}
