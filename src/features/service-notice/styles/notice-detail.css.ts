import { style } from "@vanilla-extract/css"
import { vars } from "../../../shared/styles/theme.css"

export const container = style({
  maxWidth: "1000px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} ${vars.space.xxxxl}`,
  backgroundColor: vars.colors.backgroundLight,
  minHeight: "100vh",
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} ${vars.space.xxxl}`,
    },
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xxl,
  paddingBottom: vars.space.lg,
  borderBottom: `2px solid ${vars.colors.borderLight}`,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.lg,
      alignItems: "flex-start",
      marginBottom: vars.space.xl,
    },
  },
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  color: vars.colors.primary,
  textDecoration: "none",
  fontWeight: "600",
  borderRadius: "12px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: `2px solid ${vars.colors.primary}`,
  backgroundColor: vars.colors.white,
  boxShadow: "0 2px 8px rgba(59, 130, 246, 0.15)",
  
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)",
  },
  "@media": {
    "(max-width: 480px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      fontSize: vars.fontSizes.sm,
    },
  },
})

export const breadcrumb = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  color: "#64748b",
  "@media": {
    "(max-width: 768px)": {
      order: -1,
    },
  },
})

export const breadcrumbLink = style({
  color: "#64748b",
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#1e293b",
  },
})

export const separator = style({
  color: "#cbd5e1",
})

export const current = style({
  color: "#1e293b",
  fontWeight: 500,
})

export const noticeContainer = style({
  background: vars.colors.white,
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  overflow: "hidden",
  marginBottom: vars.space.xxl,
  position: "relative",
  
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
})

export const noticeHeader = style({
  padding: `${vars.space.xxl} ${vars.space.xxl} ${vars.space.xl}`,
  background: `
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  borderBottom: `1px solid ${vars.colors.borderLight}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xl} ${vars.space.lg} ${vars.space.lg}`,
    },
    "(max-width: 480px)": {
      padding: `${vars.space.lg} ${vars.space.md} ${vars.space.md}`,
    },
  },
})

export const titleSection = style({
  marginBottom: vars.space.xl,
})

export const title = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: "800",
  color: vars.colors.primary,
  margin: `0 0 ${vars.space.lg} 0`,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxxl,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const summary = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  margin: 0,
  lineHeight: 1.6,
  fontWeight: "500",
  "@media": {
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

export const metaInfo = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.lg,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.md,
      alignItems: "flex-start",
    },
  },
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  backgroundColor: "rgba(248, 250, 252, 0.8)",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.md,
  border: "1px solid rgba(226, 232, 240, 0.5)",
})

export const metaItemIcon = style({
  color: vars.colors.primary,
  fontSize: "1.1em",
})

export const contentSection = style({
  padding: `${vars.space.xxl} ${vars.space.xxl} ${vars.space.xl}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xl} ${vars.space.lg} ${vars.space.lg}`,
    },
    "(max-width: 480px)": {
      padding: `${vars.space.lg} ${vars.space.md} ${vars.space.md}`,
    },
  },
})

export const content = style({
  fontSize: vars.fontSizes.md,
  lineHeight: 1.8,
  color: vars.colors.text,
  marginBottom: vars.space.xxl,
})

export const contentParagraph = style({
  margin: `0 0 ${vars.space.lg} 0`,
})

export const contentImage = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "16px",
  margin: `${vars.space.xl} 0`,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
})

export const navigationSection = style({
  padding: `0 ${vars.space.xxl} ${vars.space.xxl}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `0 ${vars.space.lg} ${vars.space.xl}`,
    },
    "(max-width: 480px)": {
      padding: `0 ${vars.space.md} ${vars.space.lg}`,
    },
  },
})

export const divider = style({
  height: "1px",
  background: vars.colors.borderLight,
  margin: `${vars.space.xxl} 0 ${vars.space.xl}`,
})

export const navigationButtons = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.md,
})

export const listButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
  color: "white",
  textDecoration: "none",
  borderRadius: "16px",
  fontWeight: "600",
  fontSize: vars.fontSizes.md,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25)",
  
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.35)",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  },
})

export const relatedSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
  background: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      textAlign: "center",
    },
  },
})

export const sectionTitle = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#374151",
  margin: 0,
})

export const viewAllLink = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s ease",
  ":hover": {
    color: vars.colors.primaryDark,
  },
})

// 우선순위 배지 스타일들
export const priorityBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: "12px",
  fontSize: vars.fontSizes.xs,
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
})

export const priorityHigh = style({
  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
})

export const priorityMedium = style({
  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(245, 158, 11, 0.3)",
})

export const priorityLow = style({
  background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(107, 114, 128, 0.3)",
})

// 고정 배지 스타일
export const pinnedBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  color: vars.colors.white,
  borderRadius: "12px",
  fontSize: vars.fontSizes.xs,
  fontWeight: "600",
  letterSpacing: "0.5px",
  boxShadow: "0 2px 12px rgba(239, 68, 68, 0.4)",
  
  "::before": {
    content: "📌",
    marginRight: vars.space.xs,
  },
})

export const errorContainer = style({
  textAlign: "center",
  padding: "4rem 2rem",
})

export const errorIcon = style({
  fontSize: "4rem",
  marginBottom: "1rem",
})

export const errorTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#374151",
  margin: "0 0 0.75rem 0",
})

export const errorMessage = style({
  color: "#64748b",
  margin: "0 0 2rem 0",
  lineHeight: 1.6,
})