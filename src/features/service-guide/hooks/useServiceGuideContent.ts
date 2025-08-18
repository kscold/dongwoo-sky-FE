import { useServiceGuideData } from "../../../common/hooks/useServiceGuide"
import { usePageSEO, useStructuredData } from "../../../common/hooks/useSEO"

export const useServiceGuideContent = () => {
  const { data: serviceGuideData, isLoading, isError } = useServiceGuideData()
  const { data: seoData } = usePageSEO('service-guide')
  const { data: structuredData } = useStructuredData('service')

  // SEO 메타데이터 준비
  const seoMetadata = seoData?.metadata || {
    title: "서비스 안내 - 동우스카이 중장비 렌탈",
    description: "전문적인 중장비 렌탈 서비스를 제공합니다. 크레인, 굴삭기 등 다양한 장비와 숙련된 기사님이 안전하고 효율적인 작업을 보장합니다.",
    keywords: ["중장비 렌탈", "크레인 대여", "굴삭기 렌탈", "서비스 안내", "동우스카이", "전문 기사"],
    ogTitle: "동우스카이 서비스 안내 - 전문 중장비 렌탈",
    ogDescription: "숙련된 전문 기사와 함께하는 안전한 중장비 렌탈 서비스. 크레인, 굴삭기 등 다양한 장비를 합리적인 가격으로 제공합니다.",
    structuredData: structuredData || {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "동우스카이 중장비 렌탈 서비스",
      "description": "전문적인 중장비 렌탈 서비스",
      "provider": {
        "@type": "Organization",
        "name": "동우스카이"
      },
      "serviceType": "중장비 렌탈",
      "areaServed": "대한민국"
    }
  }

  return {
    serviceGuideData,
    isLoading,
    isError,
    seoMetadata
  }
}