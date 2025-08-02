import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const adminNav = style({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
  boxShadow: "0 2px 20px rgba(59, 130, 246, 0.08)",
  position: "sticky",
  top: 0,
  zIndex: 100,
})

export const adminNavHeader = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid rgba(59, 130, 246, 0.08)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
    },
  },
})

export const adminNavBrand = style({})

export const adminNavBrandTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: vars.colors.text,
  margin: 0,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },
})

export const adminNavBrandSubtitle = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  fontWeight: 500,
})

export const adminNavUser = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.5rem",
    },
  },
})

export const adminNavUserSpan = style({
  fontSize: "0.875rem",
  color: vars.colors.text,
  fontWeight: 500,
})

export const baseButton = style({
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "6px",
  fontSize: "0.875rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease",
})

export const siteViewBtn = style([
  baseButton,
  {
    background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    color: vars.colors.white,
    border: "none",
    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
    ":hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
    },
  },
])

export const logoutBtn = style([
  baseButton,
  {
    background: "transparent",
    color: "#ef4444",
    border: "1px solid #ef4444",
    ":hover": {
      background: "#ef4444",
      color: vars.colors.white,
      transform: "translateY(-1px)",
    },
  },
])

export const adminNavMenu = style({
  display: "flex",
  alignItems: "center",
  padding: "0 2rem",
  gap: "0.5rem",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "0 1rem",
      gap: "0.25rem",
    },
  },
})

export const adminNavItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "1rem 1.25rem",
  textDecoration: "none",
  color: vars.colors.textLight,
  transition: "all 0.3s ease",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  position: "relative",
  ":hover": {
    background: "rgba(59, 130, 246, 0.05)",
    color: vars.colors.primary,
    transform: "translateY(-1px)",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "0.75rem 1rem",
      gap: "0.5rem",
    },
    "(max-width: 480px)": {
      flexDirection: "column",
      padding: "0.5rem 0.75rem",
      gap: "0.25rem",
      textAlign: "center",
    },
  },
})

export const adminNavItemActive = style({
  background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)`,
  color: vars.colors.primary,
  fontWeight: 600,
  "::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    borderRadius: "2px 2px 0 0",
  },
})

export const adminNavIcon = style({
  fontSize: "1.25rem",
  lineHeight: 1,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})

export const adminNavContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
  "@media": {
    "(max-width: 480px)": {
      alignItems: "center",
    },
  },
})

export const adminNavTitle = style({
  fontSize: "0.875rem",
  fontWeight: 600,
  lineHeight: 1,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
})

export const adminNavDescription = style({
  fontSize: "0.75rem",
  opacity: 0.8,
  lineHeight: 1,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
})

export const adminNavDescriptionActive = style({
  opacity: 0.9,
})