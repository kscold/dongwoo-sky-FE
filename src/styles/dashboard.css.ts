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

export const headerActions = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
})

export const dashboardTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  margin: 0,
})

export const viewSiteButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.backgroundLight,
  color: vars.colors.primary,
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
  },
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

export const statsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space.lg,
  marginBottom: vars.space.xxl,
})

export const statCard = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.lg,
  borderRadius: vars.radii.md,
  boxShadow: vars.shadows.sm,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
})

export const statTitle = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  marginBottom: vars.space.md,
  fontWeight: vars.fontWeights.medium,
})

export const statValue = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  margin: 0,
})

export const dashboardContent = style({
  marginTop: vars.space.xl,
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.colors.border}`,
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
  display: "flex",
  alignItems: "center",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: vars.shadows.lg,
  },
})

export const menuIconWrapper = style({
  width: "60px",
  height: "60px",
  backgroundColor: vars.colors.primary,
  borderRadius: vars.radii.md,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: vars.space.lg,
  flexShrink: 0,
})

export const menuIcon = style({
  fontSize: "24px",
  color: vars.colors.white,
})

export const menuInfo = style({
  flex: 1,
})

export const menuAction = style({
  marginLeft: vars.space.lg,
})

export const actionArrow = style({
  fontSize: vars.fontSizes.xl,
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.bold,
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
