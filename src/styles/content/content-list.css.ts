import { style } from "@vanilla-extract/css"

export const contentListContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
    },
  },
})

export const contentListHeader = style({
  textAlign: "center",
  marginBottom: "3rem",
  padding: "2rem",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
      marginBottom: "2rem",
    },
  },
})

export const contentListTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "1rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const contentListSubtitle = style({
  fontSize: "1.1rem",
  color: "#64748b",
  marginBottom: "1.5rem",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})

export const contentListBackButton = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.75rem 1.5rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.25)",
  },
})

export const contentListGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "1.5rem",
    },
  },
})

export const contentListEmptyState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
})

export const contentListEmptyStateTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "1rem",
})

export const contentListEmptyStateText = style({
  fontSize: "1rem",
  color: "#6b7280",
  lineHeight: 1.6,
})

export const errorState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  color: "#ef4444",
  fontSize: "1.1rem",
  fontWeight: 600,
})

export const contentCard = style({
  display: "block",
  background: "white",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
  },
})

export const contentCardImageContainer = style({
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
})

export const contentCardImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
})

export const contentCardImageHover = style({
  transform: "scale(1.05)",
})

export const contentCardImagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
  fontSize: "3rem",
  color: "#94a3b8",
})

export const contentCardContent = style({
  padding: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.25rem",
    },
  },
})

export const contentCardTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#1e293b",
  marginBottom: "1rem",
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const contentCardMeta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.75rem",
  marginBottom: "1rem",
  "@media": {
    "(max-width: 768px)": {
      gap: "0.5rem",
    },
  },
})

export const contentCardMetaItem = style({
  fontSize: "0.875rem",
  color: "#64748b",
  background: "#f1f5f9",
  padding: "0.25rem 0.75rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const contentCardDescription = style({
  fontSize: "0.9rem",
  color: "#64748b",
  lineHeight: 1.6,
  marginBottom: "1rem",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const contentCardStats = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  paddingTop: "1rem",
  borderTop: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      flexWrap: "wrap",
      gap: "0.75rem",
    },
  },
})

export const contentCardStat = style({
  fontSize: "0.875rem",
  color: "#64748b",
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const contentCardDate = style({
  fontSize: "0.875rem",
  color: "#94a3b8",
  marginLeft: "auto",
})