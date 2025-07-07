"use client"

import React, { useState } from "react"
import {
  useNotices,
  useDeleteNotice,
} from "../../../common/hooks/useNotices"
import * as commonStyles from "../../../styles/admin/admin-notice.css"
import Link from "next/link"
import { PlusIcon, TrashIcon } from "lucide-react"

const NOTICES_PER_PAGE = 10

const AdminNoticePage: React.FC = () => {
  const [page, setPage] = useState(1)

  const { data: noticesData, isLoading } = useNotices(page, NOTICES_PER_PAGE)
  const deleteNoticeMutation = useDeleteNotice()

  const handleDelete = (id: string) => {
    if (window.confirm("정말로 이 공지사항을 삭제하시겠습니까?")) {
      deleteNoticeMutation.mutate(id)
    }
  }

  const totalPages = noticesData
    ? Math.ceil(noticesData.total / NOTICES_PER_PAGE)
    : 0

  return (
    <div className={commonStyles.container}>
      <div className={commonStyles.header}>
        <h1 className={commonStyles.title}>공지사항 관리</h1>
        <Link href="/admin/notice/create" className={commonStyles.actionButton}>
          <PlusIcon width={20} height={20} /> 새 공지사항 작성
        </Link>
      </div>
      <table className={commonStyles.table}>
        <thead>
          <tr>
            <th className={commonStyles.tableHeader}>제목</th>
            <th className={commonStyles.tableHeader}>작성일</th>
            <th className={commonStyles.tableHeader}>게시여부</th>
            <th className={commonStyles.tableHeader}></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.skeleton} />
                </td>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.skeleton} />
                </td>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.skeleton} />
                </td>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.skeleton} />
                </td>
              </tr>
            ))
          ) : (
            noticesData?.data.map(notice => (
              <tr key={notice._id}>
                <td className={commonStyles.tableCell}>
                  <Link
                    href={`/admin/notice/${notice._id}`}
                    className={commonStyles.link}
                  >
                    {notice.title}
                  </Link>
                </td>
                <td className={commonStyles.tableCell}>
                  {new Date(notice.createdAt).toLocaleDateString()}
                </td>
                <td className={commonStyles.tableCell}>
                  {notice.isPublished ? "게시됨" : "비공개"}
                </td>
                <td className={commonStyles.tableCell}>
                  <button
                    onClick={() => handleDelete(notice._id)}
                    className={commonStyles.deleteButton}
                  >
                    <TrashIcon width={20} height={20} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className={commonStyles.modalActions}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          이전
        </button>
        <span>
          {page} / {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages || totalPages === 0}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default AdminNoticePage
