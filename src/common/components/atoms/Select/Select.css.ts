import { style, styleVariants } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const fullWidth = style({
  width: "100%",
})

export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const required = style({
  color: "#ef4444",
  fontSize: "0.75rem",
})

export const selectWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
})

export const select = style({
  width: "100%",
  padding: "0.75rem",
  paddingRight: "2.75rem",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "1rem",
  lineHeight: "1.5",
  transition: "all 0.2s ease-in-out",
  backgroundColor: "#ffffff",
  appearance: "none",
  cursor: "pointer",
  
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
  
  ":disabled": {
    backgroundColor: "#f9fafb",
    color: "#9ca3af",
    cursor: "not-allowed",
    borderColor: "#e5e7eb",
  },
})

export const variants = styleVariants({
  default: {},
  admin: {
    borderColor: "#e2e8f0",
    backgroundColor: "#ffffff",
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.08)",
    },
  },
  form: {
    padding: "0.875rem 1rem",
    paddingRight: "3rem",
    borderRadius: "8px",
    fontSize: "1rem",
    ":focus": {
      borderColor: "#2563eb",
      boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
    },
  },
})

export const error = style({
  borderColor: "#ef4444 !important",
  ":focus": {
    borderColor: "#ef4444 !important",
    boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1) !important",
  },
})

export const icon = style({
  position: "absolute",
  right: "0.75rem",
  zIndex: 1,
  color: "#6b7280",
  pointerEvents: "none",
  height: "1.25rem",
  width: "1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const errorText = style({
  fontSize: "0.875rem",
  color: "#ef4444",
  fontWeight: "500",
})

export const helperText = style({
  fontSize: "0.875rem",
  color: "#6b7280",
})