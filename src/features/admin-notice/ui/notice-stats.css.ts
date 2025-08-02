import { style } from "@vanilla-extract/css"

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "1rem",
  marginBottom: "2rem",
})

export const card = style({
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
})

export const label = style({
  fontSize: "0.875rem",
  color: "#64748b",
  marginBottom: "0.5rem",
})

export const value = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e293b",
})