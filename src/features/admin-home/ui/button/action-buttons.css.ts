import { style } from "@vanilla-extract/css"

export const actionButtonContainer = style({
  position: "sticky",
  top: "1rem",
  zIndex: 10,
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "1.5rem",
})

export const editButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})

export const editButtonGroup = style({
  display: "flex",
  gap: "0.5rem",
})

export const saveButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#059669",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})

export const cancelButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "#6b7280",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#4b5563",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})