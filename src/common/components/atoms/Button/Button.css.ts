import { style, styleVariants, keyframes } from "@vanilla-extract/css"

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontFamily: "inherit",
  fontWeight: "500",
  borderRadius: "6px",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  position: "relative",
  outline: "none",
  
  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },
  
  ":focus-visible": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const variants = styleVariants({
  primary: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    ":hover:not(:disabled)": {
      backgroundColor: "#2563eb",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
    },
    ":active:not(:disabled)": {
      transform: "translateY(0)",
    },
  },
  secondary: {
    backgroundColor: "#ffffff",
    color: "#374151",
    borderColor: "#d1d5db",
    ":hover:not(:disabled)": {
      backgroundColor: "#f9fafb",
      borderColor: "#9ca3af",
    },
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    ":hover:not(:disabled)": {
      backgroundColor: "#dc2626",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)",
    },
    ":active:not(:disabled)": {
      transform: "translateY(0)",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#374151",
    ":hover:not(:disabled)": {
      backgroundColor: "#f3f4f6",
    },
  },
  admin: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    ":hover:not(:disabled)": {
      backgroundColor: "#2563eb",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
    },
    ":active:not(:disabled)": {
      transform: "translateY(0)",
    },
  },
})

export const sizes = styleVariants({
  sm: {
    fontSize: "0.875rem",
    padding: "0.5rem 0.75rem",
    height: "2rem",
  },
  md: {
    fontSize: "1rem",
    padding: "0.75rem 1rem",
    height: "2.5rem",
  },
  lg: {
    fontSize: "1.125rem",
    padding: "1rem 1.5rem",
    height: "3rem",
  },
})

export const fullWidth = style({
  width: "100%",
})

export const loading = style({
  pointerEvents: "none",
})

export const spinner = style({
  position: "absolute",
  width: "1rem",
  height: "1rem",
  border: "2px solid transparent",
  borderTop: "2px solid currentColor",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
})

export const hiddenText = style({
  opacity: 0,
})

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1rem",
  height: "1rem",
})