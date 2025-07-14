"use client"

import React from "react"

import { WorkShowcase } from "../../../types/work-showcase"
import { CustomerReview } from "../../../types/customer-review"
import WorkShowcaseSwiper from "../swiper/WorkShowcaseSwiper"
import CustomerReviewSwiper from "../swiper/CustomerReviewSwiper"

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
  const isWorkShowcase = type === "work"

  if (isWorkShowcase) {
    return (
      <WorkShowcaseSwiper
        workShowcases={items as WorkShowcase[]}
        title={title}
        description={description}
        showViewAll={true}
        viewAllLink={link}
      />
    )
  }

  return (
    <CustomerReviewSwiper
      customerReviews={items as CustomerReview[]}
      title={title}
      description={description}
      showViewAll={true}
      viewAllLink={link}
    />
  )
}
