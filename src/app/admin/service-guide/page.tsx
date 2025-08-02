"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import {
  MainSection,
  ScopeOfWorkSection,
  ProfileSection,
  ProcessStepsSection,
  useServiceGuideForm
} from "../../../features/admin-service-guide"
import * as commonStyles from "../../../styles/common/admin-common.css"
import * as pageStyles from "../../../features/admin-service-guide/ui/page.css"

const ServiceGuideAdminPage = () => {
  const {
    serviceGuide,
    isLoadingServiceGuide,
    control,
    register,
    handleSubmit,
    watch,
    scopeOfWorkFieldArray,
    processStepsFieldArray,
    onSubmit,
    handleImageUpload,
    handleImageDelete,
    isSubmitting,
    isUploading,
  } = useServiceGuideForm()

  if (isLoadingServiceGuide) {
    return <div className={commonStyles.container}>Loading...</div>
  }

  if (!serviceGuide) {
    return <div className={commonStyles.container}>Error loading data.</div>
  }

  return (
    <div className={pageStyles.pageContainer}>
      <header className={pageStyles.header}>
        <Link href="/admin/dashboard" className={pageStyles.backLink}>
          <ArrowLeftIcon className={pageStyles.backLinkIcon} />
          대시보드로 돌아가기
        </Link>
        <h1 className={pageStyles.title}>서비스 안내 관리</h1>
        <p className={pageStyles.description}>
          사용자에게 보여질 서비스 안내 페이지의 내용을 관리합니다.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <MainSection register={register} />
        
        <ScopeOfWorkSection
          register={register}
          control={control}
          fields={scopeOfWorkFieldArray.fields}
          append={scopeOfWorkFieldArray.append}
          remove={scopeOfWorkFieldArray.remove}
        />

        <ProfileSection
          register={register}
          watch={watch}
          serviceGuide={serviceGuide}
          isUploading={isUploading}
          onImageUpload={handleImageUpload}
          onImageDelete={handleImageDelete}
        />

        <ProcessStepsSection
          register={register}
          control={control}
          fields={processStepsFieldArray.fields}
          append={processStepsFieldArray.append}
          remove={processStepsFieldArray.remove}
        />

        <div className={pageStyles.formActions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={pageStyles.saveButton}
          >
            {isSubmitting ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ServiceGuideAdminPage