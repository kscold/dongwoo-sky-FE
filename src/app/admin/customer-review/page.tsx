"use client"

import React, { useState } from "react"
import { 
  useCustomerReviews, 
  useDeleteCustomerReview, 
  useToggleCustomerReviewPublished 
} from "../../../common/hooks/useCustomerReviews"
import * as commonStyles from "../../../styles/admin/admin-notice.css"
import Link from "next/link"
import { PlusIcon, TrashIcon, StarIcon } from "lucide-react"

const ITEMS_PER_PAGE = 10

const AdminCustomerReviewPage: React.FC = () => {
  const [page, setPage] = useState(1)

  const { data: customerReviewsData, isLoading } = useCustomerReviews(page, ITEMS_PER_PAGE)
  const deleteCustomerReviewMutation = useDeleteCustomerReview()
  const togglePublishedMutation = useToggleCustomerReviewPublished()

  const handleDelete = (id: string) => {
    if (window.confirm("정말로 이 고객 리뷰를 삭제하시겠습니까?")) {
      deleteCustomerReviewMutation.mutate(id)
    }
  }

  const handleTogglePublished = (id: string, isPublished: boolean) => {
    togglePublishedMutation.mutate({ id, isPublished: !isPublished })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        width={16} 
        height={16} 
        fill={i < rating ? "#f59e0b" : "none"}
        color={i < rating ? "#f59e0b" : "#e0e0e0"}
      />
    ))
  }

  const totalPages = customerReviewsData
    ? Math.ceil(customerReviewsData.total / ITEMS_PER_PAGE)
    : 0

  return (
    <div className={commonStyles.container}>
      <div className={commonStyles.header}>
        <h1 className={commonStyles.title}>고객 리뷰 관리</h1>
        <Link href="/admin/customer-review/create" className={commonStyles.actionButton}>
          <PlusIcon width={20} height={20} /> 새 리뷰 작성
        </Link>
      </div>
      
      <table className={commonStyles.table}>
        <thead>
          <tr>
            <th className={commonStyles.tableHeader}>제목</th>
            <th className={commonStyles.tableHeader}>고객명</th>
            <th className={commonStyles.tableHeader}>평점</th>
            <th className={commonStyles.tableHeader}>서비스</th>
            <th className={commonStyles.tableHeader}>게시여부</th>
            <th className={commonStyles.tableHeader}>작성일</th>
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
            customerReviewsData?.data.map((review, index) => (
              <tr key={`${review._id}-${index}`}>
                <td className={commonStyles.tableCell}>
                  <Link
                    href={`/admin/customer-review/${review._id}`}
                    className={commonStyles.link}
                  >
                    {review.title}
                  </Link>
                </td>
                <td className={commonStyles.tableCell}>
                  {review.customerName}
                </td>
                <td className={commonStyles.tableCell}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {renderStars(review.rating)}
                  </div>
                </td>
                <td className={commonStyles.tableCell}>
                  {review.serviceType}
                </td>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.statusContainer}>
                    <span className={review.isActive ? commonStyles.publishedBadge : commonStyles.unpublishedBadge}>
                      {review.isActive ? "활성" : "비활성"}
                    </span>
                    <label className={commonStyles.toggle}>
                      <input 
                        type="checkbox" 
                        checked={review.isActive} 
                        onChange={() => handleTogglePublished(review._id, review.isActive)}
                        className={commonStyles.toggleInput}
                      />
                      <span className={`${commonStyles.slider} ${review.isActive ? commonStyles.sliderChecked : ""}`}></span>
                    </label>
                  </div>
                </td>
                <td className={commonStyles.tableCell}>
                  {new Date(review.createdAt).toLocaleDateString()}
                </td>
                <td className={commonStyles.tableCell}>
                  <div className={commonStyles.actionButtons}>
                    <Link
                      href={`/admin/customer-review/${review._id}/edit`}
                      className={commonStyles.editButton}
                    >
                      수정
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className={commonStyles.deleteButton}
                    >
                      <TrashIcon width={16} height={16} />
                    </button>
                  </div>
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

export default AdminCustomerReviewPage
