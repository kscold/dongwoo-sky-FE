"use client"

import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// 성능 메트릭 타입
interface PerformanceMetrics {
  name: string
  value: number
  delta?: number
  id: string
  rating?: 'good' | 'needs-improvement' | 'poor'
}

// Web Vitals 측정을 위한 커스텀 훅
export const useWebVitals = () => {
  const router = useRouter()

  const handleMetric = useCallback((metric: PerformanceMetrics) => {
    // 개발 모드에서만 로그 출력
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', metric)
    }

    // 프로덕션에서는 analytics 서비스로 전송
    if (process.env.NODE_ENV === 'production') {
      // 예: Google Analytics, Mixpanel, 또는 자체 분석 서비스
      // analytics.track('web-vitals', metric)
    }
  }, [])

  useEffect(() => {
    // Next.js에서 제공하는 reportWebVitals 사용
    const reportWebVitals = async (metric: PerformanceMetrics) => {
      handleMetric(metric)
    }

    // 동적으로 web-vitals 라이브러리 로드
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals)
      getFID(reportWebVitals)
      getFCP(reportWebVitals)
      getLCP(reportWebVitals)
      getTTFB(reportWebVitals)
    })
  }, [handleMetric])

  return { handleMetric }
}

// 리소스 로딩 성능 모니터링
export const useResourceMonitoring = () => {
  const logResourceTiming = useCallback((resourceName: string) => {
    if (typeof window === 'undefined') return

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.name.includes(resourceName)) {
          console.log(`Resource ${resourceName}:`, {
            duration: entry.duration,
            transferSize: (entry as any).transferSize,
            encodedBodySize: (entry as any).encodedBodySize,
            decodedBodySize: (entry as any).decodedBodySize,
          })
        }
      })
    })

    observer.observe({ entryTypes: ['resource'] })

    return () => observer.disconnect()
  }, [])

  return { logResourceTiming }
}

// 컴포넌트 렌더링 성능 측정
export const useRenderPerformance = (componentName: string) => {
  const startTime = useRef<number>()

  useEffect(() => {
    startTime.current = performance.now()

    return () => {
      if (startTime.current) {
        const endTime = performance.now()
        const renderTime = endTime - startTime.current
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
        }

        // 성능 임계값 체크
        if (renderTime > 16) { // 60fps 기준
          console.warn(`${componentName} slow render detected: ${renderTime.toFixed(2)}ms`)
        }
      }
    }
  })
}

// 메모리 사용량 모니터링
export const useMemoryMonitoring = () => {
  const checkMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return

    const memory = (performance as any).memory
    const usage = {
      usedJSHeapSize: memory.usedJSHeapSize / 1024 / 1024, // MB
      totalJSHeapSize: memory.totalJSHeapSize / 1024 / 1024, // MB
      jsHeapSizeLimit: memory.jsHeapSizeLimit / 1024 / 1024, // MB
    }

    console.log('Memory usage:', usage)

    // 메모리 사용량이 80% 이상이면 경고
    if (usage.usedJSHeapSize / usage.jsHeapSizeLimit > 0.8) {
      console.warn('High memory usage detected!')
    }

    return usage
  }, [])

  useEffect(() => {
    // 주기적으로 메모리 사용량 체크
    const interval = setInterval(checkMemoryUsage, 30000) // 30초마다
    return () => clearInterval(interval)
  }, [checkMemoryUsage])

  return { checkMemoryUsage }
}

// 네트워크 성능 모니터링
export const useNetworkMonitoring = () => {
  const [networkInfo, setNetworkInfo] = useState<{
    effectiveType?: string
    downlink?: number
    rtt?: number
    saveData?: boolean
  }>({})

  useEffect(() => {
    const updateNetworkInfo = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      
      if (connection) {
        setNetworkInfo({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        })
      }
    }

    updateNetworkInfo()

    const connection = (navigator as any).connection
    if (connection) {
      connection.addEventListener('change', updateNetworkInfo)
      return () => connection.removeEventListener('change', updateNetworkInfo)
    }
  }, [])

  return networkInfo
}

// 적응형 로딩 전략
export const useAdaptiveLoading = () => {
  const networkInfo = useNetworkMonitoring()
  const { checkMemoryUsage } = useMemoryMonitoring()

  const getLoadingStrategy = useCallback(() => {
    const memoryUsage = checkMemoryUsage()
    
    // 저성능 디바이스 감지
    const isLowEndDevice = 
      (memoryUsage && memoryUsage.jsHeapSizeLimit < 1000) || // 1GB 미만
      networkInfo.effectiveType === 'slow-2g' ||
      networkInfo.effectiveType === '2g' ||
      networkInfo.saveData

    // 중간 성능 디바이스 감지
    const isMidEndDevice = 
      networkInfo.effectiveType === '3g' ||
      (memoryUsage && memoryUsage.jsHeapSizeLimit < 2000) // 2GB 미만

    if (isLowEndDevice) {
      return {
        imageQuality: 60,
        enableLazyLoading: true,
        prefetchNextPage: false,
        useWebP: false,
        chunkSize: 'small',
        animationsEnabled: false,
      }
    } else if (isMidEndDevice) {
      return {
        imageQuality: 75,
        enableLazyLoading: true,
        prefetchNextPage: true,
        useWebP: true,
        chunkSize: 'medium',
        animationsEnabled: true,
      }
    } else {
      return {
        imageQuality: 85,
        enableLazyLoading: false,
        prefetchNextPage: true,
        useWebP: true,
        chunkSize: 'large',
        animationsEnabled: true,
      }
    }
  }, [networkInfo, checkMemoryUsage])

  return { getLoadingStrategy, networkInfo }
}

// 성능 최적화 컨텍스트
export const PerformanceContext = createContext<{
  loadingStrategy: ReturnType<typeof useAdaptiveLoading>['getLoadingStrategy']
  networkInfo: ReturnType<typeof useNetworkMonitoring>
}>({
  loadingStrategy: () => ({
    imageQuality: 75,
    enableLazyLoading: true,
    prefetchNextPage: true,
    useWebP: true,
    chunkSize: 'medium',
    animationsEnabled: true,
  }),
  networkInfo: {},
})

// 성능 모니터링 프로바이더
export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useWebVitals()
  useMemoryMonitoring()
  const { getLoadingStrategy, networkInfo } = useAdaptiveLoading()

  return (
    <PerformanceContext.Provider value={{ loadingStrategy: getLoadingStrategy, networkInfo }}>
      {children}
    </PerformanceContext.Provider>
  )
}

// 성능 최적화 컴포넌트 래퍼
export const withPerformanceOptimization = <P extends object>(
  Component: React.ComponentType<P>,
  options?: {
    measureRender?: boolean
    componentName?: string
  }
) => {
  const OptimizedComponent = (props: P) => {
    const { measureRender = true, componentName = Component.displayName || Component.name } = options || {}
    
    if (measureRender) {
      useRenderPerformance(componentName)
    }

    return <Component {...props} />
  }

  OptimizedComponent.displayName = `withPerformanceOptimization(${componentName})`
  return OptimizedComponent
}

// 번들 크기 분석 도구
export const bundleAnalytics = {
  // 동적 import 추적
  trackDynamicImport: (moduleName: string) => {
    const start = performance.now()
    return () => {
      const end = performance.now()
      console.log(`Dynamic import ${moduleName}: ${(end - start).toFixed(2)}ms`)
    }
  },

  // 청크 크기 로깅
  logChunkSize: (chunkName: string, size: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Chunk ${chunkName}: ${(size / 1024).toFixed(2)}KB`)
      
      // 큰 청크 경고
      if (size > 200 * 1024) { // 200KB 이상
        console.warn(`Large chunk detected: ${chunkName} (${(size / 1024).toFixed(2)}KB)`)
      }
    }
  },

  // 트리 쉐이킹 효과 측정
  measureTreeShaking: (libraryName: string, importedSize: number, fullSize: number) => {
    const savings = fullSize - importedSize
    const savingsPercentage = (savings / fullSize) * 100
    
    console.log(`Tree shaking ${libraryName}: ${savingsPercentage.toFixed(1)}% savings`)
  },
}

// 실시간 성능 대시보드 (개발 모드 전용)
export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isVisible])

  if (process.env.NODE_ENV !== 'development' || !isVisible) return null

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg z-50 max-w-md">
      <h3 className="font-bold mb-2">Performance Dashboard</h3>
      <div className="space-y-1 text-sm">
        {metrics.map((metric) => (
          <div key={metric.id} className="flex justify-between">
            <span>{metric.name}:</span>
            <span className={`font-mono ${
              metric.rating === 'good' ? 'text-green-400' :
              metric.rating === 'needs-improvement' ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {metric.value.toFixed(2)}ms
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}