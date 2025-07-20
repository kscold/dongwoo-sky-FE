"use client"

import React, { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

import { useNotices } from "../../../common/hooks/useNotices"
import PageSkeleton from "../../../common/components/ui/PageSkeleton"
import Pagination from "../../../common/components/ui/Pagination"
import { isImageFile } from "../../../utils/fileUtils"
import * as styles from "../../../styles/service/page/service-page-common.css"

export default function NoticePage() {
  const [page, setPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const limit = isMobile ? 5 : 10

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { data: noticesData, isLoading, error } = useNotices(page, limit)

  // 공지사항 목록 필터링 (isModal이 false인 것만)
  const notices =
    noticesData?.data?.filter((notice: any) => notice.isModal !== true) || []
  const totalPages = noticesData?.total ? Math.ceil(noticesData.total / limit) : 1

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  if (isLoading) {
    return <PageSkeleton variant="notice" />
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
        <>
          <div className={styles.grid}>
            {notices.map((notice: any, index: number) => (
              <Link
                key={notice._id || `notice-${index}`}
                href={`/notice/${notice._id}`}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  <div className={styles.imagePlaceholder}>📢</div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{notice.title}</h3>
                  <p className={styles.description}>
                    {notice.content.length > 120
                      ? `${notice.content.substring(0, 120)}...`
                      : notice.content}
                  </p>
                  <div className={styles.stats}>
                    <span className={styles.stat}>📅 {formatDate(notice.publishedAt || notice.createdAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* 페이지네이션 */}
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      ) : (
        <div className={styles.emptyState}>
          <p>등록된 공지사항이 없습니다.</p>
        </div>
      )}
    </div>
  )
}