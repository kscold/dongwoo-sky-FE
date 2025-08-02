import { style } from "@vanilla-extract/css"

export const formSection = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
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

export const value = style({
  fontSize: "1rem",
  color: "#111827",
})

export const input = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})