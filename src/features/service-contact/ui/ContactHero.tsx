import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"
import type { ContactInfo } from "../types/contact"
import * as styles from "./contact-hero.css"

interface ContactHeroProps {
  contactInfo?: ContactInfo
}

export function ContactHero({ contactInfo }: ContactHeroProps) {
  const phoneNumber = contactInfo?.contactPhoneNumber || "010-1234-5678"
  const kakaoChannelUrl = contactInfo?.kakaoOpenChatUrl || "https://pf.kakao.com/_YOUR_CHANNEL_ID"

  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>어울림 스카이 견적 및 작업 문의</h1>
      <p className={styles.heroSubtitle}>
        신속하고 정확한 서비스, 지금 바로 문의하세요!
      </p>
      <div className={styles.buttonGroup}>
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
    </div>
  )
}