import React from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

import { usePublishedNotices } from "../../../common/hooks/useNotices"

import * as noticeStyles from "../../../styles/components/notice-section.css"

const NoticeSection = () => {
  const { data: allNotices, isLoading, error } = usePublishedNotices()

  // isModal이 false인 공지사항만 필터링
  const notices = allNotices?.filter((notice) => notice.isModal !== true) || []

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  // 내용 줄임 표시 함수
  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content
    return content.slice(0, maxLength) + "..."
  }

  return (
    <section className={noticeStyles.noticeSection}>
      <div className={noticeStyles.noticeContainer}>
        <div className={noticeStyles.noticeSectionHeader}>
          <h2 className={noticeStyles.sectionTitle}>📢 어울림 스카이 소식</h2>
          <p className={noticeStyles.sectionSubtitle}>
            최신 공지사항과 중요한 업데이트를 확인하세요
          </p>
        </div>

        {isLoading ? (
          <div className={noticeStyles.noticeLoadingContainer}>
            <div className={noticeStyles.noticeLoadingSpinner}>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
              <div className={noticeStyles.noticeLoadingSpinnerDot}></div>
            </div>
            <p>공지사항을 불러오는 중입니다...</p>
          </div>
        ) : error ? (
          <div className={noticeStyles.noticeErrorContainer}>
            <div className={noticeStyles.noticeErrorIcon}>⚠️</div>
            <p>공지사항을 불러오는데 실패했습니다.</p>
            <p className={noticeStyles.noticeErrorSubtext}>
              서버 연결을 확인해주세요.
            </p>
          </div>
        ) : notices && notices.length > 0 ? (
          <div className={noticeStyles.noticeGrid}>
            {notices.slice(0, 3).map((notice, index) => (
              <Link
                key={notice._id}
                href={`/notice/${notice._id}`}
                className={`${noticeStyles.noticeCard} ${
                  index === 0 ? noticeStyles.noticeCardFeatured : ""
                }`}
              >
                <div className={noticeStyles.noticeCardHeader}>
                  <div className={noticeStyles.noticeBadge}>
                    {index === 0 ? "📌 중요" : "📄 공지"}
                  </div>
                  <span className={noticeStyles.noticeDate}>
                    {formatDate(notice.publishedAt || notice.createdAt)}
                  </span>
                </div>
                <h3 className={noticeStyles.noticeTitle}>{notice.title}</h3>
                <p className={noticeStyles.noticeExcerpt}>
                  {truncateContent(notice.content)}
                </p>
                <div className={noticeStyles.noticeCardFooter}>
                  <span className={noticeStyles.readMoreText}>
                    자세히 보기 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={noticeStyles.noticeEmptyContainer}>
            <div className={noticeStyles.noticeEmptyIcon}>📝</div>
            <p>등록된 공지사항이 없습니다.</p>
            <p className={noticeStyles.noticeEmptySubtext}>
              새로운 소식이 있으면 즉시 업데이트됩니다.
            </p>
          </div>
        )}

        {notices && notices.length > 3 && (
          <div className={noticeStyles.noticeViewMore}>
            <Link href="/notice" className={noticeStyles.viewMoreButton}>
              모든 공지사항 보기
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default NoticeSection
