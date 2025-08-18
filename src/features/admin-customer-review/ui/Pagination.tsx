import * as styles from "./pagination.css"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const visiblePages = pages.filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
  )

  return (
    <div className={styles.container}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles.button} ${currentPage === 1 ? styles.disabled : ""}`}
      >
        이전
      </button>

      {visiblePages.map((page, index) => (
        <div key={page} style={{ display: "flex", alignItems: "center" }}>
          {index > 0 && visiblePages[index - 1] < page - 1 && (
            <span className={styles.ellipsis}>...</span>
          )}
          <button
            onClick={() => onPageChange(page)}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ""
            }`}
          >
            {page}
          </button>
        </div>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${styles.button} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
      >
        다음
      </button>
    </div>
  )
}