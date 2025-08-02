import React from "react"
import { Notice } from "../../../../types/notice"
import * as styles from "../../../../styles/admin/admin-notice.css"

interface NoticeStatsProps {
  notices: Notice[]
  totalCount: number
}

export const NoticeStats: React.FC<NoticeStatsProps> = ({ 
  notices, 
  totalCount 
}) => {
  const activeCount = notices.filter(n => n.isActive).length
  const modalCount = notices.filter(n => n.isModal).length

  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>📊</div>
        <div className={styles.statContent}>
          <span className={styles.statNumber}>{totalCount}</span>
          <span className={styles.statLabel}>전체 공지사항</span>
        </div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>✅</div>
        <div className={styles.statContent}>
          <span className={styles.statNumber}>{activeCount}</span>
          <span className={styles.statLabel}>게시중</span>
        </div>
      </div>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>🔔</div>
        <div className={styles.statContent}>
          <span className={styles.statNumber}>{modalCount}</span>
          <span className={styles.statLabel}>팝업 공지</span>
        </div>
      </div>
    </div>
  )
}