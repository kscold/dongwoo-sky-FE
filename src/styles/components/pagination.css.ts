import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.sm,
  marginTop: vars.space.xxl,
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: vars.space.xl,
      gap: vars.space.xs,
    },
  },
})

export const pageButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  color: vars.colors.text,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  transition: vars.transitions.medium,
  ":hover": {
    backgroundColor: vars.colors.accent,
    borderColor: vars.colors.primary,
    color: vars.colors.primary,
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      padding: `${vars.space.xs} ${vars.space.sm}`,
      fontSize: vars.fontSizes.xs,
    },
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: vars.space.xs,
  "@media": {
    "screen and (max-width: 480px)": {
      gap: "2px",
    },
  },
})

export const pageNumber = style({
  minWidth: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  color: vars.colors.text,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  transition: vars.transitions.medium,
  ":hover": {
    backgroundColor: vars.colors.accent,
    borderColor: vars.colors.primary,
    color: vars.colors.primary,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      minWidth: "36px",
      height: "36px",
      fontSize: vars.fontSizes.xs,
    },
    "screen and (max-width: 480px)": {
      minWidth: "32px",
      height: "32px",
    },
  },
})

export const active = style({
  backgroundColor: vars.colors.primary,
  borderColor: vars.colors.primary,
  color: vars.colors.white,
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    borderColor: vars.colors.primaryDark,
    color: vars.colors.white,
  },
})
