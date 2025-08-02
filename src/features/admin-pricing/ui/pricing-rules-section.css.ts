import { style } from "@vanilla-extract/css"

export const rulesContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const ruleItem = style({
  padding: "1rem",
  backgroundColor: "#f9fafb",
  borderRadius: "0.375rem",
  border: "1px solid #e5e7eb",
})

export const ruleFields = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 100px 80px",
  gap: "0.5rem",
  marginBottom: "0.5rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const input = style({
  padding: "0.5rem",
  fontSize: "0.875rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const numberInput = style({
  padding: "0.5rem",
  fontSize: "0.875rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  ":focus": {
    outline: "none",
    borderColor: "#3b82f6",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
  },
})

export const removeButton = style({
  padding: "0.5rem",
  fontSize: "0.875rem",
  color: "#ef4444",
  backgroundColor: "#fee2e2",
  border: "1px solid #fecaca",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#fecaca",
  },
})

export const conditionsField = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
})

export const label = style({
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#6b7280",
})

export const addButton = style({
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#3b82f6",
  backgroundColor: "#eff6ff",
  border: "1px solid #3b82f6",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#dbeafe",
  },
})