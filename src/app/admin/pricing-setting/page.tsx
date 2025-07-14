"use client"

import { useState, useEffect } from "react"
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form"

import {
  usePricingSetting,
  useUpdatePricingSetting,
} from "../../../common/hooks/usePricingSettings"
import { UpdatePricingSettingDto } from "../../../api/pricingSettings"
import * as styles from "../../../styles/admin/admin-pricing-setting.css"

interface FormValues extends Omit<UpdatePricingSettingDto, "infoNotes"> {
  infoNotes: string[]
}

export default function AdminPricingSettingPage() {
  const { data: pricingSetting, isLoading } = usePricingSetting()
  const updateMutation = useUpdatePricingSetting()
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  // @ts-ignore
  const {
    fields: infoNotesFields,
    append: appendInfoNote,
    remove: removeInfoNote,
  } = useFieldArray({
    // @ts-ignore
    control,
    // @ts-ignore
    name: "infoNotes",
  })

  useEffect(() => {
    if (pricingSetting) {
      const defaultNotes = [
        "VAT 별도, 현장 상황에 따라 변동될 수 있습니다",
        "직접 문의 시 현장 조건을 고려한 정확한 견적을 제공합니다",
        "장기 이용 시 추가 할인 혜택이 있습니다",
      ]

      reset({
        ...pricingSetting,
        infoNotes: pricingSetting.infoNotes || defaultNotes,
        // UI 라벨 기본값 설정
        timeSelectionLabel:
          pricingSetting.timeSelectionLabel || "선택한 작업 시간",
        hourUnit: pricingSetting.hourUnit || "시간",
        baseHoursLabel: pricingSetting.baseHoursLabel || "기본",
        additionalHoursLabel: pricingSetting.additionalHoursLabel || "추가",
        hourlyRateLabel: pricingSetting.hourlyRateLabel || "시간당",
        specificationsLabel: pricingSetting.specificationsLabel || "주요 사양",
        scrollLeftAriaLabel:
          pricingSetting.scrollLeftAriaLabel || "왼쪽으로 스크롤",
        scrollRightAriaLabel:
          pricingSetting.scrollRightAriaLabel || "오른쪽으로 스크롤",
      })
    }
  }, [pricingSetting, reset])

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setSaveStatus("saving")
      await updateMutation.mutateAsync(data)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 3000)
    } catch (error) {
      console.error("저장 실패:", error)
      setSaveStatus("error")
      setTimeout(() => setSaveStatus("idle"), 5000)
    }
  }

  const addInfoNote = () => {
    appendInfoNote("")
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>데이터를 불러오는 중...</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>이용요금 페이지 설정</h1>
        <p className={styles.subtitle}>
          이용요금 페이지의 텍스트, 할인율, 안내문구 등을 관리할 수 있습니다.
        </p>
        {saveStatus === "success" && (
          <div className={styles.successMessage}>✅ 설정이 저장되었습니다!</div>
        )}
        {saveStatus === "error" && (
          <div className={styles.errorMessage}>
            ❌ 저장 중 오류가 발생했습니다.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* 메인 헤더 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎯 메인 헤더</h2>

          <div className={styles.formGroup}>
            <label className={styles.label}>메인 제목</label>
            <input
              {...register("mainTitle", {
                required: "메인 제목은 필수입니다.",
              })}
              className={styles.input}
              placeholder="예: 이용 요금 안내"
              disabled={isSubmitting}
            />
            {errors.mainTitle && (
              <p className={styles.errorMessage}>{errors.mainTitle.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>메인 부제목</label>
            <textarea
              {...register("mainSubtitle", {
                required: "메인 부제목은 필수입니다.",
              })}
              className={styles.textarea}
              placeholder="투명하고 합리적인 비용으로..."
              rows={3}
              disabled={isSubmitting}
            />
            {errors.mainSubtitle && (
              <p className={styles.errorMessage}>
                {errors.mainSubtitle.message}
              </p>
            )}
          </div>
        </div>

        {/* 할인 배너 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>💰 할인 배너</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>할인 배너 제목</label>
              <input
                {...register("discountBannerTitle", {
                  required: "할인 배너 제목은 필수입니다.",
                })}
                className={styles.input}
                placeholder="예: 직접 문의 시 특별 할인!"
                disabled={isSubmitting}
              />
              {errors.discountBannerTitle && (
                <p className={styles.errorMessage}>
                  {errors.discountBannerTitle.message}
                </p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>할인율 (%)</label>
              <input
                type="number"
                {...register("discountPercentage", {
                  required: "할인율은 필수입니다.",
                  min: { value: 0, message: "0 이상의 값을 입력해주세요" },
                  max: { value: 100, message: "100 이하의 값을 입력해주세요" },
                })}
                className={styles.input}
                placeholder="5"
                disabled={isSubmitting}
              />
              {errors.discountPercentage && (
                <p className={styles.errorMessage}>
                  {errors.discountPercentage.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>할인 배너 부제목</label>
            <input
              {...register("discountBannerSubtitle", {
                required: "할인 배너 부제목은 필수입니다.",
              })}
              className={styles.input}
              placeholder="예: 온라인 견적 대비 최대 5% 추가 할인 혜택"
              disabled={isSubmitting}
            />
            {errors.discountBannerSubtitle && (
              <p className={styles.errorMessage}>
                {errors.discountBannerSubtitle.message}
              </p>
            )}
          </div>
        </div>

        {/* 섹션 제목들 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🏷️ 섹션 제목</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>장비 선택 섹션 제목</label>
              <input
                {...register("equipmentSectionTitle")}
                className={styles.input}
                placeholder="예: 장비 선택"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>작업 시간 섹션 제목</label>
              <input
                {...register("timeSectionTitle")}
                className={styles.input}
                placeholder="예: 작업 시간 선택"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* 가격 표시 라벨 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>💳 가격 표시 라벨</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>온라인 견적 라벨</label>
              <input
                {...register("onlinePriceLabel")}
                className={styles.input}
                placeholder="예: 온라인 견적"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>직접 문의 라벨</label>
              <input
                {...register("contactPriceLabel")}
                className={styles.input}
                placeholder="예: 직접 문의 시"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>절약 금액 라벨</label>
              <input
                {...register("savingsLabel")}
                className={styles.input}
                placeholder="예: 원 절약!"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>전화번호</label>
              <input
                {...register("phoneNumber", {
                  required: "전화번호는 필수입니다.",
                })}
                className={styles.input}
                placeholder="예: 010-1234-5678"
                disabled={isSubmitting}
              />
              {errors.phoneNumber && (
                <p className={styles.errorMessage}>
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>📞 문의 버튼</h2>

          <div className={styles.formGroup}>
            <label className={styles.label}>버튼 텍스트</label>
            <input
              {...register("ctaButtonText")}
              className={styles.input}
              placeholder="예: 📞 직접 문의하고 할인받기"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>버튼 부텍스트</label>
            <input
              {...register("ctaSubtext")}
              className={styles.input}
              placeholder="예: 전화 상담을 통해 더 정확한 견적과 할인 혜택을 받아보세요"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* UI 라벨 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🏷️ UI 라벨 설정</h2>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>시간 선택 라벨</label>
              <input
                {...register("timeSelectionLabel")}
                className={styles.input}
                placeholder="예: 선택한 작업 시간"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>시간 단위</label>
              <input
                {...register("hourUnit")}
                className={styles.input}
                placeholder="예: 시간"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>기본 시간 라벨</label>
              <input
                {...register("baseHoursLabel")}
                className={styles.input}
                placeholder="예: 기본"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>추가 시간 라벨</label>
              <input
                {...register("additionalHoursLabel")}
                className={styles.input}
                placeholder="예: 추가"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>시간당 요금 라벨</label>
              <input
                {...register("hourlyRateLabel")}
                className={styles.input}
                placeholder="예: 시간당"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>사양 라벨</label>
              <input
                {...register("specificationsLabel")}
                className={styles.input}
                placeholder="예: 주요 사양"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                왼쪽 스크롤 버튼 접근성 라벨
              </label>
              <input
                {...register("scrollLeftAriaLabel")}
                className={styles.input}
                placeholder="예: 왼쪽으로 스크롤"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                오른쪽 스크롤 버튼 접근성 라벨
              </label>
              <input
                {...register("scrollRightAriaLabel")}
                className={styles.input}
                placeholder="예: 오른쪽으로 스크롤"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* 안내 사항 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ℹ️ 안내 사항</h2>
          <p className={styles.sectionDescription}>
            각 줄은 별도의 안내 사항으로 표시됩니다.
          </p>

          <div className={styles.arrayField}>
            {infoNotesFields.map((field, index) => (
              <div key={field.id} className={styles.arrayItem}>
                <input
                  {...register(`infoNotes.${index}` as const)}
                  className={styles.input}
                  placeholder="예: VAT 별도, 현장 상황에 따라 변동될 수 있습니다"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => removeInfoNote(index)}
                  className={styles.removeButton}
                  disabled={isSubmitting}
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addInfoNote}
              className={styles.addButton}
              disabled={isSubmitting}
            >
              + 안내사항 추가
            </button>
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.saveButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "저장 중..." : "설정 저장"}
          </button>
        </div>
      </form>
    </div>
  )
}
