"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import {
  useTopWorkShowcases,
  useTopCustomerReviews,
  useWorkShowcases,
  useCustomerReviews,
} from "@/common/hooks/useContent"
import type { WorkShowcase, CustomerReview } from "@/common/types/content"
import * as styles from "../../../styles/admin/admin-content.css"

export default function ContentAdminPage() {
  const [activeTab, setActiveTab] = useState<"work" | "review">("work")

  const { data: topWorkShowcases } = useTopWorkShowcases()
  const { data: topCustomerReviews } = useTopCustomerReviews()
  const { data: workShowcases } = useWorkShowcases(1, 10)
  const { data: customerReviews } = useCustomerReviews(1, 10)

  // 타입 안전성을 위한 타입 가드
  const workShowcaseItems = topWorkShowcases as WorkShowcase[] | undefined
  const customerReviewItems = topCustomerReviews as CustomerReview[] | undefined

  const formatDate = (date: string | Date) => {
    return format(new Date(date), "yyyy년 MM월 dd일", { locale: ko })
  }

  const stripHtml = (html: string) => {
    const div = document.createElement("div")
    div.innerHTML = html
    return div.textContent || div.innerText || ""
  }

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>컨텐츠 관리</h1>
        <div className={styles.actions}>
          <Link
            href="/admin/content/work-showcase/new"
            className={styles.createButton}
          >
            + 작업자 자랑거리 작성
          </Link>
          <Link
            href="/admin/content/customer-review/new"
            className={styles.createButton}
          >
            + 고객 리뷰 작성
          </Link>
        </div>
      </div>

      {/* 메인 페이지 미리보기 */}
      <div className={styles.previewSection}>
        <h2 className={styles.sectionTitle}>📱 메인 페이지 미리보기</h2>
        <p className={styles.sectionDescription}>
          현재 메인 페이지에 표시되는 상위 2개 컨텐츠입니다.
        </p>

        <div className={styles.previewGrid}>
          <div className={styles.previewCard}>
            <h3 className={styles.previewCardTitle}>🏆 작업자 자랑거리</h3>
            {workShowcaseItems && workShowcaseItems.length > 0 ? (
              <div className={styles.previewList}>
                {workShowcaseItems.map((item) => (
                  <div key={item._id} className={styles.previewItem}>
                    <h4 className={styles.previewItemTitle}>{item.title}</h4>
                    <p className={styles.previewItemMeta}>
                      {item.authorName} • {formatDate(item.publishedAt)}
                    </p>
                    <p className={styles.previewItemStats}>
                      👀 {item.viewCount} | 👍 {item.likeCount}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>
                표시할 작업자 자랑거리가 없습니다.
              </p>
            )}
          </div>

          <div className={styles.previewCard}>
            <h3 className={styles.previewCardTitle}>⭐ 고객 리뷰</h3>
            {customerReviewItems && customerReviewItems.length > 0 ? (
              <div className={styles.previewList}>
                {customerReviewItems.map((item) => (
                  <div key={item._id} className={styles.previewItem}>
                    <h4 className={styles.previewItemTitle}>{item.title}</h4>
                    <p className={styles.previewItemMeta}>
                      {item.customerName} • {renderStars(item.rating)} •{" "}
                      {formatDate(item.publishedAt)}
                    </p>
                    <p className={styles.previewItemStats}>
                      👀 {item.viewCount} | 👍 {item.helpfulCount}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>표시할 고객 리뷰가 없습니다.</p>
            )}
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className={styles.tabNavigation}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "work" ? styles.tabButtonActive : ""
          }`}
          onClick={() => setActiveTab("work")}
        >
          작업자 자랑거리 관리
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "review" ? styles.tabButtonActive : ""
          }`}
          onClick={() => setActiveTab("review")}
        >
          고객 리뷰 관리
        </button>
      </div>

      {/* 컨텐츠 목록 */}
      <div className={styles.contentSection}>
        {activeTab === "work" ? (
          <div>
            <div className={styles.contentHeader}>
              <h2>작업자 자랑거리 목록</h2>
              <Link
                href="/admin/content/work-showcase/new"
                className={styles.addButton}
              >
                + 새 자랑거리 작성
              </Link>
            </div>

            {workShowcases && workShowcases.items.length > 0 ? (
              <div className={styles.contentGrid}>
                {workShowcases.items.map((item) => (
                  <div key={item._id} className={styles.contentCard}>
                    {item.imageUrls && item.imageUrls.length > 0 && (
                      <div className={styles.cardImage}>
                        <Image
                          src={item.imageUrls[0]}
                          alt={item.title}
                          className={styles.cardImageElement}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardMeta}>
                        작성자: {item.authorName} ({item.authorRole})
                      </p>
                      <p className={styles.cardMeta}>
                        위치: {item.projectLocation} | 장비:{" "}
                        {item.equipmentUsed}
                      </p>
                      <p className={styles.cardDescription}>
                        {stripHtml(item.content).substring(0, 100)}...
                      </p>
                      <div className={styles.cardStats}>
                        <span>👀 {item.viewCount}</span>
                        <span>👍 {item.likeCount}</span>
                        <span>📅 {formatDate(item.publishedAt)}</span>
                      </div>
                      <div className={styles.cardActions}>
                        <Link
                          href={`/admin/content/work-showcase/${item._id}`}
                          className={styles.actionButton}
                        >
                          수정
                        </Link>
                        <button className={styles.actionButtonDanger}>
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyContent}>
                <p>📝 등록된 작업자 자랑거리가 없습니다.</p>
                <Link
                  href="/admin/content/work-showcase/new"
                  className={styles.createFirstButton}
                >
                  첫 번째 자랑거리 작성하기
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className={styles.contentHeader}>
              <h2>고객 리뷰 목록</h2>
              <Link
                href="/admin/content/customer-review/new"
                className={styles.addButton}
              >
                + 새 리뷰 작성
              </Link>
            </div>

            {/* @ts-ignore */}
            {customerReviews && customerReviews.data.length > 0 ? (
              <div className={styles.contentGrid}>
                {/* @ts-ignore */}
                {customerReviews.data.map((item) => (
                  <div key={item._id} className={styles.contentCard}>
                    {item.imageUrls && item.imageUrls.length > 0 && (
                      <div className={styles.cardImage}>
                        <Image
                          src={item.imageUrls[0]}
                          alt={item.title}
                          className={styles.cardImageElement}
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardMeta}>
                        고객: {item.customerName} ({item.customerCompany})
                      </p>
                      <p className={styles.cardMeta}>
                        평점: {renderStars(item.rating)} | 서비스:{" "}
                        {item.serviceType}
                      </p>
                      <p className={styles.cardMeta}>
                        위치: {item.projectLocation}
                      </p>
                      <p className={styles.cardDescription}>
                        {stripHtml(item.content).substring(0, 100)}...
                      </p>
                      <div className={styles.cardStats}>
                        <span>👀 {item.viewCount}</span>
                        <span>👍 {item.helpfulCount}</span>
                        <span>📅 {formatDate(item.publishedAt)}</span>
                      </div>
                      <div className={styles.cardActions}>
                        <Link
                          href={`/admin/content/customer-review/${item._id}`}
                          className={styles.actionButton}
                        >
                          수정
                        </Link>
                        <button className={styles.actionButtonDanger}>
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyContent}>
                <p>📝 등록된 고객 리뷰가 없습니다.</p>
                <Link
                  href="/admin/content/customer-review/new"
                  className={styles.createFirstButton}
                >
                  첫 번째 리뷰 작성하기
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
