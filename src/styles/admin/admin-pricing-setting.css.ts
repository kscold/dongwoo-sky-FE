import { style, keyframes } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const container = style({
  padding: vars.space.xl,
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: vars.space.xl,
  textAlign: "center",
})

export const title = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.md,
})

export const subtitle = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  marginBottom: vars.space.lg,
})

export const successMessage = style({
  padding: vars.space.md,
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  borderRadius: vars.radii.md,
  marginTop: vars.space.md,
  textAlign: "center",
})

export const errorMessage = style({
  padding: vars.space.md,
  backgroundColor: vars.colors.error,
  color: vars.colors.white,
  borderRadius: vars.radii.md,
  marginTop: vars.space.md,
  textAlign: "center",
})

export const loadingState = style({
  textAlign: "center",
  padding: vars.space.xl,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
})

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xl,
})

export const section = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.sm,
  borderBottom: `2px solid ${vars.colors.gray[200]}`,
})

export const sectionDescription = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginBottom: vars.space.md,
})

export const formGroup = style({
  marginBottom: vars.space.lg,
})

export const formRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: vars.space.lg,
})

export const label = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.text,
  marginBottom: vars.space.sm,
})

export const input = style({
  width: "100%",
  padding: vars.space.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
  ":disabled": {
    backgroundColor: vars.colors.gray[100],
    cursor: "not-allowed",
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "80px",
  },
])

export const arrayField = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

export const arrayItem = style({
  display: "flex",
  gap: vars.space.sm,
  alignItems: "flex-start",
})

export const removeButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.error,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  flexShrink: 0,
  ":hover": {
    backgroundColor: vars.colors.dangerDark,
  },
  ":disabled": {
    backgroundColor: vars.colors.gray[300],
    cursor: "not-allowed",
  },
})

export const addButton = style({
  padding: vars.space.md,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  marginTop: vars.space.sm,
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
  ":disabled": {
    backgroundColor: vars.colors.gray[300],
    cursor: "not-allowed",
  },
})

export const formActions = style({
  display: "flex",
  justifyContent: "center",
  padding: vars.space.xl,
})

export const saveButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
  ":disabled": {
    backgroundColor: vars.colors.gray[300],
    cursor: "not-allowed",
  },
})

export const spinner = style({
  width: "40px",
  height: "40px",
  border: `4px solid ${vars.colors.gray[200]}`,
  borderTop: `4px solid ${vars.colors.primary}`,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
})
