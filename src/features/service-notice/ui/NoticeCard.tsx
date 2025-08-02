import React from "react"
import Link from "next/link"
import Image from "next/image"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import * as styles from "../styles"

interface NoticeCardProps {
  notice: NoticeProps
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const getPriorityBadgeStyle = (priority?: string) => {
    switch (priority) {
      case "high":
        return `${styles.priorityBadge} ${styles.priorityHigh}`
      case "medium":
        return `${styles.priorityBadge} ${styles.priorityMedium}`
      case "low":
        return `${styles.priorityBadge} ${styles.priorityLow}`
      default:
        return `${styles.priorityBadge} ${styles.priorityLow}`
    }
  }

  const getPriorityText = (priority?: string) => {
    switch (priority) {
      case "high":
        return "긴급"
      case "medium":
        return "보통"
      case "low":
        return "일반"
      default:
        return "일반"
    }
  }

  return (
    <Link href={`/notice/${notice._id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {notice.imageUrls?.[0] ? (
          <Image
            src={notice.imageUrls[0]}
            alt={notice.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>📢</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 className={styles.cardTitle}>{notice.title}</h3>
            {notice.pinned && (
              <span className={styles.pinnedBadge}>📌</span>
            )}
          </div>
          <span className={getPriorityBadgeStyle(notice.priority)}>
            {getPriorityText(notice.priority)}
          </span>
        </div>
        
        {notice.summary && (
          <p className={styles.description}>{notice.summary}</p>
        )}
        
        <div className={styles.meta}>
          {notice.author && (
            <span className={styles.metaItem}>✍️ {notice.author}</span>
          )}
          {notice.category && (
            <span className={styles.metaItem}>📁 {notice.category}</span>
          )}
        </div>
        
        <div className={styles.stats}>
          <span className={styles.stat}>👀 {notice.viewCount || 0}</span>
          <span className={styles.date}>
            {new Date(notice.publishedAt || notice.createdAt || "").toLocaleDateString('ko-KR')}
          </span>
        </div>
      </div>
    </Link>
  )
}