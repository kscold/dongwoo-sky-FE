"use client"

import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

import {
  useCreateEquipment,
  useUpdateEquipment,
  useUploadEquipmentImage,
} from "../../../common/hooks/useEquipment"
import { Equipment, CreateEquipmentDto } from "../../../types/equipment"
import { Uploader } from "../../../common/components/upload/Uploader"
import * as styles from "./equipment-form-modal.css"

interface EquipmentFormModalProps {
  isOpen: boolean
  onClose: () => void
  initialData?: Equipment | null
}

type FormValues = Omit<CreateEquipmentDto, "imageUrl"> & {
  imageFile?: FileList
  seoKeywordsText?: string // 키워드를 쉼표로 구분된 문자열로 입력받음
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
  const [isUploading, setIsUploading] = useState(false)

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
        // SEO 필드
        seoTitle: initialData?.seoTitle ?? "",
        seoDescription: initialData?.seoDescription ?? "",
        seoKeywordsText: initialData?.seoKeywords?.join(", ") ?? "",
        ogTitle: initialData?.ogTitle ?? "",
        ogDescription: initialData?.ogDescription ?? "",
        ogImage: initialData?.ogImage ?? "",
      }
      reset(defaultValues)
      setPreview(initialData?.imageUrl ?? null)
    }
  }, [initialData, isOpen, reset])

  const handleFileChange = async (files: any[]) => {
    console.log("handleFileChange called with:", files)
    
    if (files && files.length > 0) {
      // 새로 추가된 파일 중 File 객체만 처리
      const newFiles = files.filter((file) => file instanceof File)
      console.log("New files found:", newFiles.length)
      
      if (newFiles.length > 0) {
        const file = newFiles[0]
        
        // 임시로 blob URL 표시
        const tempPreview = URL.createObjectURL(file)
        setPreview(tempPreview)
        setValue("imageFile", [file] as any)
        
        // 바로 업로드해서 실제 CloudFront URL로 교체
        try {
          setIsUploading(true)
          console.log("즉시 업로드 시작:", file.name)
          const uploadResult = await uploadImageMutation.mutateAsync(file)
          console.log("즉시 업로드 결과:", uploadResult)
          
          let cloudFrontUrl = uploadResult.imageUrl || uploadResult.url || uploadResult.attachment?.url || uploadResult.attachment?.key || ""
          
          // CDN URL이 이미 완전한 형태인지 확인
          if (cloudFrontUrl && !cloudFrontUrl.startsWith('http')) {
            // 상대 경로인 경우에만 CDN URL로 변환
            const cdnBaseUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://d1h7waosxik1t4.cloudfront.net'
            cloudFrontUrl = `${cdnBaseUrl}/${cloudFrontUrl.startsWith('/') ? cloudFrontUrl.slice(1) : cloudFrontUrl}`
          }
          
          console.log("CloudFront URL로 preview 업데이트:", cloudFrontUrl)
          
          // blob URL 정리
          URL.revokeObjectURL(tempPreview)
          
          // 실제 CloudFront URL로 업데이트
          if (cloudFrontUrl) {
            setPreview(cloudFrontUrl)
          }
        } catch (error) {
          console.error("이미지 즉시 업로드 실패:", error)
          // 업로드 실패 시 blob URL 유지
        } finally {
          setIsUploading(false)
        }
      }
    } else {
      console.log("No files, clearing preview")
      setPreview(null)
      setValue("imageFile", undefined)
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      let imageUrl = initialData?.imageUrl ?? ""
      const imageFile = data.imageFile?.[0]

      // 이미지가 이미 CDN URL로 설정되어 있는 경우 (즉시 업로드로)
      const cdnDomain = process.env.NEXT_PUBLIC_CDN_URL?.replace('https://', '') || 'd1h7waosxik1t4.cloudfront.net'
      if (preview && preview.includes(cdnDomain)) {
        imageUrl = preview
        console.log("이미 업로드된 CloudFront URL 사용:", imageUrl)
      } else if (imageFile) {
        // 파일이 있지만 아직 업로드되지 않은 경우 (즉시 업로드 실패한 경우)
        console.log("이미지 파일 업로드 시작:", imageFile.name)
        const uploadResult = await uploadImageMutation.mutateAsync(imageFile)
        console.log("업로드 결과:", uploadResult)

        // 백엔드에서 반환하는 URL 구조에 맞게 수정
        imageUrl =
          uploadResult.imageUrl ||
          uploadResult.url ||
          uploadResult.attachment?.url ||
          uploadResult.attachment?.key ||
          ""

        // CDN URL이 이미 완전한 형태인지 확인
        if (imageUrl && !imageUrl.startsWith('http')) {
          // 상대 경로인 경우에만 CDN URL로 변환
          const cdnBaseUrl = process.env.NEXT_PUBLIC_CDN_URL || 'https://d1h7waosxik1t4.cloudfront.net'
          imageUrl = `${cdnBaseUrl}/${imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl}`
        }

        console.log("최종 이미지 URL:", imageUrl)

        if (!imageUrl) {
          throw new Error("이미지 업로드 후 URL을 받을 수 없습니다.")
        }
      }

      // SEO 키워드 처리
      const seoKeywords = data.seoKeywordsText 
        ? data.seoKeywordsText.split(',').map(k => k.trim()).filter(k => k.length > 0)
        : []

      const equipmentData = { 
        ...data, 
        imageUrl,
        seoKeywords,
        // seoKeywordsText는 제외
        seoKeywordsText: undefined
      }
      console.log("MongoDB에 저장할 장비 데이터:", equipmentData)

      if (initialData && initialData.id) {
        // 수정 모드: ID가 유효한 경우만 업데이트
        console.log("장비 업데이트 모드:", initialData.id)
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
        console.log("새 장비 생성 모드")
        await createMutate(equipmentData)
      }
      
      console.log("장비 저장 완료, 모달 닫기")
      onClose()
    } catch (error) {
      console.error("Form submission error:", error)
      if (error instanceof Error) {
        alert(`작업에 실패했습니다: ${error.message}`)
      } else {
        alert("작업에 실패했습니다. 다시 시도해주세요.")
      }
      // 에러 발생 시 모달 닫지 않음 - 사용자가 다시 시도할 수 있도록
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
              value={preview ? [{ url: preview, alt: initialData?.name || "장비 이미지" }] : []}
              uploadType="existing"
              disabled={isSubmitting || isUploading}
              isUploading={isUploading}
            />
            {/* 디버깅용 정보 */}
            {process.env.NODE_ENV === 'development' && (
              <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                <div>Preview URL: {preview || '없음'}</div>
                <div>Initial Image URL: {initialData?.imageUrl || '없음'}</div>
              </div>
            )}
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

          {/* 요금 설정 섹션 */}
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>💰 요금 설정</h3>
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
                  min: { value: 0, message: "0 이상의 값을 입력하세요" }
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="0"
              />
              {errors.basePrice && (
                <p className={styles.errorMessage}>{errors.basePrice.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>기본 시간 (시간)</label>
              <input
                type="number"
                {...register("baseHours", { 
                  min: { value: 1, message: "1 이상의 값을 입력하세요" }
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="4"
              />
              {errors.baseHours && (
                <p className={styles.errorMessage}>{errors.baseHours.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>시간당 추가 요금 (원)</label>
              <input
                type="number"
                {...register("hourlyRate", { 
                  min: { value: 0, message: "0 이상의 값을 입력하세요" }
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="0"
              />
              {errors.hourlyRate && (
                <p className={styles.errorMessage}>{errors.hourlyRate.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>최소 작업 시간</label>
              <input
                type="number"
                {...register("minHours", { 
                  min: { value: 1, message: "1 이상의 값을 입력하세요" }
                })}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="1"
              />
              {errors.minHours && (
                <p className={styles.errorMessage}>{errors.minHours.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>최대 작업 시간</label>
            <input
              type="number"
              {...register("maxHours", { 
                min: { value: 1, message: "1 이상의 값을 입력하세요" }
              })}
              className={styles.input}
              disabled={isSubmitting}
              placeholder="예: 8"
            />
            {errors.maxHours && (
              <p className={styles.errorMessage}>{errors.maxHours.message}</p>
            )}
          </div>

          {/* SEO 설정 섹션 */}
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>🔍 SEO 설정</h3>
            <p className={styles.sectionDescription}>
              검색 엔진 최적화를 위한 메타데이터를 설정하세요
            </p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>SEO 제목</label>
            <input
              {...register("seoTitle")}
              className={styles.input}
              disabled={isSubmitting}
              placeholder="검색 결과에 표시될 제목 (비워두면 장비명 사용)"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>SEO 설명</label>
            <textarea
              {...register("seoDescription")}
              className={styles.textarea}
              disabled={isSubmitting}
              placeholder="검색 결과에 표시될 설명 (160자 이내 권장)"
              rows={3}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>키워드 (쉼표로 구분)</label>
            <input
              {...register("seoKeywordsText")}
              className={styles.input}
              disabled={isSubmitting}
              placeholder="예: 크레인, 25톤, 렌탈, 중장비"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>OG 제목</label>
              <input
                {...register("ogTitle")}
                className={styles.input}
                disabled={isSubmitting}
                placeholder="소셜 미디어 공유 시 제목"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>OG 설명</label>
            <textarea
              {...register("ogDescription")}
              className={styles.textarea}
              disabled={isSubmitting}
              placeholder="소셜 미디어 공유 시 설명"
              rows={2}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>OG 이미지 URL</label>
            <input
              {...register("ogImage")}
              className={styles.input}
              disabled={isSubmitting}
              placeholder="소셜 미디어 공유 시 이미지 URL (비워두면 장비 이미지 사용)"
            />
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
