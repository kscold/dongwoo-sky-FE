import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

// 전체 페이지 배경
export const pageWrapper = style({
  backgroundColor: vars.colors.backgroundLight,
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
});

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
    },
  },
})

export const header = style({
  marginBottom: "32px",
  paddingBottom: "24px",
  borderBottom: `2px solid ${vars.colors.gray[100]}`,
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "24px",
      paddingBottom: "20px",
    },
    "screen and (max-width: 480px)": {
      marginBottom: "16px",
      paddingBottom: "16px",
    },
  },
})

export const headerTop = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      gap: "12px",
      alignItems: "flex-start",
    },
  },
})

export const loadingState = style({
  textAlign: "center",
  padding: vars.space.xl,
})

export const errorState = style({
  textAlign: "center",
  padding: vars.space.xl,
  color: vars.colors.danger,
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  padding: "8px 16px",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#f8fafc",
    color: "#2563eb",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "13px",
      padding: "6px 12px",
    },
  },
})

export const breadcrumb = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: vars.colors.textLight,
  "@media": {
    "screen and (max-width: 768px)": {
      order: -1,
      fontSize: "13px",
    },
  },
})

export const breadcrumbLink = style({
  color: vars.colors.textLight,
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: vars.colors.primary,
  },
})

export const separator = style({
  color: vars.colors.gray[300],
})

export const current = style({
  color: vars.colors.textStrong,
  fontWeight: "600",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "16px",
  lineHeight: 1.3,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "28px",
      marginBottom: "14px",
    },
    "screen and (max-width: 480px)": {
      fontSize: "24px",
      marginBottom: "12px",
      lineHeight: 1.2,
    },
  },
})

export const ratingSection = style({
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "@media": {
    "screen and (max-width: 480px)": {
      marginBottom: "10px",
    },
  },
})

export const stars = style({
  fontSize: vars.fontSizes.lg,
  color: "#fbbf24",
})

export const ratingText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
})

export const customerInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

export const customer = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
})

export const company = style({
  fontSize: "14px",
  color: "#6b7280",
})

export const details = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
})

export const detail = style({
  fontSize: "14px",
  color: "#6b7280",
  backgroundColor: "#f3f4f6",
  padding: "4px 12px",
  borderRadius: "6px",
})

export const stats = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "14px",
  color: "#6b7280",
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

export const date = style({
  marginLeft: "auto",
})

// 이미지 갤러리 스타일 (work-showcase와 동일)
export const imageGallery = style({
  marginBottom: "32px",
})

export const mainImage = style({
  marginBottom: "16px",
  borderRadius: "8px",
  overflow: "hidden",
})

export const image = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
})

export const thumbnails = style({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
    "screen and (max-width: 480px)": {
      gap: "6px",
    },
  },
})

export const thumbnail = style({
  borderRadius: "6px",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
})

// 기존의 중복된 스타일들 제거됨

export const content = style({
  marginBottom: vars.space.xl,
})

export const contentBody = style({
  fontSize: vars.fontSizes.md,
  lineHeight: 1.6,
})

export const actions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "center",
})

export const helpfulButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
})

export const backToListButton = style({
  backgroundColor: vars.colors.gray[200],
  color: vars.colors.text,
  textDecoration: "none",
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radii.md,
})
