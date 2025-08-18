import { style } from "@vanilla-extract/css"

export const sitemapSection = style({
  marginTop: "3rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "2rem",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
})

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#111827",
  marginBottom: "0.5rem"
})

export const sectionDescription = style({
  fontSize: "1rem",
  color: "#6b7280",
  marginBottom: "1.5rem"
})

export const sitemapActions = style({
  display: "flex",
  gap: "1rem",
  marginBottom: "2rem",
  flexWrap: "wrap"
})

export const generateButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#10b981",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#059669"
  }
})

export const viewButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#6366f1",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#4f46e5"
  }
})

export const submitButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#f59e0b",
  color: "white",
  border: "none",
  borderRadius: "0.375rem",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#d97706"
  }
})

export const sitemapInfo = style({
  backgroundColor: "#f9fafb",
  padding: "1rem",
  borderRadius: "0.375rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem"
})

export const sitemapInfo_p = style({
  margin: 0,
  fontSize: "0.875rem",
  color: "#6b7280"
})

export const sitemapInfo_strong = style({
  color: "#374151",
  fontWeight: "500"
})