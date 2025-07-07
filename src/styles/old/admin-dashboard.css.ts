import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const dashboardContainer = style({
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  minHeight: "100vh",
})

export const dashboardWrapper = style({
  maxWidth: "1400px",
  margin: "0 auto",
})

export const dashboardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.lg} ${vars.space.xl}`,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  marginBottom: vars.space.lg,
})

export const headerContent = style({})

export const dashboardTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
})

export const dashboardSubtitle = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  marginTop: vars.space.xs,
})

export const headerActions = style({
  display: "flex",
  gap: vars.space.md,
})

const baseButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderRadius: vars.radii.md,
  border: "none",
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const viewSiteButton = style([
  baseButton,
  {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    textDecoration: "none",
    ":hover": {
      backgroundColor: vars.colors.primaryDark,
    },
  },
])

export const logoutButton = style([
  baseButton,
  {
    backgroundColor: vars.colors.gray[200],
    color: vars.colors.text,
    ":hover": {
      backgroundColor: vars.colors.gray[300],
    },
  },
])

export const dashboardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space.lg,
})

export const statCard = style({
  padding: vars.space.lg,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const statIcon = style({
  fontSize: vars.fontSizes.xl,
})

export const statNumber = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
})

export const statLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const quickActionsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: vars.space.lg,
})

export const actionCard = style({
  padding: vars.space.lg,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadows.md,
  },
})

export const actionIcon = style({
  fontSize: vars.fontSizes.xxl,
  marginBottom: vars.space.md,
})

export const actionTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.xs,
})

export const actionDescription = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  lineHeight: "1.5",
})
