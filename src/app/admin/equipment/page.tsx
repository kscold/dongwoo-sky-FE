"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useAdmin } from "@/common/context/AdminContext"
import { Equipment, CreateEquipmentDto } from "@/common/types/equipment"
import { equipmentApi } from "@/api/equipment"
import * as styles from "../../../styles/admin/admin-equipment.css"
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  PhotoIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline"

export default function AdminEquipmentPage() {
  const { isAuthenticated } = useAdmin()
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingEquipment, setEditingEquipment] = useState<Equipment | null>(
    null
  )
  const [formData, setFormData] = useState<CreateEquipmentDto>({
    name: "",
    description: "",
    imageUrl: "",
    isActive: true,
    sortOrder: 0,
    specifications: "",
    capabilities: [],
    priceRange: "",
    maxHeight: "",
    maxWeight: "",
    tonnage: "",
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      fetchEquipment()
    }
  }, [isAuthenticated])

  const fetchEquipment = async () => {
    try {
      setLoading(true)
      const data = await equipmentApi.getAllAdmin()
      setEquipment(data)
    } catch (error) {
      console.error("Error fetching equipment:", error)
      alert("장비 목록을 불러오는데 실패했습니다.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setUploading(true)

      let imageUrl = formData.imageUrl

      // 이미지 파일이 있으면 업로드
      if (imageFile) {
        const uploadResult = await equipmentApi.uploadImage(imageFile)
        imageUrl = uploadResult.imageUrl
      }

      const equipmentData = {
        ...formData,
        imageUrl,
        capabilities:
          formData.capabilities?.filter((cap) => cap.trim() !== "") || [],
      }

      if (editingEquipment) {
        await equipmentApi.update(editingEquipment._id!, equipmentData)
        alert("장비가 수정되었습니다.")
      } else {
        await equipmentApi.create(equipmentData)
        alert("장비가 생성되었습니다.")
      }

      setIsModalOpen(false)
      setEditingEquipment(null)
      resetForm()
      fetchEquipment()
    } catch (error) {
      console.error("Error saving equipment:", error)
      alert("장비 저장에 실패했습니다.")
    } finally {
      setUploading(false)
    }
  }

  const handleEdit = (item: Equipment) => {
    setEditingEquipment(item)
    setFormData({
      name: item.name,
      description: item.description,
      imageUrl: item.imageUrl || "",
      isActive: item.isActive ?? true,
      sortOrder: item.sortOrder || 0,
      specifications: item.specifications || "",
      capabilities: item.capabilities || [],
      priceRange: item.priceRange || "",
      maxHeight: item.maxHeight || "",
      maxWeight: item.maxWeight || "",
      tonnage: item.tonnage || "",
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("정말로 이 장비를 삭제하시겠습니까?")) return

    try {
      await equipmentApi.remove(id)
      alert("장비가 삭제되었습니다.")
      fetchEquipment()
    } catch (error) {
      console.error("Error deleting equipment:", error)
      alert("장비 삭제에 실패했습니다.")
    }
  }

  const toggleActive = async (item: Equipment) => {
    try {
      await equipmentApi.update(item._id!, { isActive: !item.isActive })
      fetchEquipment()
    } catch (error) {
      console.error("Error toggling equipment status:", error)
      alert("상태 변경에 실패했습니다.")
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      imageUrl: "",
      isActive: true,
      sortOrder: 0,
      specifications: "",
      capabilities: [],
      priceRange: "",
      maxHeight: "",
      maxWeight: "",
      tonnage: "",
    })
    setImageFile(null)
  }

  const handleCapabilityChange = (index: number, value: string) => {
    const newCapabilities = [...(formData.capabilities || [])]
    newCapabilities[index] = value
    setFormData({ ...formData, capabilities: newCapabilities })
  }

  const addCapability = () => {
    setFormData({
      ...formData,
      capabilities: [...(formData.capabilities || []), ""],
    })
  }

  const removeCapability = (index: number) => {
    const newCapabilities = [...(formData.capabilities || [])]
    newCapabilities.splice(index, 1)
    setFormData({ ...formData, capabilities: newCapabilities })
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.unauthorized}>관리자 권한이 필요합니다.</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>장비 관리</h1>
        <button
          className={styles.addButton}
          onClick={() => {
            setEditingEquipment(null)
            resetForm()
            setIsModalOpen(true)
          }}
        >
          <PlusIcon className={styles.buttonIcon} />
          장비 추가
        </button>
      </div>

      {loading ? (
        <div className={styles.loading}>로딩 중...</div>
      ) : (
        <div className={styles.equipmentGrid}>
          {equipment.map((item) => (
            <div key={item._id} className={styles.equipmentCard}>
              <div className={styles.imageContainer}>
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={300}
                    height={200}
                    className={styles.equipmentImage}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <PhotoIcon className={styles.placeholderIcon} />
                  </div>
                )}
                <div className={styles.statusBadge}>
                  {item.isActive ? "활성" : "비활성"}
                </div>
              </div>

              <div className={styles.equipmentInfo}>
                <h3 className={styles.equipmentName}>{item.name}</h3>
                <p className={styles.equipmentDescription}>
                  {item.description}
                </p>

                {(item.maxHeight || item.maxWeight || item.tonnage) && (
                  <div className={styles.specs}>
                    {item.maxHeight && (
                      <span className={styles.specBadge}>
                        높이: {item.maxHeight}
                      </span>
                    )}
                    {item.maxWeight && (
                      <span className={styles.specBadge}>
                        중량: {item.maxWeight}
                      </span>
                    )}
                    {item.tonnage && (
                      <span className={styles.specBadge}>
                        톤수: {item.tonnage}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.actionButton}
                  onClick={() => toggleActive(item)}
                  title={item.isActive ? "비활성화" : "활성화"}
                >
                  {item.isActive ? (
                    <EyeIcon className={styles.actionIcon} />
                  ) : (
                    <EyeSlashIcon className={styles.actionIcon} />
                  )}
                </button>
                <button
                  className={styles.actionButton}
                  onClick={() => handleEdit(item)}
                  title="수정"
                >
                  <PencilIcon className={styles.actionIcon} />
                </button>
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleDelete(item._id!)}
                  title="삭제"
                >
                  <TrashIcon className={styles.actionIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 모달 */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                {editingEquipment ? "장비 수정" : "장비 추가"}
              </h2>
              <button
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>장비명</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>설명</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className={styles.formTextarea}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>이미지</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className={styles.formInput}
                />
                {formData.imageUrl && (
                  <Image
                    src={formData.imageUrl}
                    alt="미리보기"
                    width={200}
                    height={150}
                    className={styles.previewImage}
                  />
                )}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>최대 높이</label>
                  <input
                    type="text"
                    value={formData.maxHeight}
                    onChange={(e) =>
                      setFormData({ ...formData, maxHeight: e.target.value })
                    }
                    className={styles.formInput}
                    placeholder="예: 75m"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>최대 중량</label>
                  <input
                    type="text"
                    value={formData.maxWeight}
                    onChange={(e) =>
                      setFormData({ ...formData, maxWeight: e.target.value })
                    }
                    className={styles.formInput}
                    placeholder="예: 25톤"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>톤수</label>
                  <input
                    type="text"
                    value={formData.tonnage}
                    onChange={(e) =>
                      setFormData({ ...formData, tonnage: e.target.value })
                    }
                    className={styles.formInput}
                    placeholder="예: 5톤"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>작업 가능 범위</label>
                {formData.capabilities?.map((capability, index) => (
                  <div key={index} className={styles.capabilityRow}>
                    <input
                      type="text"
                      value={capability}
                      onChange={(e) =>
                        handleCapabilityChange(index, e.target.value)
                      }
                      className={styles.formInput}
                      placeholder="작업 범위 입력"
                    />
                    <button
                      type="button"
                      onClick={() => removeCapability(index)}
                      className={styles.removeButton}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCapability}
                  className={styles.addCapabilityButton}
                >
                  + 작업 범위 추가
                </button>
              </div>

              <div className={styles.formGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) =>
                      setFormData({ ...formData, isActive: e.target.checked })
                    }
                  />
                  활성화
                </label>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={styles.cancelButton}
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className={styles.submitButton}
                >
                  {uploading
                    ? "저장 중..."
                    : editingEquipment
                    ? "수정"
                    : "생성"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
