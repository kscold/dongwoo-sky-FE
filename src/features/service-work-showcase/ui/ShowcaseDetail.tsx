import React from "react"
import Image from "next/image"
import Link from "next/link"
import { WorkShowcase } from "../../../types/work-showcase"
import * as styles from "./showcase-detail.css"

interface ShowcaseDetailProps {
  showcase: WorkShowcase
  onLike: () => void
  isLiking: boolean
}

export const ShowcaseDetail: React.FC<ShowcaseDetailProps> = ({
  showcase,
  onLike,
  isLiking,
}) => {
  const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return "날짜 정보 없음"
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/work-showcases" className={styles.backButton}>
            ← 목록으로 돌아가기
          </Link>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              홈
            </Link>
            <span className={styles.separator}>›</span>
            <Link href="/work-showcases" className={styles.breadcrumbLink}>
              작업 사례
            </Link>
            <span className={styles.separator}>›</span>
            <span className={styles.current}>상세보기</span>
          </nav>
        </div>
        <h1 className={styles.title}>{showcase.title}</h1>
        <div className={styles.meta}>
          <div className={styles.authorInfo}>
            <span className={styles.author}>👷 {showcase.authorName}</span>
          </div>
          <div className={styles.details}>
            {showcase.projectLocation && (
              <span className={styles.detail}>
                📍 {showcase.projectLocation}
              </span>
            )}
            {showcase.equipmentUsed && (
              <span className={styles.detail}>🚧 {showcase.equipmentUsed}</span>
            )}
          </div>
          <div className={styles.stats}>
            <span className={styles.stat}>👀 조회수 {showcase.viewCount}</span>
            <span className={styles.stat}>❤️ 좋아요 {showcase.likeCount}</span>
            <span className={styles.date}>
              {formatDate(showcase.publishedAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 이미지 갤러리 */}
      {showcase.imageUrls && showcase.imageUrls.length > 0 && (
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <Image
              src={showcase.imageUrls[0]}
              alt={showcase.title}
              className={styles.image}
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
          {showcase.imageUrls.length > 1 && (
            <div className={styles.thumbnails}>
              {showcase.imageUrls.slice(1).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt={`${showcase.title} ${index + 2}`}
                  className={styles.thumbnail}
                  width={150}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* 내용 */}
      <div className={styles.content}>
        <div
          className={styles.contentBody}
          dangerouslySetInnerHTML={{ __html: showcase.content }}
        />
      </div>

      {/* 액션 버튼 */}
      <div className={styles.actions}>
        <button
          className={styles.likeButton}
          onClick={onLike}
          disabled={isLiking}
        >
          ❤️ 좋아요 ({showcase.likeCount})
        </button>
      </div>
    </div>
  )
}