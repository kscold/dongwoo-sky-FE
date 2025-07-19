import React from "react"

import { StatsCard } from "../StatsCard"
import { AdminStats } from "../../../../api/admin-stats"
import PageSkeleton from "../../ui/PageSkeleton"
import "../../../../styles/admin/admin-home-page.css"

interface StatsSectionProps {
  statsData?: AdminStats
  isLoading: boolean
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  statsData,
  isLoading,
}) => {
  if (isLoading) {
    return <PageSkeleton />
  }

  return (
    <div className="statsSection">
      <h2 className="sectionTitle">📊 대시보드</h2>
      <div className="statsContainer">
        <StatsCard
          title="전체 장비 수"
          value={statsData?.equipment.total || 0}
          icon="🚛"
          color="blue"
        />
        <StatsCard
          title="활성 장비 수"
          value={statsData?.equipment.active || 0}
          icon="✅"
          color="green"
        />
        <StatsCard
          title="비활성 장비 수"
          value={(statsData?.equipment.total || 0) - (statsData?.equipment.active || 0)}
          icon="❌"
          color="red"
        />
        <StatsCard
          title="전체 공지사항"
          value={statsData?.notices.total || 0}
          icon="📢"
          color="purple"
        />
        <StatsCard
          title="게시된 공지사항"
          value={statsData?.notices.published || 0}
          icon="📝"
          color="orange"
        />
        <StatsCard
          title="고객 리뷰"
          value={statsData?.customerReviews.total || 0}
          icon="⭐"
          color="cyan"
        />
      </div>
    </div>
  )
}
