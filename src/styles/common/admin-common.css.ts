import { style, globalKeyframes } from "@vanilla-extract/css"

import { vars } from "./theme.css"

export const container = style({
  padding: vars.space.xl,
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "30px",
})

export const title = style({
  fontSize: "28px",
  fontWeight: "bold",
  color: vars.colors.text,
  marginBottom: "10px",
})

export const subTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
})

export const description = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
})

export const addButton = style({
  backgroundColor: vars.colors.primary,
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
    backgroundColor: vars.colors.primaryDark,
  },
})

export const tableContainer = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const tableHeader = style({
  backgroundColor: vars.colors.backgroundLight,
  fontWeight: "600",
  color: vars.colors.text,
  padding: "16px",
  textAlign: "left",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const tableCell = style({
  padding: "16px",
  borderBottom: `1px solid ${vars.colors.border}`,
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
    backgroundColor: vars.colors.success,
    color: "white",
    ":hover": {
      backgroundColor: vars.colors.primary,
    },
  },
])

export const deleteButton = style([
  actionButton,
  {
    backgroundColor: vars.colors.danger,
    color: "white",
    ":hover": {
      backgroundColor: vars.colors.dangerDark,
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
  color: vars.colors.text,
  marginBottom: "20px",
})

export const formGroup = style({
  marginBottom: "16px",
})

export const label = style({
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: vars.colors.text,
  marginBottom: "6px",
})

export const input = style({
  width: "100%",
  padding: "10px 12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  fontSize: "14px",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const textarea = style([
  input,
  {
    minHeight: "100px",
    resize: "vertical",
  },
])

export const modalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "24px",
})

export const cancelButton = style({
  backgroundColor: vars.colors.textLight,
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.text,
  },
})

export const saveButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
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
    backgroundColor: vars.colors.primaryLight,
    color: vars.colors.primary,
  },
])

export const inactiveBadge = style([
  statusBadge,
  {
    backgroundColor: vars.colors.accent,
    color: vars.colors.textLight,
  },
])

export const loading = style({
  textAlign: "center",
  padding: "40px",
  color: vars.colors.textLight,
})

export const error = style({
  textAlign: "center",
  padding: "40px",
  color: vars.colors.danger,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: "8px",
  margin: "20px 0",
})

export const emptyState = style({
  textAlign: "center",
  padding: "60px 20px",
  color: vars.colors.textLight,
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
  color: vars.colors.text,
})

export const adminContent = style({
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
})

export const adminTable = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const adminTableHeader = style({
  backgroundColor: vars.colors.backgroundLight,
  fontWeight: "600",
  color: vars.colors.text,
})

export const adminTableRow = style({
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const adminTableCell = style({
  padding: "16px",
  borderBottom: `1px solid ${vars.colors.border}`,
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
  backgroundColor: vars.colors.primary,
  color: "white",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const adminButtonSecondary = style({
  backgroundColor: vars.colors.textLight,
  color: "white",
  ":hover": {
    backgroundColor: vars.colors.text,
  },
})

export const adminButtonDanger = style({
  backgroundColor: vars.colors.danger,
  color: "white",
  ":hover": {
    backgroundColor: vars.colors.dangerDark,
  },
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
  color: vars.colors.text,
  marginBottom: "6px",
})

export const adminInput = style({
  width: "100%",
  padding: "10px 12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  fontSize: "14px",
  boxSizing: "border-box",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const adminTextarea = style({
  width: "100%",
  padding: "10px 12px",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  fontSize: "14px",
  minHeight: "100px",
  resize: "vertical",
  boxSizing: "border-box",
  fontFamily: "inherit",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
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
  color: vars.colors.textLight,
  fontSize: "16px",
})

export const adminError = style({
  backgroundColor: vars.colors.primaryLight,
  color: vars.colors.danger,
  padding: "12px 16px",
  borderRadius: "8px",
  marginBottom: "16px",
  border: `1px solid ${vars.colors.border}`,
})

export const adminSuccess = style({
  backgroundColor: vars.colors.primaryLight,
  color: vars.colors.success,
  padding: "12px 16px",
  borderRadius: "8px",
  marginBottom: "16px",
  border: `1px solid ${vars.colors.border}`,
})

const pulse = globalKeyframes("pulse", {
  "50%": {
    opacity: 0.5,
  },
})

export const link = style({
  display: "contents",
})

export const skeleton = style({
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.sm,
  animation: `${pulse} 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
})
