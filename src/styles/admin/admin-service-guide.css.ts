import { style } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

export const pageContainer = style({
  padding: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "32px",
})

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "16px",
  ":hover": {
    textDecoration: "underline",
  },
})

export const backLinkIcon = style({
  width: "16px",
  height: "16px",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: vars.colors.text,
  marginBottom: "8px",
})

export const description = style({
  fontSize: "16px",
  color: vars.colors.textLight,
  marginBottom: "24px",
})

export const card = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  marginBottom: "24px",
})

export const cardHeader = style({
  marginBottom: "24px",
})

export const cardTitle = style({
  fontSize: "20px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "8px",
})

export const cardDescription = style({
  fontSize: "14px",
  color: vars.colors.textLight,
})

export const cardBody = style({
  marginBottom: "24px",
})

export const cardFooter = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  paddingTop: "24px",
  borderTop: `1px solid ${vars.colors.border}`,
})

export const addButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const editButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: vars.colors.success,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    transform: "translateY(-1px)",
  },
})

export const saveButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const cancelButton = style({
  backgroundColor: vars.colors.textLight,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.text,
  },
})

export const section = style({
  marginBottom: "32px",
})

export const sectionTitle = style({
  fontSize: "24px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "16px",
  paddingBottom: "8px",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const field = style({
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
  padding: "12px",
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

export const textarea = style([
  input,
  {
    minHeight: "100px",
    resize: "vertical",
  },
])

export const checkbox = style({
  marginRight: "8px",
})

// Form related styles
export const formGroup = style({
  marginBottom: "24px",
})

export const fieldGroupContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
})

export const fieldGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "8px",
  border: `1px solid ${vars.colors.border}`,
})

export const inputGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

export const formActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  marginTop: "24px",
  paddingTop: "24px",
  borderTop: `1px solid ${vars.colors.border}`,
})

// Icon related styles
export const iconSelectContainer = style({
  position: "relative",
  display: "inline-block",
})

export const iconSelectButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 12px",
  backgroundColor: "white",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  minWidth: "120px",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const iconSelectItem = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const iconSelectList = style({
  position: "absolute",
  top: "100%",
  left: "0",
  right: "0",
  backgroundColor: "white",
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  boxShadow: vars.shadows.md,
  zIndex: 1000,
  maxHeight: "200px",
  overflowY: "auto",
})

export const icon = style({
  width: "16px",
  height: "16px",
  flexShrink: 0,
})

export const chevron = style({
  width: "12px",
  height: "12px",
  transition: "transform 0.2s ease",
  marginLeft: "auto",
})

export const chevronOpen = style({
  transform: "rotate(180deg)",
})

export const iconButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  backgroundColor: vars.colors.danger,
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const uploadButton = style({
  backgroundColor: vars.colors.secondary,
  color: "white",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    transform: "translateY(-1px)",
  },
})

export const previewSection = style({
  marginTop: "32px",
  padding: "24px",
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "12px",
  border: `1px solid ${vars.colors.border}`,
})

export const previewTitle = style({
  fontSize: "20px",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "16px",
})

export const previewContent = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  lineHeight: 1.6,
})

export const loading = style({
  textAlign: "center",
  padding: "64px",
  color: vars.colors.textLight,
  fontSize: "16px",
})

export const error = style({
  textAlign: "center",
  padding: "64px",
  color: vars.colors.danger,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: "8px",
  border: `1px solid ${vars.colors.border}`,
})
