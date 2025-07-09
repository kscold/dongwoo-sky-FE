"use client"

import React from "react"
import Link from "next/link"
import * as styles from "@/styles/service/components/home/notice-section.css"
import { Notice } from "@/common/types/notice"

interface NoticeSectionProps {
  notices: Notice[]
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function NoticeSection({ notices }: NoticeSectionProps) {
  return (
    <section className={styles.noticeSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>📢 어울림 스카이 소식</h2>
        <p className={styles.description}>
          최신 공지사항과 중요한 업데이트를 확인하세요
        </p>
      </div>
      <ul className={styles.noticeList}>
        {notices.slice(0, 5).map(notice => (
          <li key={notice._id} className={styles.noticeItem}>
            <Link href={`/notice/${notice._id}`} className={styles.noticeLink}>
              <span className={styles.noticeTitle}>{notice.title}</span>
              <time
                className={styles.noticeDate}
                dateTime={notice.publishedAt}
              >
                {formatDate(notice.publishedAt)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
