import React from "react"
import { ContactInquiry } from "../types"
import { StatusBadge } from "./StatusBadge"
import { formatDate } from "../utils"
import * as styles from "../../../../features/admin/styles/admin-contact.css"

interface ContactCardProps {
  contact: ContactInquiry
  onSelect: () => void
  onStatusChange: (newStatus: ContactInquiry["status"]) => void
}

export const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onSelect,
  onStatusChange,
}) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactHeader}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactName}>{contact.name}</h3>
          <p className={styles.contactPhone}>📞 {contact.phone}</p>
          {contact.location && (
            <p className={styles.contactLocation}>📍 {contact.location}</p>
          )}
        </div>
        <StatusBadge status={contact.status} />
      </div>
      <div className={styles.contactContent}>
        <p className={styles.contactDetails}>{contact.details}</p>
        <p className={styles.contactDate}>
          접수: {formatDate(contact.createdAt)}
          {contact.updatedAt !== contact.createdAt && (
            <span> | 수정: {formatDate(contact.updatedAt)}</span>
          )}
        </p>
      </div>
      <div className={styles.contactActions}>
        <button onClick={onSelect} className={styles.viewButton}>
          상세보기
        </button>
        <select
          value={contact.status}
          onChange={(e) =>
            onStatusChange(e.target.value as ContactInquiry["status"])
          }
          className={styles.statusSelect}
        >
          <option value="pending">대기중</option>
          <option value="processing">처리중</option>
        </select>
      </div>
    </div>
  )
}