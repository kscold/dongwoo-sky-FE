import { style } from "@vanilla-extract/css"

export const modal = style({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
})

export const modalContent = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "0",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80vh",
  overflow: "hidden",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
})

export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  borderBottom: "1px solid #e5e7eb",
})

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "4px",
  borderRadius: "4px",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
})

export const form = style({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxHeight: "60vh",
  overflow: "auto",
})

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
})

export const label = style({
  fontSize: "14px",
  fontWeight: "600",
  color: "#111827",
})

export const input = style({
  padding: "12px",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  fontSize: "14px",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const textarea = style({
  padding: "12px",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  fontSize: "14px",
  resize: "vertical",
  minHeight: "80px",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const errorMessage = style({
  fontSize: "12px",
  color: "#ef4444",
})

export const checkboxGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
})

export const checkbox = style({
  width: "16px",
  height: "16px",
})

export const modalActions = style({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
  paddingTop: "20px",
  borderTop: "1px solid #e5e7eb",
})

export const cancelButton = style({
  padding: "10px 20px",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  backgroundColor: "white",
  color: "#111827",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f9fafb",
  },
})

export const saveButton = style({
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#3b82f6",
  color: "white",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#2563eb",
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
})

export const imagePreview = style({
  width: "200px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginTop: "8px",
})

export const sectionHeader = style({
  marginBottom: "16px",
  paddingBottom: "12px",
  borderBottom: "1px solid #e5e7eb",
})

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  color: "#111827",
  margin: "0 0 4px 0",
})

export const sectionDescription = style({
  fontSize: "14px",
  color: "#6b7280",
  margin: 0,
})

export const formRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
})