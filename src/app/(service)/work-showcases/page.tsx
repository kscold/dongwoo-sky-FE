"use client"

import React from "react"
import {
  ShowcaseList,
  ShowcasePagination,
  useShowcaseList
} from "../../../features/service-work-showcase"
import * as styles from "../../../features/service-work-showcase/styles"

const WorkShowcasesPage = () => {
  const {
    items,
    isLoading,
    error,
    currentPage,
    totalPages,
    onPageChange
  } = useShowcaseList()

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>작업자의 자랑거리</h1>
          <p className={styles.subtitle}>
            전문 기술과 안전한 작업으로 완성한 다양한 프로젝트 사례를 소개합니다.
            고객 만족과 품질을 최우선으로 하는 저희의 작업 결과를 확인해보세요.
          </p>
        </div>

        {/* Showcase List */}
        <ShowcaseList items={items} isLoading={isLoading} error={error} />
        
        {/* Pagination */}
        <ShowcasePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default WorkShowcasesPage