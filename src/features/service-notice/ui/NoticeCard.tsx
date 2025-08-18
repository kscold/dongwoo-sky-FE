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
            📢
          </div>
        )}
        {notice.pinned && (
          <div className={styles.pinnedBadge}>
            고정
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {notice.author || "관리자"}
          </span>
          {notice.category && (
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
              </svg>
              {notice.category}
            </span>
          )}
          <span className={getPriorityBadgeStyle(notice.priority)}>
            {getPriorityText(notice.priority)}
          </span>
        </div>

        <h3 className={styles.cardTitle}>{notice.title}</h3>
        
        {notice.summary && (
          <p className={styles.description}>{notice.summary}</p>
        )}
        
        <div className={styles.stats}>
          <div style={{ display: "flex", gap: "16px" }}>
            <span className={styles.stat}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              {notice.viewCount || 0}
            </span>
          </div>
          <span className={styles.date}>
            {new Date(notice.publishedAt || notice.createdAt || "").toLocaleDateString('ko-KR')}
          </span>
        </div>
      </div>
    </Link>
  )
}