import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px",
  minHeight: "100vh",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "16px",
    },
    "screen and (max-width: 480px)": {
      padding: "12px",
    },
  },
})

export const header = style({
  marginBottom: "32px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "24px",
    },
    "screen and (max-width: 480px)": {
      marginBottom: "16px",
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
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "16px",
  ":hover": {
    textDecoration: "underline",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "12px",
      fontSize: "13px",
    },
  },
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
