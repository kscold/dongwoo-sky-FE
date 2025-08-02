import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  marginBottom: "2rem",
  padding: "1rem",
  backgroundColor: "#f8fafc",
  borderRadius: "0.5rem",
})

export const label = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 500,
  color: "#475569",
})

export const radio = style({
  width: "1.25rem",
  height: "1.25rem",
  cursor: "pointer",
})