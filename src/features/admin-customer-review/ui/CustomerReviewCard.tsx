import Link from "next/link"
import type { CustomerReviewResponse } from "../types/customer-review"
import { RatingStars } from "./RatingStars"
import { formatDate } from "../lib/customer-review.utils"
import * as styles from "./customer-review-card.css"

interface CustomerReviewCardProps {
  review: CustomerReviewResponse
  onToggleActive: (id: string, currentStatus: boolean) => void
  onToggleFeatured: (id: string, currentStatus: boolean) => void
  onDelete: (id: string) => void
}

export function CustomerReviewCard({
  review,
  onToggleActive,
  onToggleFeatured,
  onDelete,
}: CustomerReviewCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.customerInfo}>
          <h3 className={styles.customerName}>{review.customerName}</h3>
          {review.company && (
            <span className={styles.company}>{review.company}</span>
          )}
        </div>
        <RatingStars rating={review.rating} />
      </div>

      <div className={styles.content}>
        <p className={styles.reviewText}>{review.content}</p>
        <div className={styles.meta}>
          {review.workType && (
            <span className={styles.workType}>{review.workType}</span>
          )}
          <span className={styles.date}>{formatDate(review.createdAt)}</span>
        </div>
      </div>

      <div className={styles.toggles}>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={review.isActive}
            onChange={() => onToggleActive(review.id, review.isActive)}
          />
          <span>게시</span>
        </label>
        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={review.featured}
            onChange={() => onToggleFeatured(review.id, review.featured)}
          />
          <span>추천</span>
        </label>
      </div>

      <div className={styles.actions}>
        <Link
          href={`/admin/customer-review/${review.id}/edit`}
          className={styles.editButton}
        >
          수정
        </Link>
        <button
          onClick={() => onDelete(review.id)}
          className={styles.deleteButton}
        >
          삭제
        </button>
      </div>
    </div>
  )
}