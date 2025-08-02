import React from "react"
import { WorkShowcase } from "../../../../types/work-showcase"
import { WorkShowcaseTableRow } from "./WorkShowcaseTableRow"
import { LoadingSkeleton } from "./LoadingSkeleton"
import * as commonStyles from "../../../../styles/admin/admin-notice.css"

interface WorkShowcaseTableProps {
  data: WorkShowcase[] | undefined
  isLoading: boolean
  onDelete: (id: string) => void
  onToggleActive: (id: string, isActive: boolean) => void
}

export const WorkShowcaseTable: React.FC<WorkShowcaseTableProps> = ({
  data,
  isLoading,
  onDelete,
  onToggleActive,
}) => {
  return (
    <table className={commonStyles.table}>
      <thead>
        <tr>
          <th className={commonStyles.tableHeader}>제목</th>
          <th className={commonStyles.tableHeader}>작성자</th>
          <th className={commonStyles.tableHeader}>위치</th>
          <th className={commonStyles.tableHeader}>좋아요</th>
          <th className={commonStyles.tableHeader}>활성화</th>
          <th className={commonStyles.tableHeader}>작성일</th>
          <th className={commonStyles.tableHeader}></th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <LoadingSkeleton />
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((showcase, index) => (
            <WorkShowcaseTableRow
              key={`${showcase._id}-${index}`}
              showcase={showcase}
              onDelete={onDelete}
              onToggleActive={onToggleActive}
            />
          ))
        ) : (
          <tr>
            <td
              colSpan={7}
              className={commonStyles.tableCell}
              style={{ textAlign: "center", padding: "2rem" }}
            >
              작업 자랑거리가 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}