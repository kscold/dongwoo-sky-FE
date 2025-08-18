"use client"

import React from "react"
import Head from "next/head"
import { SEOMetadata } from "../../../types/seo"

interface SEOHeadProps {
  metadata: SEOMetadata
  path?: string
  siteName?: string
  siteUrl?: string
}

const defaultMetadata: Partial<SEOMetadata> = {
  title: "동우스카이 | 고소작업·크레인·중장비 전문 렌탈 서비스",
  description: "동우스카이는 고소작업차, 크레인, 굴삭기 등 중장비 렌탈 전문 기업입니다. 스카이 작업의 모든 것, 20년 경력의 전문가가 안전하게 책임집니다.",
  keywords: ["동우스카이", "스카이작업", "고소작업차", "스카이렌탈", "크레인렌탈", "중장비렌탈", "하늘작업", "스카이장비", "동우중장비", "SKY렌탈"],
  robots: "index, follow"
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  metadata,
  path = "",
  siteName = "동우스카이",
  siteUrl = "https://dongwoo-sky.com"
}) => {
  const seo = { ...defaultMetadata, ...metadata }
  const fullUrl = `${siteUrl}${path}`
  const imageUrl = seo.ogImage?.startsWith('http') 
    ? seo.ogImage 
    : seo.ogImage 
    ? `${siteUrl}${seo.ogImage}` 
    : `${siteUrl}/images/og-default.jpg`

  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords?.join(", ")} />
      <meta name="robots" content={seo.robots} />
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}

      {/* Open Graph 메타 태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={seo.ogTitle || seo.title} />
      <meta property="og:description" content={seo.ogDescription || seo.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card 메타 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle || seo.title} />
      <meta name="twitter:description" content={seo.ogDescription || seo.description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* 추가 메타 태그 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* 파비콘 */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* 구조화 데이터 */}
      {seo.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData)
          }}
        />
      )}
    </Head>
  )
}