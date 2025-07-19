import React from "react"
import Image from "next/image"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

interface EquipmentDetailCardProps {
  equipment: Equipment
  title: string
  specificationsLabel?: string
}

export const EquipmentDetailCard: React.FC<EquipmentDetailCardProps> = ({
  equipment,
  title,
  specificationsLabel = "주요 사양"
}) => {
  return (
    <div className={styles.equipmentDetailCard}>
      <h3 className={styles.detailTitle}>{title}</h3>
      <div className={styles.detailContent}>
        <div className={styles.detailImageWrapper}>
          {equipment.imageUrl ? (
            <Image
              src={equipment.imageUrl}
              alt={equipment.name}
              className={styles.detailImage}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className={styles.detailImagePlaceholder}>🚧</div>
          )}
        </div>
        <div className={styles.detailInfo}>
          <h4 className={styles.detailName}>{equipment.name}</h4>
          <p className={styles.detailDescription}>{equipment.description}</p>
          {equipment.specifications && (
            <div className={styles.detailSpecs}>
              <h5>{specificationsLabel}</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: equipment.specifications,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}