import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "0.75rem",
  padding: "1.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s",
  ":hover": {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
})

export const titleSection = style({
  flex: 1,
})

export const title = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "0.5rem",
})

export const meta = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.875rem",
  color: "#64748b",
})

export const author = style({})
export const date = style({})

export const actions = style({
  display: "flex",
  gap: "0.5rem",
})

export const actionButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: "0.375rem",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "all 0.2s",
})

export const primaryButton = style({
  color: "#3b82f6",
  backgroundColor: "#eff6ff",
  ":hover": {
    backgroundColor: "#dbeafe",
  },
})

export const secondaryButton = style({
  color: "#64748b",
  backgroundColor: "#f8fafc",
  ":hover": {
    backgroundColor: "#f1f5f9",
  },
})

export const dangerButton = style({
  color: "#ef4444",
  backgroundColor: "#fef2f2",
  ":hover": {
    backgroundColor: "#fee2e2",
  },
})

export const statusRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1rem",
  borderTop: "1px solid #e2e8f0",
})

export const toggles = style({
  display: "flex",
  gap: "1.5rem",
})

export const toggleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
})

export const toggleInput = style({
  display: "none",
})

export const slider = style({
  position: "relative",
  width: "3rem",
  height: "1.5rem",
  backgroundColor: "#e2e8f0",
  borderRadius: "1rem",
  transition: "all 0.3s",
  "::before": {
    content: '""',
    position: "absolute",
    top: "0.125rem",
    left: "0.125rem",
    width: "1.25rem",
    height: "1.25rem",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "all 0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
})

export const sliderChecked = style({
  backgroundColor: "#3b82f6",
  "::before": {
    transform: "translateX(1.5rem)",
  },
})

export const toggleLabel = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#64748b",
})

export const expanded = style({
  marginTop: "1rem",
  paddingTop: "1rem",
  borderTop: "1px solid #e2e8f0",
})

export const content = style({})

export const preview = style({
  marginTop: "0.5rem",
  padding: "1rem",
  backgroundColor: "#f8fafc",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: "#475569",
})