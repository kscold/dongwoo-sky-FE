"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useWorkShowcases } from "@/hooks/use-content"
import type { WorkShowcase } from "@/types/content"
import * as styles from "./styles.css"

const WorkShowcasesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 10

  const {
    data: workShowcasesData,
    isLoading,
    error,
  } = useWorkShowcases(currentPage, limit)

  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }
    return html.replace(/<[^>]*>/g, "")
  }

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

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          ⚠️ 작업자 자랑거리를 불러올 수 없습니다.
        </div>
      </div>
    )
  }

  const workShowcases = workShowcasesData?.items || []
  const totalPages = workShowcasesData?.totalPages || 1

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h1 className={styles.title}>작업자 자랑거리</h1>
        <p className={styles.subtitle}>
          전문 작업자들이 직접 공유하는 현장 이야기와 작업 성과를 확인해보세요
        </p>
        <Link href="/" className={styles.backButton}>
          ← 메인으로 돌아가기
        </Link>
      </div>

      {/* 작업자 자랑거리 목록 */}
      {workShowcases.length > 0 ? (
        <>
          <div className={styles.grid}>
            {workShowcases.map((showcase: WorkShowcase) => (
              <Link
                key={showcase._id}
                href={`/work-showcases/${showcase._id}`}
                className={styles.card}
              >
                <div className={styles.imageContainer}>
                  {showcase.imageUrls && showcase.imageUrls.length > 0 ? (
                    <img
                      src={showcase.imageUrls[0]}
                      alt={showcase.title}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>🏗️</div>
                  )}
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{showcase.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      👷 {showcase.authorName}
                    </span>
                    {showcase.projectLocation && (
                      <span className={styles.metaItem}>
                        📍 {showcase.projectLocation}
                      </span>
                    )}
                    {showcase.equipmentUsed && (
                      <span className={styles.metaItem}>
                        🚧 {showcase.equipmentUsed}
                      </span>
                    )}
                  </div>
                  <p className={styles.description}>
                    {stripHtml(showcase.content).slice(0, 120)}...
                  </p>
                  <div className={styles.stats}>
                    <span className={styles.stat}>👀 {showcase.viewCount}</span>
                    <span className={styles.stat}>❤️ {showcase.likeCount}</span>
                    <span className={styles.date}>
                      {formatDate(showcase.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                ← 이전
              </button>

              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`${styles.pageNumber} ${
                        currentPage === page ? styles.active : ""
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                다음 →
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          <h3>등록된 작업자 자랑거리가 없습니다</h3>
          <p>첫 번째 작업자 자랑거리를 기다리고 있습니다.</p>
        </div>
      )}
    </div>
  )
}

export default WorkShowcasesPage
