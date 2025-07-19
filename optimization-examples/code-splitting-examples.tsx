"use client"

import { lazy, Suspense, ComponentType } from 'react'
import dynamic from 'next/dynamic'
import { useInView } from 'react-intersection-observer'

// 1. 동적 임포트를 위한 래퍼 함수
const createDynamicComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: {
    loading?: ComponentType
    ssr?: boolean
    suspense?: boolean
  } = {}
) => {
  const { loading: LoadingComponent, ssr = false, suspense = false } = options

  if (suspense) {
    // React.lazy 사용 (Suspense 필요)
    const LazyComponent = lazy(importFunc)
    return (props: any) => (
      <Suspense fallback={LoadingComponent ? <LoadingComponent /> : <div>Loading...</div>}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }

  // Next.js dynamic 사용
  return dynamic(importFunc, {
    loading: LoadingComponent,
    ssr,
  })
}

// 2. 뷰포트 기반 레이지 로딩 훅
export const useInViewportLoading = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true, // 한 번만 트리거
  })

  return { ref, shouldLoad: inView }
}

// 3. 조건부 컴포넌트 로딩
export const ConditionalLoader: React.FC<{
  condition: boolean
  children: React.ReactNode
  fallback?: React.ReactNode
}> = ({ condition, children, fallback }) => {
  if (!condition) {
    return <>{fallback}</>
  }
  return <>{children}</>
}

// 4. 스크롤 기반 레이지 로딩 컴포넌트
export const LazySection: React.FC<{
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}> = ({ children, className, threshold = 0.1, rootMargin = '50px' }) => {
  const { ref, shouldLoad } = useInViewportLoading(threshold)

  return (
    <div ref={ref} className={className}>
      {shouldLoad ? (
        children
      ) : (
        <div className="h-96 flex items-center justify-center bg-gray-50">
          <div className="animate-pulse">로딩 중...</div>
        </div>
      )}
    </div>
  )
}

// 5. 페이지별 동적 컴포넌트들
export const DynamicComponents = {
  // Pricing 페이지 컴포넌트들
  PricingCalculator: createDynamicComponent(
    () => import('../../../common/components/pricing/PricingCalculator'),
    {
      loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
      ssr: false,
    }
  ),

  EquipmentDetailModal: createDynamicComponent(
    () => import('../../../common/components/equipment/EquipmentDetailModal'),
    {
      loading: () => <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg">로딩 중...</div>
      </div>,
      ssr: false,
    }
  ),

  // Work Showcases 페이지 컴포넌트들
  WorkShowcaseGrid: createDynamicComponent(
    () => import('../../../common/components/work-showcase/WorkShowcaseGrid'),
    {
      loading: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-lg" />
        ))}
      </div>,
      ssr: false,
    }
  ),

  // Customer Reviews 페이지 컴포넌트들
  CustomerReviewCard: createDynamicComponent(
    () => import('../../../common/components/customer-review/CustomerReviewCard'),
    {
      loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded-lg" />,
      ssr: false,
    }
  ),

  // 공통 컴포넌트들
  ImageGallery: createDynamicComponent(
    () => import('../../../common/components/ui/ImageGallery'),
    {
      loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
      ssr: false,
    }
  ),

  RichTextEditor: createDynamicComponent(
    () => import('../../../common/components/ui/RichTextEditor'),
    {
      loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
      ssr: false,
    }
  ),

  Chart: createDynamicComponent(
    () => import('../../../common/components/ui/Chart'),
    {
      loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
      ssr: false,
    }
  ),
}

// 6. 라우트 기반 프리로딩
export const useRoutePreloading = () => {
  const preloadRoute = async (route: string) => {
    const routeModules: Record<string, () => Promise<any>> = {
      '/pricing': () => import('../../../app/(service)/pricing/page'),
      '/service-guide': () => import('../../../app/(service)/service-guide/page'),
      '/work-showcases': () => import('../../../app/(service)/work-showcases/page'),
      '/customer-reviews': () => import('../../../app/(service)/customer-reviews/page'),
      '/notice': () => import('../../../app/(service)/notice/page'),
    }

    const moduleLoader = routeModules[route]
    if (moduleLoader) {
      try {
        await moduleLoader()
      } catch (error) {
        console.warn(`Failed to preload route ${route}:`, error)
      }
    }
  }

  return { preloadRoute }
}

// 7. 번들 분석을 위한 유틸리티
export const bundleAnalyzer = {
  // 중요한 번들 크기 모니터링
  logBundleSize: (componentName: string, size: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Bundle size for ${componentName}: ${size}KB`)
    }
  },

  // 레이지 로딩 성능 모니터링
  measureLoadTime: (componentName: string) => {
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now()
      return () => {
        const endTime = performance.now()
        console.log(`${componentName} load time: ${endTime - startTime}ms`)
      }
    }
    return () => {}
  },
}

// 8. 최적화된 라우팅 컴포넌트
export const OptimizedRoute: React.FC<{
  path: string
  component: ComponentType<any>
  preload?: boolean
  threshold?: number
}> = ({ path, component: Component, preload = false, threshold = 0.1 }) => {
  const { ref, shouldLoad } = useInViewportLoading(threshold)
  const { preloadRoute } = useRoutePreloading()

  // 마우스 오버 시 프리로드
  const handleMouseEnter = () => {
    if (preload) {
      preloadRoute(path)
    }
  }

  return (
    <div ref={ref} onMouseEnter={handleMouseEnter}>
      {shouldLoad ? (
        <Component />
      ) : (
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse">컴포넌트 로딩 중...</div>
        </div>
      )}
    </div>
  )
}