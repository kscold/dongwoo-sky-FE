import Link from "next/link"
import { TrashIcon, EditIcon, EyeIcon } from "lucide-react"
import type { Notice } from "@/types/notice"
import { formatDate } from "../lib/notice.utils"
import * as styles from "./notice-card.css"

interface NoticeCardProps {
  notice: Notice
  isSelected: boolean
  onSelect: (notice: Notice | null) => void
  onDelete: (id: string) => void
  onTogglePublish: (id: string, currentStatus: boolean) => void
  onToggleModal: (id: string, currentStatus: boolean) => void
}

export function NoticeCard({
  notice,
  isSelected,
  onSelect,
  onDelete,
  onTogglePublish,
  onToggleModal,
}: NoticeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{notice.title}</h3>
          <div className={styles.meta}>
            <span className={styles.author}>👤 {notice.author || "관리자"}</span>
            <span className={styles.date}>📅 {notice.createdAt ? formatDate(notice.createdAt.toString()) : "날짜 없음"}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            onClick={() => onSelect(isSelected ? null : notice)}
            className={`${styles.actionButton} ${styles.secondaryButton}`}
            title="상세보기"
          >
            <EyeIcon size={16} />
          </button>
          <Link
            href={`/admin/notice/${notice._id}/edit`}
            className={`${styles.actionButton} ${styles.primaryButton}`}
            title="수정"
          >
            <EditIcon size={16} />
          </Link>
          <button
            onClick={() => onDelete(notice._id)}
            className={`${styles.actionButton} ${styles.dangerButton}`}
            title="삭제"
          >
            <TrashIcon size={16} />
          </button>
        </div>
      </div>

      <div className={styles.statusRow}>
        <div className={styles.toggles}>
          <label className={styles.toggleContainer}>
            <input
              type="checkbox"
              checked={notice.isActive || false}
              onChange={() => onTogglePublish(notice._id, notice.isActive || false)}
              className={styles.toggleInput}
            />
            <span className={`${styles.slider} ${notice.isActive ? styles.sliderChecked : ""}`} />
            <span className={styles.toggleLabel}>게시</span>
          </label>
          <label className={styles.toggleContainer}>
            <input
              type="checkbox"
              checked={notice.isModal}
              onChange={() => onToggleModal(notice._id, notice.isModal || false)}
              className={styles.toggleInput}
            />
            <span className={`${styles.slider} ${notice.isModal ? styles.sliderChecked : ""}`} />
            <span className={styles.toggleLabel}>팝업</span>
          </label>
        </div>
      </div>

      {isSelected && (
        <div className={styles.expanded}>
          <div className={styles.content}>
            <h4>내용 미리보기</h4>
            <div className={styles.preview}>
              {notice.content?.substring(0, 200)}
              {notice.content && notice.content.length > 200 && "..."}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}