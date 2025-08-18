import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e2e8f0",
  transition: "all 0.2s ease",
  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-2px)",
  },
})

export const importantCard = style({
  borderLeft: "4px solid #dc2626",
  backgroundColor: "#fefefe",
})

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
  gap: "1rem",
})

export const badgeContainer = style({
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
})

export const importantBadge = style({
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#dc2626",
  color: "white",
  borderRadius: "0.375rem",
  fontWeight: 600,
})

export const newBadge = style({
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#16a34a",
  color: "white",
  borderRadius: "0.375rem",
  fontWeight: 600,
})

export const categoryBadge = style({
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#dbeafe",
  color: "#2563eb",
  borderRadius: "0.375rem",
  fontWeight: 500,
})

export const metaInfo = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "0.25rem",
  fontSize: "0.875rem",
  color: "#64748b",
})

export const date = style({
  fontWeight: 500,
})

export const viewCount = style({
  fontSize: "0.75rem",
})

export const cardContent = style({
  marginBottom: "1rem",
})

export const title = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.75rem",
  lineHeight: 1.4,
})

export const titleLink = style({
  color: "#1e293b",
  textDecoration: "none",
  ":hover": {
    color: "#3b82f6",
  },
})

export const summary = style({
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "#4b5563",
})

export const imageContainer = style({
  marginBottom: "1rem",
  borderRadius: "0.5rem",
  overflow: "hidden",
})

export const thumbnail = style({
  width: "100%",
  height: "200px",
  objectFit: "cover",
})

export const cardFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1rem",
  borderTop: "1px solid #f1f5f9",
})

export const author = style({
  fontSize: "0.875rem",
  color: "#64748b",
})

export const readMoreButton = style({
  fontSize: "0.875rem",
  color: "#3b82f6",
  textDecoration: "none",
  fontWeight: 500,
  padding: "0.25rem 0.5rem",
  borderRadius: "0.375rem",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#dbeafe",
    textDecoration: "none",
  },
})