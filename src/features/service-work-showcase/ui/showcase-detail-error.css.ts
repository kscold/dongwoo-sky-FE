import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
})

export const errorState = style({
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: "0.75rem",
  padding: "2rem",
  marginBottom: "2rem",
  fontSize: "1.125rem",
  color: "#dc2626",
})

export const errorMessage = style({
  fontSize: "0.875rem",
  color: "#7f1d1d",
  marginTop: "0.5rem",
})

export const backButton = style({
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "0.5rem",
  fontWeight: 500,
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})