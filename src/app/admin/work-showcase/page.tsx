"use client"

import React, { useState } from "react"
import { PlusIcon, TrashIcon } from "lucide-react"
import Link from "next/link"

import {
  useAdminWorkShowcases,
  useDeleteWorkShowcase,
  useUpdateWorkShowcase,
} from "../../../common/hooks/useWorkShowcase"
import * as commonStyles from "../../../styles/admin/admin-notice.css"

const ITEMS_PER_PAGE = 10

const AdminWorkShowcasePage: React.FC = () => {
  const [page, setPage] = useState(1)

  const { data: workShowcasesData, isLoading } = useAdminWorkShowcases(
    page,
    ITEMS_PER_PAGE
  )
  const deleteWorkShowcaseMutation = useDeleteWorkShowcase()
  const updateWorkShowcaseMutation = useUpdateWorkShowcase()

  const handleDelete = (id: string) => {
    if (window.confirm("정말로 이 작업 자랑거리를 삭제하시겠습니까?")) {
      deleteWorkShowcaseMutation.mutate(id)
    }
  }

  const handleToggleActive = (id: string, isActive: boolean) => {
    updateWorkShowcaseMutation.mutate({ 
      id, 
      data: { isPublished: !isActive }
    })
  }

  const totalPages = workShowcasesData
    ? Math.ceil(workShowcasesData.total / ITEMS_PER_PAGE)
    : 0

  return (
    <div className={commonStyles.container}>
      <div className={commonStyles.header}>
        <h1 className={commonStyles.title}>작업자 자랑거리 관리</h1>
        <Link
          href="/admin/work-showcase/create"
          className={commonStyles.actionButton}
        >
          <PlusIcon width={20} height={20} /> 새 자랑거리 작성
        </Link>
      </div>

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
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
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
            : workShowcasesData?.data.map((showcase, index) => (
                <tr key={`${showcase._id}-${index}`}>
                  <td className={commonStyles.tableCell}>
                    <Link
                      href={`/admin/work-showcase/${showcase._id}`}
                      className={commonStyles.link}
                    >
                      {showcase.title}
                    </Link>
                  </td>
                  <td className={commonStyles.tableCell}>
                    {showcase.authorName}
                  </td>
                  <td className={commonStyles.tableCell}>
                    {showcase.projectLocation || "-"}
                  </td>
                  <td className={commonStyles.tableCell}>
                    {showcase.likeCount || 0}
                  </td>
                  <td className={commonStyles.tableCell}>
                    <div className={commonStyles.statusContainer}>
                      <span
                        className={
                          showcase.isActive
                            ? commonStyles.publishedBadge
                            : commonStyles.unpublishedBadge
                        }
                      >
                        {showcase.isActive ? "활성화" : "비활성화"}
                      </span>
                      <label className={commonStyles.toggle}>
                        <input
                          type="checkbox"
                          checked={showcase.isActive}
                          onChange={() =>
                            handleToggleActive(showcase._id, showcase.isActive)
                          }
                          className={commonStyles.toggleInput}
                        />
                        <span
                          className={`${commonStyles.slider} ${
                            showcase.isActive ? commonStyles.sliderChecked : ""
                          }`}
                        ></span>
                      </label>
                    </div>
                  </td>
                  <td className={commonStyles.tableCell}>
                    {new Date(showcase.createdAt).toLocaleDateString()}
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
                        onClick={() => handleDelete(showcase._id)}
                        className={commonStyles.deleteButton}
                      >
                        <TrashIcon width={16} height={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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

export default AdminWorkShowcasePage
