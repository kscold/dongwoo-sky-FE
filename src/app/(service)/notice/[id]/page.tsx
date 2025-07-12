"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

import { useNotice } from "../../../../common/hooks/useNotices"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import * as styles from "@/styles/notice.css"
import { Notice, Attachment } from "@/common/types/notice"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function NoticeDetailPage({ params }: PageProps) {
  const [noticeId, setNoticeId] = useState<string | null>(null)

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setNoticeId(resolvedParams.id)
    }
    loadParams()
  }, [params])

  const { data: notice, isLoading, error } = useNotice(noticeId || "")

  // 날짜 포맷 함수
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일 HH:mm", {
        locale: ko,
      })
    } catch {
      return dateString
    }
  }

  if (isLoading || !noticeId) {
    return <PageSkeleton variant="notice" />
  }

  if (error || !notice) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>공지사항</h1>
        <div className={styles.error}>
          <p>
            {typeof error === "string" ? error : "공지사항을 찾을 수 없습니다."}
          </p>
          <Link href="/notice" className={styles.backButton}>
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.noticeHeader}>
        <Link href="/notice" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
      </div>

      <article className={styles.noticeDetail}>
        <h1 className={styles.detailTitle}>{notice.title}</h1>

        <div className={styles.detailInfo}>
          <div>
            <span>게시일</span>
            <span>
              {new Date(notice.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className={styles.detailContent}>
          {/* 본문 내용을 단락으로 나누어 표시 */}
          {notice.content.split("\n").map((paragraph, index) => (
            <p key={`paragraph-${index}-${paragraph.slice(0, 10)}`}>{paragraph}</p>
          ))}
        </div>

        {notice.attachments && notice.attachments.length > 0 && (
          <div className={styles.attachmentsSection}>
            <h3 className={styles.attachmentsTitle}>첨부파일</h3>
            <ul className={styles.attachmentsList}>
              {notice.attachments.map((file, index) => (
                <li key={file.url || file.name || `attachment-${index}`} className={styles.attachmentItem}>
                  <a
                    href={file.url}
                    download={file.name}
                    className={styles.attachmentLink}
                  >
                    <svg
                    // ... (svg 아이콘)
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                    </svg>
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  )
}
