import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f8fafc",
  padding: vars.space.lg,
})

export const content = style({
  maxWidth: "600px",
  width: "100%",
  textAlign: "center",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  padding: vars.space.xxl,
  boxShadow: vars.shadows.lg,
  border: `1px solid ${vars.colors.border}`,
})

export const iconContainer = style({
  marginBottom: vars.space.xl,
})

export const icon = style({
  fontSize: "4rem",
  display: "block",
})

export const title = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.md,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
})

export const description = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  marginBottom: vars.space.xl,
  lineHeight: vars.lineHeights.relaxed,
})

export const errorDetails = style({
  marginBottom: vars.space.xl,
  textAlign: "left",
})

export const details = style({
  backgroundColor: "#f8fafc",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  padding: vars.space.lg,
})

export const summary = style({
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.text,
  cursor: "pointer",
  marginBottom: vars.space.md,
  selectors: {
    "&:hover": {
      color: vars.colors.primary,
    },
  },
})

export const errorMessage = style({
  fontSize: vars.fontSizes.sm,
  color: "#dc2626",
  backgroundColor: "#fef2f2",
  padding: vars.space.md,
  borderRadius: vars.radii.sm,
  border: "1px solid #fecaca",
  overflow: "auto",
  maxHeight: "200px",
})

export const actions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "center",
  flexWrap: "wrap",
})

export const retryButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  border: "none",
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primaryDark,
      transform: "translateY(-1px)",
    },
  },
})

export const homeButton = style({
  backgroundColor: "transparent",
  color: vars.colors.primary,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  border: `2px solid ${vars.colors.primary}`,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  textDecoration: "none",
  display: "inline-block",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
      transform: "translateY(-1px)",
    },
  },
})
