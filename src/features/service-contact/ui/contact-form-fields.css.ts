import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
})

export const row = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.25rem",
    },
  },
})

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const label = style({
  fontSize: "1rem",
  fontWeight: "700",
  color: "#1e293b",
  letterSpacing: "-0.01em",
})

export const required = style({
  color: "#ef4444",
  marginLeft: "0.25rem",
})

export const input = style({
  padding: "1rem 1.25rem",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  borderRadius: "12px",
  fontSize: "1rem",
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#fafbff",
  },
  "::placeholder": {
    color: "#94a3b8",
  },
})

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: "140px",
    lineHeight: "1.6",
    fontFamily: "inherit",
  },
])

export const inputError = style({
  borderColor: "#ef4444",
  boxShadow: "0 0 0 4px rgba(239, 68, 68, 0.1)",
})

export const errorMessage = style({
  fontSize: "0.9rem",
  color: "#ef4444",
  fontWeight: "500",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "::before": {
    content: "⚠️",
    fontSize: "0.8rem",
  },
})

export const checkboxField = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",
  marginTop: "0.5rem",
})

export const checkboxLabel = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",
  cursor: "pointer",
  padding: "1rem",
  borderRadius: "12px",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  ":hover": {
    borderColor: "#3b82f6",
    backgroundColor: "#fafbff",
  },
  ":has(input:checked)": {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
  },
})

export const checkbox = style({
  width: "1.25rem",
  height: "1.25rem",
  cursor: "pointer",
  accentColor: "#3b82f6",
  marginTop: "0.125rem",
  flexShrink: 0,
})

export const checkboxText = style({
  fontSize: "0.95rem",
  color: "#374151",
  lineHeight: "1.5",
  fontWeight: "500",
})