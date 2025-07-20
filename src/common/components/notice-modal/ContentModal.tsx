"use client";

import React from "react";
import Image from "next/image";

import { Notice } from "../../../types/notice";
import { isImageFile, getFileIcon } from "../../../utils/fileUtils";
import * as styles from "../../../styles/service/components/content-modal.css";

export interface ContentModalProps {
  notice: Notice;
  onClose: () => void;
  onCloseToday: () => void;
}

export const ContentModal: React.FC<ContentModalProps> = ({
  notice,
  onClose,
  onCloseToday,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.badge}>📢 공지사항</span>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{notice.title}</h2>
          <div className={styles.contentText}>
            {notice.content.split("\\n").map((line, index) => (
              <p key={index} style={{ margin: "0 0 8px 0", padding: 0 }}>
                {line}
              </p>
            ))}
          </div>

          {/* 첨부파일 표시 - 깔끔하게 */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className={styles.attachmentsSection}>
              {/* 이미지 첨부파일들 - 제목 없이 이미지만 */}
              {notice.attachments.filter((file) => isImageFile(file.name))
                .length > 0 && (
                <div className={styles.imageGrid}>
                  {notice.attachments
                    .filter((file) => isImageFile(file.name))
                    .map((file, index) => (
                      <div
                        key={`image-${index}`}
                        className={styles.imageAttachment}
                      >
                        <Image
                          src={file.url}
                          alt={file.name}
                          width={400}
                          height={300}
                          className={styles.attachmentImage}
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            if (target.nextElementSibling) {
                              (
                                target.nextElementSibling as HTMLElement
                              ).style.display = "flex";
                            }
                          }}
                        />
                        <div
                          className={styles.imageErrorFallback}
                          style={{ display: "none" }}
                        >
                          이미지를 불러올 수 없습니다
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* 문서 첨부파일들 - 심플하게 */}
              {notice.attachments.filter((file) => !isImageFile(file.name))
                .length > 0 && (
                <div className={styles.documentsList}>
                  {notice.attachments
                    .filter((file) => !isImageFile(file.name))
                    .map((file, index) => (
                      <a
                        key={`document-${index}`}
                        href={file.url}
                        download={file.name}
                        className={styles.documentLink}
                      >
                        <span className={styles.fileIcon}>
                          {getFileIcon(file.name)}
                        </span>
                        <span className={styles.fileName}>{file.name}</span>
                      </a>
                    ))}
                </div>
              )}
            </div>
          )}
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
  );
};
