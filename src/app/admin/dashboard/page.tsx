"use client"

import { DashboardHeader, StatsGrid, QuickActions } from "@/features/admin-dashboard"
import * as styles from "../../../features/admin-dashboard/ui/dashboard-page.css"

export default function AdminDashboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <DashboardHeader />
        <div className={styles.content}>
          <StatsGrid />
          <QuickActions />
        </div>
      </div>
    </div>
  )
}