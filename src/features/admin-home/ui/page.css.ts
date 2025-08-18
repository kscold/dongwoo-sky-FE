import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
})

export const header = style({
  marginBottom: "2rem",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "0.5rem",
})

export const description = style({
  fontSize: "1rem",
  color: "#6b7280",
})

export const subtitle = style({
  fontSize: "1rem",
  color: "#6b7280",
  marginTop: "0.5rem",
})

export const field = style({
  marginBottom: "1rem",
})

export const label = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: "500",
  marginBottom: "0.5rem",
  color: "#374151",
})