import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: vars.space.xl,
})

export const title = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.xl,
  textAlign: "center",
})

export const subtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  textAlign: "center",
  marginBottom: vars.space.xl,
})

export const loading = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
})

export const loadingState = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
})

export const error = style({
  textAlign: "center",
  padding: vars.space.xl,
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
  borderRadius: vars.radii.md,
  marginBottom: vars.space.lg,
})

export const errorState = style({
  textAlign: "center",
  padding: vars.space.xl,
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
  borderRadius: vars.radii.md,
  marginBottom: vars.space.lg,
})

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
})

export const retryButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  marginTop: vars.space.md,
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const backButton = style({
  display: "inline-block",
  color: vars.colors.primary,
  textDecoration: "none",
  marginBottom: vars.space.lg,
  fontSize: vars.fontSizes.md,
  ":hover": {
    textDecoration: "underline",
  },
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.lg,
  marginBottom: vars.space.xl,
})

export const card = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadows.md,
  },
})

export const imageContainer = style({
  width: "100%",
  height: "200px",
  overflow: "hidden",
  backgroundColor: vars.colors.gray[100],
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const imagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.fontSizes.xxxl,
  color: vars.colors.textLight,
  backgroundColor: vars.colors.gray[100],
})

export const content = style({
  padding: vars.space.lg,
})

export const cardTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
})

export const description = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.md,
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  marginBottom: vars.space.md,
})

export const metaItem = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const stats = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
})

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginLeft: "auto",
})

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.md,
  marginTop: vars.space.xl,
})

export const pageButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.gray[50],
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: vars.space.xs,
})

export const pageNumber = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.gray[50],
  },
})

export const active = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderColor: vars.colors.primary,
})

// Notice-specific styles
export const noticeList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const noticeItem = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
  transition: "transform 0.2s, box-shadow 0.2s",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.md,
  },
})

export const noticeLink = style({
  display: "block",
  padding: vars.space.lg,
  textDecoration: "none",
  color: "inherit",
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
  color: vars.colors.text,
})

export const noticeInfo = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.md,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeContent = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.md,
})

export const attachmentInfo = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.medium,
})

// Customer review specific styles
export const header = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
})

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.md,
})

export const stars = style({
  fontSize: vars.fontSizes.lg,
  color: "#fbbf24", // yellow color for stars
})

export const ratingText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})
