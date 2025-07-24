"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"

import { useNotice } from "../../../../common/hooks/useNotices"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import * as styles from "../../../../styles/service/page/notice.css.ts"
import { Notice } from "../../../../types/notice"

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
          <div className={styles.publishInfo}>
            <span className={styles.publishLabel}>게시일</span>
            <span className={styles.publishDate}>
              {new Date(notice.createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long", 
                day: "numeric",
              })}
            </span>
          </div>
          <div className={styles.metaStats}>
            <span className={styles.detailDate}>
              {formatDate(notice.publishedAt || notice.createdAt)}
            </span>
          </div>
        </div>

        <div className={styles.detailContent}>
          {notice.content.split("\n").map((paragraph, index) => (
            <p key={`paragraph-${index}-${paragraph.slice(0, 10)}`}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* 이미지 갤러리 */}
        {notice.attachments && notice.attachments.length > 0 && (
          <div className={styles.imageGallery}>
            <div className={styles.mainImage}>
              <Image
                src={notice.attachments[0].url}
                alt={notice.title}
                className={styles.image}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            {notice.attachments.length > 1 && (
              <div className={styles.thumbnails}>
                {notice.attachments.slice(1).map((attachment, index) => (
                  <Image
                    key={index}
                    src={attachment.url}
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
      </article>
    </div>
  )
}
