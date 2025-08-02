import { PageSEO, SEOMetadata } from "../../types/seo"

export const mockSEOData: PageSEO[] = [
  {
    page: "home",
    path: "/",
    metadata: {
      id: "1",
      title: "동우스카이 | 고소작업·크레인·중장비 전문 렌탈 서비스",
      description: "동우스카이는 고소작업차, 크레인, 굴삭기 등 중장비 렌탈 전문 기업입니다. 스카이 작업의 모든 것, 20년 경력의 전문가가 안전하게 책임집니다.",
      keywords: ["동우스카이", "스카이작업", "고소작업차", "스카이렌탈", "크레인렌탈", "중장비렌탈", "하늘작업", "스카이장비", "동우중장비", "SKY렌탈"],
      ogTitle: "동우스카이 - 하늘을 닿는 믿음직한 파트너",
      ogDescription: "스카이 작업 전문 동우스카이! 고소작업차, 크레인 등 안전한 중장비 렌탈 서비스. 24시간 상담 가능",
      robots: "index, follow",
      canonical: "https://dongwoo-sky.com",
      ogImage: "/images/dongwoo-sky-og.jpg",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "동우스카이",
        "description": "고소작업차 및 중장비 렌탈 전문 업체",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "서울",
          "addressCountry": "KR"
        },
        "telephone": "+82-10-1234-5678",
        "url": "https://dongwoo-sky.com"
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  },
  {
    page: "service-guide",
    path: "/service-guide",
    metadata: {
      id: "2",
      title: "스카이 작업 서비스 안내 | 동우스카이 중장비 렌탈",
      description: "동우스카이의 전문 스카이 작업 서비스를 소개합니다. 고소작업차, 크레인, 굴삭기 등 다양한 스카이 장비로 높은 곳의 작업을 안전하게 수행합니다.",
      keywords: ["스카이서비스", "고소작업서비스", "동우스카이서비스", "스카이작업안내", "크레인작업", "중장비서비스", "하늘작업서비스", "SKY서비스"],
      ogTitle: "스카이 작업 서비스 완벽 가이드 - 동우스카이",
      ogDescription: "동우스카이의 전문 스카이 작업 서비스! 고소작업차부터 크레인까지, 모든 하늘 작업을 안전하게",
      robots: "index, follow",
      ogImage: "/images/service-guide-og.jpg",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  },
  {
    page: "pricing",
    path: "/pricing",
    metadata: {
      id: "3",
      title: "스카이 장비 렌탈 요금 | 동우스카이 가격표",
      description: "동우스카이의 투명한 스카이 장비 렌탈 요금을 확인하세요. 고소작업차, 크레인 등 스카이 작업 장비를 합리적인 가격에 제공합니다.",
      keywords: ["스카이렌탈요금", "동우스카이가격", "고소작업차요금", "크레인렌탈비용", "스카이장비가격", "중장비렌탈요금", "SKY렌탈가격"],
      ogTitle: "스카이 장비 렌탈 요금표 - 동우스카이",
      ogDescription: "동우스카이 스카이 장비 렌탈 요금 안내. 투명하고 합리적인 가격으로 최고의 서비스 제공",
      robots: "index, follow",
      ogImage: "/images/pricing-og.jpg",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  },
  {
    page: "contact",
    path: "/contact",
    metadata: {
      id: "4",
      title: "스카이 작업 문의 | 동우스카이 24시간 상담",
      description: "동우스카이 스카이 작업 견적 및 상담 문의. 고소작업차, 크레인 등 스카이 장비 렌탈은 동우스카이에 문의하세요. 24시간 신속 상담!",
      keywords: ["동우스카이문의", "스카이작업상담", "고소작업차문의", "크레인견적", "스카이렌탈문의", "중장비상담", "24시간상담", "SKY견적"],
      ogTitle: "스카이 작업 견적 문의 - 동우스카이 24시간 상담",
      ogDescription: "동우스카이 스카이 작업 전문 상담! 24시간 신속한 견적과 최적의 장비 추천",
      robots: "index, follow",
      ogImage: "/images/contact-og.jpg",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "동우스카이 문의하기",
        "description": "스카이 작업 전문 상담 및 견적 문의",
        "url": "https://dongwoo-sky.com/contact"
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }
]

export const createMockSEO = (page: string, metadata: Partial<SEOMetadata>): PageSEO => {
  return {
    page,
    path: metadata.canonical || `/${page}`,
    metadata: {
      id: Date.now().toString(),
      title: metadata.title || `${page} - 동우스카이`,
      description: metadata.description || `${page} 페이지입니다.`,
      keywords: metadata.keywords || [],
      ogTitle: metadata.ogTitle || metadata.title,
      ogDescription: metadata.ogDescription || metadata.description,
      robots: metadata.robots || "index, follow",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...metadata
    }
  }
}