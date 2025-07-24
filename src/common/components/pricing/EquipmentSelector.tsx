import React, { useRef } from "react"
import Image from "next/image"
import { Equipment } from "../../../types/equipment"
import * as styles from "../../../styles/page/pricing-page.css"

interface EquipmentSelectorProps {
  activeEquipments: Equipment[]
  selectedId: string | null
  onEquipmentSelect: (equipmentId: string) => void
  settings: {
    equipmentSectionTitle: string
    equipmentSectionDescription: string
  }
  scrollLeftAriaLabel?: string
  scrollRightAriaLabel?: string
}

export const EquipmentSelector: React.FC<EquipmentSelectorProps> = ({
  activeEquipments,
  selectedId,
  onEquipmentSelect,
  settings,
  scrollLeftAriaLabel = "왼쪽으로 스크롤",
  scrollRightAriaLabel = "오른쪽으로 스크롤",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToEquipment = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 300

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {settings.equipmentSectionTitle}
        </h2>
        <p className={styles.sectionDescription}>
          {settings.equipmentSectionDescription}
        </p>
      </div>

      <div className={styles.equipmentSelector}>
        <button
          className={styles.scrollButton}
          onClick={() => scrollToEquipment("left")}
          aria-label={scrollLeftAriaLabel}
        >
          ←
        </button>

        <div className={styles.equipmentScrollContainer}>
          <div className={styles.equipmentList} ref={scrollRef}>
            {activeEquipments.map((equipment) => (
              <div
                key={equipment._id || equipment.id}
                className={`${styles.equipmentCard} ${
                  selectedId === (equipment._id || equipment.id)
                    ? styles.equipmentCardActive
                    : ""
                }`}
                onClick={() => onEquipmentSelect(equipment._id || equipment.id)}
              >
                <div className={styles.equipmentImageWrapper}>
                  {equipment.imageUrl ? (
                    <Image
                      src={equipment.imageUrl}
                      alt={equipment.name}
                      className={styles.equipmentImage}
                      width={200}
                      height={150}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div className={styles.equipmentImagePlaceholder}>🚧</div>
                  )}
                </div>
                <div className={styles.equipmentInfo}>
                  <h3 className={styles.equipmentName}>{equipment.name}</h3>
                  <p className={styles.equipmentPrice}>
                    {equipment.basePrice
                      ? `${equipment.basePrice.toLocaleString()}원~`
                      : "문의"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.scrollButton}
          onClick={() => scrollToEquipment("right")}
          aria-label={scrollRightAriaLabel}
        >
          →
        </button>
      </div>
    </div>
  )
}
