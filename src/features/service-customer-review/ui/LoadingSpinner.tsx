import * as styles from "./loading-spinner.css"

export function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>리뷰를 불러오는 중...</p>
    </div>
  )
}