import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  backgroundColor: "white",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
})

export const message = style({
  fontSize: "1.125rem",
  color: "#64748b",
  marginBottom: "1.5rem",
})

export const createButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  borderRadius: "0.5rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
  },
})