import { useDashboardStats } from "../api/dashboard.hooks"
import type { StatCard as StatCardType } from "../model/dashboard.types"
import * as styles from "./stats-grid.css"

export function StatsGrid() {
  const { data: stats, isLoading } = useDashboardStats()

  const statCards: StatCardType[] = [
    {
      icon: "✅",
      value: isLoading ? "⏳" : stats?.notices.published || 0,
      label: "공개 공지사항",
    },
    {
      icon: "🏗️",
      value: isLoading ? "⏳" : stats?.equipment.active || 0,
      label: "등록된 장비",
    },
    {
      icon: "🎯",
      value: isLoading ? "⏳" : stats?.workShowcases.active || 0,
      label: "작업자 자랑거리",
    },
    {
      icon: "⭐",
      value: isLoading ? "⏳" : stats?.customerReviews.active || 0,
      label: "고객 리뷰",
    },
  ]

  return (
    <div className={styles.grid}>
      {statCards.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

function StatCard({ icon, value, label }: StatCardType) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}