"use client"

import React from "react"

import { Notice } from "../../types/notice"
import * as styles from "../../../styles/service/components/content-modal.css"

export interface ContentModalProps {
  notice: Notice
  onClose: () => void
  onCloseToday: () => void
}

export const ContentModal: React.FC<ContentModalProps> = ({
  notice,
  onClose,
  onCloseToday,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.badge}>📢 공지사항</span>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{notice.title}</h2>
          {notice.content.split("\\n").map((line, index) => (
            <p key={index} style={{ margin: 0, padding: 0 }}>
              {line}
            </p>
          ))}
        </div>
        <div className={styles.footer}>
          <button onClick={onCloseToday} className={styles.todayBtn}>
            오늘 하루 보지 않기
          </button>
          <button onClick={onClose} className={styles.confirmBtn}>
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
