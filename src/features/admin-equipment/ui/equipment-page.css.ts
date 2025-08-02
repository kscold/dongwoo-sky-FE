import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
  fontSize: "1.125rem",
  color: "#6b7280",
})