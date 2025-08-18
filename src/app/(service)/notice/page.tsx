"use client"

import React from "react"
import {
  NoticeList,
  NoticePagination,
  useNoticeList
} from "../../../features/service-notice"
import * as styles from "../../../features/service-notice/styles"

export default function NoticePage() {
  const {
    items,
    isLoading,
    error,
    currentPage,
    totalPages,
    onPageChange
  } = useNoticeList()

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* 현대적인 헤더 섹션 */}
        <div className={styles.header}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              marginBottom: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(59, 130, 246, 0.2)"
            }}>
              <span style={{ fontSize: "1.5rem" }}>📢</span>
              <span style={{ 
                fontSize: "0.875rem", 
                fontWeight: "600", 
                color: "#3b82f6",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                Notice Board
              </span>
            </div>
            <h1 className={styles.title}>공지사항</h1>
            <p className={styles.subtitle}>
              중요한 소식과 업데이트를 확인하세요. 서비스 변경사항, 이벤트 정보 등 유용한 정보를
              제공합니다.
            </p>
          </div>
        </div>

        {/* Notice List */}
        <NoticeList items={items} isLoading={isLoading} error={error} />
        
        {/* Pagination */}
        <NoticePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}
