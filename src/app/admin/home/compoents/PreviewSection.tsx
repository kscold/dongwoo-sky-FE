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
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>미리보기</h3>
      <div className={styles.previewContainer}>
        <div 
          className={styles.heroPreview}
          style={{
            backgroundImage: currentImages?.length > 0 
              ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${typeof currentImages[currentImageIndex] === 'string' ? currentImages[currentImageIndex] : (currentImages[currentImageIndex]?.url || currentImages[0])})` 
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          <div className={styles.heroContent}>
            {currentTitle?.preTitle && (
              <div 
                className={styles.heroPreviewSubtitle}
                dangerouslySetInnerHTML={{ __html: currentTitle.preTitle }}
              />
            )}
            {currentTitle?.mainTitle && (
              <h1 className={styles.heroPreviewTitle}>{currentTitle.mainTitle}</h1>
            )}
            {currentTitle?.postTitle && (
              <div className={styles.heroPreviewDescription}>{currentTitle.postTitle}</div>
            )}
            
            {heroSubtitle && (
              <p className={styles.heroPreviewDescription}>{heroSubtitle}</p>
            )}
            
            <div className={styles.heroButtons}>
              {currentButtons?.primaryButtonText && (
                <button className={styles.primaryPreviewButton}>
                  {currentButtons.primaryButtonText}
                </button>
              )}
              {currentButtons?.secondaryButtonText && (
                <button className={styles.secondaryPreviewButton}>
                  {currentButtons.secondaryButtonText}
                </button>
              )}
            </div>
          </div>
          
          {currentImages?.length > 1 && (
            <div className={styles.imageIndicators}>
              {currentImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => onImageIndexChange(index)}
                />
              ))}
            </div>
          )}
        </div>
        
        {currentImages?.length > 0 && (
          <div className={styles.previewNote}>
            <p>
              현재 {currentImages.length}개의 이미지 중 {currentImageIndex + 1}번째 이미지가 표시되고 있습니다.
              {currentImages.length > 1 && " 5초마다 자동으로 변경됩니다."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}