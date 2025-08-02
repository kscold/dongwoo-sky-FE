import * as styles from "./notice-hero.css"

export function NoticeHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>공지사항</h1>
        <p className={styles.heroSubtitle}>
          동우스카이의 최신 소식과 중요한 공지사항을 확인하세요
        </p>
      </div>
    </section>
  )
}