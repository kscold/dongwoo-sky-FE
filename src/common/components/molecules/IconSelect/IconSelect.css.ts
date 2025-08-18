import { style, styleVariants } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const label = style({
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
})

export const selectContainer = style({
  position: "relative",
  minWidth: "160px",
})

export const selectButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#ffffff",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.875rem",
  transition: "all 0.2s ease-in-out",
  
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#f9fafb",
      borderColor: "#9ca3af",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
})

export const variants = styleVariants({
  default: {},
  admin: {
    borderColor: "#e2e8f0",
    ":hover:not(:disabled)": {
      backgroundColor: "#f8fafc",
      borderColor: "#3b82f6",
    },
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.08)",
    },
  },
})

export const error = style({
  borderColor: "#ef4444 !important",
  selectors: {
    "&:hover:not(:disabled)": {
      borderColor: "#ef4444 !important",
    },
    "&:focus": {
      borderColor: "#ef4444 !important",
      boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1) !important",
    },
  },
})

export const disabled = style({
  opacity: 0.6,
  cursor: "not-allowed",
  ":hover": {
    backgroundColor: "#ffffff",
    borderColor: "#d1d5db",
  },
})

export const selectContent = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flex: 1,
})

export const selectedIcon = style({
  width: "1rem",
  height: "1rem",
  color: "#374151",
})

export const selectedText = style({
  color: "#374151",
})

export const placeholderText = style({
  color: "#9ca3af",
})

export const chevron = style({
  width: "1rem",
  height: "1rem",
  color: "#6b7280",
  transition: "transform 0.2s ease-in-out",
})

export const chevronOpen = style({
  transform: "rotate(180deg)",
})

export const dropdown = style({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  zIndex: 9999,
  marginTop: "4px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1)",
  maxHeight: "320px",
  overflow: "hidden",
  minWidth: "250px",
})

export const searchContainer = style({
  padding: "0.75rem",
  borderBottom: "1px solid #f3f4f6",
  position: "relative",
  backgroundColor: "#fafafa",
})

export const searchIcon = style({
  position: "absolute",
  left: "1rem",
  top: "50%",
  transform: "translateY(-50%)",
  width: "1rem",
  height: "1rem",
  color: "#9ca3af",
  pointerEvents: "none",
})

export const searchInput = style({
  width: "100%",
  padding: "0.5rem 0.5rem 0.5rem 2.25rem",
  border: "1px solid #e5e7eb",
  borderRadius: "6px",
  fontSize: "0.875rem",
  backgroundColor: "#ffffff",
  
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.1)",
  },
  
  "::placeholder": {
    color: "#9ca3af",
  },
})

export const optionsList = style({
  listStyle: "none",
  padding: "0.5rem 0",
  margin: 0,
  maxHeight: "240px",
  overflowY: "auto",
})

export const option = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  width: "100%",
  padding: "0.75rem 1rem",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "0.875rem",
  color: "#374151",
  cursor: "pointer",
  transition: "all 0.15s ease-in-out",
  textAlign: "left",
  
  ":hover": {
    backgroundColor: "#f8fafc",
    color: "#1f2937",
  },
})

export const optionSelected = style({
  backgroundColor: "#eff6ff",
  color: "#2563eb",
  
  ":hover": {
    backgroundColor: "#dbeafe",
  },
})

export const optionIcon = style({
  width: "1rem",
  height: "1rem",
})

export const noIconPlaceholder = style({
  width: "1rem",
  height: "1rem",
  borderRadius: "2px",
  border: "1px dashed #d1d5db",
  backgroundColor: "#f9fafb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  
  "::after": {
    content: "''",
    position: "absolute",
    width: "8px",
    height: "1px",
    backgroundColor: "#9ca3af",
    transform: "rotate(45deg)",
  },
  
  "::before": {
    content: "''",
    position: "absolute",
    width: "8px",
    height: "1px",
    backgroundColor: "#9ca3af",
    transform: "rotate(-45deg)",
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

export const noResults = style({
  padding: "2rem 1rem",
  textAlign: "center",
  color: "#9ca3af",
  fontSize: "0.875rem",
  fontStyle: "italic",
})