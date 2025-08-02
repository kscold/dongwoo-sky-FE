import { style } from "@vanilla-extract/css"

export const equipmentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "24px",
  marginBottom: "32px",
})