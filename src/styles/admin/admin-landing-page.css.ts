import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const container = style({
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "1rem",
  borderBottom: `2px solid ${vars.colors.border}`,
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: vars.colors.text,
  margin: 0,
})

export const buttonGroup = style({
  display: "flex",
  gap: "0.5rem",
})

export const editButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})

export const saveButton = style({
  backgroundColor: vars.colors.success,
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#16a085",
    transform: "translateY(-1px)",
  },

  ":disabled": {
    backgroundColor: "#bdc3c7",
    cursor: "not-allowed",
    transform: "none",
  },
})

export const cancelButton = style({
  backgroundColor: vars.colors.danger,
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#c0392b",
    transform: "translateY(-1px)",
  },

  ":disabled": {
    backgroundColor: "#bdc3c7",
    cursor: "not-allowed",
    transform: "none",
  },
})

export const section = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  border: `1px solid ${vars.colors.border}`,
})

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "1rem",
  paddingBottom: "0.5rem",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const field = style({
  marginBottom: "1rem",
})

export const label = style({
  display: "block",
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.colors.textLight,
  marginBottom: "0.5rem",
})

export const input = style({
  width: "100%",
  padding: "0.75rem",
  border: `2px solid ${vars.colors.border}`,
  borderRadius: "8px",
  fontSize: "1rem",
  backgroundColor: "white",
  transition: "border-color 0.2s ease",

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primary}20`,
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "80px",
  },
])

export const uploadButton = style({
  backgroundColor: vars.colors.secondary,
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "0.5rem 1rem",
  fontSize: "0.9rem",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primary,
    transform: "translateY(-1px)",
  },

  ":disabled": {
    backgroundColor: vars.colors.textLight,
    cursor: "not-allowed",
    transform: "none",
  },
})

export const value = style({
  padding: "0.75rem",
  backgroundColor: vars.colors.backgroundLight,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "8px",
  fontSize: "1rem",
  color: vars.colors.text,
  lineHeight: "1.5",
})

export const link = style({
  color: vars.colors.primary,
  textDecoration: "none",
  wordBreak: "break-all",

  ":hover": {
    textDecoration: "underline",
  },
})

export const preview = style({
  border: `2px solid ${vars.colors.border}`,
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
})

export const previewHero = style({
  position: "relative",
  height: "300px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const previewOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  textAlign: "center",
})

export const previewTitle = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  marginBottom: "0.5rem",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
})

export const previewSubtitle = style({
  fontSize: "1.2rem",
  color: "white",
  marginBottom: "1rem",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewDescription = style({
  fontSize: "1rem",
  color: "white",
  marginBottom: "1.5rem",
  maxWidth: "500px",
  lineHeight: "1.6",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
})

export const previewButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
})

export const loadingMessage = style({
  textAlign: "center",
  padding: "3rem",
  fontSize: "1.2rem",
  color: vars.colors.textLight,
})

export const errorMessage = style({
  textAlign: "center",
  padding: "3rem",
  fontSize: "1.2rem",
  color: vars.colors.danger,
  backgroundColor: "#fee",
  borderRadius: "12px",
  border: `2px solid ${vars.colors.danger}`,
})

export const emptyMessage = style({
  textAlign: "center",
  padding: "3rem",
  fontSize: "1.2rem",
  color: vars.colors.textLight,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "12px",
  border: `2px dashed ${vars.colors.border}`,
})
