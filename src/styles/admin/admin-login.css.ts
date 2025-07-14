import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const loginContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
})

export const loginCard = style({
  width: "100%",
  maxWidth: "500px",
  padding: vars.space.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.lg,
})

export const loginTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  textAlign: "center",
  marginBottom: vars.space.xl,
})

export const loginForm = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const inputGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
})

export const inputLabel = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.textStrong,
})

export const input = style({
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
  },
})

export const loginButton = style({
  marginTop: vars.space.md,
  padding: vars.space.md,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const errorMessage = style({
  color: vars.colors.danger,
  fontSize: vars.fontSizes.sm,
  padding: vars.space.sm,
  backgroundColor: "#FEF2F2", // 연한 빨간색 배경
  borderRadius: vars.radii.sm,
  marginBottom: vars.space.md,
})

export const loginInfo = style({
  marginTop: vars.space.xl,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  textAlign: "center",
})
