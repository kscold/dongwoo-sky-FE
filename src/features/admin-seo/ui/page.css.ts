import { style } from "@vanilla-extract/css"

export const container = style({
  padding: "2rem",
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  marginBottom: "2rem",
  textAlign: "center",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "0.5rem",
})

export const subtitle = style({
  fontSize: "1.1rem",
  color: "#6b7280",
  marginBottom: "1.5rem",
})

export const addButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.5rem",
  border: "none",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#2563eb",
  },
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gap: "1.5rem",
})