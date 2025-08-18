import { style } from "@vanilla-extract/css"

export const emptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
})

export const emptyStateIcon = style({
  fontSize: "4rem",
  marginBottom: "1rem",
})

export const emptyStateTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#111827",
  marginBottom: "0.5rem",
})

export const emptyStateDescription = style({
  fontSize: "1rem",
  color: "#6b7280",
  marginBottom: "2rem",
})

export const emptyStateButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})