"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { use } from "react"
import { useNotice } from "@/hooks/useNotices"
import * as styles from "../../../styles/Notice.css"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function NoticeDetailPage({ params }: PageProps) {
  const resolvedParams = use(params)
  const { data: notice, isLoading, error } = useNotice(resolvedParams.id)

  // 날짜 포맷 함수
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>
          공지사항을 불러오는 중입니다...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          공지사항을 불러올 수 없습니다.
        </div>
        <Link href="/notice" className={styles.backButton}>
          목록으로 돌아가기
        </Link>
      </div>
    )
  }

  if (!notice) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>
          해당 공지사항을 찾을 수 없습니다.
        </div>
        <Link href="/notice" className={styles.backButton}>
          목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.navigationHeader}>
        <Link href="/notice" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
      </div>

      <article className={styles.noticeDetail}>
        <header className={styles.noticeDetailHeader}>
          <div className={styles.noticeBadge}>공지사항</div>
          <h1 className={styles.noticeDetailTitle}>{notice.title}</h1>
          <div className={styles.noticeDetailInfo}>
            <span className={styles.noticeDate}>
              {formatDate(notice.publishedAt || notice.createdAt)}
            </span>
          </div>
        </header>

        <div className={styles.noticeDetailContent}>
          {notice.content
            .split("\n")
            .map((paragraph: string, index: number) => (
              <p key={index} className={styles.noticeParagraph}>
                {paragraph}
              </p>
            ))}

          {/* 첨부파일 이미지만 표시 */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className={styles.attachments}>
              {notice.attachments.map((attachment: any, index: number) => {
                const fileExtension = attachment.name
                  .split(".")
                  .pop()
                  ?.toLowerCase()
                const isImage = [
                  "jpg",
                  "jpeg",
                  "png",
                  "gif",
                  "webp",
                  "svg",
                ].includes(fileExtension || "")

                if (isImage) {
                  return (
                    <div key={index} className={styles.imageAttachment}>
                      <Image
                        src={attachment.url}
                        alt={attachment.name}
                        width={800}
                        height={600}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "12px",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                        }}
                        onError={(e) => {
                          console.log("이미지 로드 실패:", attachment.url)
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                  )
                }
                return null
              })}
            </div>
          )}
        </div>

        <footer className={styles.noticeDetailFooter}>
          <Link href="/notice" className={styles.backToListButton}>
            목록으로 돌아가기
          </Link>
        </footer>
      </article>
    </div>
  )
}
