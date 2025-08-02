import { style, styleVariants, keyframes } from "@vanilla-extract/css"

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
})

export const uploadArea = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "120px",
  padding: "1.5rem",
  border: "2px dashed #d1d5db",
  borderRadius: "8px",
  backgroundColor: "#fafafa",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  
  ":hover": {
    backgroundColor: "#f5f5f5",
    borderColor: "#9ca3af",
  },
})

export const variants = styleVariants({
  default: {},
  admin: {
    backgroundColor: "#f8fafc",
    borderColor: "#e2e8f0",
    ":hover": {
      backgroundColor: "#f1f5f9",
      borderColor: "#3b82f6",
    },
  },
  image: {
    minHeight: "160px",
    backgroundColor: "#f8f9fa",
    borderColor: "#dee2e6",
    ":hover": {
      backgroundColor: "#e9ecef",
      borderColor: "#6c757d",
    },
  },
})

export const dragActive = style({
  borderColor: "#3b82f6 !important",
  backgroundColor: "#eff6ff !important",
})

export const disabled = style({
  cursor: "not-allowed",
  opacity: 0.6,
  ":hover": {
    backgroundColor: "#fafafa",
    borderColor: "#d1d5db",
  },
})

export const error = style({
  borderColor: "#ef4444 !important",
  backgroundColor: "#fef2f2 !important",
})

export const hiddenInput = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
})

export const loading = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  color: "#6b7280",
})

export const spinner = style({
  width: "1.5rem",
  height: "1.5rem",
  border: "2px solid #f3f4f6",
  borderTop: "2px solid #3b82f6",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
})

export const uploadContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
  textAlign: "center",
})

export const uploadIcon = style({
  width: "2rem",
  height: "2rem",
  color: "#9ca3af",
})

export const uploadText = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
})

export const uploadPrimary = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
})

export const uploadSecondary = style({
  fontSize: "0.75rem",
  color: "#6b7280",
})

export const previewContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginTop: "0.5rem",
})

export const previewItem = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
})

export const imagePreview = style({
  position: "relative",
  width: "80px",
  height: "80px",
  borderRadius: "6px",
  overflow: "hidden",
  backgroundColor: "#f3f4f6",
})

export const previewImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const filePreview = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const fileIcon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: "#6b7280",
})

export const fileName = style({
  fontSize: "0.875rem",
  color: "#374151",
  maxWidth: "150px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

export const deleteButton = style({
  position: "absolute",
  top: "-0.25rem",
  right: "-0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  backgroundColor: "#ef4444",
  color: "#ffffff",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#dc2626",
      transform: "scale(1.1)",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
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