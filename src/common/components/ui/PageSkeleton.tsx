"use client"

import React from "react"
import LoadingSkeleton from "./LoadingSkeleton"
import * as styles from "../../../styles/common/page-skeleton.css"

interface PageSkeletonProps {
  variant?: "service-guide" | "pricing" | "work-showcase" | "customer-review" | "notice" | "default"
}

const PageSkeleton: React.FC<PageSkeletonProps> = ({ variant = "default" }) => {
  return (
    <div className={styles.pageSkeletonContainer}>
      {/* Hero Section Skeleton */}
      <div className={styles.heroSkeleton}>
        <LoadingSkeleton height="3rem" width="60%" className={styles.titleSkeleton} />
        <LoadingSkeleton height="1.5rem" width="80%" className={styles.subtitleSkeleton} />
      </div>

      {/* Content Section Skeleton */}
      <div className={styles.contentSkeleton}>
        {variant === "service-guide" && (
          <>
            {/* Equipment Swiper Section */}
            <div className={styles.sectionSkeleton}>
              <LoadingSkeleton height="2rem" width="200px" className={styles.sectionTitleSkeleton} />
              <div className={styles.equipmentSwiperSkeleton}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className={styles.equipmentCardSkeleton}>
                    <LoadingSkeleton height="200px" width="100%" />
                    <LoadingSkeleton height="1.5rem" width="80%" className={styles.equipmentTitleSkeleton} />
                    <LoadingSkeleton height="1rem" width="60%" />
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Section */}
            <div className={styles.sectionSkeleton}>
              <LoadingSkeleton height="2rem" width="200px" className={styles.sectionTitleSkeleton} />
              <div className={styles.capabilitiesGridSkeleton}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <LoadingSkeleton key={i} height="60px" width="100%" />
                ))}
              </div>
            </div>

            {/* Profile Section */}
            <div className={styles.profileSectionSkeleton}>
              <div className={styles.profileImageSkeleton}>
                <LoadingSkeleton height="300px" width="300px" variant="rect" />
              </div>
              <div className={styles.profileInfoSkeleton}>
                <LoadingSkeleton height="2.5rem" width="200px" />
                <LoadingSkeleton height="1.5rem" width="150px" />
                <div className={styles.profileDetailsSkeleton}>
                  <LoadingSkeleton height="1.5rem" width="120px" />
                  {[1, 2, 3].map((i) => (
                    <LoadingSkeleton key={i} height="1rem" width="90%" />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {variant === "pricing" && (
          <>
            {/* Pricing Cards */}
            <div className={styles.pricingGridSkeleton}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.pricingCardSkeleton}>
                  <LoadingSkeleton height="200px" width="100%" />
                  <LoadingSkeleton height="1.5rem" width="80%" />
                  <LoadingSkeleton height="1rem" width="60%" />
                </div>
              ))}
            </div>
          </>
        )}

        {(variant === "work-showcase" || variant === "customer-review") && (
          <>
            {/* Grid Layout */}
            <div className={styles.gridSkeleton}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={styles.cardSkeleton}>
                  <LoadingSkeleton height="200px" width="100%" />
                  <LoadingSkeleton height="1.5rem" width="80%" />
                  <LoadingSkeleton height="1rem" width="60%" />
                  <LoadingSkeleton height="1rem" width="40%" />
                </div>
              ))}
            </div>
          </>
        )}

        {variant === "notice" && (
          <>
            {/* Notice List */}
            <div className={styles.noticeSkeleton}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={styles.noticeItemSkeleton}>
                  <LoadingSkeleton height="1.5rem" width="70%" />
                  <LoadingSkeleton height="1rem" width="100px" />
                </div>
              ))}
            </div>
          </>
        )}

        {variant === "default" && (
          <>
            {/* Default Content */}
            <div className={styles.defaultContentSkeleton}>
              <LoadingSkeleton height="2rem" width="300px" />
              {[1, 2, 3, 4].map((i) => (
                <LoadingSkeleton key={i} height="1rem" width="100%" className={styles.textLineSkeleton} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PageSkeleton