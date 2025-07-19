import React, { useEffect } from "react"
import Image from "next/image"
import { HomeSettings } from "../../../../types/home"
import * as styles from "../../../../styles/admin/admin-home-page.css"

interface PreviewSectionProps {
  currentTitle: HomeSettings['heroTitle']
  currentButtons: HomeSettings['heroButtons']
  currentImages: HomeSettings['heroImages']
  currentImageIndex: number
  heroSubtitle?: string
  onImageIndexChange: (index: number) => void
}

export const PreviewSection: React.FC<PreviewSectionProps> = ({
  currentTitle,
  currentButtons,
  currentImages,
  currentImageIndex,
  heroSubtitle,
  onImageIndexChange
}) => {
  useEffect(() => {
    if (currentImages?.length > 1) {
      const interval = setInterval(() => {
        onImageIndexChange((currentImageIndex + 1) % currentImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentImages?.length, currentImageIndex, onImageIndexChange])

  return (
    <div className={styles.previewSection}>
      <h3 className={styles.previewTitle}>미리보기</h3>
      <div className={styles.previewContainer}>
        <div className={styles.previewHero}>
          {currentImages?.length > 0 && (
            <div className={styles.previewImageContainer}>
              <Image
                src={currentImages[currentImageIndex]?.url}
                alt="Hero background"
                fill
                className={styles.previewBackgroundImage}
              />
            </div>
          )}
          
          <div className={styles.previewContent}>
            <div className={styles.previewTitleContainer}>
              {currentTitle?.preTitle && (
                <div className={styles.previewPreTitle}>{currentTitle.preTitle}</div>
              )}
              {currentTitle?.mainTitle && (
                <h1 className={styles.previewMainTitle}>{currentTitle.mainTitle}</h1>
              )}
              {currentTitle?.postTitle && (
                <div className={styles.previewPostTitle}>{currentTitle.postTitle}</div>
              )}
            </div>
            
            {heroSubtitle && (
              <p className={styles.previewSubtitle}>{heroSubtitle}</p>
            )}
            
            <div className={styles.previewButtonContainer}>
              {currentButtons?.primaryButtonText && (
                <button className={styles.previewPrimaryButton}>
                  {currentButtons.primaryButtonText}
                </button>
              )}
              {currentButtons?.secondaryButtonText && (
                <button className={styles.previewSecondaryButton}>
                  {currentButtons.secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}