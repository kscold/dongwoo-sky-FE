import Link from "next/link"
import * as styles from "./work-showcase-header.css"

interface WorkShowcaseHeaderProps {
  totalCount: number
}

export function WorkShowcaseHeader({ totalCount }: WorkShowcaseHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>작업자 자랑거리 관리</h1>
        <p className={styles.subtitle}>
          총 <strong>{totalCount}</strong>개의 게시물이 있습니다
        </p>
      </div>
      <Link href="/admin/work-showcase/create" className={styles.createButton}>
        + 새 게시물 작성
      </Link>
    </div>
  )
}