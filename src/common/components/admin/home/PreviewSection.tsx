import React from "react"
import Image from "next/image"
import "../../../../../styles/admin/admin-home-page.css"

interface PreviewSectionProps {
  currentTitle: any
  currentButtons: any
  currentImages: any[]
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
  onImageIndexChange,
}) => {
  return (
    <div className="section">
      <h2 className="sectionTitle">미리보기</h2>
      <div className="previewContainer">
        <div className="heroPreview">
          {/* Background Image */}
          {currentImages && currentImages.length > 0 ? (
            <div className="previewImageContainer">
              <Image
                src={currentImages[currentImageIndex]?.url || "/placeholder-image.jpg"}
                alt="Hero preview"
                fill
                className="previewBackgroundImage"
              />
              <div className="previewOverlay" />
            </div>
          ) : (
            <div className="previewPlaceholder">
              <span>이미지를 업로드해주세요</span>
            </div>
          )}

          {/* Content */}
          <div className="previewContent">
            {currentTitle?.sub && (
              <p className="previewSubtitle">{currentTitle.sub}</p>
            )}
            
            {currentTitle?.main && (
              <h1 className="previewMainTitle">
                {currentTitle.main}
                {currentTitle?.highlight && (
                  <span className="previewHighlight"> {currentTitle.highlight}</span>
                )}
              </h1>
            )}

            {heroSubtitle && (
              <p className="previewDescription">{heroSubtitle}</p>
            )}

            {/* Buttons */}
            <div className="previewButtons">
              {currentButtons?.primary?.enabled && currentButtons.primary.text && (
                <button className="previewButton previewButtonPrimary">
                  {currentButtons.primary.text}
                </button>
              )}
              {currentButtons?.secondary?.enabled && currentButtons.secondary.text && (
                <button className="previewButton previewButtonSecondary">
                  {currentButtons.secondary.text}
                </button>
              )}
            </div>
          </div>

          {/* Image Indicators */}
          {currentImages && currentImages.length > 1 && (
            <div className="previewIndicators">
              {currentImages.map((_, index) => (
                <button
                  key={index}
                  className={`previewIndicator ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => onImageIndexChange(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="previewInfo">
          <h3>미리보기 정보</h3>
          <div className="previewStats">
            <div className="previewStat">
              <span className="statLabel">이미지 수:</span>
              <span className="statValue">{currentImages?.length || 0}</span>
            </div>
            <div className="previewStat">
              <span className="statLabel">활성 버튼:</span>
              <span className="statValue">
                {[
                  currentButtons?.primary?.enabled && "메인",
                  currentButtons?.secondary?.enabled && "보조"
                ].filter(Boolean).join(", ") || "없음"}
              </span>
            </div>
            <div className="previewStat">
              <span className="statLabel">타이틀 설정:</span>
              <span className="statValue">
                {currentTitle?.main ? "완료" : "미설정"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}