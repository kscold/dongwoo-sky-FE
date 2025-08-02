import { style } from "@vanilla-extract/css"

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "1.5rem",
  borderBottom: "1px solid #e5e7eb",
})

export const title = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: "#111827",
})