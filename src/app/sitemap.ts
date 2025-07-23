import { MetadataRoute } from "next"

// 나중에 웹사이트 실제 도메인으로 변경해야 합니다.
const BASE_URL = "https://dongwoo-sky.vercel.app/"

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes should be configured from backend/CMS
  const staticRoutes: string[] = []

  const routes = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    // changeFrequency 및 priority는 필요에 따라 설정
    // changeFrequency: 'weekly',
    // priority: 0.8,
  }))

  return routes
}
