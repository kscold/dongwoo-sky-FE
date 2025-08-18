import React from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { NoticeProps } from "../../../common/interfaces/content/content.interface"
import * as styles from "../styles"

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
        <div className={styles.breadcrumb}>
          <Link href="/notice" className={styles.backButton}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
            </svg>
            목록으로 돌아가기
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
      </div>

      {/* 공지사항 컨테이너 */}
      <div className={styles.noticeContainer}>
        <div className={styles.noticeHeader}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{notice.title}</h1>
            {notice.summary && (
              <p className={styles.summary}>{notice.summary}</p>
            )}
          </div>

          {/* 메타 정보 */}
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.metaItemIcon}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {notice.author || "관리자"}
            </span>
            
            {notice.category && (
              <span className={styles.metaItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.metaItemIcon}>
                  <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                </svg>
                {notice.category}
              </span>
            )}

            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.metaItemIcon}>
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              조회수 {notice.viewCount || 0}
            </span>

            <span className={styles.metaItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.metaItemIcon}>
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
              {notice.publishedAt
                ? formatDate(notice.publishedAt)
                : formatDate(notice.createdAt)}
            </span>

            {/* 우선순위 및 고정 배지 */}
            <span className={getPriorityBadgeStyle(notice.priority)}>
              {getPriorityText(notice.priority)}
            </span>
            {notice.pinned && (
              <span className={styles.pinnedBadge}>
                고정
              </span>
            )}
          </div>
        </div>

        {/* 콘텐츠 섹션 */}
        <div className={styles.contentSection}>
          {/* 이미지 갤러리 */}
          {notice.imageUrls && notice.imageUrls.length > 0 && (
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <Image
                  src={notice.imageUrls[0]}
                  alt={notice.title}
                  className={styles.contentImage}
                  width={800}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              {notice.imageUrls.length > 1 && (
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {notice.imageUrls.slice(1).map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`${notice.title} ${index + 2}`}
                      className={styles.contentImage}
                      width={200}
                      height={150}
                      style={{ objectFit: "cover", borderRadius: "12px" }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 공지사항 내용 */}
          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: notice.content.replace(/\n/g, "<br>"),
              }}
            />
          </div>
        </div>

        {/* 네비게이션 섹션 */}
        <div className={styles.navigationSection}>
          <div className={styles.divider}></div>
          <div className={styles.navigationButtons}>
            <Link href="/notice" className={styles.listButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
              </svg>
              목록보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}