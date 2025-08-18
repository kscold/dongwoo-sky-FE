import type { Notice } from "@/types/notice"
import { getNoticeStats } from "../lib/notice.utils"
import * as styles from "./notice-stats.css"

interface NoticeStatsProps {
  notices: Notice[]
  totalCount: number
}

export function NoticeStats({ notices, totalCount }: NoticeStatsProps) {
  const stats = getNoticeStats(notices)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.label}>전체 공지</div>
        <div className={styles.value}>{totalCount}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>공개 공지</div>
        <div className={styles.value}>{stats.published}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>모달 공지</div>
        <div className={styles.value}>{stats.modal}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.label}>오늘 작성</div>
        <div className={styles.value}>{stats.todayCount}</div>
      </div>
    </div>
  )
}