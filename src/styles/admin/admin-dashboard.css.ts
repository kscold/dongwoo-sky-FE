import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const dashboardContainer = style({
  minHeight: "100vh",
  backgroundColor: vars.colors.backgroundLight,
  padding: vars.space.xl,
})

export const dashboardWrapper = style({
  maxWidth: "1200px",
  margin: "0 auto",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  boxShadow: vars.shadows.lg,
  overflow: "hidden",
})

export const dashboardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.xxl} ${vars.space.xxl} ${vars.space.xl}`,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  color: vars.colors.white,
})

export const headerContent = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const dashboardTitle = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.white,
  margin: 0,
  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
})

export const dashboardSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.primaryLight,
  opacity: 0.9,
  margin: 0,
})

export const headerActions = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
})

export const viewSiteButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  color: vars.colors.white,
  border: `2px solid rgba(255, 255, 255, 0.3)`,
  borderRadius: vars.radii.lg,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
})

export const logoutButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "rgba(220, 38, 38, 0.1)",
  color: "#dc2626",
  border: `2px solid rgba(220, 38, 38, 0.3)`,
  borderRadius: vars.radii.lg,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
  ":hover": {
    backgroundColor: "#dc2626",
    color: vars.colors.white,
    borderColor: "#dc2626",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(220, 38, 38, 0.3)",
  },
})

export const dashboardContent = style({
  padding: vars.space.xxl,
})

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: vars.space.xl,
  marginBottom: vars.space.xxl,
})

export const statCard = style({
  padding: vars.space.xl,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.borderLight}`,
  borderRadius: vars.radii.xl,
  boxShadow: vars.shadows.md,
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadows.xl,
    borderColor: vars.colors.primary,
  },
})

export const statIcon = style({
  width: "60px",
  height: "60px",
  padding: vars.space.md,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: vars.radii.lg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: vars.space.lg,
  fontSize: "24px",
})

export const statNumber = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary,
  marginBottom: vars.space.xs,
})

export const statLabel = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  fontWeight: vars.fontWeights.medium,
})

export const quickActionsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: vars.space.lg,
})

export const actionCard = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space.xl,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.borderLight}`,
  borderRadius: vars.radii.xl,
  textDecoration: "none",
  color: vars.colors.text,
  transition: "all 0.3s ease",
  boxShadow: vars.shadows.sm,
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: vars.shadows.lg,
    borderColor: vars.colors.secondary,
  },
})

export const actionIcon = style({
  fontSize: vars.fontSizes.xxl,
  marginBottom: vars.space.md,
  color: vars.colors.secondary,
})

export const actionTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
})

export const actionDescription = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})
