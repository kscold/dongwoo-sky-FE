import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  overflow: "hidden"
})

export const cardHeader = style({
  padding: "1rem",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export const cardTitle = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#111827"
})

export const cardActions = style({
  display: "flex",
  gap: "0.5rem"
})

export const editButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb"
  }
})

export const deleteButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#dc2626"
  }
})

export const cardContent = style({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem"
})

export const cardContent_p = style({
  margin: 0,
  fontSize: "0.875rem",
  color: "#6b7280"
})

export const cardContent_strong = style({
  color: "#374151",
  fontWeight: "500"
})