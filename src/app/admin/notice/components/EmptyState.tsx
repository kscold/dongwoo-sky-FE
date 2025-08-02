import React from "react"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import * as styles from "../../../../styles/admin/admin-notice.css"

export const EmptyState: React.FC = () => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.emptyStateIcon}>📝</div>
      <h3>작성된 공지사항이 없습니다</h3>
      <p>새로운 공지사항을 작성해보세요.</p>
      <Link href="/admin/notice/create" className={styles.createButton}>
        <PlusIcon size={20} />
        첫 공지사항 작성하기
      </Link>
    </div>
  )
}