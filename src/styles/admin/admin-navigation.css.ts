import { style } from "@vanilla-extract/css"

export const adminNav = style({
  background: "white",
  borderBottom: "1px solid #e2e8f0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  position: "sticky",
  top: 0,
  zIndex: 100,
})

export const adminNavHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid #f1f5f9",
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
      flexDirection: "column",
      gap: "1rem",
      textAlign: "center",
    },
  },
})

export const adminNavBrand = style({})

export const adminNavBrandTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#1e293b",
  margin: 0,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.25rem",
    },
  },
})

export const adminNavBrandSubtitle = style({
  fontSize: "0.875rem",
  color: "#64748b",
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
  color: "#374151",
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
    background: "#f1f5f9",
    color: "#475569",
    ":hover": {
      background: "#e2e8f0",
    },
  },
])

export const logoutBtn = style([
  baseButton,
  {
    background: "#fee2e2",
    color: "#dc2626",
    ":hover": {
      background: "#fecaca",
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
  color: "#64748b",
  transition: "all 0.2s ease",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  position: "relative",
  ":hover": {
    background: "#f8fafc",
    color: "#374151",
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
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid #f8fafc",
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