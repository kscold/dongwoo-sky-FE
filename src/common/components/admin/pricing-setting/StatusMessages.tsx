import React from "react"
import * as styles from "../../../../styles/admin/admin-pricing-setting.css"

interface StatusMessagesProps {
  saveStatus: "idle" | "saving" | "success" | "error"
}

export const StatusMessages: React.FC<StatusMessagesProps> = ({ saveStatus }) => {
  if (saveStatus === "success") {
    return (
      <div className={styles.successMessage}>✅ 설정이 저장되었습니다!</div>
    )
  }

  if (saveStatus === "error") {
    return (
      <div className={styles.errorMessage}>
        ❌ 저장 중 오류가 발생했습니다.
      </div>
    )
  }

  return null
}