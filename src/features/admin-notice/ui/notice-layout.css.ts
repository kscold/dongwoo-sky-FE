import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
})

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  fontSize: "1.125rem",
  color: "#64748b",
})