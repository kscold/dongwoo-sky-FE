import React from "react"
import { CustomerReviewProps } from "../../../common/interfaces/content/content.interface"
import { ReviewCard } from "./ReviewCard"
import * as styles from "../styles"

interface ReviewListProps {
  items: CustomerReviewProps[]
  isLoading: boolean
  error: string | null
}

export const ReviewList: React.FC<ReviewListProps> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <div className={styles.spinner} />
        <p>고객 리뷰를 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <p>⚠️ 고객 리뷰를 불러오는데 실패했습니다.</p>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>📝 아직 등록된 고객 리뷰가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {items.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  )
}