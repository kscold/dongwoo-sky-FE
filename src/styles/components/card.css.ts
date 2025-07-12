import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const card = style({
  display: "block",
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.border}`,
  overflow: "hidden",
  transition: vars.transitions.medium,
  textDecoration: "none",
  color: "inherit",
  boxShadow: vars.shadows.sm,
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadows.lg,
    borderColor: vars.colors.primary,
  },
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
  backgroundColor: vars.colors.accent,
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
  backgroundColor: vars.colors.accent,
})

export const content = style({
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const title = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.text,
  margin: 0,
  lineHeight: vars.lineHeights.heading,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.sm,
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  backgroundColor: vars.colors.accent,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
})

export const description = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
  margin: 0,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: vars.space.sm,
  marginTop: "auto",
  borderTop: `1px solid ${vars.colors.borderLight}`,
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
})

export const date = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
})