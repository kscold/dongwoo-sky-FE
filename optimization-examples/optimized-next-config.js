/** @type {import('next').NextConfig} */
const nextConfig = {
  // 실험적 기능 활성화
  experimental: {
    // App Router 최적화
    appDir: true,
    
    // 서버 컴포넌트 최적화
    serverComponentsExternalPackages: ['@tanstack/react-query'],
    
    // 정적 이미지 최적화
    optimizeImages: true,
    
    // 폰트 최적화
    optimizeFonts: true,
    
    // CSS 최적화
    optimizeCss: true,
    
    // 웹팩 빌드 캐시 활성화
    webpackBuildWorker: true,
    
    // 부분 프리렌더링 (PPR) - Next.js 14+
    ppr: true,
  },

  // 이미지 최적화 설정
  images: {
    // 외부 이미지 도메인 허용
    domains: ['localhost', 'your-api-domain.com'],
    
    // 이미지 포맷 최적화
    formats: ['image/webp', 'image/avif'],
    
    // 이미지 크기 정의
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 이미지 품질 설정
    quality: 75,
    
    // 플레이스홀더 설정
    placeholder: 'blur',
    
    // 이미지 로더 최적화
    loader: 'default',
    
    // 미니멀 렌더링
    minimumCacheTTL: 60,
    
    // 이미지 압축
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 컴파일러 최적화
  compiler: {
    // SWC 미니파이어 사용
    minify: true,
    
    // React 최적화
    reactRemoveProperties: true,
    
    // 프로덕션에서 console.log 제거
    removeConsole: process.env.NODE_ENV === 'production',
    
    // Styled Components 최적화
    styledComponents: true,
    
    // 감정 (emotion) 최적화
    emotion: true,
  },

  // 웹팩 설정 커스터마이징
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 번들 분석기 (개발 모드에서만)
    if (dev && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          generateStatsFile: true,
          statsOptions: { source: false },
        })
      )
    }

    // 프로덕션 최적화
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        
        // 더 나은 트리 쉐이킹
        usedExports: true,
        sideEffects: false,
        
        // 모듈 연결 최적화
        concatenateModules: true,
        
        // 청크 분할 최적화
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // 벤더 라이브러리 분리
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              priority: 10,
              reuseExistingChunk: true,
            },
            
            // React Query 별도 청크
            reactQuery: {
              test: /[\\/]node_modules[\\/]@tanstack[\\/]react-query[\\/]/,
              name: 'react-query',
              priority: 20,
              reuseExistingChunk: true,
            },
            
            // UI 라이브러리 분리
            ui: {
              test: /[\\/]node_modules[\\/](swiper|framer-motion|heroicons)[\\/]/,
              name: 'ui-libs',
              priority: 15,
              reuseExistingChunk: true,
            },
            
            // 공통 컴포넌트 분리
            common: {
              name: 'common',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    // 별칭 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/common/components'),
      '@hooks': path.resolve(__dirname, 'src/common/hooks'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }

    // 불필요한 의존성 제거
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    }

    // 로더 최적화
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  // 출력 최적화
  output: 'standalone',
  
  // 압축 설정
  compress: true,
  
  // 정적 최적화
  trailingSlash: false,
  
  // 페이지 확장자 설정
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // 리디렉션 설정
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },

  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // 환경 변수 설정
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // 타입스크립트 설정
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint 설정
  eslint: {
    ignoreDuringBuilds: false,
  },

  // PoweredBy 헤더 제거
  poweredByHeader: false,

  // 런타임 설정
  runtime: 'nodejs',

  // 성능 모니터링
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // 개발 모드 설정
  ...(process.env.NODE_ENV === 'development' && {
    // 개발 서버 최적화
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
    },
    
    // 빠른 새로고침
    fastRefresh: true,
    
    // 소스맵 생성
    productionBrowserSourceMaps: true,
  }),
}

// 번들 분석기 설정
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// PWA 설정
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withBundleAnalyzer(withPWA(nextConfig))