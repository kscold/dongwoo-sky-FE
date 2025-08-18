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

export const cardFooter = style({
  padding: "1.5rem",
  borderTop: "1px solid #e5e7eb",
})

export const fieldGroupContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const fieldGroup = style({
  display: "flex",
  gap: "0.75rem",
  alignItems: "center",
})

export const input = style({
  flex: 1,
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

export const iconButton = style({
  padding: "0.5rem",
  color: "#ef4444",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#fee2e2",
  },
})

export const addButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#3b82f6",
  backgroundColor: "#eff6ff",
  border: "1px solid #3b82f6",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#dbeafe",
  },
})