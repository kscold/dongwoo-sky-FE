import React from "react"
import { ContactInquiry } from "../types"
import * as styles from "../../../../styles/admin/admin-contact.css"

interface StatusBadgeProps {
  status: ContactInquiry["status"]
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case "pending":
      return (
        <span className={styles.statusBadge} data-status="pending">
          대기중
        </span>
      )
    case "processing":
      return (
        <span className={styles.statusBadge} data-status="processing">
          처리중
        </span>
      )
  }
}