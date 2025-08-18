import Link from "next/link"
import * as styles from "./customer-review-header.css"

interface CustomerReviewHeaderProps {
  totalCount: number
}

export function CustomerReviewHeader({ totalCount }: CustomerReviewHeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>고객 리뷰 관리</h1>
        <p className={styles.subtitle}>
          총 <strong>{totalCount}</strong>개의 리뷰가 있습니다
        </p>
      </div>
      <Link href="/admin/customer-review/create" className={styles.createButton}>
        + 새 리뷰 작성
      </Link>
    </div>
  )
}