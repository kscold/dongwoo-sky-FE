import { style } from "@vanilla-extract/css"
import { vars } from "../theme.css"

export const container = style({
  padding: "2rem",
  maxWidth: "1400px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "1rem",
  borderBottom: `2px solid ${vars.colors.border}`,
})

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  color: vars.colors.text,
  margin: 0,
})

export const actions = style({
  display: "flex",
  gap: "1rem",
})

export const createButton = style({
  padding: "0.75rem 1.5rem",
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "white",
  backgroundColor: vars.colors.primary,
  border: "none",
  borderRadius: "8px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const previewSection = style({
  marginBottom: "3rem",
  padding: "2rem",
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
})

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "0.5rem",
})

export const sectionDescription = style({
  fontSize: "1rem",
  color: vars.colors.textLight,
  marginBottom: "1.5rem",
})

export const previewGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const previewCard = style({
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
})

export const previewCardTitle = style({
  fontSize: "1.2rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "1rem",
})

export const previewList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const previewItem = style({
  padding: "1rem",
  backgroundColor: "#f8fafc",
  borderRadius: "6px",
  border: "1px solid #e2e8f0",
})

export const previewItemTitle = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.colors.text,
  marginBottom: "0.5rem",
  lineHeight: 1.4,
})

export const previewItemMeta = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  marginBottom: "0.25rem",
})

export const previewItemStats = style({
  fontSize: "0.8rem",
  color: "#6b7280",
  fontWeight: "500",
})

export const tabNavigation = style({
  display: "flex",
  gap: "1px",
  marginBottom: "2rem",
  backgroundColor: "#e2e8f0",
  borderRadius: "8px",
  padding: "4px",
})

export const tabButton = style({
  flex: 1,
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.colors.textLight,
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    color: vars.colors.text,
    backgroundColor: "white",
  },
})

export const tabButtonActive = style({
  color: vars.colors.primary,
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
})

export const contentSection = style({
  minHeight: "400px",
})

export const contentHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
})

export const addButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: vars.colors.primary,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: "6px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primary,
    color: "white",
  },
})

export const contentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "1.5rem",
})

export const contentCard = style({
  backgroundColor: "white",
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid #e2e8f0",
  transition: "all 0.2s ease",

  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-2px)",
  },
})

export const cardImage = style({
  width: "100%",
  height: "200px",
  overflow: "hidden",
})

export const cardImageElement = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const cardContent = style({
  padding: "1.5rem",
})

export const cardTitle = style({
  fontSize: "1.1rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "0.5rem",
  lineHeight: 1.4,
})

export const cardMeta = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  marginBottom: "0.5rem",
})

export const cardDescription = style({
  fontSize: "0.9rem",
  color: vars.colors.textLight,
  lineHeight: 1.5,
  marginBottom: "1rem",
})

export const cardStats = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.8rem",
  color: "#6b7280",
  marginBottom: "1rem",
})

export const cardActions = style({
  display: "flex",
  gap: "0.5rem",
})

export const actionButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: vars.colors.primary,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: "4px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primary,
    color: "white",
  },
})

export const actionButtonDanger = style({
  padding: "0.5rem 1rem",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "#dc2626",
  backgroundColor: "transparent",
  border: "1px solid #dc2626",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#dc2626",
    color: "white",
  },
})

export const emptyState = style({
  textAlign: "center",
  color: vars.colors.textLight,
  fontStyle: "italic",
  padding: "1rem",
})

export const emptyContent = style({
  textAlign: "center",
  padding: "3rem 1rem",
  color: vars.colors.textLight,
})

export const createFirstButton = style({
  display: "inline-block",
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  color: "white",
  backgroundColor: vars.colors.primary,
  border: "none",
  borderRadius: "8px",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})
