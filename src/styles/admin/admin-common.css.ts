import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "30px",
})

export const title = style({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "10px",
})

export const description = style({
  fontSize: "16px",
  color: "#6b7280",
})

export const addButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  marginBottom: "20px",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const tableContainer = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const tableHeader = style({
  backgroundColor: "#f9fafb",
  fontWeight: "600",
  color: "#374151",
  padding: "16px",
  textAlign: "left",
  borderBottom: "1px solid #e5e7eb",
})

export const tableCell = style({
  padding: "16px",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
})

export const actionButton = style({
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  marginRight: "8px",
  transition: "background-color 0.2s",
})

export const editButton = style([
  actionButton,
  {
    backgroundColor: "#10b981",
    color: "white",
    ":hover": {
      backgroundColor: "#059669",
    },
  },
])

export const deleteButton = style([
  actionButton,
  {
    backgroundColor: "#ef4444",
    color: "white",
    ":hover": {
      backgroundColor: "#dc2626",
    },
  },
])

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
  padding: "24px",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80vh",
  overflow: "auto",
})

export const modalHeader = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "20px",
})

export const formGroup = style({
  marginBottom: "16px",
})

export const label = style({
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: "#374151",
  marginBottom: "6px",
})

export const input = style({
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const textarea = style([
  input,
  {
    minHeight: "100px",
    resize: "vertical",
  },
])

export const arrayInput = style({
  marginBottom: "8px",
})

export const addArrayButton = style({
  backgroundColor: "#6b7280",
  color: "white",
  padding: "6px 12px",
  borderRadius: "4px",
  border: "none",
  fontSize: "12px",
  cursor: "pointer",
  marginTop: "4px",
  ":hover": {
    backgroundColor: "#4b5563",
  },
})

export const removeArrayButton = style({
  backgroundColor: "#ef4444",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  border: "none",
  fontSize: "12px",
  cursor: "pointer",
  marginLeft: "8px",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})

export const modalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "24px",
})

export const cancelButton = style({
  backgroundColor: "#6b7280",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#4b5563",
  },
})

export const saveButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const statusBadge = style({
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "500",
})

export const activeBadge = style([
  statusBadge,
  {
    backgroundColor: "#d1fae5",
    color: "#065f46",
  },
])

export const inactiveBadge = style([
  statusBadge,
  {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
  },
])

export const loading = style({
  textAlign: "center",
  padding: "40px",
  color: "#6b7280",
})

export const error = style({
  textAlign: "center",
  padding: "40px",
  color: "#ef4444",
  backgroundColor: "#fef2f2",
  borderRadius: "8px",
  margin: "20px 0",
})

export const emptyState = style({
  textAlign: "center",
  padding: "60px 20px",
  color: "#6b7280",
})

export const emptyStateIcon = style({
  fontSize: "48px",
  marginBottom: "16px",
  opacity: 0.5,
})

export const emptyStateText = style({
  fontSize: "18px",
  fontWeight: "500",
  marginBottom: "8px",
})

export const emptyStateSubtext = style({
  fontSize: "14px",
  opacity: 0.7,
})

// Admin specific styles
export const adminContainer = style({
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const adminHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
})

export const adminTitle = style({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#1f2937",
})

export const adminContent = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
})

export const adminTable = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const adminTableHeader = style({
  backgroundColor: "#f9fafb",
  fontWeight: "600",
  color: "#374151",
})

export const adminTableRow = style({
  ":hover": {
    backgroundColor: "#f9fafb",
  },
})

export const adminTableCell = style({
  padding: "16px",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
})

export const adminButton = style({
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
})

export const adminButtonPrimary = style({
  backgroundColor: "#3b82f6",
  color: "white",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const adminButtonSecondary = style({
  backgroundColor: "#6b7280",
  color: "white",
  ":hover": {
    backgroundColor: "#4b5563",
  },
})

export const adminButtonDanger = style({
  backgroundColor: "#ef4444",
  color: "white",
  ":hover": {
    backgroundColor: "#dc2626",
  },
})

export const adminModal = style({
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

export const adminModalContent = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "80vh",
  overflow: "auto",
})

export const adminForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
})

export const adminFormGroup = style({
  display: "flex",
  flexDirection: "column",
})

export const adminLabel = style({
  fontSize: "14px",
  fontWeight: "500",
  color: "#374151",
  marginBottom: "6px",
})

export const adminInput = style({
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  boxSizing: "border-box",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const adminTextarea = style({
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  fontSize: "14px",
  minHeight: "100px",
  resize: "vertical",
  boxSizing: "border-box",
  fontFamily: "inherit",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const adminCheckbox = style({
  marginRight: "8px",
})

export const adminButtonGroup = style({
  display: "flex",
  gap: "12px",
  alignItems: "center",
})

export const adminLoadingSpinner = style({
  textAlign: "center",
  padding: "40px",
  color: "#6b7280",
  fontSize: "16px",
})

export const adminError = style({
  backgroundColor: "#fef2f2",
  color: "#ef4444",
  padding: "12px 16px",
  borderRadius: "8px",
  marginBottom: "16px",
  border: "1px solid #fecaca",
})

export const adminSuccess = style({
  backgroundColor: "#f0fdf4",
  color: "#22c55e",
  padding: "12px 16px",
  borderRadius: "8px",
  marginBottom: "16px",
  border: "1px solid #bbf7d0",
})
