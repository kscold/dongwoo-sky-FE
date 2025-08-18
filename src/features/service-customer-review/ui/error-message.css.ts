import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  minHeight: "300px",
  backgroundColor: "#fef2f2",
  borderRadius: "1rem",
  margin: "2rem auto",
  maxWidth: "500px",
})

export const icon = style({
  fontSize: "3rem",
  marginBottom: "1rem",
})

export const message = style({
  fontSize: "1rem",
  color: "#dc2626",
  textAlign: "center",
  marginBottom: "1.5rem",
  lineHeight: 1.5,
})

export const retryButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#b91c1c",
  },
})