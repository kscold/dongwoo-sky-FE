import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "2rem",
  maxWidth: "800px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "2rem",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "0.5rem",
})

export const subtitle = style({
  fontSize: "1.1rem",
  color: "#6b7280",
})

export const form = style({
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "0.75rem",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
})

export const formGroup = style({
  marginBottom: "1.5rem",
})

export const formRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const label = style({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
  marginBottom: "0.5rem",
})

export const input = style({
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgb(59 130 246 / 0.1)",
  },
  ":disabled": {
    backgroundColor: "#f9fafb",
    color: "#6b7280",
  },
})

export const textarea = style({
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  resize: "vertical",
  minHeight: "100px",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgb(59 130 246 / 0.1)",
  },
  ":disabled": {
    backgroundColor: "#f9fafb",
    color: "#6b7280",
  },
})

export const select = style({
  width: "100%",
  padding: "0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  fontSize: "1rem",
  backgroundColor: "white",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgb(59 130 246 / 0.1)",
  },
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  color: "#374151",
  cursor: "pointer",
})

export const checkbox = style({
  width: "1rem",
  height: "1rem",
  accentColor: "#3b82f6",
})

export const helpText = style({
  fontSize: "0.75rem",
  color: "#6b7280",
  marginTop: "0.25rem",
})

export const buttonGroup = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "1rem",
  marginTop: "2rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid #e5e7eb",
})

export const cancelButton = style({
  padding: "0.75rem 1.5rem",
  borderRadius: "0.375rem",
  border: "1px solid #d1d5db",
  backgroundColor: "white",
  color: "#374151",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#f9fafb",
  },
})

export const submitButton = style({
  padding: "0.75rem 1.5rem",
  borderRadius: "0.375rem",
  border: "none",
  backgroundColor: "#3b82f6",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
  ":disabled": {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
})

export const errorMessage = style({
  textAlign: "center",
  padding: "2rem",
  color: "#dc2626",
  fontSize: "1.1rem",
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: "0.5rem",
})