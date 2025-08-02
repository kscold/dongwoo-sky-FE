import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem 1rem",
})

export const statsSection = style({
  marginBottom: "2rem",
  textAlign: "center",
})

export const statsText = style({
  fontSize: "1rem",
  color: "#64748b",
})

export const noticeGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gap: "1.5rem",
  marginBottom: "3rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const emptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  color: "#64748b",
})

export const emptyStateTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: "#374151",
})

export const emptyStateText = style({
  fontSize: "1rem",
})