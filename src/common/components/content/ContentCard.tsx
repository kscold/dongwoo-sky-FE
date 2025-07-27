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
    if (isNaN(date.getTime())) return "날짜 오류"
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  const getDisplayDate = () => {
    // 디버깅을 위해 로그 추가
    console.log('Date debug:', {
      createdAt: item.createdAt,
      publishedAt: item.publishedAt,
      type: typeof item.createdAt,
    })
    
    const dateToUse = item.createdAt || item.publishedAt
    return formatDate(dateToUse)
  }

  const getDisplayText = () => {
    // summary가 있으면 summary를 사용하고, 없으면 content에서 추출
    if (item.summary) {
      return item.summary
    }
    const cleanText = stripHtml(item.content)
    return cleanText.length > 120 ? cleanText.slice(0, 120) + '...' : cleanText
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
          {getDisplayDate()}
        </span>
      </div>
    </>
  )

  const renderWorkShowcaseContent = (showcase: any) => (
    <>
      <div className={styles.meta}>
        {showcase.authorName && (
          <span className={styles.metaItem}>
            👤 {showcase.authorName}
          </span>
        )}
        {showcase.projectLocation && (
          <span className={styles.metaItem}>
            📍 {showcase.projectLocation}
          </span>
        )}
        {showcase.equipmentUsed && (
          <span className={styles.metaItem}>
            🔧 {showcase.equipmentUsed}
          </span>
        )}
      </div>
      <div className={styles.stats}>
        <div className={styles.statsLeft}>
          <span className={styles.stat}>👀 {item.viewCount || 0}</span>
          {showcase.likeCount && (
            <span className={styles.stat}>❤️ {showcase.likeCount}</span>
          )}
        </div>
        <span className={styles.date}>
          {getDisplayDate()}
        </span>
      </div>
    </>
  )

  const renderNoticeContent = (notice: NoticeProps) => (
    <>
      <div className={styles.meta}>
        {notice.author && (
          <span className={styles.metaItem}>
            ✍️ {notice.author}
          </span>
        )}
        {notice.category && (
          <span className={styles.metaItem}>
            🏷️ {notice.category}
          </span>
        )}
        {item.attachments && item.attachments.length > 0 && (
          <span className={styles.metaItem}>
            📎 첨부파일 {item.attachments.length}개
          </span>
        )}
      </div>
      <div className={styles.stats}>
        <div className={styles.statsLeft}>
          <span className={styles.stat}>👀 {item.viewCount || 0}</span>
        </div>
        <span className={styles.date}>
          {getDisplayDate()}
        </span>
      </div>
    </>
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
        
        <p className={styles.description}>
          {getDisplayText()}
        </p>
        
        {type === 'customer-review' && renderCustomerReviewContent(item as CustomerReviewProps)}
        {type === 'work-showcase' && renderWorkShowcaseContent(item)}
        {type === 'notice' && renderNoticeContent(item as NoticeProps)}
      </div>
    </Link>
  )
}

export default ContentCard