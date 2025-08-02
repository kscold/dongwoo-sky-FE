import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
})

export const cardHeader = style({
  padding: "1.5rem",
  borderBottom: "1px solid #e5e7eb",
})

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#111827",
  marginBottom: "0.25rem",
})

export const cardDescription = style({
  fontSize: "0.875rem",
  color: "#6b7280",
})

export const cardBody = style({
  padding: "1.5rem",
})

export const formGroup = style({
  marginBottom: "1.5rem",
  ":last-child": {
    marginBottom: 0,
  },
})

export const label = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
  marginBottom: "0.5rem",
})

export const input = style({
  width: "100%",
  padding: "0.75rem",
  fontSize: "0.875rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})