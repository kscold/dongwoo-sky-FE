import { style } from "@vanilla-extract/css"

export const row = style({
  borderBottom: "1px solid #e2e8f0",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#f8fafc",
  },
})

export const cell = style({
  padding: "1rem",
  fontSize: "0.875rem",
  color: "#1e293b",
})

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const title = style({
  fontWeight: 500,
  color: "#1e293b",
})

export const clientName = style({
  fontSize: "0.75rem",
  color: "#64748b",
})

export const category = style({
  display: "inline-block",
  padding: "0.25rem 0.75rem",
  backgroundColor: "#e0e7ff",
  color: "#4338ca",
  borderRadius: "9999px",
  fontSize: "0.75rem",
  fontWeight: 500,
})

export const count = style({
  fontWeight: 500,
})

export const actions = style({
  display: "flex",
  gap: "0.5rem",
})

export const editButton = style({
  padding: "0.375rem 0.75rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const deleteButton = style({
  padding: "0.375rem 0.75rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.75rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})