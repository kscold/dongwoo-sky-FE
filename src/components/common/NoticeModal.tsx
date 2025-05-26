"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { useNoticeList } from "@/hooks/useNotice"
import { Notice } from "@/types/notice"
import * as styles from "./NoticeModal.css"

export default function NoticeModal() {
  const { notices, fetchModalNotices } = useNoticeList()
  const [modalNotice, setModalNotice] = useState<Notice | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  // 날짜 포맷 함수
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""

    try {
      return format(new Date(dateString), "yyyy년 MM월 dd일", { locale: ko })
    } catch {
      return dateString
    }
  }

  useEffect(() => {
    const fetchModalNotice = async () => {
      try {
        await fetchModalNotices()
      } catch (error) {
        console.error("모달 공지사항을 불러오는데 실패했습니다.", error)
      }
    }

    fetchModalNotice()
  }, [fetchModalNotices])

  // 모달 공지사항 데이터가 로드되면 처리
  useEffect(() => {
    if (notices && notices.length > 0) {
      setModalNotice(notices[0])

      // 모달을 본 기록을 로컬 스토리지에 저장
      const today = new Date().toISOString().split("T")[0]
      const noticeId = notices[0]._id
      const lastShown = localStorage.getItem(`modal_notice_${noticeId}`)

      // 오늘 본 모달이 아니면 표시
      if (lastShown !== today) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
  }, [notices])

  const closeModal = () => {
    setIsOpen(false)

    // 오늘 모달을 닫았다는 정보를 로컬스토리지에 저장
    if (modalNotice) {
      const today = new Date().toISOString().split("T")[0]
      localStorage.setItem(`modal_notice_${modalNotice._id}`, today)
    }
  }

  // 모달이 없거나 닫혀있으면 아무것도 렌더링하지 않음
  if (!isOpen || !modalNotice) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>공지사항</h2>
          <button className={styles.closeButton} onClick={closeModal}>
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          <h3 className={styles.noticeTitle}>{modalNotice.title}</h3>
          <p className={styles.noticeDate}>
            {formatDate(modalNotice.publishedAt || modalNotice.createdAt)}
          </p>
          <div className={styles.noticeContent}>
            {modalNotice.content.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {modalNotice.attachments && modalNotice.attachments.length > 0 && (
            <div className={styles.attachments}>
              <h4 className={styles.attachmentsTitle}>첨부파일</h4>
              <ul className={styles.attachmentsList}>
                {modalNotice.attachments.map((attachment, index) => (
                  <li key={index} className={styles.attachmentItem}>
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.attachmentLink}
                    >
                      {attachment.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.todayCloseButton} onClick={closeModal}>
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  )
}
