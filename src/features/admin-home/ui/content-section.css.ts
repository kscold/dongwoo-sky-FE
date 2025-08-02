import { style } from "@vanilla-extract/css"

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

export const value = style({
  fontSize: "1rem",
  color: "#111827",
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

export const toggleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const toggleSwitch = style({
  position: "relative",
  width: "2.5rem",
  height: "1.5rem",
})

export const toggleInput = style({
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0,
})

export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#ccc",
  transition: ".4s",
  borderRadius: "1.5rem",
  ":before": {
    position: "absolute",
    content: "",
    height: "1rem",
    width: "1rem",
    left: "0.25rem",
    bottom: "0.25rem",
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: "50%",
  },
})

export const toggleActive = style({
  backgroundColor: "#3b82f6",
  ":before": {
    transform: "translateX(1rem)",
  },
})

export const toggleLabel = style({
  fontSize: "0.875rem",
  color: "#374151",
})

export const formGroup = style({
  marginBottom: "1rem",
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
    backgroundColor: "#dc2626",
  },
})

export const uploadButton = style({
  padding: "0.5rem 1rem",
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

export const statusBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.25rem 0.75rem",
  fontSize: "0.875rem",
  borderRadius: "9999px",
  fontWeight: "500",
})

export const statusActive = style({
  backgroundColor: "#d1fae5",
  color: "#065f46",
})

export const statusInactive = style({
  backgroundColor: "#fee2e2",
  color: "#991b1b",
})