import { style } from "@vanilla-extract/css"

export const card = style({
  backgroundColor: "white",
  borderRadius: "1rem",
  padding: "1.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e2e8f0",
  transition: "all 0.2s ease",
  position: "relative",
  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-2px)",
  },
})

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
  gap: "1rem",
})

export const customerInfo = style({
  flex: 1,
})

export const customerName = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "0.25rem",
})

export const customerCompany = style({
  fontSize: "0.875rem",
  color: "#64748b",
})

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const ratingStars = style({
  fontSize: "1.125rem",
  color: "#fbbf24",
})

export const ratingNumber = style({
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#64748b",
})

export const cardContent = style({
  marginBottom: "1rem",
})

export const reviewTitle = style({
  fontSize: "1rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.5rem",
})

export const reviewText = style({
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: "#4b5563",
})

export const cardMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const projectInfo = style({
  display: "flex",
  gap: "0.75rem",
  alignItems: "center",
})

export const projectType = style({
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#dbeafe",
  color: "#2563eb",
  borderRadius: "0.375rem",
  fontWeight: 500,
})

export const projectLocation = style({
  fontSize: "0.875rem",
  color: "#6b7280",
})

export const cardFooter = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const reviewDate = style({
  fontSize: "0.875rem",
  color: "#9ca3af",
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

export const verifiedBadge = style({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  backgroundColor: "#dcfce7",
  color: "#16a34a",
  borderRadius: "0.375rem",
  fontWeight: 500,
})