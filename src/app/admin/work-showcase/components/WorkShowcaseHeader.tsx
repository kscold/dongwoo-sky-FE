import React from "react"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import * as commonStyles from "../../../../styles/admin/admin-notice.css"

export const WorkShowcaseHeader: React.FC = () => {
  return (
    <div className={commonStyles.header}>
      <h1 className={commonStyles.title}>작업자 자랑거리 관리</h1>
      <Link
        href="/admin/work-showcase/create"
        className={commonStyles.actionButton}
      >
        <PlusIcon width={20} height={20} /> 새 자랑거리 작성
      </Link>
    </div>
  )
}