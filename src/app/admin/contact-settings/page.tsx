"use client";

import React, { useState } from "react";
import {
  useContactSettings,
  useUpdateContactSettings,
} from "../../../common/hooks/useContact";
import { UpdateContactSettingsDto } from "../../../api/contact";
import * as styles from "../../../styles/admin/admin-contact-settings.css";

export default function ContactSettingsPage() {
  const { data: settings, isLoading, error } = useContactSettings();
  const updateSettingsMutation = useUpdateContactSettings();

  const [formData, setFormData] = useState<UpdateContactSettingsDto>({});
  const [isEditing, setIsEditing] = useState(false);

  // 설정 데이터가 로드되면 폼 데이터 초기화
  React.useEffect(() => {
    if (settings) {
      setFormData({
        pageTitle: settings.pageTitle,
        pageSubtitle: settings.pageSubtitle,
        pageDescription: settings.pageDescription,
        contactSectionTitle: settings.contactSectionTitle,
        contactSectionDescription: settings.contactSectionDescription,
        businessName: settings.businessName,
        businessAddress: settings.businessAddress,
        businessPhone: settings.businessPhone,
        businessEmail: settings.businessEmail,
        businessFax: settings.businessFax,
        operatingHours: settings.operatingHours,
        businessDays: settings.businessDays,
        kakaoTalkId: settings.kakaoTalkId,
        naverTalkId: settings.naverTalkId,
        instagramUrl: settings.instagramUrl,
        facebookUrl: settings.facebookUrl,
        youtubeUrl: settings.youtubeUrl,
        formTitle: settings.formTitle,
        formDescription: settings.formDescription,
        inquiryTypes: settings.inquiryTypes,
        submitButtonText: settings.submitButtonText,
        successMessage: settings.successMessage,
        errorMessage: settings.errorMessage,
        privacyNotes: settings.privacyNotes,
        emergencyContactTitle: settings.emergencyContactTitle,
        emergencyContactDescription: settings.emergencyContactDescription,
        emergencyPhone: settings.emergencyPhone,
        emergencyHours: settings.emergencyHours,
        mapTitle: settings.mapTitle,
        mapDescription: settings.mapDescription,
        latitude: settings.latitude,
        longitude: settings.longitude,
        mapApiKey: settings.mapApiKey,
        // Discord 웹훅 설정
        discordWebhookUrl: settings.discordWebhookUrl,
        discordEnabled: settings.discordEnabled,
        discordMessageTitle: settings.discordMessageTitle,
        discordEmbedColor: settings.discordEmbedColor,
        isActive: settings.isActive,
      });
    }
  }, [settings]);

  const handleInputChange = (
    field: keyof UpdateContactSettingsDto,
    value: any
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateSettingsMutation.mutateAsync(formData);
      setIsEditing(false);
      alert("설정이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("설정 업데이트 실패:", error);
      alert("설정 업데이트에 실패했습니다.");
    }
  };

  const handleDiscordTest = async () => {
    if (!formData.discordWebhookUrl) {
      alert("디스코드 웹훅 URL을 먼저 입력해주세요.");
      return;
    }

    try {
      // 테스트 메시지 전송
      const testInquiry = {
        name: "테스트 사용자",
        email: "test@example.com",
        phone: "010-1234-5678",
        company: "테스트 회사",
        inquiryType: "테스트 문의",
        subject: "디스코드 웹훅 테스트",
        message: "이것은 디스코드 웹훅 테스트 메시지입니다.",
        isUrgent: false,
      };

      await fetch("/api/service/contact/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testInquiry),
      });

      alert("테스트 메시지가 전송되었습니다. 디스코드 채널을 확인해주세요.");
    } catch (error) {
      console.error("테스트 메시지 전송 실패:", error);
      alert("테스트 메시지 전송에 실패했습니다.");
    }
  };

  if (isLoading)
    return <div className={styles.loadingContainer}>로딩 중...</div>;
  if (error)
    return <div className={styles.errorContainer}>오류가 발생했습니다.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>연락처 설정 관리</h1>
        <p className={styles.subtitle}>
          웹사이트 연락처 페이지와 디스코드 웹훅 설정을 관리합니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 기본 정보 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>기본 정보</h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>페이지 제목</label>
              <input
                type="text"
                value={formData.pageTitle || ""}
                onChange={(e) => handleInputChange("pageTitle", e.target.value)}
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>페이지 부제목</label>
              <input
                type="text"
                value={formData.pageSubtitle || ""}
                onChange={(e) =>
                  handleInputChange("pageSubtitle", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>페이지 설명</label>
              <textarea
                value={formData.pageDescription || ""}
                onChange={(e) =>
                  handleInputChange("pageDescription", e.target.value)
                }
                className={styles.textarea}
                disabled={!isEditing}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* 회사 정보 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>회사 정보</h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>회사명</label>
              <input
                type="text"
                value={formData.businessName || ""}
                onChange={(e) =>
                  handleInputChange("businessName", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>주소</label>
              <input
                type="text"
                value={formData.businessAddress || ""}
                onChange={(e) =>
                  handleInputChange("businessAddress", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>전화번호</label>
              <input
                type="text"
                value={formData.businessPhone || ""}
                onChange={(e) =>
                  handleInputChange("businessPhone", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>이메일</label>
              <input
                type="email"
                value={formData.businessEmail || ""}
                onChange={(e) =>
                  handleInputChange("businessEmail", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>팩스</label>
              <input
                type="text"
                value={formData.businessFax || ""}
                onChange={(e) =>
                  handleInputChange("businessFax", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>운영시간</label>
              <input
                type="text"
                value={formData.operatingHours || ""}
                onChange={(e) =>
                  handleInputChange("operatingHours", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* 디스코드 웹훅 설정 섹션 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>디스코드 웹훅 설정</h2>
          <div className={styles.discordSection}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={formData.discordEnabled || false}
                  onChange={(e) =>
                    handleInputChange("discordEnabled", e.target.checked)
                  }
                  className={styles.checkbox}
                  disabled={!isEditing}
                />
                디스코드 웹훅 활성화
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>디스코드 웹훅 URL</label>
              <input
                type="url"
                value={formData.discordWebhookUrl || ""}
                onChange={(e) =>
                  handleInputChange("discordWebhookUrl", e.target.value)
                }
                className={styles.input}
                placeholder="https://discord.com/api/webhooks/..."
                disabled={!isEditing}
              />
              <p className={styles.helpText}>
                디스코드 채널에서 웹훅을 생성하고 URL을 입력하세요.
              </p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>메시지 제목</label>
              <input
                type="text"
                value={formData.discordMessageTitle || ""}
                onChange={(e) =>
                  handleInputChange("discordMessageTitle", e.target.value)
                }
                className={styles.input}
                disabled={!isEditing}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>임베드 색상</label>
              <input
                type="color"
                value={formData.discordEmbedColor || "#00ff00"}
                onChange={(e) =>
                  handleInputChange("discordEmbedColor", e.target.value)
                }
                className={styles.colorInput}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <button
                type="button"
                onClick={handleDiscordTest}
                className={styles.testButton}
              >
                테스트 메시지 전송
              </button>
            )}
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className={styles.actionButtons}>
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              편집하기
            </button>
          ) : (
            <>
              <button
                type="submit"
                className={styles.saveButton}
                disabled={updateSettingsMutation.isPending}
              >
                {updateSettingsMutation.isPending ? "저장 중..." : "저장"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  // 폼 데이터를 원래 설정으로 되돌리기
                  if (settings) {
                    setFormData({
                      pageTitle: settings.pageTitle,
                      pageSubtitle: settings.pageSubtitle,
                      pageDescription: settings.pageDescription,
                      contactSectionTitle: settings.contactSectionTitle,
                      contactSectionDescription:
                        settings.contactSectionDescription,
                      businessName: settings.businessName,
                      businessAddress: settings.businessAddress,
                      businessPhone: settings.businessPhone,
                      businessEmail: settings.businessEmail,
                      businessFax: settings.businessFax,
                      operatingHours: settings.operatingHours,
                      businessDays: settings.businessDays,
                      kakaoTalkId: settings.kakaoTalkId,
                      naverTalkId: settings.naverTalkId,
                      instagramUrl: settings.instagramUrl,
                      facebookUrl: settings.facebookUrl,
                      youtubeUrl: settings.youtubeUrl,
                      formTitle: settings.formTitle,
                      formDescription: settings.formDescription,
                      inquiryTypes: settings.inquiryTypes,
                      submitButtonText: settings.submitButtonText,
                      successMessage: settings.successMessage,
                      errorMessage: settings.errorMessage,
                      privacyNotes: settings.privacyNotes,
                      emergencyContactTitle: settings.emergencyContactTitle,
                      emergencyContactDescription:
                        settings.emergencyContactDescription,
                      emergencyPhone: settings.emergencyPhone,
                      emergencyHours: settings.emergencyHours,
                      mapTitle: settings.mapTitle,
                      mapDescription: settings.mapDescription,
                      latitude: settings.latitude,
                      longitude: settings.longitude,
                      mapApiKey: settings.mapApiKey,
                      discordWebhookUrl: settings.discordWebhookUrl,
                      discordEnabled: settings.discordEnabled,
                      discordMessageTitle: settings.discordMessageTitle,
                      discordEmbedColor: settings.discordEmbedColor,
                      isActive: settings.isActive,
                    });
                  }
                }}
                className={styles.cancelButton}
              >
                취소
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
