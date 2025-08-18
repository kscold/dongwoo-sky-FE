import React from "react"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import * as styles from "../../../../features/admin/styles/admin-notice.css"

interface NoticeHeaderProps {
  totalCount: number
}

export const NoticeHeader: React.FC<NoticeHeaderProps> = ({ totalCount }) => {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>📢 공지사항 관리</h1>
        <p className={styles.subtitle}>
          총 {totalCount}개의 공지사항이 있습니다.
        </p>
      </div>
      <Link href="/admin/notice/create" className={styles.createButton}>
        <PlusIcon size={20} />
        새 공지사항 작성
      </Link>
    </div>
  )
}