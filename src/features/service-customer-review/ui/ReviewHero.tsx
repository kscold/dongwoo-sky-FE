import * as styles from "./review-hero.css"

export function ReviewHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>고객 리뷰</h1>
        <p className={styles.heroSubtitle}>
          동우스카이를 이용해주신 고객분들의 생생한 후기를 확인해보세요
        </p>
      </div>
    </section>
  )
}