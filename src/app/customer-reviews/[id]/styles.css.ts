import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const container = style({
  maxWidth: "900px",
  margin: "0 auto",
  padding: "2rem",
  minHeight: "100vh",
})

export const header = style({
  marginBottom: "2rem",
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  backgroundColor: vars.colors.backgroundLight,
  color: vars.colors.text,
  textDecoration: "none",
  borderRadius: "6px",
  fontSize: "0.875rem",
  fontWeight: "500",
  marginBottom: "1.5rem",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: vars.colors.border,
  },
})

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: vars.colors.text,
  lineHeight: 1.3,
  marginBottom: "1.5rem",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const ratingSection = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "1.5rem",
  padding: "1rem",
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "8px",
  border: `1px solid ${vars.colors.border}`,
})

export const stars = style({
  fontSize: "2rem",
  color: "#fbbf24",
})

export const ratingText = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.colors.text,
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "12px",
  border: `1px solid ${vars.colors.border}`,
})

export const customerInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const customer = style({
  fontSize: "1.125rem",
  fontWeight: "600",
  color: vars.colors.text,
})

export const company = style({
  fontSize: "1rem",
  color: vars.colors.textLight,
})

export const details = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
})

export const detail = style({
  fontSize: "0.975rem",
  color: vars.colors.textLight,
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  border: `1px solid ${vars.colors.border}`,
})

export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
})

export const stat = style({
  fontSize: "0.975rem",
  color: vars.colors.textLight,
  fontWeight: "500",
})

export const date = style({
  fontSize: "0.975rem",
  color: vars.colors.textLight,
})

export const imageGallery = style({
  marginBottom: "2rem",
})

export const mainImage = style({
  width: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  marginBottom: "1rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
})

export const image = style({
  width: "100%",
  height: "auto",
  maxHeight: "500px",
  objectFit: "cover",
})

export const thumbnails = style({
  display: "flex",
  gap: "0.75rem",
  overflowX: "auto",
  paddingBottom: "0.5rem",
})

export const thumbnail = style({
  width: "120px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: `2px solid transparent`,

  ":hover": {
    border: `2px solid ${vars.colors.primary}`,
    transform: "scale(1.05)",
  },
})

export const content = style({
  marginBottom: "2rem",
})

export const contentBody = style({
  fontSize: "1.125rem",
  lineHeight: 1.8,
  color: vars.colors.text,
})

export const actions = style({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  padding: "2rem 0",
  borderTop: `1px solid ${vars.colors.border}`,

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
})

export const helpfulButton = style({
  padding: "1rem 2rem",
  backgroundColor: "white",
  color: vars.colors.text,
  border: `2px solid ${vars.colors.secondary}`,
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: vars.colors.secondary,
    color: "white",
  },
})

export const backToListButton = style({
  padding: "1rem 2rem",
  backgroundColor: vars.colors.primary,
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  transition: "all 0.3s ease",
  textAlign: "center",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const loadingState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  fontSize: "1.125rem",
  color: vars.colors.textLight,
})

export const errorState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  fontSize: "1.125rem",
  color: "#ef4444",
  backgroundColor: "#fef2f2",
  borderRadius: "8px",
  margin: "2rem 0",
})
