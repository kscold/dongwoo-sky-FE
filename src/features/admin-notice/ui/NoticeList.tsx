import type { Notice } from "@/types/notice"
import { NoticeCard } from "./NoticeCard"
import { EmptyState } from "./EmptyState"
import * as styles from "./notice-list.css"

interface NoticeListProps {
  notices: Notice[]
  selectedNotice: Notice | null
  onSelectNotice: (notice: Notice | null) => void
  onDelete: (id: string) => void
  onTogglePublish: (id: string, currentStatus: boolean) => void
  onToggleModal: (id: string, currentStatus: boolean) => void
}

export function NoticeList({
  notices,
  selectedNotice,
  onSelectNotice,
  onDelete,
  onTogglePublish,
  onToggleModal,
}: NoticeListProps) {
  if (notices.length === 0) {
    return <EmptyState />
  }

  return (
    <div className={styles.container}>
      {notices.map((notice) => (
        <NoticeCard
          key={notice._id}
          notice={notice}
          isSelected={selectedNotice?._id === notice._id}
          onSelect={onSelectNotice}
          onDelete={onDelete}
          onTogglePublish={onTogglePublish}
          onToggleModal={onToggleModal}
        />
      ))}
    </div>
  )
}