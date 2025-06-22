import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
})

export const title = style({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1f2937",
})

export const addButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 20px",
  backgroundColor: "#0A3875",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  transition: "all 0.2s",

  ":hover": {
    backgroundColor: "#0E4DA4",
    transform: "translateY(-1px)",
  },
})

export const buttonIcon = style({
  width: "20px",
  height: "20px",
})

export const loading = style({
  textAlign: "center",
  padding: "40px",
  fontSize: "16px",
  color: "#6b7280",
})

export const unauthorized = style({
  textAlign: "center",
  padding: "40px",
  fontSize: "16px",
  color: "#ef4444",
})

export const equipmentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "20px",
})

export const equipmentCard = style({
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.2s",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.15)",
  },
})

export const imageContainer = style({
  position: "relative",
  height: "200px",
  background: "#f3f4f6",
})

export const equipmentImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const imagePlaceholder = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  color: "#9ca3af",
})

export const placeholderIcon = style({
  width: "50px",
  height: "50px",
})

export const statusBadge = style({
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "4px 8px",
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "600",
})

export const equipmentInfo = style({
  padding: "20px",
})

export const equipmentName = style({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "8px",
})

export const equipmentDescription = style({
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "1.5",
  marginBottom: "12px",
})

export const specs = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  fontSize: "12px",
  color: "#0A3875",
})

export const specBadge = style({
  background: "rgba(10, 56, 117, 0.1)",
  padding: "4px 8px",
  borderRadius: "4px",
  border: "1px solid rgba(10, 56, 117, 0.2)",
})

export const actions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
  padding: "0 20px 20px",
})

export const actionButton = style({
  padding: "8px",
  background: "transparent",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s",

  ":hover": {
    background: "#f9fafb",
  },
})

export const deleteButton = style({
  ":hover": {
    background: "#fef2f2",
    borderColor: "#fca5a5",
  },
})

export const actionIcon = style({
  width: "16px",
  height: "16px",
  color: "#6b7280",
})

// 모달 스타일
export const modalOverlay = style({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
})

export const modal = style({
  background: "white",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflow: "auto",
})

export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #e5e7eb",
})

export const modalTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1f2937",
})

export const closeButton = style({
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  color: "#6b7280",
  padding: "0",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    color: "#1f2937",
  },
})

export const form = style({
  padding: "20px",
})

export const formGroup = style({
  marginBottom: "20px",
})

export const formLabel = style({
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#374151",
})

export const formInput = style({
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  transition: "border-color 0.2s",

  ":focus": {
    outline: "none",
    borderColor: "#0A3875",
    boxShadow: "0 0 0 3px rgba(10, 56, 117, 0.1)",
  },
})

export const formTextarea = style({
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  transition: "border-color 0.2s",
  resize: "vertical",
  minHeight: "80px",

  ":focus": {
    outline: "none",
    borderColor: "#0A3875",
    boxShadow: "0 0 0 3px rgba(10, 56, 117, 0.1)",
  },
})

export const formRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "15px",
})

export const previewImage = style({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "6px",
  marginTop: "10px",
})

export const capabilityRow = style({
  display: "flex",
  gap: "8px",
  marginBottom: "8px",
  alignItems: "center",
})

export const removeButton = style({
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "4px",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  fontSize: "16px",
  flexShrink: 0,

  ":hover": {
    background: "#dc2626",
  },
})

export const addCapabilityButton = style({
  background: "#f3f4f6",
  color: "#374151",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all 0.2s",

  ":hover": {
    background: "#e5e7eb",
  },
})

export const modalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "30px",
  paddingTop: "20px",
  borderTop: "1px solid #e5e7eb",
})

export const cancelButton = style({
  padding: "10px 20px",
  background: "#f3f4f6",
  color: "#374151",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",

  ":hover": {
    background: "#e5e7eb",
  },
})

export const submitButton = style({
  padding: "10px 20px",
  background: "#0A3875",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  transition: "background-color 0.2s",

  ":hover": {
    background: "#0E4DA4",
  },

  ":disabled": {
    background: "#9ca3af",
    cursor: "not-allowed",
  },
})
