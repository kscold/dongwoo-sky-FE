import Link from "next/link"
import * as styles from "./notice-header.css"

interface NoticeHeaderProps {
  totalCount: number
}

export function NoticeHeader({ totalCount }: NoticeHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>공지사항 관리</h1>
        <p className={styles.subtitle}>
          총 <strong>{totalCount}</strong>개의 공지사항이 있습니다
        </p>
      </div>
      <Link href="/admin/notice/create" className={styles.createButton}>
        + 새 공지사항 작성
      </Link>
    </div>
  )
}