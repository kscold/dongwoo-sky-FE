"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { useNoticeDetail } from "@/hooks/useNotice"
import * as styles from "../../../styles/notice.css"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function NoticeDetailPage({ params }: PageProps) {
  const { notice, loading, error, fetchNotice } = useNoticeDetail()

  useEffect(() => {
    const loadNotice = async () => {
      const resolvedParams = await params
      if (resolvedParams.id) {
        fetchNotice(resolvedParams.id)
      }
    }

    loadNotice()
  }, [params, fetchNotice])

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

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>공지사항</h1>
        <div className={styles.loading}>
          <p>로딩 중...</p>
        </div>
      </div>
    )
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
          <span className={styles.detailDate}>
            {formatDate(notice.publishedAt || notice.createdAt)}
          </span>
        </div>

        <div className={styles.detailContent}>
          {/* 본문 내용을 단락으로 나누어 표시 */}
          {notice.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {notice.attachments && notice.attachments.length > 0 && (
          <div className={styles.detailAttachments}>
            <h3 className={styles.attachmentsTitle}>첨부파일</h3>
            <ul className={styles.attachmentsList}>
              {notice.attachments.map((attachment, index) => {
                // 이미지 파일인지 확인
                const isImage =
                  attachment.url &&
                  (attachment.url.toLowerCase().includes(".jpg") ||
                    attachment.url.toLowerCase().includes(".jpeg") ||
                    attachment.url.toLowerCase().includes(".png") ||
                    attachment.url.toLowerCase().includes(".gif") ||
                    attachment.url.toLowerCase().includes(".webp"))

                return (
                  <li key={index} className={styles.attachmentItem}>
                    {isImage ? (
                      <div className={styles.imageAttachment}>
                        <Image
                          src={attachment.url}
                          alt={attachment.name || "첨부 이미지"}
                          className={styles.attachmentImage}
                          width={600}
                          height={400}
                          style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "100%",
                          }}
                          onError={(e) => {
                            // 이미지 로드 실패시 링크로 대체
                            const target = e.target as HTMLElement
                            target.style.display = "none"
                            const fallbackLink =
                              target.nextElementSibling as HTMLElement
                            if (fallbackLink)
                              fallbackLink.style.display = "block"
                          }}
                        />
                        <a
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.attachmentLink}
                          style={{ display: "none" }}
                        >
                          📎 {attachment.name}
                        </a>
                      </div>
                    ) : (
                      <a
                        href={attachment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.attachmentLink}
                      >
                        📎 {attachment.name}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </article>
    </div>
  )
}
