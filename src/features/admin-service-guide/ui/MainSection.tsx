import React from "react"
import { UseFormRegister } from "react-hook-form"
import { UpdateServiceGuideDto } from "../../../types/service-guide"
import * as styles from "./main-section.css"

interface MainSectionProps {
  register: UseFormRegister<UpdateServiceGuideDto>
}

export const MainSection: React.FC<MainSectionProps> = ({ register }) => {
  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>메인 섹션</h2>
        <p className={styles.cardDescription}>
          페이지 최상단에 표시될 제목과 부제목입니다.
        </p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.formGroup}>
          <label className={styles.label}>제목</label>
          <input {...register("heroTitle")} className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>부제목</label>
          <input {...register("heroSubtitle")} className={styles.input} />
        </div>
      </div>
    </section>
  )
}