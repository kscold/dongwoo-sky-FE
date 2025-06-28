"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useWorkShowcase } from "@/common/hooks/useContent.ts"
import * as styles from "./styles.css.ts"

const WorkShowcaseDetailPage = () => {
  const params = useParams()
  const id = params.id as string

  const { data: showcase, isLoading, error } = useWorkShowcase(id)

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          ⏳ 작업자 자랑거리를 불러오는 중입니다...
        </div>
      </div>
    )
  }

  if (error || !showcase) {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          ⚠️ 작업자 자랑거리를 찾을 수 없습니다.
        </div>
        <Link href="/work-showcases" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <Link href="/work-showcases" className={styles.backButton}>
          ← 목록으로 돌아가기
        </Link>
        <h1 className={styles.title}>{showcase.title}</h1>
        <div className={styles.meta}>
          <div className={styles.authorInfo}>
            <span className={styles.author}>👷 {showcase.authorName}</span>
            {showcase.authorRole && (
              <span className={styles.role}>({showcase.authorRole})</span>
            )}
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
        <button className={styles.likeButton}>
          ❤️ 좋아요 ({showcase.likeCount})
        </button>
        <Link href="/work-showcases" className={styles.backToListButton}>
          다른 자랑거리 보기
        </Link>
      </div>
    </div>
  )
}

export default WorkShowcaseDetailPage
