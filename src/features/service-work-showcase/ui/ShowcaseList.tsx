import React from "react"
import Link from "next/link"
import Image from "next/image"
import { WorkShowcaseProps } from "../../../common/interfaces/content/content.interface"
import * as styles from "../styles"

interface ShowcaseListProps {
  items: WorkShowcaseProps[]
  isLoading: boolean
  error: string | null
}

export const ShowcaseList: React.FC<ShowcaseListProps> = ({ items, isLoading, error }) => {
  // 디버깅을 위한 로그
  console.log("ShowcaseList - items:", items);
  console.log("ShowcaseList - isLoading:", isLoading);
  console.log("ShowcaseList - error:", error);

  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <div className={styles.spinner} />
        <p>작업 사례를 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <p>⚠️ 작업 사례를 불러오는데 실패했습니다.</p>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>📸 아직 등록된 작업 사례가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link key={item._id} href={`/work-showcases/${item._id}`} className={styles.card}>
          <div className={styles.imageContainer}>
            {item.imageUrls?.[0] ? (
              <Image
                src={item.imageUrls[0]}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>📷</span>
              </div>
            )}
          </div>
          <div className={styles.content}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            {item.summary && (
              <p className={styles.description}>{item.summary}</p>
            )}
            <div className={styles.meta}>
              {item.authorName && (
                <span className={styles.metaItem}>👷 {item.authorName}</span>
              )}
              {item.projectLocation && (
                <span className={styles.metaItem}>📍 {item.projectLocation}</span>
              )}
              {item.equipmentUsed && (
                <span className={styles.metaItem}>🚧 {item.equipmentUsed}</span>
              )}
            </div>
            <div className={styles.stats}>
              <span className={styles.stat}>👀 {item.viewCount}</span>
              <span className={styles.stat}>❤️ {item.likeCount}</span>
              <span className={styles.date}>
                {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('ko-KR') : '날짜 없음'}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}