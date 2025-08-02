import React from "react"
import { ContactInquiry } from "../types"
import { StatusBadge } from "./StatusBadge"
import { formatDate } from "../utils"
import * as styles from "../../../../styles/admin/admin-contact.css"

interface ContactDetailModalProps {
  contact: ContactInquiry
  isOpen: boolean
  onClose: () => void
  onDelete: (contactId: string) => void
  onStatusChange: (contactId: string, newStatus: ContactInquiry["status"]) => void
}

export const ContactDetailModal: React.FC<ContactDetailModalProps> = ({
  contact,
  isOpen,
  onClose,
  onDelete,
  onStatusChange,
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>문의 상세 정보</h2>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>고객 정보</h3>
            <p>
              <strong>이름:</strong> {contact.name}
            </p>
            <p>
              <strong>연락처:</strong> {contact.phone}
            </p>
            {contact.location && (
              <p>
                <strong>작업 위치:</strong> {contact.location}
              </p>
            )}
          </div>

          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>문의 내용</h3>
            <p className={styles.detailContent}>{contact.details}</p>
          </div>

          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>처리 상태</h3>
            <StatusBadge status={contact.status} />
            <p className={styles.dateInfo}>
              접수일시: {formatDate(contact.createdAt)}
              <br />
              최종수정: {formatDate(contact.updatedAt)}
            </p>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button
            onClick={() => onDelete(contact.id)}
            className={styles.deleteButton}
          >
            삭제
          </button>
          <div className={styles.statusActions}>
            <select
              value={contact.status}
              onChange={(e) => {
                const newStatus = e.target.value as ContactInquiry["status"]
                onStatusChange(contact.id, newStatus)
              }}
              className={styles.modalStatusSelect}
            >
              <option value="pending">대기중</option>
              <option value="processing">처리중</option>
            </select>
            <a href={`tel:${contact.phone}`} className={styles.callButton}>
              📞 전화하기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}