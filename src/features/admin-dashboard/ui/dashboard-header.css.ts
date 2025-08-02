import { style } from "@vanilla-extract/css"

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "3rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1.5rem",
    },
  },
})

export const headerContent = style({
  flex: 1,
})

export const title = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "0.5rem",
  background: "linear-gradient(to right, #3b82f6, #6366f1)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const subtitle = style({
  fontSize: "1.125rem",
  color: "#64748b",
  marginBottom: "0.5rem",
})

export const userInfo = style({
  fontSize: "0.9rem",
  color: "rgba(255, 255, 255, 0.8)",
  marginTop: "0.5rem",
})

export const headerActions = style({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
})

export const viewSiteButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#3b82f6",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "0.5rem",
  textDecoration: "none",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#f8fafc",
    borderColor: "#3b82f6",
  },
})

export const logoutButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#64748b",
  backgroundColor: "transparent",
  border: "1px solid #e2e8f0",
  borderRadius: "0.5rem",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
    color: "#475569",
  },
})