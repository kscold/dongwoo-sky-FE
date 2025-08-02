import React from "react"
import { TrashIcon } from "lucide-react"
import Link from "next/link"
import { WorkShowcase } from "../../../../types/work-showcase"
import { StatusToggle } from "./StatusToggle"
import * as commonStyles from "../../../../styles/admin/admin-notice.css"

interface WorkShowcaseTableRowProps {
  showcase: WorkShowcase
  onDelete: (id: string) => void
  onToggleActive: (id: string, isActive: boolean) => void
}

export const WorkShowcaseTableRow: React.FC<WorkShowcaseTableRowProps> = ({
  showcase,
  onDelete,
  onToggleActive,
}) => {
  return (
    <tr>
      <td className={commonStyles.tableCell}>
        <Link
          href={`/admin/work-showcase/${showcase._id}`}
          className={commonStyles.link}
        >
          {showcase.title}
        </Link>
      </td>
      <td className={commonStyles.tableCell}>{showcase.authorName || showcase.clientName || "-"}</td>
      <td className={commonStyles.tableCell}>
        {showcase.projectLocation || "-"}
      </td>
      <td className={commonStyles.tableCell}>{showcase.likeCount || showcase.viewCount || 0}</td>
      <td className={commonStyles.tableCell}>
        <StatusToggle
          isActive={showcase.isActive ?? false}
          onToggle={() => onToggleActive(showcase._id, showcase.isActive ?? false)}
        />
      </td>
      <td className={commonStyles.tableCell}>
        {showcase.createdAt
          ? new Date(showcase.createdAt).toLocaleDateString()
          : "날짜 없음"}
      </td>
      <td className={commonStyles.tableCell}>
        <div className={commonStyles.actionButtons}>
          <Link
            href={`/admin/work-showcase/${showcase._id}/edit`}
            className={commonStyles.editButton}
          >
            수정
          </Link>
          <button
            onClick={() => onDelete(showcase._id)}
            className={commonStyles.deleteButton}
          >
            <TrashIcon width={16} height={16} />
          </button>
        </div>
      </td>
    </tr>
  )
}