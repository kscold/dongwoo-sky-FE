import { style, keyframes } from "@vanilla-extract/css"

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  minHeight: "400px",
})

export const spinner = style({
  width: "2.5rem",
  height: "2.5rem",
  border: "3px solid #e5e7eb",
  borderTop: "3px solid #3b82f6",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  marginBottom: "1rem",
})

export const errorState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  backgroundColor: "#fef2f2",
  borderRadius: "1rem",
  marginBottom: "2rem",
})

export const errorMessage = style({
  fontSize: "0.875rem",
  color: "#dc2626",
  marginTop: "0.5rem",
})

export const emptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  backgroundColor: "#f8fafc",
  borderRadius: "1rem",
  fontSize: "1.125rem",
  color: "#64748b",
})

export const showcaseGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "2rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
})

export const showcaseCard = style({
  display: "block",
  backgroundColor: "#ffffff",
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  textDecoration: "none",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
})

export const imageWrapper = style({
  position: "relative",
  width: "100%",
  height: "240px",
  backgroundColor: "#f3f4f6",
})

export const showcaseImage = style({
  objectFit: "cover",
})

export const imagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: "#d1d5db",
})

export const showcaseContent = style({
  padding: "1.5rem",
})

export const showcaseTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "0.5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

export const showcaseDescription = style({
  fontSize: "0.875rem",
  color: "#64748b",
  marginBottom: "1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  lineHeight: 1.5,
})

export const showcaseMeta = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "0.875rem",
  color: "#94a3b8",
})

export const client = style({
  fontWeight: 500,
})

export const viewCount = style({
  marginLeft: "auto",
})