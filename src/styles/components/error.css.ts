import { style } from "@vanilla-extract/css"

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50vh",
  padding: "2rem",
  textAlign: "center",
  backgroundColor: "#fefefe",
  borderRadius: "12px",
  margin: "2rem auto",
  maxWidth: "600px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
})

export const errorIcon = style({
  fontSize: "4rem",
  marginBottom: "1rem",
  color: "#dc2626",
})

export const errorTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#1f2937",
  lineHeight: "1.4",
})

export const errorMessage = style({
  fontSize: "1rem",
  marginBottom: "2rem",
  color: "#6b7280",
  lineHeight: "1.6",
  maxWidth: "500px",
})

export const errorActions = style({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
})

export const retryButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
  },
  ":active": {
    transform: "translateY(0)",
  },
})

export const homeButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "transparent",
  color: "#6b7280",
  border: "2px solid #d1d5db",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  transition: "all 0.2s ease",
  ":hover": {
    borderColor: "#9ca3af",
    color: "#374151",
    transform: "translateY(-1px)",
  },
  ":active": {
    transform: "translateY(0)",
  },
})

export const adminErrorContainer = style([
  errorContainer,
  {
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #dc2626",
  },
])

export const serviceErrorContainer = style([
  errorContainer,
  {
    backgroundColor: "#fefefe",
    border: "1px solid #e5e7eb",
  },
])
