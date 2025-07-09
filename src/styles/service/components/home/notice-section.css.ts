import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

const pulse = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },
  "40%": {
    transform: "scale(1.0)",
  },
})

export const noticeSection = style({
  paddingTop: vars.space.xxxl,
  paddingBottom: vars.space.xxxxl,
  backgroundColor: vars.colors.backgroundLight,
})

export const noticeContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.space.lg}`,

  "@media": {
    "(max-width: 768px)": {
      padding: `0 ${vars.space.md}`,
    },
  },
})

export const noticeSectionHeader = style({
  textAlign: "center",
  marginBottom: vars.space.xxxl,
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,

  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const sectionSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})

export const noticeGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: vars.space.xl,
  marginBottom: vars.space.xl,

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.lg,
    },
  },
})

export const noticeCard = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  padding: vars.space.xl,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  border: "1px solid #e5e7eb",
  textDecoration: "none",
  color: "inherit",
  display: "block",

  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
  },
})

export const noticeCardFeatured = style({
  border: `2px solid ${vars.colors.secondary}`,
  background: `linear-gradient(135deg, ${vars.colors.white} 0%, #f8fffe 100%)`,
})

export const noticeCardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.md,
})

export const noticeBadge = style({
  backgroundColor: vars.colors.secondary,
  color: vars.colors.white,
  padding: "0.25rem 0.75rem",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
  marginBottom: vars.space.sm,
  lineHeight: "1.3",
})

export const noticeExcerpt = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  marginBottom: vars.space.md,
})

export const noticeCardFooter = style({
  display: "flex",
  justifyContent: "flex-end",
})

export const readMoreText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.medium,
})

export const noticeLoadingContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.md,
})

export const noticeLoadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
})

export const noticeLoadingSpinnerDot = style({
  width: "8px",
  height: "8px",
  backgroundColor: vars.colors.secondary,
  borderRadius: "50%",
  animation: `${pulse} 1.4s ease-in-out infinite both`,

  selectors: {
    "&:nth-child(1)": {
      animationDelay: "-0.32s",
    },
    "&:nth-child(2)": {
      animationDelay: "-0.16s",
    },
    "&:nth-child(3)": {
      animationDelay: "0s",
    },
  },
})

export const noticeErrorContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  backgroundColor: "#fef2f2",
  borderRadius: vars.radii.lg,
  border: "1px solid #fecaca",
})

export const noticeErrorIcon = style({
  fontSize: "2rem",
  marginBottom: vars.space.md,
})

export const noticeErrorSubtext = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.sm,
})

export const noticeEmptyContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  backgroundColor: "#f9fafb",
  borderRadius: vars.radii.lg,
  border: "2px dashed #d1d5db",
})

export const noticeEmptyIcon = style({
  fontSize: "2rem",
  marginBottom: vars.space.md,
})

export const noticeEmptySubtext = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.sm,
})

export const noticeViewMore = style({
  textAlign: "center",
  marginTop: vars.space.xl,
})

export const viewMoreButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  textDecoration: "none",
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.3s ease",
  display: "inline-block",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const noticeEmptyMessage = style({
  textAlign: "center",
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  paddingTop: vars.space.xl,
  paddingBottom: vars.space.xl,
})

// 기존 스타일들 유지를 위한 레거시 스타일
export const noticeList = style({
  listStyle: "none",
  padding: 0,
  maxWidth: vars.breakpoints.md,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const noticeItem = style({
  backgroundColor: vars.colors.white,
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: vars.shadows.lg,
    },
  },
})

export const noticeLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "block",
})

// NoticeSection 컴포넌트에서 사용되는 스타일들
export const header = style({
  textAlign: "center",
  marginBottom: vars.space.xxxl,
})

export const title = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const description = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})
