"use client"

import React from "react"

import { WorkShowcase } from "../../../types/work-showcase"
import { CustomerReview } from "../../../types/customer-review"
import ContentSwiper from "../swiper/ContentSwiper"

interface ContentSectionProps {
  title?: string
  description?: string
  items: (WorkShowcase | CustomerReview)[]
  type: "work" | "review"
  link: string
}

export default function ContentSection({
  title,
  description,
  items,
  type,
  link,
}: ContentSectionProps) {
  const swiperType = type === "work" ? "showcase" : "review"

  return (
    <ContentSwiper
      type={swiperType}
      data={items}
      title={title}
      description={description}
      showViewAll={true}
      viewAllLink={link}
    />
  )
}
