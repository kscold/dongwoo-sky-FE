import React, { useState, useEffect } from 'react'
import { ContentListProps } from '../../interfaces/content/content.interface'
import { getContentConfig } from '../../configs/content/content.config'
import PageHeader from './PageHeader'
import ContentCard from './ContentCard'
import Pagination from '../ui/Pagination'
import PageSkeleton from '../ui/PageSkeleton'
import * as styles from '../../../styles/content/content-page.css'

const ContentList: React.FC<ContentListProps> = ({
  items,
  type,
  isLoading = false,
  error = null,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const config = getContentConfig(type)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isLoading) {
    return <PageSkeleton variant={type} />
  }

  if (error) {
    return (
      <div className={styles.container}>
        <PageHeader
          title={config.title}
          subtitle={config.subtitle}
        />
        <div className={styles.errorState}>
          ⚠️ {error}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <PageHeader
        title={config.title}
        subtitle={config.subtitle}
      />

      {items.length > 0 ? (
        <>
          <div className={styles.grid}>
            {items.map((item) => (
              <ContentCard
                key={item._id}
                item={item}
                type={type}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyStateTitle}>{config.emptyStateTitle}</h3>
          <p className={styles.emptyStateMessage}>{config.emptyStateMessage}</p>
        </div>
      )}
    </div>
  )
}

export default ContentList