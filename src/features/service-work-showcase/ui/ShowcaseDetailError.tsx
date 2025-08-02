import React from "react"
import Link from "next/link"
import * as styles from "./showcase-detail-error.css"

export const ShowcaseDetailError: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorState}>
        ⚠️ 작업자 자랑거리를 찾을 수 없습니다.
        <p className={styles.errorMessage}>
          해당 게시물이 삭제되었거나 비공개 상태일 수 있습니다.
        </p>
      </div>
      <Link href="/work-showcases" className={styles.backButton}>
        ← 목록으로 돌아가기
      </Link>
    </div>
  )
}