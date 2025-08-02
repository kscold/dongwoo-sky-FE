import type { WorkShowcaseResponse } from "../types/work-showcase"
import { WorkShowcaseTableRow } from "./WorkShowcaseTableRow"
import * as styles from "./work-showcase-table.css"

interface WorkShowcaseTableProps {
  items: WorkShowcaseResponse[]
  onToggleActive: (id: string, currentStatus: boolean) => void
  onDelete: (id: string) => void
}

export function WorkShowcaseTable({
  items,
  onToggleActive,
  onDelete,
}: WorkShowcaseTableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>제목</th>
            <th className={styles.headerCell}>카테고리</th>
            <th className={styles.headerCell}>작성일</th>
            <th className={styles.headerCell}>조회수</th>
            <th className={styles.headerCell}>좋아요</th>
            <th className={styles.headerCell}>상태</th>
            <th className={styles.headerCell}>액션</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <WorkShowcaseTableRow
              key={item._id || item.id}
              item={item}
              onToggleActive={onToggleActive}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}