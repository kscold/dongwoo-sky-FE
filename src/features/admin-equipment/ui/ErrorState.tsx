import React from "react"
import * as styles from "./ErrorState.css"

interface ErrorStateProps {
  error: string
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>장비 관리</h1>
        <p className={styles.subtitle}>
          오류가 발생했습니다: {error}
        </p>
      </div>
    </div>
  )
}