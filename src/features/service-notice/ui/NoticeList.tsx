import React from "react"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import { NoticeCard } from "./NoticeCard"
import * as styles from "../styles"

interface NoticeListProps {
  items: NoticeProps[]
  isLoading: boolean
  error: string | null
}

export const NoticeList: React.FC<NoticeListProps> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>공지사항을 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>⚠️ 공지사항을 불러오는데 실패했습니다.</p>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>📢 아직 등록된 공지사항이 없습니다.</p>
      </div>
    )
  }

  // 고정 공지사항을 먼저 정렬
  const sortedItems = [...items].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return 0
  })

  return (
    <div className={styles.grid}>
      {sortedItems.map((notice) => (
        <NoticeCard key={notice._id} notice={notice} />
      ))}
    </div>
  )
}