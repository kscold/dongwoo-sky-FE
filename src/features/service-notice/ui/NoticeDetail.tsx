import React from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import * as styles from "../styles/notice-detail.css"

interface NoticeDetailProps {
  notice: NoticeProps
}

export const NoticeDetail: React.FC<NoticeDetailProps> = ({ notice }) => {
  // 날짜 포맷 함수
  const formatDate = (dateString?: string | Date) => {
    if (!dateString) return "날짜 없음"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return String(dateString)
    }
  }

  // 우선순위 배지 스타일
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
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/notice" className={styles.backButton}>
            ← 목록으로 돌아가기
          </Link>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              홈
            </Link>
            <span className={styles.separator}>›</span>
            <Link href="/notice" className={styles.breadcrumbLink}>
              공지사항
            </Link>
            <span className={styles.separator}>›</span>
            <span className={styles.current}>상세보기</span>
          </nav>
        </div>
        <h1 className={styles.title}>{notice.title}</h1>

        {/* 우선순위 및 고정 배지 */}
        <div className={styles.badgeSection}>
          <span className={getPriorityBadgeStyle(notice.priority)}>
            {getPriorityText(notice.priority)}
          </span>
          {notice.pinned && (
            <span className={styles.pinnedBadge}>📌 고정</span>
          )}
        </div>

        {/* 메타 정보 */}
        <div className={styles.meta}>
          <div className={styles.authorInfo}>
            <span className={styles.author}>👤 {notice.author || "관리자"}</span>
          </div>
          <div className={styles.details}>
            {notice.category && (
              <span className={styles.detail}>📁 {notice.category}</span>
            )}
            {notice.summary && (
              <span className={styles.detail}>📝 {notice.summary}</span>
            )}
          </div>
          <div className={styles.stats}>
            <span className={styles.stat}>👀 조회수 {notice.viewCount || 0}</span>
            <span className={styles.date}>
              {notice.publishedAt
                ? formatDate(notice.publishedAt)
                : formatDate(notice.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 이미지 갤러리 */}
      {notice.imageUrls && notice.imageUrls.length > 0 && (
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <Image
              src={notice.imageUrls[0]}
              alt={notice.title}
              className={styles.image}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          {notice.imageUrls.length > 1 && (
            <div className={styles.thumbnails}>
              {notice.imageUrls.slice(1).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${notice.title} ${index + 2}`}
                  className={styles.thumbnail}
                  width={150}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 공지사항 내용 */}
      <div className={styles.content}>
        <div
          className={styles.contentBody}
          dangerouslySetInnerHTML={{
            __html: notice.content.replace(/\n/g, "<br>"),
          }}
        />
      </div>

      {/* 액션 버튼 */}
      <div className={styles.actions}>
        <Link href="/notice" className={styles.listButton}>
          목록보기
        </Link>
      </div>
    </div>
  )
}