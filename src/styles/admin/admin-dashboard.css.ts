import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
    padding: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
})

export const header = style({
    marginBottom: "32px",
})

export const title = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.text,
    marginBottom: "8px",
})

export const description = style({
    fontSize: "16px",
    color: vars.colors.textLight,
})

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginBottom: "32px",
})

export const card = style({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
    transition: "all 0.2s ease",
    ":hover": {
        boxShadow: vars.shadows.md,
        transform: "translateY(-2px)",
    },
})

export const cardIcon = style({
    width: "48px",
    height: "48px",
    backgroundColor: vars.colors.primaryLight,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
})

export const cardIconSvg = style({
    width: "24px",
    height: "24px",
    color: vars.colors.primary,
})

export const cardTitle = style({
    fontSize: "20px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "8px",
})

export const cardDescription = style({
    fontSize: "14px",
    color: vars.colors.textLight,
    marginBottom: "16px",
    lineHeight: 1.5,
})

export const cardLink = style({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: vars.colors.primary,
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    ":hover": {
        textDecoration: "underline",
    },
})

export const cardLinkIcon = style({
    width: "16px",
    height: "16px",
})

export const statsSection = style({
    marginBottom: "32px",
})

export const statsGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
})

export const statCard = style({
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
    textAlign: "center",
})

export const statValue = style({
    fontSize: "32px",
    fontWeight: "700",
    color: vars.colors.primary,
    marginBottom: "8px",
})

export const statLabel = style({
    fontSize: "14px",
    color: vars.colors.textLight,
    fontWeight: "500",
})

export const quickActions = style({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: vars.shadows.sm,
    border: `1px solid ${vars.colors.border}`,
})

export const quickActionsTitle = style({
    fontSize: "20px",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: "16px",
})

export const quickActionsList = style({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
})

export const quickActionItem = style({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    backgroundColor: vars.colors.backgroundLight,
    borderRadius: "8px",
    textDecoration: "none",
    color: vars.colors.text,
    transition: "all 0.2s ease",
    ":hover": {
        backgroundColor: vars.colors.primaryLight,
        transform: "translateX(4px)",
    },
})

export const quickActionIcon = style({
    width: "20px",
    height: "20px",
    color: vars.colors.primary,
})

export const quickActionText = style({
    fontSize: "14px",
    fontWeight: "500",
})

// Admin Dashboard 컴포넌트에서 사용되는 스타일들
export const dashboardContainer = style({
    minHeight: "100vh",
    backgroundColor: vars.colors.backgroundLight,
    padding: vars.space.lg,
    
    "@media": {
        "(max-width: 768px)": {
            padding: vars.space.md,
        },
    },
})

export const dashboardWrapper = style({
    maxWidth: "1400px",
    margin: "0 auto",
})

export const dashboardHeader = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vars.space.xxxl,
    backgroundColor: vars.colors.white,
    padding: vars.space.xl,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.sm,
    
    "@media": {
        "(max-width: 768px)": {
            flexDirection: "column",
            gap: vars.space.lg,
            padding: vars.space.lg,
        },
    },
})

export const headerContent = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.sm,
})

export const dashboardTitle = style({
    fontSize: vars.fontSizes.xxxxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.textStrong,
    margin: 0,
    
    "@media": {
        "(max-width: 768px)": {
            fontSize: vars.fontSizes.xxxl,
        },
    },
})

export const dashboardSubtitle = style({
    fontSize: vars.fontSizes.lg,
    color: vars.colors.textLight,
    margin: 0,
})

export const headerActions = style({
    display: "flex",
    gap: vars.space.md,
    alignItems: "center",
    
    "@media": {
        "(max-width: 768px)": {
            width: "100%",
            justifyContent: "center",
        },
    },
})

export const viewSiteButton = style({
    backgroundColor: vars.colors.secondary,
    color: vars.colors.white,
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radii.md,
    textDecoration: "none",
    fontWeight: vars.fontWeights.medium,
    fontSize: vars.fontSizes.sm,
    transition: "all 0.2s ease",
    
    ":hover": {
        backgroundColor: vars.colors.primary,
        transform: "translateY(-2px)",
    },
})

export const logoutButton = style({
    backgroundColor: vars.colors.danger,
    color: vars.colors.white,
    padding: `${vars.space.sm} ${vars.space.lg}`,
    borderRadius: vars.radii.md,
    border: "none",
    fontWeight: vars.fontWeights.medium,
    fontSize: vars.fontSizes.sm,
    cursor: "pointer",
    transition: "all 0.2s ease",
    
    ":hover": {
        backgroundColor: vars.colors.dangerDark,
        transform: "translateY(-2px)",
    },
})

export const dashboardContent = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.xl,
})

export const dashboardStatsGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: vars.space.lg,
    marginBottom: vars.space.xl,
})

export const dashboardStatCard = style({
    backgroundColor: vars.colors.white,
    padding: vars.space.xl,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.sm,
    textAlign: "center",
    border: `1px solid ${vars.colors.border}`,
    transition: "all 0.2s ease",
    
    ":hover": {
        boxShadow: vars.shadows.md,
        transform: "translateY(-2px)",
    },
})

export const statIcon = style({
    fontSize: vars.fontSizes.xxxxl,
    marginBottom: vars.space.md,
    display: "block",
})

export const statNumber = style({
    fontSize: vars.fontSizes.xxxl,
    fontWeight: vars.fontWeights.bold,
    color: vars.colors.primary,
    marginBottom: vars.space.sm,
})

export const quickActionsGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: vars.space.lg,
})

export const actionCard = style({
    backgroundColor: vars.colors.white,
    padding: vars.space.xl,
    borderRadius: vars.radii.lg,
    boxShadow: vars.shadows.sm,
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s ease",
    border: `1px solid ${vars.colors.border}`,
    display: "block",
    
    ":hover": {
        boxShadow: vars.shadows.md,
        transform: "translateY(-4px)",
        borderColor: vars.colors.primary,
    },
})

export const actionIcon = style({
    fontSize: vars.fontSizes.xxxl,
    marginBottom: vars.space.md,
    display: "block",
})

export const actionTitle = style({
    fontSize: vars.fontSizes.xl,
    fontWeight: vars.fontWeights.semibold,
    color: vars.colors.textStrong,
    marginBottom: vars.space.sm,
    margin: 0,
})

export const actionDescription = style({
    fontSize: vars.fontSizes.md,
    color: vars.colors.textLight,
    lineHeight: vars.lineHeights.relaxed,
    margin: 0,
})