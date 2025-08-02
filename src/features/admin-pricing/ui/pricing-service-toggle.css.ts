import { style } from "@vanilla-extract/css"

export const label = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
})

export const checkbox = style({
  width: "1.25rem",
  height: "1.25rem",
  cursor: "pointer",
})

export const checkboxLabel = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
})