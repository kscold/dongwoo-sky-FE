import React from "react"
import { PageSEO } from "../../../types/seo"
import * as styles from "./seo-card.css"

interface SEOCardProps {
  item: PageSEO
  onEdit: (item: PageSEO) => void
  onDelete: (item: PageSEO) => void
}

export const SEOCard: React.FC<SEOCardProps> = ({ item, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{item.page}</h3>
        <div className={styles.cardActions}>
          <button 
            onClick={() => onEdit(item)}
            className={styles.editButton}
          >
            수정
          </button>
          <button 
            onClick={() => onDelete(item)}
            className={styles.deleteButton}
          >
            삭제
          </button>
        </div>
      </div>
      <div className={styles.cardContent}>
        <p><strong>경로:</strong> {item.path}</p>
        <p><strong>제목:</strong> {item.metadata.title}</p>
        <p><strong>설명:</strong> {item.metadata.description}</p>
        <p><strong>키워드:</strong> {item.metadata.keywords?.join(', ') || '없음'}</p>
      </div>
    </div>
  )
}