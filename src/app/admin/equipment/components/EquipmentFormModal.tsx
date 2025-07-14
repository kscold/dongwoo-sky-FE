"use client"

import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  useCreateEquipment,
  useUpdateEquipment,
  useUploadEquipmentImage,
} from "../../../../common/hooks/useEquipment"
import { Equipment, CreateEquipmentDto } from "../../../../types/equipment"
import { Uploader } from "../../../../common/components/upload/Uploader"
import * as styles from "../../../../styles/admin/admin-equipment.css"

interface EquipmentFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: Equipment | null
}

type FormValues = Omit<CreateEquipmentDto, "imageUrl"> & {
  imageFile?: FileList
}

export default function EquipmentFormModal({
  isOpen,
  onClose,
  initialData,
}: EquipmentFormModalProps) {
  const [isBrowser, setIsBrowser] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const [preview, setPreview] = useState<string | null>(null)

  const { mutateAsync: createMutate } = useCreateEquipment()
  const { mutateAsync: updateMutate } = useUpdateEquipment()
  const uploadImageMutation = useUploadEquipmentImage()

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      console.log("EquipmentFormModal opened with initialData:", initialData)
      console.log("initialData.id:", initialData?.id)

      const defaultValues = {
        name: initialData?.name ?? "",
        description: initialData?.description ?? "",
        basePrice: initialData?.basePrice ?? 0,
        hourlyRate: initialData?.hourlyRate ?? 0,
        baseHours: initialData?.baseHours ?? 4,
        minHours: initialData?.minHours ?? 1,
        maxHours: initialData?.maxHours ?? 12,
        isPublished: initialData?.isPublished ?? true,
        showInService: initialData?.showInService ?? false,
        showInPricing: initialData?.showInPricing ?? false,
      }
      reset(defaultValues)
      setPreview(initialData?.imageUrl ?? null)
    }
  }, [initialData, isOpen, reset])

  const handleFileChange = (files: any[]) => {
    if (files && files.length > 0) {
      // 새로 추가된 파일 중 File 객체만 처리
      const newFiles = files.filter((file) => file instanceof File)
      if (newFiles.length > 0) {
        const file = newFiles[0]
        const filePreview = URL.createObjectURL(file)
        setPreview(filePreview)
        setValue("imageFile", [file] as any)
      }
    } else {
      setPreview(null)
      setValue("imageFile", undefined)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      let imageUrl = initialData?.imageUrl ?? ""
      const imageFile = data.imageFile?.[0]

      if (imageFile) {
        console.log("이미지 파일 업로드 시작:", imageFile.name)
        const uploadResult = await uploadImageMutation.mutateAsync(imageFile)
        console.log("업로드 결과:", uploadResult)

        // 백엔드에서 반환하는 URL 구조에 맞게 수정
        imageUrl =
          uploadResult.url ||
          uploadResult.attachment?.url ||
          uploadResult.attachment?.key ||
          ""

        console.log("최종 이미지 URL:", imageUrl)

        if (!imageUrl) {
          throw new Error("이미지 업로드 후 URL을 받을 수 없습니다.")
        }
      }

      const equipmentData = { ...data, imageUrl, imageKey: imageUrl }

      if (initialData && initialData.id) {
        // 수정 모드: ID가 유효한 경우만 업데이트
        await updateMutate({
          id: initialData.id,
          data: equipmentData,
        })
      } else if (initialData && !initialData.id) {
        // initialData는 있지만 id가 없는 경우 - 생성으로 처리
        console.warn("장비 데이터에 id가 없어 새로 생성합니다.", initialData)
        await createMutate(equipmentData)
      } else {
        // 새 장비 생성
        await createMutate(equipmentData)
      }
      onClose()
    } catch (error) {
      console.error("Form submission error:", error)
      if (error instanceof Error) {
        alert(`작업에 실패했습니다: ${error.message}`)
      } else {
        alert("작업에 실패했습니다. 다시 시도해주세요.")
      }
    }
  }

  if (!isBrowser || !isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{initialData ? "장비 수정" : "새 장비 추가"}</h2>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>장비명 *</label>
            <input
              {...register("name", { required: "장비명은 필수입니다." })}
              className={styles.input}
              disabled={isSubmitting}
              placeholder="예: 60톤 크레인"
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>규격/설명 *</label>
            <textarea
              {...register("description", { required: "설명은 필수입니다." })}
              className={styles.textarea}
              disabled={isSubmitting}
              placeholder="장비의 상세 규격과 특징을 입력하세요"
              rows={4}
            />
            {errors.description && (
              <p className={styles.errorMessage}>
                {errors.description.message}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>이미지</label>
            <Uploader
              onFilesChange={handleFileChange}
              value={preview ? [{ url: preview, alt: "기존 이미지" }] : []}
              uploadType="existing"
              disabled={isSubmitting}
            />
          </div>

          {/* 가격 설정 섹션 */}
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>💰 가격 설정</h3>
            <p className={styles.sectionDescription}>
              요금 안내 페이지에 표시될 가격 정보를 설정하세요
            </p>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>기본 요금 (원)</label>
              <input
                type="number"
                {...register("basePrice", {
                  valueAsNumber: true,
                  min: { value: 0, message: "0 이상의 값을 입력해주세요" },
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="예: 200000"
              />
              {errors.basePrice && (
                <p className={styles.errorMessage}>
                  {errors.basePrice.message}
                </p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>기본 시간 (시간)</label>
              <input
                type="number"
                {...register("baseHours", {
                  valueAsNumber: true,
                  min: { value: 1, message: "1 이상의 값을 입력해주세요" },
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="예: 4"
              />
              {errors.baseHours && (
                <p className={styles.errorMessage}>
                  {errors.baseHours.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>시간당 추가 요금 (원)</label>
              <input
                type="number"
                {...register("hourlyRate", {
                  valueAsNumber: true,
                  min: { value: 0, message: "0 이상의 값을 입력해주세요" },
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="예: 30000"
              />
              {errors.hourlyRate && (
                <p className={styles.errorMessage}>
                  {errors.hourlyRate.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>최소 작업 시간</label>
              <input
                type="number"
                {...register("minHours", {
                  valueAsNumber: true,
                  min: { value: 1, message: "1 이상의 값을 입력해주세요" },
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="예: 1"
              />
              {errors.minHours && (
                <p className={styles.errorMessage}>{errors.minHours.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>최대 작업 시간</label>
              <input
                type="number"
                {...register("maxHours", {
                  valueAsNumber: true,
                  min: { value: 1, message: "1 이상의 값을 입력해주세요" },
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="예: 12"
              />
              {errors.maxHours && (
                <p className={styles.errorMessage}>{errors.maxHours.message}</p>
              )}
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("isPublished")}
                className={styles.checkbox}
                disabled={isSubmitting}
              />
              <span>사이트에 공개</span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("showInService")}
                className={styles.checkbox}
                disabled={isSubmitting}
              />
              <span>서비스 안내에 표시</span>
            </label>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                {...register("showInPricing")}
                className={styles.checkbox}
                disabled={isSubmitting}
              />
              <span>요금 안내에 표시</span>
            </label>
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
              disabled={isSubmitting}
            >
              취소
            </button>
            <button
              type="submit"
              className={styles.saveButton}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "저장 중..."
                : initialData
                ? "수정하기"
                : "추가하기"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}
