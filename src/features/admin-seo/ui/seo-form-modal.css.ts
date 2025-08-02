import { style } from "@vanilla-extract/css"

export const modal = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
})

export const modalContent = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "90vh",
  overflow: "auto",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
})

export const modalHeader = style({
  padding: "1.5rem",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
})

export const modalTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#111827"
})

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  color: "#6b7280",
  cursor: "pointer",
  padding: "0.25rem",
  ":hover": {
    color: "#111827"
  }
})

export const form = style({
  padding: "1.5rem"
})

export const formGroup = style({
  marginBottom: "1.5rem"
})

export const label = style({
  display: "block",
  marginBottom: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151"
})

export const input = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "1rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
  }
})

export const textarea = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "1rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  resize: "vertical",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
  }
})

export const select = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  fontSize: "1rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  backgroundColor: "white",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
  }
})

export const modalActions = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "flex-end",
  marginTop: "2rem"
})

export const cancelButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#f3f4f6",
  color: "#374151",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#e5e7eb"
  }
})

export const saveButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
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