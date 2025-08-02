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
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>공지사항</h1>
          <p className={styles.subtitle}>
            중요한 소식과 업데이트를 확인하세요.
            서비스 변경사항, 이벤트 정보 등 유용한 정보를 제공합니다.
          </p>
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
