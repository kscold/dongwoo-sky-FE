import { style } from "@vanilla-extract/css"

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
  marginBottom: "3rem",
})

export const card = style({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1.5rem",
  textAlign: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
})

export const icon = style({
  fontSize: "2.5rem",
  marginBottom: "1rem",
})

export const value = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "0.5rem",
})

export const label = style({
  fontSize: "0.875rem",
  color: "#64748b",
})