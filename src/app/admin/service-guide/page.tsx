"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  ChevronDownIcon,
  TrashIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

import {
  useAdminServiceGuide,
  useUpdateAdminServiceGuide,
  useUploadProfileImage,
  useDeleteProfileImage,
} from "./hooks/useAdminServiceGuide";
import {
  ServiceGuide,
  UpdateServiceGuideDto,
} from "../../../types/service-guide";
import { Uploader } from "../../../common/components/upload/Uploader";
import IconSelect from "./components/ionSelect";
import * as commonStyles from "../../../styles/common/admin-common.css";
import * as pageStyles from "../../../styles/admin/admin-service-guide.css";

const ServiceGuideAdminPage = () => {
  const { data: serviceGuide, isLoading: isLoadingServiceGuide } =
    useAdminServiceGuide();
  const mutation = useUpdateAdminServiceGuide();
  const uploadMutation = useUploadProfileImage();
  const deleteMutation = useDeleteProfileImage();

  const { control, register, handleSubmit, reset, setValue, watch } =
    useForm<UpdateServiceGuideDto>({
      defaultValues: serviceGuide || {},
    });

  // 현재 폼 데이터 감시
  const currentFormData = watch();

  useEffect(() => {
    if (serviceGuide) {
      reset(serviceGuide);
    }
  }, [serviceGuide, reset]);

  const {
    fields: scopeOfWorkFields,
    append: appendScope,
    remove: removeScope,
  } = useFieldArray({ control, name: "scopeOfWork" });

  const {
    fields: processStepsFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({ control, name: "processSteps" });

  const onSubmit = (data: UpdateServiceGuideDto) => {
    mutation.mutate(data);
  };

  const handleImageUpload = async (files: FileList) => {
    try {
      const file = files[0];
      if (file) {
        const result = await uploadMutation.mutateAsync(file);

        // admin-home 방식: 폼 상태 직접 업데이트
        setValue("profile.imageUrl", result.imageUrl);

        alert("대표 사진이 성공적으로 업로드되었습니다.");
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleImageDelete = async (index: number) => {
    try {
      const currentImageUrl = currentFormData.profile?.imageUrl;
      if (currentImageUrl && !currentImageUrl.startsWith("blob:")) {
        await deleteMutation.mutateAsync(currentImageUrl);

        // admin-home 방식: 폼 상태 직접 업데이트
        setValue("profile.imageUrl", "");

        alert("대표 사진이 성공적으로 삭제되었습니다.");
      }
    } catch (error) {
      console.error("이미지 삭제 실패:", error);
      alert("이미지 삭제 중 오류가 발생했습니다.");
    }
  };

  if (isLoadingServiceGuide)
    return <div className={commonStyles.container}>Loading...</div>;
  if (!serviceGuide)
    return <div className={commonStyles.container}>Error loading data.</div>;

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
        <section className={pageStyles.card}>
          <div className={pageStyles.cardHeader}>
            <h2 className={pageStyles.cardTitle}>메인 섹션</h2>
            <p className={pageStyles.cardDescription}>
              페이지 최상단에 표시될 제목과 부제목입니다.
            </p>
          </div>
          <div className={pageStyles.cardBody}>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>제목</label>
              <input {...register("heroTitle")} className={pageStyles.input} />
            </div>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>부제목</label>
              <input
                {...register("heroSubtitle")}
                className={pageStyles.input}
              />
            </div>
          </div>
        </section>

        <section className={pageStyles.card}>
          <div className={pageStyles.cardHeader}>
            <h2 className={pageStyles.cardTitle}>작업 가능 범위</h2>
            <p className={pageStyles.cardDescription}>
              제공하는 작업 종류와 해당 아이콘을 설정합니다.
            </p>
          </div>
          <div className={pageStyles.cardBody}>
            <div className={pageStyles.fieldGroupContainer}>
              {scopeOfWorkFields.map((field, index) => (
                <div key={field.id} className={pageStyles.fieldGroup}>
                  <Controller
                    name={`scopeOfWork.${index}.icon`}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <IconSelect value={value || ""} onChange={onChange} />
                    )}
                  />
                  <input
                    {...register(`scopeOfWork.${index}.text`)}
                    className={pageStyles.input}
                    placeholder="작업 내용 (예: 외벽 청소)"
                  />
                  <button
                    type="button"
                    onClick={() => removeScope(index)}
                    className={pageStyles.iconButton}
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={pageStyles.cardFooter}>
            <button
              type="button"
              onClick={() => appendScope({ text: "", icon: "" })}
              className={pageStyles.addButton}
            >
              범위 추가
            </button>
          </div>
        </section>

        <section className={pageStyles.card}>
          <div className={pageStyles.cardHeader}>
            <h2 className={pageStyles.cardTitle}>대표 프로필</h2>
            <p className={pageStyles.cardDescription}>
              대표의 프로필 정보와 경력사항을 관리합니다.
            </p>
          </div>
          <div className={pageStyles.cardBody}>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>대표 이름</label>
              <input
                {...register("profile.name")}
                className={pageStyles.input}
                placeholder="예: 현동우 대표"
              />
            </div>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>직책/역할</label>
              <input
                {...register("profile.role")}
                className={pageStyles.input}
                placeholder="예: 어울림 스카이 대표 / 20년 경력 종합 장비 전문가"
              />
            </div>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>대표 소개</label>
              <textarea
                {...register("profile.introduction")}
                className={pageStyles.textarea}
                placeholder="대표의 인사말과 회사 소개..."
                rows={8}
              />
            </div>
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>대표 사진</label>
              <Uploader
                value={
                  currentFormData.profile?.imageUrl &&
                  !currentFormData.profile.imageUrl.startsWith("blob:")
                    ? [
                        {
                          url: currentFormData.profile.imageUrl,
                          alt: "대표 사진",
                        },
                      ]
                    : []
                }
                onFilesChange={() => {}} // 이 함수는 사용하지 않음
                maxFiles={1}
                uploadType="existing"
                label="대표 사진"
                isEditing={true}
                isUploading={uploadMutation.isPending}
                onImageUpload={handleImageUpload}
                onImageDelete={handleImageDelete}
              />
            </div>

            {/* 경력사항 */}
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>주요 경력</label>
              <div className={pageStyles.fieldGroupContainer}>
                {serviceGuide?.profile?.career?.map((_, index) => (
                  <div key={index} className={pageStyles.fieldGroup}>
                    <input
                      {...register(`profile.career.${index}` as const)}
                      className={pageStyles.input}
                      placeholder="예: 2003년 ~ 현재: 어울림 스카이 중장비 운영 대표"
                    />
                  </div>
                )) || []}
              </div>
            </div>

            {/* 보유 기술 */}
            <div className={pageStyles.formGroup}>
              <label className={pageStyles.label}>보유 기술/자격</label>
              <div className={pageStyles.fieldGroupContainer}>
                {serviceGuide?.profile?.skills?.map((_, index) => (
                  <div key={index} className={pageStyles.fieldGroup}>
                    <input
                      {...register(`profile.skills.${index}` as const)}
                      className={pageStyles.input}
                      placeholder="예: 스카이차 전 기종 운용 및 정비 (최대 75m)"
                    />
                  </div>
                )) || []}
              </div>
            </div>
          </div>
        </section>

        <section className={pageStyles.card}>
          <div className={pageStyles.cardHeader}>
            <h2 className={pageStyles.cardTitle}>서비스 프로세스</h2>
            <p className={pageStyles.cardDescription}>
              고객에게 안내될 서비스 진행 절차를 설명합니다.
            </p>
          </div>
          <div className={pageStyles.cardBody}>
            <div className={pageStyles.fieldGroupContainer}>
              {processStepsFields.map((field, index) => (
                <div key={field.id} className={pageStyles.fieldGroup}>
                  <IconSelect
                    value={field.icon || ""}
                    onChange={(value) => console.log(value)}
                  />
                  <div className={pageStyles.inputGroup}>
                    <input
                      {...register(`processSteps.${index}.title`)}
                      className={pageStyles.input}
                      placeholder="단계 제목 (예: 견적 상담)"
                    />
                    <textarea
                      {...register(`processSteps.${index}.description`)}
                      className={pageStyles.textarea}
                      placeholder="단계 상세 설명"
                      rows={2}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeStep(index)}
                    className={pageStyles.iconButton}
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={pageStyles.cardFooter}>
            <button
              type="button"
              onClick={() =>
                appendStep({ title: "", description: "", icon: "" })
              }
              className={pageStyles.addButton}
            >
              단계 추가
            </button>
          </div>
        </section>
        <div className={pageStyles.formActions}>
          <button
            type="submit"
            disabled={mutation.isPending}
            className={pageStyles.saveButton}
          >
            {mutation.isPending ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceGuideAdminPage;
