import { style, keyframes, globalStyle } from "@vanilla-extract/css"

import { vars } from "../../../common/theme.css"

const pulse = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },
  "40%": {
    transform: "scale(1.0)",
  },
})

export const noticeSection = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.xxxxl} ${vars.space.xl}`,
  width: "100%",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  borderRadius: vars.radii.xxl,
  position: "relative",
  overflow: "hidden",
  
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
    pointerEvents: "none",
  },
  
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xxxl} ${vars.space.lg}`,
      borderRadius: vars.radii.xl,
    },
    "(max-width: 480px)": {
      padding: `${vars.space.xxl} ${vars.space.md}`,
      borderRadius: vars.radii.lg,
    },
  },
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
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: vars.radii.xl,
  padding: vars.space.xl,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  textDecoration: "none",
  color: "inherit",
  display: "block",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease",
  },

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px rgba(59, 130, 246, 0.15), 0 8px 24px ${vars.colors.primary}20`,
    borderColor: `${vars.colors.primary}30`,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
  },


  "@media": {
    "(max-width: 768px)": {
      borderRadius: vars.radii.lg,
      ":hover": {
        transform: "translateY(-4px)",
      },
    },
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
  fontWeight: vars.fontWeights.medium,
  backgroundColor: vars.colors.gray[100],
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.md,
  whiteSpace: "nowrap",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      padding: `${vars.space.xs} ${vars.space.xs}`,
      alignSelf: "flex-end",
    },
  },
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  lineHeight: "1.4",
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.md,
      whiteSpace: "normal",
      marginBottom: vars.space.xs,
    },
  },
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
  transition: "all 0.3s ease",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  
  "::after": {
    content: "→",
    fontSize: "1.1em",
    transition: "transform 0.3s ease",
  },
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
  padding: `${vars.space.md} ${vars.space.xxl}`,
  borderRadius: vars.radii.xl,
  textDecoration: "none",
  fontWeight: vars.fontWeights.semibold,
  fontSize: vars.fontSizes.md,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  boxShadow: `0 4px 14px ${vars.colors.primary}30`,
  position: "relative",
  zIndex: 1,
  
  "::after": {
    content: "→",
    fontSize: "1.1em",
    transition: "transform 0.3s ease",
  },

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-3px)",
    boxShadow: `0 8px 25px ${vars.colors.primary}40`,
  },
  
  
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.lg}`,
      fontSize: vars.fontSizes.sm,
    },
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
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: 0,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: vars.radii.xl,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  overflow: "hidden",
  backdropFilter: "blur(20px)",
  position: "relative",
  zIndex: 1,
  
  "@media": {
    "(max-width: 768px)": {
      borderRadius: vars.radii.lg,
      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
    },
  },
})

export const noticeItem = style({
  backgroundColor: "transparent",
  borderBottom: `1px solid ${vars.colors.gray[100]}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: `${vars.colors.primary}05`,
      transform: "translateX(8px)",
    },
    "&::before": {
      content: "",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "4px",
      background: `linear-gradient(180deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover::before": {
      opacity: 1,
    },
  },
  "@media": {
    "(max-width: 768px)": {
      selectors: {
        "&:hover": {
          transform: "translateX(4px)",
        },
      },
    },
  },
})

export const noticeLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.lg} ${vars.space.xl}`,
  gap: vars.space.lg,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  minHeight: "80px",
  
  "::before": {
    content: "",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "5px",
    background: `linear-gradient(180deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    opacity: 0,
    transition: "all 0.3s ease",
    borderRadius: "0 4px 4px 0",
  },
  
  "::after": {
    content: "→",
    position: "absolute",
    right: vars.space.lg,
    fontSize: "1.2em",
    color: vars.colors.primary,
    opacity: 0,
    transform: "translateX(-10px)",
    transition: "all 0.3s ease",
  },
  
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: `${vars.space.md} ${vars.space.lg}`,
      gap: vars.space.sm,
      minHeight: "auto",
      
      "::after": {
        display: "none",
      },
    },
  },
})

// NoticeSection 컴포넌트에서 사용되는 스타일들
export const header = style({
  textAlign: "center",
  marginBottom: vars.space.xxxl,
  paddingBottom: vars.space.xl,
  position: "relative",
  zIndex: 1,
  
  "::after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: `linear-gradient(90deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    borderRadius: vars.radii.full,
  },
  
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxl,
      paddingBottom: vars.space.lg,
    },
  },
})

export const title = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.extrabold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  letterSpacing: "-0.02em",
  background: `linear-gradient(135deg, ${vars.colors.textStrong} 0%, ${vars.colors.primary} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",

  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
})

export const description = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})

// 호버 효과를 위한 글로벌 스타일
globalStyle(`${noticeCard}:hover::before`, {
  transform: "translateX(0)",
})

globalStyle(`${noticeCard}:hover ${noticeTitle}`, {
  color: vars.colors.primary,
  transform: "translateX(4px)",
})

globalStyle(`${noticeCard}:hover ${readMoreText}`, {
  color: vars.colors.primaryDark,
  transform: "translateX(4px)",
})

globalStyle(`${noticeCard}:hover ${readMoreText}::after`, {
  transform: "translateX(4px)",
})

// Notice link 호버 효과
globalStyle(`${noticeItem}:hover ${noticeLink}::before`, {
  opacity: 1,
})

globalStyle(`${noticeItem}:hover ${noticeLink}::after`, {
  opacity: 1,
  transform: "translateX(0)",
})

globalStyle(`${noticeItem}:hover ${noticeLink}`, {
  paddingRight: "3rem",
})

globalStyle(`${noticeLink}:hover ${noticeTitle}`, {
  color: vars.colors.primary,
  transform: "translateX(8px)",
})

globalStyle(`${viewMoreButton}:hover::after`, {
  transform: "translateX(4px)",
})
