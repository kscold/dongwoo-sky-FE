import React from "react"
import { Notice } from "../../../../types/notice"
import { NoticeCard } from "./NoticeCard"
import { EmptyState } from "./EmptyState"
import * as styles from "../../../../styles/admin/admin-notice.css"

interface NoticeListProps {
  notices: Notice[]
  selectedNotice: string | null
  onSelectNotice: (id: string | null) => void
  onDelete: (id: string, title: string) => void
  onTogglePublish: (id: string, isActive: boolean) => void
  onToggleModal: (id: string, isModal: boolean) => void
}

export const NoticeList: React.FC<NoticeListProps> = ({
  notices,
  selectedNotice,
  onSelectNotice,
  onDelete,
  onTogglePublish,
  onToggleModal,
}) => {
  if (!notices || notices.length === 0) {
    return <EmptyState />
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.noticeGrid}>
        {notices.map((notice) => (
          <NoticeCard
            key={notice._id}
            notice={notice}
            isExpanded={selectedNotice === notice._id}
            onToggleExpand={() => 
              onSelectNotice(selectedNotice === notice._id ? null : notice._id)
            }
            onDelete={() => onDelete(notice._id, notice.title)}
            onTogglePublish={() => onTogglePublish(notice._id, notice.isActive || false)}
            onToggleModal={() => onToggleModal(notice._id, notice.isModal || false)}
          />
        ))}
      </div>
    </div>
  )
}