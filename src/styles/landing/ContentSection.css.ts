import { style } from "@vanilla-extract/css"
import { vars } from "../theme.css"

export const contentSection = style({
  padding: "4rem 0",
  backgroundColor: vars.colors.background,
})

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",
})

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: "3rem",
})

export const sectionTitle = style({
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

export const sectionSubtitle = style({
  fontSize: "1.125rem",
  color: vars.colors.textSecondary,
  lineHeight: 1.6,
})

export const contentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
})

export const contentCard = style({
  backgroundColor: "white",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  border: "1px solid #e5e7eb",

  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
})

export const cardImageContainer = style({
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
})

export const cardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "scale(1.05)",
  },
})

export const cardImagePlaceholder = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#f3f4f6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ca3af",
  fontSize: "2rem",
})

export const cardContent = style({
  padding: "1.5rem",
})

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "0.5rem",
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const cardMeta = style({
  fontSize: "0.875rem",
  color: vars.colors.textSecondary,
  marginBottom: "1rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
})

export const cardMetaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const cardDescription = style({
  fontSize: "0.95rem",
  color: vars.colors.textSecondary,
  lineHeight: 1.6,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  marginBottom: "1rem",
})

export const cardActions = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1rem",
  borderTop: "1px solid #e5e7eb",
})

export const cardButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: vars.colors.primary,
  backgroundColor: "transparent",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",

  ":hover": {
    backgroundColor: vars.colors.primary,
    color: "white",
  },
})

export const cardStats = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.875rem",
  color: vars.colors.textSecondary,
})

export const cardStat = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  cursor: "pointer",
  transition: "color 0.2s ease",

  ":hover": {
    color: vars.colors.primary,
  },
})

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  fontSize: "0.875rem",
  color: "#f59e0b",
  fontWeight: "500",
})

export const viewMoreSection = style({
  textAlign: "center",
  marginTop: "2rem",
})

export const viewMoreButton = style({
  padding: "0.75rem 2rem",
  fontSize: "1rem",
  fontWeight: "600",
  color: "white",
  backgroundColor: vars.colors.primary,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const emptyState = style({
  textAlign: "center",
  padding: "3rem 1rem",
  color: vars.colors.textLight,
  fontSize: "1.125rem",
})

export const loadingState = style({
  textAlign: "center",
  padding: "2rem 1rem",
  color: vars.colors.textLight,
})

export const errorState = style({
  textAlign: "center",
  padding: "2rem 1rem",
  color: "#ef4444",
  backgroundColor: "#fef2f2",
  borderRadius: "8px",
  margin: "1rem 0",
})

// 어울림 스카이 소식 새로운 스타일
export const newsContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3rem",
  marginTop: "2rem",

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
  },
})

export const newsSection = style({
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "1.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e5e7eb",
})

export const newsSectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  borderBottom: "2px solid #f3f4f6",
  paddingBottom: "1rem",
})

export const newsSectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: vars.colors.text,
})

export const plusButton = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: vars.colors.primary,
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "1.25rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "scale(1.1)",
  },
})

export const newsGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const newsCard = style({
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: "#f3f4f6",
    transform: "translateX(4px)",
  },
})

export const newsCardImage = style({
  position: "relative",
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0,
})

export const newsImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const newsImagePlaceholder = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "#9ca3af",
})

export const newsCardContent = style({
  flex: 1,
  minWidth: 0,
})

export const newsCardTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: vars.colors.text,
  marginBottom: "0.5rem",
  lineHeight: 1.3,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const newsCardDesc = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
  lineHeight: 1.4,
  marginBottom: "0.5rem",
})

export const newsCardMeta = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.75rem",
  color: vars.colors.textLight,
})
