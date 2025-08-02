import { style } from "@vanilla-extract/css"

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.5rem",
})

export const card = style({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1.5rem",
  textDecoration: "none",
  color: "inherit",
  border: "1px solid #e2e8f0",
  transition: "all 0.3s",
  display: "block",
  ":hover": {
    borderColor: "#3b82f6",
    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.1)",
    transform: "translateY(-2px)",
  },
})

export const icon = style({
  fontSize: "2rem",
  marginBottom: "1rem",
})

export const title = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "0.5rem",
})

export const description = style({
  fontSize: "0.875rem",
  color: "#64748b",
  lineHeight: 1.5,
})