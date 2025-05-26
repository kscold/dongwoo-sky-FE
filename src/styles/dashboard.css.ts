import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const dashboardContainer = style({
  padding: vars.space.xl,
  maxWidth: "1200px",
  margin: "0 auto",
})

export const dashboardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xxl,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const dashboardTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  margin: 0,
})

export const logoutButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: vars.colors.danger,
    color: vars.colors.white,
    borderColor: vars.colors.danger,
  },
})

export const dashboardContent = style({
  marginTop: vars.space.xl,
})

export const menuGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.xl,
})

export const menuCard = style({
  padding: vars.space.xl,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  transition: "transform 0.2s, box-shadow 0.2s",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: vars.shadows.lg,
  },
})

export const menuTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
  marginTop: 0,
  marginBottom: vars.space.md,
})

export const menuDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  margin: 0,
})
