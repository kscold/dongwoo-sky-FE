import { style } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
  minHeight: "100vh",
})

export const header = style({
  textAlign: "center",
  marginBottom: "3rem",
  paddingBottom: "2rem",
  borderBottom: `2px solid ${vars.colors.border}`,
})

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: vars.colors.text,
  marginBottom: "1rem",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const subtitle = style({
  fontSize: "1.125rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: "2rem",
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: vars.colors.primary,
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "500",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
})

export const card = style({
  backgroundColor: "white",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  border: `1px solid ${vars.colors.border}`,
  textDecoration: "none",
  color: "inherit",

  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
  },
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "scale(1.05)",
  },
})

export const imagePlaceholder = style({
  width: "100%",
  height: "100%",
  backgroundColor: vars.colors.backgroundLight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.textLight,
  fontSize: "3rem",
})

export const content = style({
  padding: "1.5rem",
})

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "0.75rem",
  lineHeight: 1.4,
})

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "1rem",
})

export const stars = style({
  color: "#fbbf24",
  fontSize: "1.125rem",
})

export const ratingText = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  fontWeight: "500",
})

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginBottom: "1rem",
})

export const metaItem = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  backgroundColor: vars.colors.backgroundLight,
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
})

export const description = style({
  fontSize: "0.975rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: "1rem",
})

export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "0.875rem",
  color: vars.colors.textLight,
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const date = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
})

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  marginTop: "3rem",
})

export const pageButton = style({
  padding: "0.75rem 1.5rem",
  backgroundColor: vars.colors.primary,
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  fontWeight: "500",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },

  ":disabled": {
    backgroundColor: vars.colors.textLight,
    cursor: "not-allowed",
  },
})

export const pageNumbers = style({
  display: "flex",
  gap: "0.5rem",
})

export const pageNumber = style({
  padding: "0.5rem 0.75rem",
  backgroundColor: "transparent",
  color: vars.colors.textLight,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const active = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  borderColor: vars.colors.primary,

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
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

export const emptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  fontSize: "1rem",
  color: vars.colors.textLight,
})
