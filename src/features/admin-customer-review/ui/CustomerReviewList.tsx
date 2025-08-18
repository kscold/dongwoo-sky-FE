import type { CustomerReviewResponse } from "../types/customer-review"
import { CustomerReviewCard } from "./CustomerReviewCard"
import * as styles from "./customer-review-list.css"

interface CustomerReviewListProps {
  reviews: CustomerReviewResponse[]
  onToggleActive: (id: string, currentStatus: boolean) => void
  onToggleFeatured: (id: string, currentStatus: boolean) => void
  onDelete: (id: string) => void
}

export function CustomerReviewList({
  reviews,
  onToggleActive,
  onToggleFeatured,
  onDelete,
}: CustomerReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>아직 등록된 리뷰가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {reviews.map((review) => (
        <CustomerReviewCard
          key={review.id}
          review={review}
          onToggleActive={onToggleActive}
          onToggleFeatured={onToggleFeatured}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}