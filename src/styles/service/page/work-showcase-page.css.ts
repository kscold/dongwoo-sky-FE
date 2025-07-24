import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "32px",
  minHeight: "100vh",
})

export const loadingState = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  fontSize: "18px",
  color: "#6b7280",
})

export const errorState = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  fontSize: "18px",
  color: "#dc2626",
})

export const header = style({
  marginBottom: "32px",
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "16px",
  ":hover": {
    textDecoration: "underline",
  },
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "16px",
  lineHeight: 1.3,
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
})

export const authorInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

export const author = style({
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
})

export const role = style({
  fontSize: "14px",
  color: "#6b7280",
})

export const details = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
})

export const detail = style({
  fontSize: "14px",
  color: "#6b7280",
  backgroundColor: "#f3f4f6",
  padding: "4px 12px",
  borderRadius: "6px",
})

export const stats = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "14px",
  color: "#6b7280",
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
})

export const date = style({
  marginLeft: "auto",
})

export const imageGallery = style({
  marginBottom: "32px",
})

export const mainImage = style({
  marginBottom: "16px",
  borderRadius: "8px",
  overflow: "hidden",
})

export const image = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
})

export const thumbnails = style({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      gap: "8px",
    },
    "(max-width: 480px)": {
      gap: "6px",
    },
  },
})

export const thumbnail = style({
  borderRadius: "6px",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
})

export const content = style({
  marginBottom: "32px",
})

export const contentBody = style({
  fontSize: "16px",
  lineHeight: 1.6,
  color: "#374151",
})

export const actions = style({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  paddingTop: "24px",
  borderTop: "1px solid #e5e7eb",
})

export const likeButton = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 16px",
  backgroundColor: "#fef2f2",
  color: "#dc2626",
  border: "1px solid #fecaca",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#fee2e2",
    borderColor: "#fca5a5",
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
})

export const backToListButton = style({
  padding: "12px 16px",
  backgroundColor: "#f3f4f6",
  color: "#374151",
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#e5e7eb",
  },
})
