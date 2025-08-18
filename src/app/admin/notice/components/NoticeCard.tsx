import React from "react"
import Link from "next/link"
import { TrashIcon, EditIcon, EyeIcon, ImageIcon, FileTextIcon } from "lucide-react"
import { Notice } from "../../../../types/notice"
import { AttachmentDisplay } from "../../../../common/components/notice/AttachmentDisplay"
import { formatDate, getAttachmentSummary } from "../utils/noticeUtils"
import * as styles from "../../../../features/admin/styles/admin-notice.css"

interface NoticeCardProps {
  notice: Notice
  isExpanded: boolean
  onToggleExpand: () => void
  onDelete: () => void
  onTogglePublish: () => void
  onToggleModal: () => void
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  notice,
  isExpanded,
  onToggleExpand,
  onDelete,
  onTogglePublish,
  onToggleModal,
}) => {
  const attachmentSummary = getAttachmentSummary([]) // TODO: implement imageUrls

  return (
    <div className={styles.noticeCard}>
      <div className={styles.noticeHeader}>
        <div className={styles.noticeTitleSection}>
          <h3 className={styles.noticeTitle}>{notice.title}</h3>
          <div className={styles.noticeMeta}>
            <span className={styles.noticeAuthor}>👤 {notice.author || '관리자'}</span>
            <span className={styles.noticeDate}>
              📅 {notice.createdAt ? formatDate(notice.createdAt) : '날짜 없음'}
            </span>
          </div>
        </div>
        <div className={styles.noticeActions}>
          <button
            onClick={onToggleExpand}
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
            onClick={onDelete}
            className={`${styles.actionButton} ${styles.dangerButton}`}
            title="삭제"
          >
            <TrashIcon size={16} />
          </button>
        </div>
      </div>

      <div className={styles.noticeStatusRow}>
        <div className={styles.statusToggles}>
          <label className={styles.toggleContainer}>
            <input
              type="checkbox"
              checked={notice.isActive}
              onChange={onTogglePublish}
              className={styles.toggleInput}
            />
            <span className={`${styles.slider} ${notice.isActive ? styles.sliderChecked : ''}`}></span>
            <span className={styles.toggleLabel}>게시</span>
          </label>
          <label className={styles.toggleContainer}>
            <input
              type="checkbox"
              checked={notice.isModal}
              onChange={onToggleModal}
              className={styles.toggleInput}
            />
            <span className={`${styles.slider} ${notice.isModal ? styles.sliderChecked : ''}`}></span>
            <span className={styles.toggleLabel}>팝업</span>
          </label>
        </div>
        
        {attachmentSummary && (
          <div className={styles.attachmentSummary}>
            {attachmentSummary.images > 0 && (
              <span className={styles.attachmentCount}>
                <ImageIcon size={14} />
                {attachmentSummary.images}
              </span>
            )}
            {attachmentSummary.files > 0 && (
              <span className={styles.attachmentCount}>
                <FileTextIcon size={14} />
                {attachmentSummary.files}
              </span>
            )}
          </div>
        )}
      </div>

      {isExpanded && (
        <div className={styles.noticeExpanded}>
          <div className={styles.noticeContent}>
            <h4>내용 미리보기</h4>
            <div className={styles.contentPreview}>
              {notice.content?.substring(0, 200)}
              {notice.content && notice.content.length > 200 && '...'}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}