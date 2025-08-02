import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
})

export const header = style({
  marginBottom: "2rem",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "0.5rem",
})

export const description = style({
  fontSize: "1rem",
  color: "#6b7280",
})

export const subtitle = style({
  fontSize: "1.125rem",
  color: "#6b7280",
  marginBottom: "1rem",
})

export const formSection = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
})

export const sectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: "1rem",
  color: "#111827",
})

export const formGroup = style({
  marginBottom: "1rem",
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

export const textarea = style({
  width: "100%",
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  resize: "vertical",
  minHeight: "100px",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const value = style({
  fontSize: "1rem",
  color: "#111827",
})

export const editButton = style({
  padding: "0.25rem 0.75rem",
  fontSize: "0.875rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const saveButton = style({
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#059669",
  },
})

export const cancelButton = style({
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#6b7280",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  marginRight: "0.5rem",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#4b5563",
  },
})

export const buttonGroup = style({
  display: "flex",
  gap: "0.5rem",
  marginTop: "1rem",
})

export const previewSection = style({
  backgroundColor: "#f9fafb",
  borderRadius: "0.5rem",
  padding: "1.5rem",
  marginTop: "2rem",
})

export const previewImage = style({
  width: "100%",
  maxWidth: "300px",
  height: "auto",
  borderRadius: "0.375rem",
})

export const statusBadge = style({
  display: "inline-block",
  padding: "0.25rem 0.75rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  borderRadius: "0.375rem",
})

export const statusActive = style({
  backgroundColor: "#d1fae5",
  color: "#065f46",
})

export const statusInactive = style({
  backgroundColor: "#fee2e2",
  color: "#991b1b",
})

// Temporary file - will be moved to features later