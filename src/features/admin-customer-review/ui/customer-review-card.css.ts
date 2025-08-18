import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s",
  ":hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
})

export const customerInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const customerName = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#1e293b",
})

export const company = style({
  fontSize: "0.875rem",
  color: "#64748b",
})

export const content = style({
  marginBottom: "1rem",
})

export const reviewText = style({
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: "#475569",
  marginBottom: "0.75rem",
})

export const meta = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.75rem",
  color: "#94a3b8",
})

export const workType = style({
  padding: "0.125rem 0.5rem",
  backgroundColor: "#f1f5f9",
  borderRadius: "0.25rem",
})

export const date = style({})

export const toggles = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "1rem",
  paddingTop: "1rem",
  borderTop: "1px solid #e2e8f0",
})

export const toggle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  cursor: "pointer",
})

export const actions = style({
  display: "flex",
  gap: "0.5rem",
})

export const editButton = style({
  flex: 1,
  padding: "0.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  textAlign: "center",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const deleteButton = style({
  flex: 1,
  padding: "0.5rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})