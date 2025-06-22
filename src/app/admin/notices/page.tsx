"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdmin } from "@/context/AdminContext"
import { Notice } from "@/types/notice"
import {
  useNotices,
  useDeleteNotice,
  useUpdateNotice,
} from "@/hooks/useNotices"
import Link from "next/link"
import * as styles from "../../../styles/Notices.css"

export default function AdminNoticesPage() {
  const { isAuthenticated } = useAdmin()
  const router = useRouter()
  const { data: notices, isLoading, error } = useNotices()
  const deleteNoticeMutation = useDeleteNotice()
  const updateNoticeMutation = useUpdateNotice()

  // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  // 공지사항 삭제 핸들러
  const handleDelete = async (id: string) => {
    if (!window.confirm("이 공지사항을 삭제하시겠습니까?")) return

    try {
      await deleteNoticeMutation.mutateAsync(id)
      // React Query가 자동으로 목록을 새로고침합니다
    } catch (err) {
      console.error("공지사항 삭제 오류:", err)
      alert("공지사항 삭제에 실패했습니다.")
    }
  }

  // 공지사항 모달 상태 토글
  const toggleModal = async (notice: Notice) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id: notice._id,
        data: { isModal: !notice.isModal },
      })
      // React Query가 자동으로 목록을 새로고침합니다
    } catch (err) {
      console.error("모달 상태 변경 오류:", err)
      alert("모달 상태 변경에 실패했습니다.")
    }
  }

  // 공지사항 공개 상태 토글
  const togglePublished = async (notice: Notice) => {
    try {
      await updateNoticeMutation.mutateAsync({
        id: notice._id,
        data: { isPublished: !notice.isPublished },
      })
      // React Query가 자동으로 목록을 새로고침합니다
    } catch (err) {
      console.error("공개 상태 변경 오류:", err)
      alert("공개 상태 변경에 실패했습니다.")
    }
  }

  // 날짜 포맷 함수
  const formatDate = (dateString?: string) => {
    if (!dateString) return "날짜 없음"
    const date = new Date(dateString)
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`
  }

  if (!isAuthenticated) {
    return null // 로그인 체크 중에는 아무것도 표시하지 않음
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>공지사항 관리</h1>
        <div className={styles.actions}>
          <Link href="/admin/notices/create" className={styles.createButton}>
            새 공지사항
          </Link>
          <Link href="/admin/dashboard" className={styles.backButton}>
            대시보드로 돌아가기
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className={styles.loading}>로딩 중...</div>
      ) : error ? (
        <div className={styles.error}>
          공지사항을 불러오는데 문제가 발생했습니다
        </div>
      ) : notices?.length === 0 ? (
        <div className={styles.empty}>
          <p>등록된 공지사항이 없습니다.</p>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tableHeader}>제목</th>
                <th className={styles.tableHeader}>작성일</th>
                <th className={styles.tableHeader}>공개 상태</th>
                <th className={styles.tableHeader}>모달 표시</th>
                <th className={styles.tableHeader}>관리</th>
              </tr>
            </thead>
            <tbody>
              {notices?.map((notice) => (
                <tr key={notice._id} className={styles.tableRow}>
                  <td className={`${styles.tableCell} ${styles.titleCell}`}>
                    {notice.title}
                  </td>
                  <td className={styles.tableCell}>
                    {formatDate(notice.createdAt)}
                  </td>
                  <td className={styles.tableCell}>
                    <button
                      onClick={() => togglePublished(notice)}
                      className={
                        notice.isPublished
                          ? styles.statusPublished
                          : styles.statusDraft
                      }
                    >
                      {notice.isPublished ? "공개" : "비공개"}
                    </button>
                  </td>
                  <td className={styles.tableCell}>
                    <button
                      onClick={() => toggleModal(notice)}
                      className={
                        notice.isModal
                          ? styles.modalActive
                          : styles.modalInactive
                      }
                    >
                      {notice.isModal ? "활성화" : "비활성화"}
                    </button>
                  </td>
                  <td className={`${styles.tableCell} ${styles.actions}`}>
                    <Link
                      href={`/admin/notices/edit/${notice._id}`}
                      className={styles.editButton}
                    >
                      수정
                    </Link>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className={styles.deleteButton}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
