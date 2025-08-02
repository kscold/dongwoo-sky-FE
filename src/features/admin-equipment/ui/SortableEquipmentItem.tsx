"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Equipment } from "../../../../types/equipment"
import * as styles from "./SortableEquipmentItem.css"

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
  const sortableId = equipment.id || `equipment-${index}`

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

  // 이미지 URL 검증 - CloudFront URL 특별 처리
  const isValidImageUrl = (url: string): boolean => {
    if (!url || url.trim() === "") return false

    // CloudFront URL이나 다른 CDN URL의 경우 확장자가 없을 수 있으므로 더 관대하게 처리
    try {
      const urlObj = new URL(url)
      const isHttps =
        urlObj.protocol === "http:" || urlObj.protocol === "https:"

      // CDN 도메인인지 확인
      const cdnDomain =
        process.env.NEXT_PUBLIC_CDN_URL?.replace("https://", "") ||
        "d1h7waosxik1t4.cloudfront.net"
      const isCDN =
        urlObj.hostname.includes(cdnDomain.split(".")[0]) ||
        urlObj.hostname === cdnDomain

      // S3 도메인인지 확인
      const isS3 =
        urlObj.hostname.includes("s3.") &&
        urlObj.hostname.includes("amazonaws.com")

      // CDN URL이거나 S3 URL이거나 일반적인 이미지 확장자를 가진 URL
      const hasImageExtension = /\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)$/i.test(
        url
      )

      return isHttps && (isCDN || isS3 || hasImageExtension)
    } catch {
      return false
    }
  }

  const shouldShowImage =
    equipment.imageUrl &&
    isValidImageUrl(equipment.imageUrl) &&
    !imageError &&
    equipment.imageUrl.trim() !== ""

  // 디버깅용 로그
  React.useEffect(() => {
    if (equipment.imageUrl) {
      console.log(`장비 ${equipment.name} 이미지 URL:`, equipment.imageUrl)
      console.log(`URL 유효성:`, isValidImageUrl(equipment.imageUrl))
      console.log(`이미지 표시 여부:`, shouldShowImage)
    }
  }, [equipment.imageUrl, equipment.name, shouldShowImage])

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
            priority={true}
            onError={(e) => {
              console.error(
                `이미지 로드 실패 - ${equipment.name}: ${equipment.imageUrl}`
              )
              setImageError(true)
            }}
            onLoad={() => {
              console.log(
                `이미지 로드 성공 - ${equipment.name}: ${equipment.imageUrl}`
              )
              setImageError(false)
            }}
            unoptimized={equipment.imageUrl?.includes(
              process.env.NEXT_PUBLIC_CDN_URL?.replace("https://", "") ||
                "d1h7waosxik1t4.cloudfront.net"
            )}
          />
        ) : (
          <div className={styles.noImage}>
            <span>🖼️</span>
            <span>
              {!equipment.imageUrl
                ? "이미지 없음"
                : imageError
                ? "이미지 로드 실패"
                : !isValidImageUrl(equipment.imageUrl)
                ? "이미지 형식 오류"
                : "이미지 로딩..."}
            </span>
            {equipment.imageUrl && (
              <div
                style={{
                  fontSize: "10px",
                  marginTop: "4px",
                  opacity: 0.7,
                  wordBreak: "break-all",
                }}
              >
                {equipment.imageUrl.length > 50
                  ? `${equipment.imageUrl.substring(0, 50)}...`
                  : equipment.imageUrl}
              </div>
            )}
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
        <div
          className={
            equipment.isPublished ? styles.activeStatus : styles.inactiveStatus
          }
        >
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
