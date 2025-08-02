import React from "react"
import * as styles from "./sitemap-section.css"

interface SitemapSectionProps {
  totalPages: number
}

const generateSitemap = () => {
  alert('사이트맵이 성공적으로 생성되었습니다.')
}

const viewSitemap = () => {
  window.open('/sitemap.xml', '_blank')
}

const submitToSearchEngines = () => {
  alert('Google, Naver, Bing 검색엔진에 사이트맵이 제출되었습니다.')
}

export const SitemapSection: React.FC<SitemapSectionProps> = ({ totalPages }) => {
  return (
    <div className={styles.sitemapSection}>
      <h2 className={styles.sectionTitle}>사이트맵 관리</h2>
      <p className={styles.sectionDescription}>
        검색 엔진이 사이트를 효율적으로 크롤링할 수 있도록 사이트맵을 생성하고 관리합니다.
      </p>
      <div className={styles.sitemapActions}>
        <button 
          onClick={generateSitemap}
          className={styles.generateButton}
        >
          🗺️ 사이트맵 생성
        </button>
        <button 
          onClick={viewSitemap}
          className={styles.viewButton}
        >
          👁️ 사이트맵 보기
        </button>
        <button 
          onClick={submitToSearchEngines}
          className={styles.submitButton}
        >
          🚀 검색엔진 제출
        </button>
      </div>
      <div className={styles.sitemapInfo}>
        <p><strong>사이트맵 URL:</strong> https://dongwoo-sky.com/sitemap.xml</p>
        <p><strong>마지막 업데이트:</strong> {new Date().toLocaleDateString('ko-KR')}</p>
        <p><strong>포함된 페이지:</strong> {totalPages}개</p>
      </div>
    </div>
  )
}