import React from "react"
import Link from "next/link"
import Image from "next/image"
import { CustomerReviewProps } from "../../../common/interfaces/content/content.interface"
import * as styles from "../styles"

interface ReviewCardProps {
  review: CustomerReviewProps
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const renderStars = (rating: number = 0) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={styles.stars}>
        {index < rating ? "★" : "☆"}
      </span>
    ))
  }

  return (
    <Link href={`/customer-reviews/${review._id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {review.imageUrls?.[0] ? (
          <Image
            src={review.imageUrls[0]}
            alt={review.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>📝</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{review.title}</h3>
        
        {review.rating && (
          <div className={styles.rating}>
            <div>{renderStars(review.rating)}</div>
            <span className={styles.ratingText}>({review.rating}/5)</span>
          </div>
        )}
        
        {review.summary && (
          <p className={styles.description}>{review.summary}</p>
        )}
        
        <div className={styles.meta}>
          {review.customerName && (
            <span className={styles.metaItem}>👤 {review.customerName}</span>
          )}
          {review.customerCompany && (
            <span className={styles.metaItem}>🏢 {review.customerCompany}</span>
          )}
          {review.serviceType && (
            <span className={styles.metaItem}>🔧 {review.serviceType}</span>
          )}
          {review.projectLocation && (
            <span className={styles.metaItem}>📍 {review.projectLocation}</span>
          )}
        </div>
        
        <div className={styles.stats}>
          <span className={styles.stat}>👀 {review.viewCount || 0}</span>
          <span className={styles.stat}>👍 {review.helpfulCount || 0}</span>
          <span className={styles.date}>
            {new Date(review.publishedAt || review.createdAt || "").toLocaleDateString('ko-KR')}
          </span>
        </div>
      </div>
    </Link>
  )
}