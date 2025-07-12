"use client"

import { FaPhoneAlt } from "react-icons/fa"
import * as styles from "@/styles/service/components/floating-call.css"
import { useHomePageData } from "@/common/hooks/useHome"
import { usePathname } from "next/navigation"

const FloatingCallButton = () => {
  const { data, isLoading, error } = useHomePageData()
  const pathname = usePathname()

  if (pathname.startsWith("/admin")) {
    return null
  }

  if (isLoading) return null
  if (error) return null
  if (!data?.contactInfo?.contactPhoneNumber) return null

  const phoneNumber = data.contactInfo.contactPhoneNumber

  return (
    <div className={styles.floatingContainer}>
      <a href={`tel:${phoneNumber}`} className={styles.phoneButton}>
        <div className={styles.buttonWrapper}>
          <div className={styles.consultationSection}>
            <span className={styles.consultationText}>상담</span>
            <span className={styles.consultationText}>문의</span>
          </div>
          <div className={styles.phoneSection}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <span className={styles.phoneText}>{phoneNumber}</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default FloatingCallButton
