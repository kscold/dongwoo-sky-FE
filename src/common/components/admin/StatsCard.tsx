import React from "react"

import "../../../styles/admin/stats-card.css"

interface StatsCardProps {
  title: string
  value: number
  subtitle?: string
  icon: string
  color: "blue" | "green" | "purple" | "orange" | "red" | "cyan"
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
    <div className={`card ${color}`}>
      <div className="header">
        <div className="iconContainer">
          <span className="icon">{icon}</span>
        </div>
        <div className="titleContainer">
          <h3 className="title">{title}</h3>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="valueContainer">
        <span className="value">
          {typeof value === "number" ? value.toLocaleString() : "0"}
        </span>
        {trend && (
          <div
            className={`trend ${
              trend.isPositive ? "positive" : "negative"
            }`}
          >
            <span className="trendIcon">
              {trend.isPositive ? "↗" : "↘"}
            </span>
            <span className="trendValue">{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  )
}
