import * as styles from "./error-message.css"

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>
      <p className={styles.message}>{message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className={styles.retryButton}
      >
        다시 시도
      </button>
    </div>
  )
}