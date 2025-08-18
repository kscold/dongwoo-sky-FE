import { style } from "@vanilla-extract/css"

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "2rem",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
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
})

export const createButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#3b82f6",
  color: "white",
  borderRadius: "0.5rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
  },
})