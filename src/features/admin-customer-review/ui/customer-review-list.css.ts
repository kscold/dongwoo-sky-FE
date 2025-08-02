import { style } from "@vanilla-extract/css"

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "1.5rem",
})

export const emptyState = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  color: "#64748b",
  fontSize: "1.125rem",
})