import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContentCardProps, CustomerReviewProps, NoticeProps } from '../../interfaces/content/content.interface'
import { ContentType } from '../../types/content/content.types'
import * as styles from '../../../styles/content/content-page.css'

const ContentCard: React.FC<ContentCardProps> = ({ item, type, onItemClick }) => {
  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

  const renderStars = (rating: number | undefined) => {
    const validRating = rating || 0
    return "★".repeat(validRating) + "☆".repeat(5 - validRating)
  }

  const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return "날짜 미정"
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getItemUrl = () => {
    const baseUrls: Record<ContentType, string> = {
      'customer-review': '/customer-reviews',
      'work-showcase': '/work-showcases',
      'notice': '/notice'
    }
    return `${baseUrls[type]}/${item._id}`
  }

  const renderCustomerReviewContent = (review: CustomerReviewProps) => (
    <>
      {review.rating && (
        <div className={styles.rating}>
          <span className={styles.stars}>
            {renderStars(review.rating)}
          </span>
          <span className={styles.ratingText}>
            ({review.rating}/5)
          </span>
        </div>
      )}
      <div className={styles.meta}>
        {review.customerName && (
          <span className={styles.metaItem}>
            👤 {review.customerName}
          </span>
        )}
        {review.customerCompany && (
          <span className={styles.metaItem}>
            🏢 {review.customerCompany}
          </span>
        )}
        {review.serviceType && (
          <span className={styles.metaItem}>
            🔧 {review.serviceType}
          </span>
        )}
        {review.projectLocation && (
          <span className={styles.metaItem}>
            📍 {review.projectLocation}
          </span>
        )}
      </div>
      <div className={styles.stats}>
        <div className={styles.statsLeft}>
          <span className={styles.stat}>👀 {item.viewCount || 0}</span>
          <span className={styles.stat}>👍 {review.helpfulCount || 0}</span>
        </div>
        <span className={styles.date}>
          {formatDate(item.publishedAt)}
        </span>
      </div>
    </>
  )

  const renderWorkShowcaseContent = () => (
    <div className={styles.stats}>
      <div className={styles.statsLeft}>
        <span className={styles.stat}>👀 {item.viewCount || 0}</span>
      </div>
      <span className={styles.date}>
        {formatDate(item.publishedAt)}
      </span>
    </div>
  )

  const renderNoticeContent = (notice: NoticeProps) => (
    <div className={styles.stats}>
      <div className={styles.statsLeft}>
        <span className={styles.stat}>👀 {item.viewCount || 0}</span>
        {notice.author && (
          <span className={styles.stat}>✍️ {notice.author}</span>
        )}
      </div>
      <span className={styles.date}>
        {formatDate(item.publishedAt)}
      </span>
    </div>
  )

  const cardClassName = type === 'notice' ? styles.noticeCard : styles.card

  return (
    <Link
      href={getItemUrl()}
      className={cardClassName}
      onClick={() => onItemClick?.(item)}
    >
      
      <div className={styles.imageContainer}>
        {item.imageUrls && item.imageUrls.length > 0 ? (
          <Image
            src={item.imageUrls[0]}
            alt={item.title}
            className={styles.image}
            width={320}
            height={220}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            {type === 'customer-review' && '⭐'}
            {type === 'work-showcase' && '🔧'}
            {type === 'notice' && '📢'}
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        
        {type === 'customer-review' && renderCustomerReviewContent(item as CustomerReviewProps)}
        {type === 'work-showcase' && renderWorkShowcaseContent()}
        {type === 'notice' && renderNoticeContent(item as NoticeProps)}
        
        <p className={styles.description}>
          {stripHtml(item.content).slice(0, 120)}...
        </p>
      </div>
    </Link>
  )
}

export default ContentCard