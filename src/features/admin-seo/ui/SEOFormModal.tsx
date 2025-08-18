import React from "react"
import { PageSEO, CreateSEODto } from "../../../types/seo"
import * as styles from "./seo-form-modal.css"

interface SEOFormModalProps {
  isOpen: boolean
  editingItem: PageSEO | null
  formData: Partial<CreateSEODto>
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  onFormChange: (data: Partial<CreateSEODto>) => void
}

const predefinedPages = [
  { key: 'home', name: '홈페이지', path: '/' },
  { key: 'service-guide', name: '서비스 안내', path: '/service-guide' },
  { key: 'pricing', name: '이용 요금', path: '/pricing' },
  { key: 'contact', name: '문의하기', path: '/contact' },
]

export const SEOFormModal: React.FC<SEOFormModalProps> = ({
  isOpen,
  editingItem,
  formData,
  onClose,
  onSubmit,
  onFormChange
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{editingItem ? 'SEO 설정 수정' : '새 SEO 설정 추가'}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>페이지</label>
            <select
              value={formData.page}
              onChange={(e) => onFormChange({ ...formData, page: e.target.value })}
              className={styles.select}
              required
            >
              <option value="">페이지 선택</option>
              {predefinedPages.map((page) => (
                <option key={page.key} value={page.key}>
                  {page.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>경로</label>
            <input
              type="text"
              value={formData.path}
              onChange={(e) => onFormChange({ ...formData, path: e.target.value })}
              className={styles.input}
              placeholder="/path"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => onFormChange({ ...formData, title: e.target.value })}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>설명</label>
            <textarea
              value={formData.description}
              onChange={(e) => onFormChange({ ...formData, description: e.target.value })}
              className={styles.textarea}
              rows={3}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>키워드 (쉼표로 구분)</label>
            <input
              type="text"
              value={formData.keywords?.join(', ')}
              onChange={(e) => onFormChange({ 
                ...formData, 
                keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k.length > 0)
              })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>OG 제목</label>
            <input
              type="text"
              value={formData.ogTitle}
              onChange={(e) => onFormChange({ ...formData, ogTitle: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>OG 설명</label>
            <textarea
              value={formData.ogDescription}
              onChange={(e) => onFormChange({ ...formData, ogDescription: e.target.value })}
              className={styles.textarea}
              rows={2}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>로봇 지시</label>
            <select
              value={formData.robots}
              onChange={(e) => onFormChange({ ...formData, robots: e.target.value })}
              className={styles.select}
            >
              <option value="index, follow">index, follow</option>
              <option value="index, nofollow">index, nofollow</option>
              <option value="noindex, follow">noindex, follow</option>
              <option value="noindex, nofollow">noindex, nofollow</option>
            </select>
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              취소
            </button>
            <button type="submit" className={styles.saveButton}>
              {editingItem ? '수정' : '추가'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}