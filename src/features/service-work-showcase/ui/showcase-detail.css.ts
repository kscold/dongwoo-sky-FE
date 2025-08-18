import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
    },
  },
})

export const header = style({
  marginBottom: "2rem",
  paddingBottom: "1.5rem",
  borderBottom: "2px solid #f1f5f9",
})

export const headerTop = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "0.75rem",
      alignItems: "flex-start",
    },
  },
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "0.875rem",
  fontWeight: "600",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#f8fafc",
    color: "#2563eb",
  },
})

export const breadcrumb = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  color: "#64748b",
  "@media": {
    "(max-width: 768px)": {
      order: -1,
    },
  },
})

export const breadcrumbLink = style({
  color: "#64748b",
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#3b82f6",
  },
})

export const separator = style({
  color: "#cbd5e1",
})

export const current = style({
  color: "#0f172a",
  fontWeight: "600",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "1rem",
  lineHeight: 1.3,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
})

export const authorInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const author = style({
  fontSize: "1rem",
  fontWeight: 500,
  color: "#475569",
})

export const details = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
})

export const detail = style({
  fontSize: "0.875rem",
  color: "#64748b",
})

export const stats = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "center",
  fontSize: "0.875rem",
  color: "#94a3b8",
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const date = style({
  marginLeft: "auto",
})

export const imageGallery = style({
  marginBottom: "2rem",
})

export const mainImage = style({
  width: "100%",
  marginBottom: "1rem",
  borderRadius: "0.75rem",
  overflow: "hidden",
})

export const image = style({
  width: "100%",
  height: "auto",
})

export const thumbnails = style({
  display: "flex",
  gap: "0.75rem",
  overflowX: "auto",
  paddingBottom: "0.5rem",
})

export const thumbnail = style({
  borderRadius: "0.5rem",
  cursor: "pointer",
  transition: "opacity 0.2s ease",
  ":hover": {
    opacity: 0.8,
  },
})

export const content = style({
  marginBottom: "3rem",
})

export const contentBody = style({
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#475569",
})

export const actions = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "2rem",
  borderTop: "1px solid #e5e7eb",
})

export const likeButton = style({
  padding: "0.75rem 2rem",
  backgroundColor: "#ffffff",
  border: "2px solid #ef4444",
  borderRadius: "0.5rem",
  color: "#ef4444",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#ef4444",
    color: "#ffffff",
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
})