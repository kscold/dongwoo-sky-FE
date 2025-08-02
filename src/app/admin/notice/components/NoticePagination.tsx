import React from "react"
import * as styles from "../../../../styles/admin/admin-notice.css"

interface NoticePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const NoticePagination: React.FC<NoticePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        처음
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        이전
      </button>
      
      <div className={styles.pageNumbers}>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`${styles.pageNumber} ${currentPage === pageNum ? styles.activePage : ''}`}
            >
              {pageNum}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        다음
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        마지막
      </button>
    </div>
  )
}