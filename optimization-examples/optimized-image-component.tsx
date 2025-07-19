"use client"

import Image from "next/image"
import { useState, useCallback } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  loading?: "lazy" | "eager"
  quality?: number
  placeholder?: "blur" | "empty"
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  onClick?: () => void
}

// 블러 데이터 URL 생성 함수
const generateBlurDataURL = (width: number, height: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return ''
  
  // 그라데이션 생성
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#f3f4f6')
  gradient.addColorStop(1, '#e5e7eb')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  return canvas.toDataURL()
}

// 이미지 크기별 srcSet 생성
const generateSrcSet = (src: string, sizes: number[]) => {
  return sizes
    .map(size => `${src}?w=${size}&q=75 ${size}w`)
    .join(', ')
}

// WebP 지원 체크
const supportsWebP = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
  quality = 75,
  placeholder = "blur",
  sizes,
  fill = false,
  style,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // 이미지 로드 완료 핸들러
  const handleLoadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  // 이미지 에러 핸들러
  const handleError = useCallback(() => {
    setImageError(true)
    setIsLoading(false)
  }, [])

  // 에러 시 fallback 이미지
  if (imageError) {
    return (
      <div 
        className={`${className} flex items-center justify-center bg-gray-200 text-gray-500`}
        style={{ width, height, ...style }}
      >
        <span className="text-2xl">🖼️</span>
      </div>
    )
  }

  // WebP 지원시 최적화된 포맷 사용
  const optimizedSrc = supportsWebP() && !src.includes('.gif') 
    ? src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    : src

  // 반응형 sizes 자동 생성
  const responsiveSizes = sizes || (
    fill 
      ? '100vw'
      : `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${width}px`
  )

  // 프리로드를 위한 link 태그 생성 (critical 이미지용)
  const preloadLink = priority ? (
    <link
      rel="preload"
      as="image"
      href={optimizedSrc}
      imageSizes={responsiveSizes}
      imageSrcSet={generateSrcSet(optimizedSrc, [480, 768, 1024, 1280])}
    />
  ) : null

  return (
    <>
      {preloadLink}
      <div className="relative">
        <Image
          src={optimizedSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={`${className} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={style}
          priority={priority}
          loading={loading}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={placeholder === 'blur' ? generateBlurDataURL(width, height) : undefined}
          sizes={responsiveSizes}
          onLoad={handleLoadComplete}
          onError={handleError}
          onClick={onClick}
        />
        
        {/* 로딩 스피너 */}
        {isLoading && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse"
            style={{ width, height }}
          >
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </>
  )
}

// 이미지 갤러리용 최적화된 컴포넌트
export const OptimizedImageGallery: React.FC<{
  images: Array<{ src: string; alt: string }>
  className?: string
  itemClassName?: string
  loading?: "lazy" | "eager"
}> = ({ images, className, itemClassName, loading = "lazy" }) => {
  return (
    <div className={`grid gap-4 ${className}`}>
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          className={itemClassName}
          loading={index < 3 ? "eager" : loading} // 첫 3개는 즉시 로드
          priority={index === 0} // 첫 번째 이미지만 우선순위
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        />
      ))}
    </div>
  )
}