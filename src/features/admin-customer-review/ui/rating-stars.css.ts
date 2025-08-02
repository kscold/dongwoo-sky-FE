import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  gap: "0.125rem",
})

export const star = style({
  fontSize: "1.125rem",
  lineHeight: 1,
})

export const filled = style({
  color: "#fbbf24",
})

export const empty = style({
  color: "#e5e7eb",
})