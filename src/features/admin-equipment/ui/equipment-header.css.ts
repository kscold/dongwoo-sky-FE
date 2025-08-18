import { style } from "@vanilla-extract/css"

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start",
    },
  },
})

export const title = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "0.5rem",
})

export const subtitle = style({
  color: "#64748b",
  fontSize: "0.875rem",
})

export const addButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
  },
})