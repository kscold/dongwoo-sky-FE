import Link from "next/link"
import type { WorkShowcaseResponse } from "../types/work-showcase"
import { StatusToggle } from "./StatusToggle"
import { formatDate } from "../lib/work-showcase.utils"
import * as styles from "./work-showcase-table-row.css"

interface WorkShowcaseTableRowProps {
  item: WorkShowcaseResponse
  onToggleActive: (id: string, currentStatus: boolean) => void
  onDelete: (id: string) => void
}

export function WorkShowcaseTableRow({
  item,
  onToggleActive,
  onDelete,
}: WorkShowcaseTableRowProps) {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>{item.title}</span>
          {item.clientName && (
            <span className={styles.clientName}>{item.clientName}</span>
          )}
        </div>
      </td>
      <td className={styles.cell}>
        <span className={styles.category}>{item.category || "-"}</span>
      </td>
      <td className={styles.cell}>{formatDate(item.createdAt)}</td>
      <td className={styles.cell}>
        <span className={styles.count}>{item.viewCount}</span>
      </td>
      <td className={styles.cell}>
        <span className={styles.count}>{item.likeCount}</span>
      </td>
      <td className={styles.cell}>
        <StatusToggle
          isActive={item.isActive}
          onChange={() => onToggleActive(item._id || item.id || '', item.isActive)}
        />
      </td>
      <td className={styles.cell}>
        <div className={styles.actions}>
          <Link
            href={`/admin/work-showcase/${item._id || item.id}/edit`}
            className={styles.editButton}
          >
            수정
          </Link>
          <button
            onClick={() => onDelete(item._id || item.id || '')}
            className={styles.deleteButton}
          >
            삭제
          </button>
        </div>
      </td>
    </tr>
  )
}