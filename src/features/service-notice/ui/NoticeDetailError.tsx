import React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"
import * as styles from "../styles/notice-detail.css"

interface NoticeDetailErrorProps {
  error?: string | Error | null
}

export const NoticeDetailError: React.FC<NoticeDetailErrorProps> = ({ error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>😔</div>
        <h2 className={styles.errorTitle}>공지사항을 찾을 수 없습니다</h2>
        <p className={styles.errorMessage}>
          {typeof error === "string"
            ? error
            : "요청하신 공지사항이 존재하지 않거나 삭제되었습니다."}
        </p>
        <Link href="/notice" className={styles.backButton}>
          <ArrowLeftIcon size={20} />
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
}