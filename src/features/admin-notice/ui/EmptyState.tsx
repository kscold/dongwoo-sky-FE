import Link from "next/link"
import * as styles from "./empty-state.css"

export function EmptyState() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>아직 작성된 공지사항이 없습니다.</p>
      <Link href="/admin/notice/create" className={styles.createButton}>
        첫 공지사항 작성하기
      </Link>
    </div>
  )
}