"use client"

import React from "react"
import ProtectedRoute from "@/common/auth/ProtectedRoute"
import {
  useNoticeManagement,
  NoticeHeader,
  NoticeStats,
  NoticeList,
  NoticePagination,
} from "@/features/admin-notice"
import * as styles from "@/features/admin-notice/ui/notice-layout.css"

function AdminNoticeContent() {
  const {
    page,
    setPage,
    selectedNotice,
    setSelectedNotice,
    noticesData,
    isLoading,
    totalPages,
    handleDelete,
    handleTogglePublish,
    handleToggleModal,
  } = useNoticeManagement()

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>공지사항을 불러오는 중...</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <NoticeHeader totalCount={noticesData?.totalItems || 0} />

      <NoticeStats
        notices={noticesData?.data || []}
        totalCount={noticesData?.totalItems || 0}
      />

      <NoticeList
        notices={noticesData?.data || []}
        selectedNotice={selectedNotice}
        onSelectNotice={setSelectedNotice}
        onDelete={handleDelete}
        onTogglePublish={handleTogglePublish}
        onToggleModal={handleToggleModal}
      />

      <NoticePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}

const AdminNoticePage: React.FC = () => {
  return (
    <ProtectedRoute>
      <AdminNoticeContent />
    </ProtectedRoute>
  )
}

export default AdminNoticePage