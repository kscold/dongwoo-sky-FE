import { style } from "@vanilla-extract/css"

import { vars } from "./theme.css"

export const pageSkeletonContainer = style({
  minHeight: "100vh",
  backgroundColor: vars.colors.backgroundLight,
})

export const heroSkeleton = style({
  backgroundColor: vars.colors.gray[100],
  paddingTop: vars.space.xxxxl,
  paddingBottom: vars.space.xxxxl,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  textAlign: "center",
  marginBottom: vars.space.xxxl,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
})

export const titleSkeleton = style({
  marginBottom: vars.space.md,
})

export const subtitleSkeleton = style({
  marginBottom: 0,
})

export const contentSkeleton = style({
  maxWidth: vars.breakpoints.lg,
  margin: "0 auto",
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  paddingBottom: vars.space.xxxxl,
})

export const sectionSkeleton = style({
  marginBottom: vars.space.xxxl,
})

export const sectionTitleSkeleton = style({
  marginBottom: vars.space.xl,
})

// Equipment Swiper Skeleton
export const equipmentSwiperSkeleton = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: vars.space.lg,
  "@media": {
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const equipmentCardSkeleton = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.md,
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

export const equipmentTitleSkeleton = style({
  marginTop: vars.space.sm,
})

// Capabilities Grid Skeleton
export const capabilitiesGridSkeleton = style({
  display: "grid",
  gap: vars.space.md,
  gridTemplateColumns: "1fr",
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: vars.space.lg,
    },
  },
})

// Profile Section Skeleton
export const profileSectionSkeleton = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  boxShadow: vars.shadows.xl,
  padding: vars.space.xxxl,
  display: "grid",
  gap: vars.space.xxl,
  alignItems: "flex-start",
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "300px 1fr",
    },
  },
})

export const profileImageSkeleton = style({
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
  "@media": {
    "(min-width: 768px)": {
      margin: "0",
    },
  },
})

export const profileInfoSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const profileDetailsSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

// Pricing Grid Skeleton
export const pricingGridSkeleton = style({
  display: "grid",
  gap: vars.space.xl,
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
})

export const pricingCardSkeleton = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.lg,
  padding: vars.space.xl,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

// Grid Layout Skeleton (for work-showcase, customer-review)
export const gridSkeleton = style({
  display: "grid",
  gap: vars.space.xl,
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
})

export const cardSkeleton = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.md,
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

// Notice List Skeleton
export const noticeSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const noticeItemSkeleton = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.md,
  padding: vars.space.lg,
  boxShadow: vars.shadows.sm,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

// Default Content Skeleton
export const defaultContentSkeleton = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const textLineSkeleton = style({
  marginBottom: vars.space.sm,
})
