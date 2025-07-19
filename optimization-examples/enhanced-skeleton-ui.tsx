"use client"

import React from 'react'
import { motion } from 'framer-motion'

// 기본 스켈레톤 애니메이션 variants
const skeletonVariants = {
  initial: { opacity: 0.6 },
  animate: { 
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// 파형 애니메이션 variants
const waveVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "100%",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// 기본 스켈레톤 컴포넌트
export const SkeletonBox: React.FC<{
  width?: string | number
  height?: string | number
  className?: string
  animate?: boolean
}> = ({ width = "100%", height = "1rem", className = "", animate = true }) => (
  <motion.div
    className={`bg-gray-200 rounded ${className}`}
    style={{ width, height }}
    variants={animate ? skeletonVariants : undefined}
    initial={animate ? "initial" : undefined}
    animate={animate ? "animate" : undefined}
  />
)

// 파형 효과가 있는 스켈레톤
export const WaveSkeletonBox: React.FC<{
  width?: string | number
  height?: string | number
  className?: string
}> = ({ width = "100%", height = "1rem", className = "" }) => (
  <div 
    className={`relative bg-gray-200 rounded overflow-hidden ${className}`}
    style={{ width, height }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
      variants={waveVariants}
      initial="initial"
      animate="animate"
    />
  </div>
)

// 텍스트 라인 스켈레톤
export const SkeletonText: React.FC<{
  lines?: number
  className?: string
  animate?: boolean
}> = ({ lines = 3, className = "", animate = true }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonBox
        key={index}
        height="1rem"
        width={index === lines - 1 ? "70%" : "100%"}
        animate={animate}
      />
    ))}
  </div>
)

// 아바타 스켈레톤
export const SkeletonAvatar: React.FC<{
  size?: number
  className?: string
}> = ({ size = 40, className = "" }) => (
  <SkeletonBox
    width={size}
    height={size}
    className={`rounded-full ${className}`}
  />
)

// 카드 스켈레톤
export const SkeletonCard: React.FC<{
  className?: string
  hasImage?: boolean
  hasAvatar?: boolean
  textLines?: number
}> = ({ className = "", hasImage = true, hasAvatar = false, textLines = 3 }) => (
  <div className={`p-4 border border-gray-200 rounded-lg ${className}`}>
    {hasImage && (
      <WaveSkeletonBox height="200px" className="mb-4" />
    )}
    
    <div className="space-y-3">
      {hasAvatar && (
        <div className="flex items-center space-x-3 mb-3">
          <SkeletonAvatar size={32} />
          <div className="flex-1">
            <SkeletonBox height="1rem" width="60%" />
          </div>
        </div>
      )}
      
      <SkeletonBox height="1.5rem" width="80%" />
      <SkeletonText lines={textLines} />
      
      <div className="flex space-x-2 pt-2">
        <SkeletonBox height="2rem" width="80px" className="rounded-full" />
        <SkeletonBox height="2rem" width="100px" className="rounded-full" />
      </div>
    </div>
  </div>
)

// 리스트 스켈레톤
export const SkeletonList: React.FC<{
  items?: number
  className?: string
  itemClassName?: string
}> = ({ items = 5, className = "", itemClassName = "" }) => (
  <div className={`space-y-4 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className={`flex items-center space-x-4 ${itemClassName}`}>
        <SkeletonAvatar size={48} />
        <div className="flex-1 space-y-2">
          <SkeletonBox height="1rem" width="40%" />
          <SkeletonBox height="0.75rem" width="80%" />
        </div>
      </div>
    ))}
  </div>
)

// 그리드 스켈레톤
export const SkeletonGrid: React.FC<{
  columns?: number
  rows?: number
  gap?: string
  className?: string
}> = ({ columns = 3, rows = 2, gap = "gap-4", className = "" }) => (
  <div className={`grid grid-cols-${columns} ${gap} ${className}`}>
    {Array.from({ length: columns * rows }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
)

// 페이지별 특화 스켈레톤
export const PricingPageSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    {/* 헤더 스켈레톤 */}
    <div className="text-center mb-12">
      <WaveSkeletonBox height="3rem" width="60%" className="mx-auto mb-4" />
      <SkeletonText lines={2} className="max-w-2xl mx-auto" />
      <WaveSkeletonBox height="4rem" width="300px" className="mx-auto mt-6" />
    </div>

    {/* 장비 그리드 스켈레톤 */}
    <div className="mb-12">
      <SkeletonBox height="2rem" width="200px" className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="border rounded-lg p-4">
            <WaveSkeletonBox height="150px" className="mb-4" />
            <SkeletonBox height="1.5rem" width="80%" className="mb-2" />
            <SkeletonBox height="1rem" width="60%" />
          </div>
        ))}
      </div>
    </div>

    {/* 계산기 스켈레톤 */}
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <SkeletonBox height="2rem" width="40%" className="mb-4" />
          <WaveSkeletonBox height="3rem" className="mb-6" />
          <SkeletonText lines={4} />
        </div>
        <div>
          <SkeletonBox height="2rem" width="40%" className="mb-4" />
          <WaveSkeletonBox height="200px" />
        </div>
      </div>
    </div>
  </div>
)

export const WorkShowcasesPageSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    {/* 헤더 */}
    <div className="mb-8">
      <SkeletonBox height="3rem" width="40%" className="mb-4" />
      <SkeletonText lines={2} className="max-w-2xl" />
    </div>

    {/* 필터 */}
    <div className="flex space-x-4 mb-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonBox key={index} height="2.5rem" width="100px" className="rounded-full" />
      ))}
    </div>

    {/* 그리드 */}
    <SkeletonGrid columns={3} rows={3} className="mb-8" />

    {/* 페이지네이션 */}
    <div className="flex justify-center space-x-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonBox key={index} height="2.5rem" width="2.5rem" className="rounded" />
      ))}
    </div>
  </div>
)

export const CustomerReviewsPageSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    {/* 헤더 */}
    <div className="mb-8">
      <SkeletonBox height="3rem" width="30%" className="mb-4" />
      <SkeletonText lines={2} className="max-w-2xl" />
    </div>

    {/* 통계 카드들 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="bg-white border rounded-lg p-6 text-center">
          <WaveSkeletonBox height="3rem" width="3rem" className="mx-auto mb-4 rounded-full" />
          <SkeletonBox height="2rem" width="60%" className="mx-auto mb-2" />
          <SkeletonBox height="1rem" width="40%" className="mx-auto" />
        </div>
      ))}
    </div>

    {/* 리뷰 리스트 */}
    <div className="space-y-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-white border rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <SkeletonAvatar size={56} />
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <SkeletonBox height="1.5rem" width="150px" />
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <SkeletonBox key={starIndex} height="1rem" width="1rem" />
                  ))}
                </div>
              </div>
              <SkeletonText lines={3} className="mb-4" />
              <div className="flex space-x-4">
                <SkeletonBox height="1rem" width="80px" />
                <SkeletonBox height="1rem" width="100px" />
                <SkeletonBox height="1rem" width="120px" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export const ServiceGuidePageSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    {/* 히어로 섹션 */}
    <div className="text-center mb-16">
      <WaveSkeletonBox height="4rem" width="50%" className="mx-auto mb-6" />
      <SkeletonText lines={3} className="max-w-3xl mx-auto" />
    </div>

    {/* 장비 스와이퍼 */}
    <div className="mb-16">
      <SkeletonBox height="2rem" width="200px" className="mb-6" />
      <div className="flex space-x-4 overflow-hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <WaveSkeletonBox height="200px" className="mb-4" />
            <SkeletonBox height="1.5rem" width="80%" className="mb-2" />
            <SkeletonText lines={2} />
          </div>
        ))}
      </div>
    </div>

    {/* 서비스 범위 */}
    <div className="mb-16">
      <SkeletonBox height="2rem" width="200px" className="mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
            <SkeletonBox height="2rem" width="2rem" className="rounded-full" />
            <SkeletonBox height="1rem" width="80%" />
          </div>
        ))}
      </div>
    </div>

    {/* 프로필 섹션 */}
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <WaveSkeletonBox height="200px" width="200px" className="rounded-lg flex-shrink-0" />
        <div className="flex-1">
          <SkeletonBox height="2rem" width="200px" className="mb-4" />
          <SkeletonBox height="1.5rem" width="150px" className="mb-6" />
          <SkeletonText lines={5} />
        </div>
      </div>
    </div>
  </div>
)

// 스켈레톤 팩토리 함수
export const createPageSkeleton = (type: 'pricing' | 'work-showcases' | 'customer-reviews' | 'service-guide' | 'notice') => {
  const skeletons = {
    pricing: PricingPageSkeleton,
    'work-showcases': WorkShowcasesPageSkeleton,
    'customer-reviews': CustomerReviewsPageSkeleton,
    'service-guide': ServiceGuidePageSkeleton,
    notice: () => <SkeletonList items={10} className="container mx-auto px-4 py-8" />,
  }

  return skeletons[type] || SkeletonList
}