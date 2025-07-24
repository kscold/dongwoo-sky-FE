"use client"

import React from "react"
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"

import * as styles from "../../../styles/service/page/contact.css"
import { useHomePageData } from "../../../common/hooks/useHome"

export default function ContactPage() {
  const { data: homePageData } = useHomePageData()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(
      "어울림 스카이로 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!"
    )
    // 여기에 실제 폼 제출 로직 추가 (예: API 호출)
  }

  // 연락처 정보 가져오기
  const phoneNumber =
    homePageData?.contactInfo?.contactPhoneNumber || "010-1234-5678"
  const kakaoChannelUrl =
    homePageData?.contactInfo?.kakaoOpenChatUrl ||
    "https://pf.kakao.com/_YOUR_CHANNEL_ID"

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>어울림 스카이 견적 및 작업 문의</h1>
          <p className={styles.heroSubtitle}>
            신속하고 정확한 서비스, 지금 바로 문의하세요!
          </p>
          <a href={`tel:${phoneNumber}`} className={styles.phoneLinkButton}>
            전화 문의: {phoneNumber}
          </a>
          <a
            href={kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.kakaoButton}
          >
            <ChatBubbleLeftEllipsisIcon className={styles.kakaoIconStyle} />
            카카오톡 문의하기
          </a>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>온라인 문의</h2>
            <p className={styles.formDescription}>
              아래 양식을 작성해주시면 신속하게 확인 후 연락드리겠습니다.
              <br />
              급한 용무는 언제든지{" "}
              <a
                href={`tel:${phoneNumber}`}
                className={styles.formDescriptionLink}
              >
                {phoneNumber}
              </a>{" "}
              으로 전화 주시면 친절히 상담해 드립니다.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.formLabel}>
                  성함/회사명
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={styles.formInput}
                  placeholder="예: 홍길동 또는 어울림 스카이"
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone" className={styles.formLabel}>
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className={styles.formInput}
                  placeholder="예: 010-0000-0000"
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="location" className={styles.formLabel}>
                  작업 현장 주소
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className={styles.formInput}
                  placeholder="예: 서울시 강남구 테헤란로 123"
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="details" className={styles.formLabel}>
                  문의 내용
                </label>
                <textarea
                  name="details"
                  id="details"
                  rows={5}
                  required
                  className={styles.formTextarea}
                  placeholder="작업 내용, 요구사항, 기타 문의사항을 자세히 작성해주세요."
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
