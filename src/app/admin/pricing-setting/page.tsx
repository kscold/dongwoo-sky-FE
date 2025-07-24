"use client"

import React from "react"
import { usePricingSettingForm } from "../../../common/hooks/usePricingSettingForm"
import { MainHeaderSection } from "../../../common/components/admin/pricing-setting/MainHeaderSection"
import { DiscountBannerSection } from "../../../common/components/admin/pricing-setting/DiscountBannerSection"
import { SectionTitlesSection } from "../../../common/components/admin/pricing-setting/SectionTitlesSection"
import { PriceLabelsSection } from "../../../common/components/admin/pricing-setting/PriceLabelsSection"
import { CTASection } from "../../../common/components/admin/pricing-setting/CTASection"
import { UILabelsSection } from "../../../common/components/admin/pricing-setting/UILabelsSection"
import { InfoNotesSection } from "../../../common/components/admin/pricing-setting/InfoNotesSection"
import { StatusMessages } from "../../../common/components/admin/pricing-setting/StatusMessages"
import * as styles from "../../../styles/admin/admin-pricing-setting.css"

export default function AdminPricingSettingPage() {
  const {
    isLoading,
    saveStatus,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    infoNotesFields,
    removeInfoNote,
    addInfoNote,
    onSubmit,
  } = usePricingSettingForm()

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
        <StatusMessages saveStatus={saveStatus} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <MainHeaderSection
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />

        <DiscountBannerSection
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />

        <SectionTitlesSection
          register={register}
          isSubmitting={isSubmitting}
        />

        <PriceLabelsSection
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />

        <CTASection
          register={register}
          isSubmitting={isSubmitting}
        />

        <UILabelsSection
          register={register}
          isSubmitting={isSubmitting}
        />

        <InfoNotesSection
          register={register}
          infoNotesFields={infoNotesFields}
          removeInfoNote={removeInfoNote}
          addInfoNote={addInfoNote}
          isSubmitting={isSubmitting}
        />

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