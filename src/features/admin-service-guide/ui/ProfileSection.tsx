import React from "react"
import { UseFormRegister, UseFormWatch } from "react-hook-form"
import { UpdateServiceGuideDto, ServiceGuide } from "../../../types/service-guide"
import { Uploader } from "../../../common/components/upload/Uploader"
import * as styles from "./profile-section.css"

interface ProfileSectionProps {
  register: UseFormRegister<UpdateServiceGuideDto>
  watch: UseFormWatch<UpdateServiceGuideDto>
  serviceGuide: ServiceGuide | undefined
  isUploading: boolean
  onImageUpload: (files: FileList) => Promise<void>
  onImageDelete: (index: number) => Promise<void>
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  register,
  watch,
  serviceGuide,
  isUploading,
  onImageUpload,
  onImageDelete,
}) => {
  const currentFormData = watch()

  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>대표 프로필</h2>
        <p className={styles.cardDescription}>
          대표의 프로필 정보와 경력사항을 관리합니다.
        </p>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.formGroup}>
          <label className={styles.label}>대표 이름</label>
          <input
            {...register("profile.name")}
            className={styles.input}
            placeholder="예: 현동우 대표"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>직책/역할</label>
          <input
            {...register("profile.role")}
            className={styles.input}
            placeholder="예: 어울림 스카이 대표 / 20년 경력 종합 장비 전문가"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>대표 소개</label>
          <textarea
            {...register("profile.introduction")}
            className={styles.textarea}
            placeholder="대표의 인사말과 회사 소개..."
            rows={8}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>대표 사진</label>
          <Uploader
            value={
              currentFormData.profile?.imageUrl &&
              !currentFormData.profile.imageUrl.startsWith("blob:")
                ? [{ url: currentFormData.profile.imageUrl, alt: "대표 사진" }]
                : []
            }
            onFilesChange={() => {}}
            maxFiles={1}
            uploadType="existing"
            label="대표 사진"
            isEditing={true}
            isUploading={isUploading}
            onImageUpload={onImageUpload}
            onImageDelete={onImageDelete}
          />
        </div>

        {/* 경력사항 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>주요 경력</label>
          <div className={styles.fieldList}>
            {serviceGuide?.profile?.career?.map((_, index) => (
              <input
                key={index}
                {...register(`profile.career.${index}` as const)}
                className={styles.input}
                placeholder="예: 2003년 ~ 현재: 어울림 스카이 중장비 운영 대표"
              />
            )) || []}
          </div>
        </div>

        {/* 보유 기술 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>보유 기술/자격</label>
          <div className={styles.fieldList}>
            {serviceGuide?.profile?.skills?.map((_, index) => (
              <input
                key={index}
                {...register(`profile.skills.${index}` as const)}
                className={styles.input}
                placeholder="예: 스카이차 전 기종 운용 및 정비 (최대 75m)"
              />
            )) || []}
          </div>
        </div>
      </div>
    </section>
  )
}