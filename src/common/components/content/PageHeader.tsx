import React from 'react'
import Link from 'next/link'
import { PageHeaderProps } from '../../interfaces/content/content.interface'
import * as styles from '../../../styles/content/content-page.css'

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backUrl = '/',
  backButtonText = '← 메인으로 돌아가기'
}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <Link href={backUrl} className={styles.backButton}>
        {backButtonText}
      </Link>
    </div>
  )
}

export default PageHeader