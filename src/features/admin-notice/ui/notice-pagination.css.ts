import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "2rem",
})

export const button = style({
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "0.375rem",
  color: "#64748b",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
  },
})

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",
  ":hover": {
    backgroundColor: "white",
    borderColor: "#e2e8f0",
  },
})

export const pageButton = style({
  minWidth: "2.5rem",
  padding: "0.5rem",
  backgroundColor: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "0.375rem",
  color: "#64748b",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#f8fafc",
    borderColor: "#cbd5e1",
  },
})

export const active = style({
  backgroundColor: "#3b82f6",
  borderColor: "#3b82f6",
  color: "white",
  ":hover": {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
})

export const ellipsis = style({
  padding: "0 0.5rem",
  color: "#94a3b8",
})