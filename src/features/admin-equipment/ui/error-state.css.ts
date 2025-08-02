import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  backgroundColor: "#fef2f2",
  borderRadius: "0.75rem",
  border: "1px solid #fecaca",
})

export const message = style({
  fontSize: "1.125rem",
  color: "#991b1b",
  marginBottom: "1.5rem",
})

export const retryButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})