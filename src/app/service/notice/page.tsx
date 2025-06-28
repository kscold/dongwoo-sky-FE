"use client"

import React from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { usePublishedNotices } from "@/common/hooks/useNotices"
import * as styles from "../../../styles/page/notice.css"

export default function NoticePage() {
  const { data: notices, isLoading, error } = usePublishedNotices()

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>공지사항</h1>
        <div className={styles.loading}>
          <p>로딩 중...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>공지사항</h1>
        <div className={styles.error}>
          <p>
            공지사항을 불러오는데 문제가 발생했습니다. 나중에 다시 시도해주세요.
          </p>
          <button
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            다시 시도
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>공지사항</h1>

      {notices && notices.length > 0 ? (
        <ul className={styles.noticeList}>
          {notices.map((notice: any) => (
            <li key={notice._id} className={styles.noticeItem}>
              <Link
                href={`/notice/${notice._id}`}
                className={styles.noticeLink}
              >
                <h2 className={styles.noticeTitle}>{notice.title}</h2>
                <div className={styles.noticeInfo}>
                  <span className={styles.noticeDate}>
                    {formatDate(notice.publishedAt || notice.createdAt)}
                  </span>
                </div>
                <p className={styles.noticeContent}>
                  {notice.content.length > 100
                    ? `${notice.content.substring(0, 100)}...`
                    : notice.content}
                </p>
                {notice.attachments && notice.attachments.length > 0 && (
                  <div className={styles.attachmentInfo}>
                    <span>첨부파일 {notice.attachments.length}개</span>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState}>
          <p>등록된 공지사항이 없습니다.</p>
        </div>
      )}
    </div>
  )
}
