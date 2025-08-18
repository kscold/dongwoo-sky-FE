import { style } from "@vanilla-extract/css"

export const tableContainer = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
})

export const headerRow = style({
  backgroundColor: "#f8fafc",
})

export const headerCell = style({
  padding: "1rem",
  textAlign: "left",
  fontWeight: 600,
  color: "#475569",
  fontSize: "0.875rem",
  borderBottom: "1px solid #e2e8f0",
})