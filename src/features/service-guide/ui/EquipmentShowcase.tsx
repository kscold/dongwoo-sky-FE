import React from "react"
import EquipmentSwiper from "../../../common/components/equipment/EquipmentSwiper"
import { Equipment } from "../../../types/equipment"
import * as styles from "../styles"

interface EquipmentShowcaseProps {
  equipments: Equipment[]
}

export const EquipmentShowcase: React.FC<EquipmentShowcaseProps> = ({ equipments }) => {
  if (!equipments || equipments.length === 0) return null

  return (
    <section className={styles.equipmentSwiperSection}>
      <h2 className={styles.sectionTitle}>대표 장비 보기</h2>
      <EquipmentSwiper equipments={equipments} />
    </section>
  )
}