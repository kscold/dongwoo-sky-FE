import * as styles from "./loading-skeleton.css"

export function LoadingSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSkeleton} />
        <div className={styles.buttonSkeleton} />
      </div>
      <div className={styles.table}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.cellSkeleton} />
            <div className={styles.cellSkeleton} />
            <div className={styles.cellSkeleton} />
            <div className={styles.cellSkeleton} />
          </div>
        ))}
      </div>
    </div>
  )
}