"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { ArrowLeftIcon, CalendarIcon, UserIcon, ClockIcon } from "lucide-react"

import { useNotice } from "../../../../common/hooks/useNotices"
import PageSkeleton from "../../../../common/components/ui/PageSkeleton"
import { AttachmentDisplay } from "../../../../common/components/notice/AttachmentDisplay"
import {
  container,
  header,
  backButton,
  breadcrumb,
  breadcrumbLink,
  separator,
  current,
  noticeContainer,
  noticeHeader,
  titleSection,
  title,
  summary,
  metaInfo,
  metaItem,
  contentSection,
  content,
  navigationSection,
  divider,
  navigationButtons,
  listButton,
  relatedSection,
  sectionTitle,
  viewAllLink,
  errorContainer,
  errorIcon,
  errorTitle,
  errorMessage,
} from "../../../../styles/service/notice-detail.css"

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
  const formatDate = (dateString?: string | Date) => {
    if (!dateString) return ""
    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일 HH:mm", {
        locale: ko,
      })
    } catch {
      return String(dateString)
    }
  }

  // 상대 시간 계산
  const getRelativeTime = (dateString?: string | Date) => {
    if (!dateString) return ""
    const now = new Date()
    const date = new Date(dateString)
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "오늘"
    if (diffDays === 1) return "어제"
    if (diffDays < 7) return `${diffDays}일 전`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}주 전`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}개월 전`
    return `${Math.floor(diffDays / 365)}년 전`
  }

  if (isLoading || !noticeId) {
    return <PageSkeleton variant="notice" />
  }

  if (error || !notice) {
    return (
      <div className={container}>
        <div className={errorContainer}>
          <div className={errorIcon}>❌</div>
          <h2 className={errorTitle}>공지사항을 찾을 수 없습니다</h2>
          <p className={errorMessage}>
            {typeof error === "string"
              ? error
              : "요청하신 공지사항이 존재하지 않거나 삭제되었습니다."}
          </p>
          <Link href="/notice" className={backButton}>
            <ArrowLeftIcon size={20} />
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={container}>
      {/* 헤더 */}
      <div className={header}>
        <Link href="/notice" className={backButton}>
          <ArrowLeftIcon size={20} />
          목록으로 돌아가기
        </Link>
        <div className={breadcrumb}>
          <Link href="/" className={breadcrumbLink}>홈</Link>
          <span className={separator}>›</span>
          <Link href="/notice" className={breadcrumbLink}>공지사항</Link>
          <span className={separator}>›</span>
          <span className={current}>상세보기</span>
        </div>
      </div>

      {/* 공지사항 내용 */}
      <article className={noticeContainer}>
        <div className={noticeHeader}>
          <div className={titleSection}>
            <h1 className={title}>{notice.title}</h1>
            {notice.summary && <p className={summary}>{notice.summary}</p>}
          </div>

          <div className={metaInfo}>
            <div className={metaItem}>
              <UserIcon size={16} />
              <span>{notice.author || "관리자"}</span>
            </div>
            <div className={metaItem}>
              <CalendarIcon size={16} />
              <span>{formatDate(notice.createdAt)}</span>
            </div>
            <div className={metaItem}>
              <ClockIcon size={16} />
              <span>{getRelativeTime(notice.createdAt)}</span>
            </div>
          </div>
        </div>

        <div className={contentSection}>
          <div className={content}>
            <div
              dangerouslySetInnerHTML={{
                __html: notice.content.replace(/\n/g, "<br>"),
              }}
            />
          </div>

          {/* 첨부파일 표시 */}
          {/* {notice.attachments && notice.attachments.length > 0 && (
            <AttachmentDisplay
              attachments={notice.attachments}
              variant="service"
              showImages={true}
              showDownload={true}
            />
          )} */}
        </div>

        {/* 이전/다음 공지사항 네비게이션 (옵션) */}
        <div className={navigationSection}>
          <div className={divider}></div>
          <div className={navigationButtons}>
            <Link href="/notice" className={listButton}>
              목록보기
            </Link>
          </div>
        </div>
      </article>

      {/* 관련 공지사항 또는 최신 공지사항 섹션 (옵션) */}
      <div className={relatedSection}>
        <h3 className={sectionTitle}>다른 공지사항도 확인해보세요</h3>
        <Link href="/notice" className={viewAllLink}>
          전체 공지사항 보기 →
        </Link>
      </div>
    </div>
  )
}
