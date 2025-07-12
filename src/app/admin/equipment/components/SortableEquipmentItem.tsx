"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Equipment } from "../../../../common/types/equipment"
import * as styles from "../../../../styles/admin/admin-equipment.css"

interface SortableEquipmentItemProps {
  equipment: Equipment
  index: number
  onEdit: () => void
  onDelete: () => void
}

const SortableEquipmentItem: React.FC<SortableEquipmentItemProps> = ({
  equipment,
  index,
  onEdit,
  onDelete,
}) => {
  const [imageError, setImageError] = useState(false)

  // 안전한 ID 생성
  const sortableId = equipment.id || `equipment-${index}`;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: sortableId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : undefined,
    opacity: isDragging ? 0.8 : 1,
  }

  // 이미지 URL 검증
  const isValidImageUrl = (url: string): boolean => {
    if (!url || url.trim() === '') return false
    try {
      const urlObj = new URL(url)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
      return false
    }
  }

  const shouldShowImage = equipment.imageUrl && isValidImageUrl(equipment.imageUrl) && !imageError

  return (
    <div ref={setNodeRef} style={style} className={styles.equipmentCard}>
      <div
        className={styles.dragHandle}
        {...attributes}
        {...listeners}
        title="드래그하여 순서 변경"
      >
        <span className={styles.indexNumber}>#{index + 1}</span>
        <div className={styles.dragIcon}>⋮⋮</div>
      </div>

      <div className={styles.equipmentImageContainer}>
        {shouldShowImage ? (
          <Image
            src={equipment.imageUrl}
            alt={equipment.name}
            className={styles.equipmentImage}
            width={80}
            height={60}
            style={{ objectFit: "cover" }}
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        ) : (
          <div className={styles.noImage}>
            <span>🖼️</span>
            <span>이미지 없음</span>
          </div>
        )}
      </div>

      <div className={styles.equipmentInfo}>
        <h3 className={styles.equipmentTitle}>{equipment.name}</h3>
        <p className={styles.equipmentDescription}>
          {equipment.description || "설명이 없습니다."}
        </p>
      </div>

      <div className={styles.equipmentMeta}>
        {equipment.priceRanges && equipment.priceRanges.length > 0 && (
          <div className={styles.equipmentPrice}>
            {equipment.priceRanges[0]}
          </div>
        )}
        <div className={equipment.isPublished ? styles.activeStatus : styles.inactiveStatus}>
          {equipment.isPublished ? "게시됨" : "비공개"}
        </div>
      </div>

      <div className={styles.equipmentActions}>
        <button onClick={onEdit} className={styles.editButton}>
          수정
        </button>
        <button onClick={onDelete} className={styles.deleteButton}>
          삭제
        </button>
      </div>
    </div>
  )
}

export default SortableEquipmentItem 