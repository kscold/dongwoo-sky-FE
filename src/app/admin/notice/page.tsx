"use client"

import React, { useState } from "react"
import Link from "next/link"
import { PlusIcon, TrashIcon, EditIcon, EyeIcon, ImageIcon, FileTextIcon } from "lucide-react"

import {
  useNoticesAdmin,
  useDeleteNotice,
  useUpdateNotice,
} from "../../../common/hooks/useNotices"
import { AttachmentDisplay } from "../../../common/components/notice/AttachmentDisplay"
import { processAttachment, formatFileSize } from "../../../common/utils/fileUtils"
import "../../../styles/admin/admin-notice.css"

const NOTICES_PER_PAGE = 10

const AdminNoticePage: React.FC = () => {
  const [page, setPage] = useState(1)
  const [selectedNotice, setSelectedNotice] = useState<string | null>(null)

  const { data: noticesData, isLoading } = useNoticesAdmin(
    page,
    NOTICES_PER_PAGE
  )
  const deleteNoticeMutation = useDeleteNotice()
  const updateNoticeMutation = useUpdateNotice()

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`정말로 "${title}" 공지사항을 삭제하시겠습니까?`)) {
      deleteNoticeMutation.mutate(id)
    }
  }

  const handleTogglePublish = async (id: string, isPublished: boolean) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id,
        data: { isPublished: !isPublished }
      })
    } catch (error) {
      alert("상태 변경 중 오류가 발생했습니다.")
    }
  }

  const handleToggleModal = async (id: string, isModal: boolean) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id,
        data: { isModal: !isModal }
      })
    } catch (error) {
      alert("모달 설정 변경 중 오류가 발생했습니다.")
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getAttachmentSummary = (attachments: any[]) => {
    if (!attachments || attachments.length === 0) return null
    
    const processed = attachments.map(processAttachment)
    const images = processed.filter(att => att.isImage)
    const files = processed.filter(att => !att.isImage)
    
    return { images: images.length, files: files.length, total: attachments.length }
  }

  const totalPages = noticesData
    ? Math.ceil(noticesData.total / NOTICES_PER_PAGE)
    : 0

  if (isLoading) {
    return (
      <div className="container">
        <div className="loadingContainer">
          <div className="loadingSpinner"></div>
          <p>공지사항을 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <div className="headerContent">
          <h1 className="title">📢 공지사항 관리</h1>
          <p className="subtitle">
            총 {noticesData?.total || 0}개의 공지사항이 있습니다.
          </p>
        </div>
        <Link href="/admin/notice/create" className="createButton">
          <PlusIcon size={20} />
          새 공지사항 작성
        </Link>
      </div>

      <div className="statsContainer">
        <div className="statCard">
          <div className="statIcon">📊</div>
          <div className="statContent">
            <span className="statNumber">{noticesData?.total || 0}</span>
            <span className="statLabel">전체 공지사항</span>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon">✅</div>
          <div className="statContent">
            <span className="statNumber">
              {noticesData?.data.filter(n => n.isPublished).length || 0}
            </span>
            <span className="statLabel">게시중</span>
          </div>
        </div>
        <div className="statCard">
          <div className="statIcon">🔔</div>
          <div className="statContent">
            <span className="statNumber">
              {noticesData?.data.filter(n => n.isModal).length || 0}
            </span>
            <span className="statLabel">팝업 공지</span>
          </div>
        </div>
      </div>

      <div className="tableContainer">
        {noticesData?.data && noticesData.data.length > 0 ? (
          <div className="noticeGrid">
            {noticesData.data.map((notice) => {
              const attachmentSummary = getAttachmentSummary(notice.attachments)
              const isExpanded = selectedNotice === notice._id

              return (
                <div key={notice._id} className="noticeCard">
                  <div className="noticeHeader">
                    <div className="noticeTitle">
                      <h3>{notice.title}</h3>
                      <div className="noticeMeta">
                        <span className="noticeAuthor">👤 {notice.author || '관리자'}</span>
                        <span className="noticeDate">📅 {formatDate(notice.createdAt)}</span>
                      </div>
                    </div>
                    <div className="noticeActions">
                      <button
                        onClick={() => setSelectedNotice(isExpanded ? null : notice._id)}
                        className="actionButton secondary"
                        title="상세보기"
                      >
                        <EyeIcon size={16} />
                      </button>
                      <Link
                        href={`/admin/notice/${notice._id}/edit`}
                        className="actionButton primary"
                        title="수정"
                      >
                        <EditIcon size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(notice._id, notice.title)}
                        className="actionButton danger"
                        title="삭제"
                      >
                        <TrashIcon size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="noticeStatusRow">
                    <div className="statusToggles">
                      <label className="toggleContainer">
                        <input
                          type="checkbox"
                          checked={notice.isPublished}
                          onChange={() => handleTogglePublish(notice._id, notice.isPublished)}
                        />
                        <span className="toggleSlider"></span>
                        <span className="toggleLabel">게시</span>
                      </label>
                      <label className="toggleContainer">
                        <input
                          type="checkbox"
                          checked={notice.isModal}
                          onChange={() => handleToggleModal(notice._id, notice.isModal)}
                        />
                        <span className="toggleSlider"></span>
                        <span className="toggleLabel">팝업</span>
                      </label>
                    </div>
                    
                    {attachmentSummary && (
                      <div className="attachmentSummary">
                        {attachmentSummary.images > 0 && (
                          <span className="attachmentCount">
                            <ImageIcon size={14} />
                            {attachmentSummary.images}
                          </span>
                        )}
                        {attachmentSummary.files > 0 && (
                          <span className="attachmentCount">
                            <FileTextIcon size={14} />
                            {attachmentSummary.files}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {isExpanded && (
                    <div className="noticeExpanded">
                      <div className="noticeContent">
                        <h4>내용 미리보기</h4>
                        <div className="contentPreview">
                          {notice.content?.substring(0, 200)}
                          {notice.content && notice.content.length > 200 && '...'}
                        </div>
                      </div>
                      
                      {notice.attachments && notice.attachments.length > 0 && (
                        <AttachmentDisplay
                          attachments={notice.attachments}
                          variant="admin"
                          showImages={true}
                          showDownload={true}
                        />
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="emptyState">
            <div className="emptyStateIcon">📝</div>
            <h3>작성된 공지사항이 없습니다</h3>
            <p>새로운 공지사항을 작성해보세요.</p>
            <Link href="/admin/notice/create" className="createButton">
              <PlusIcon size={20} />
              첫 공지사항 작성하기
            </Link>
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="paginationButton"
          >
            처음
          </button>
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="paginationButton"
          >
            이전
          </button>
          
          <div className="pageNumbers">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 4, page - 2)) + i
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`pageNumber ${page === pageNum ? 'active' : ''}`}
                >
                  {pageNum}
                </button>
              )
            })}
          </div>

          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="paginationButton"
          >
            다음
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="paginationButton"
          >
            마지막
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminNoticePage