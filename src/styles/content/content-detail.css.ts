import { style } from "@vanilla-extract/css"

export const contentDetailContainer = style({
  maxWidth: "800px",
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

export const contentDetailHeader = style({
  background: "white",
  borderRadius: "16px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
    },
  },
})

export const contentDetailBackButton = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.75rem 1.5rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: 600,
  transition: "all 0.3s ease",
  marginBottom: "1.5rem",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.25)",
  },
})

export const contentDetailTitle = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "1.5rem",
  lineHeight: 1.4,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

export const contentDetailMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const contentDetailHeaderMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  flexWrap: "wrap",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
    },
  },
})

export const contentDetailMetaItem = style({
  fontSize: "1rem",
  color: "#374151",
  fontWeight: 600,
})

export const contentDetailMetaItemAuthor = style({
  color: "#667eea",
})

export const contentDetailMetaItemRole = style({
  color: "#64748b",
  fontWeight: 400,
})

export const contentDetailMetaSuffix = style({
  color: "#64748b",
  fontWeight: 400,
})

export const contentDetailDetails = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  "@media": {
    "(max-width: 768px)": {
      gap: "0.75rem",
    },
  },
})

export const contentDetailDetail = style({
  fontSize: "0.9rem",
  color: "#64748b",
  background: "#f1f5f9",
  padding: "0.5rem 1rem",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const contentDetailStats = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  flexWrap: "wrap",
  paddingTop: "1rem",
  borderTop: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.75rem",
    },
  },
})

export const contentDetailStat = style({
  fontSize: "0.9rem",
  color: "#64748b",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})

export const contentDetailDate = style({
  fontSize: "0.9rem",
  color: "#94a3b8",
  marginLeft: "auto",
  "@media": {
    "(max-width: 768px)": {
      marginLeft: 0,
    },
  },
})

export const contentDetailImageGallery = style({
  background: "white",
  borderRadius: "16px",
  padding: "1.5rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
})

export const contentDetailMainImage = style({
  width: "100%",
  marginBottom: "1rem",
  borderRadius: "12px",
  overflow: "hidden",
})

export const contentDetailImage = style({
  width: "100%",
  height: "auto",
  borderRadius: "12px",
})

export const contentDetailThumbnails = style({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  "@media": {
    "(max-width: 768px)": {
      gap: "0.5rem",
    },
  },
})

export const contentDetailThumbnail = style({
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  },
})

export const contentDetailContent = style({
  background: "white",
  borderRadius: "16px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
    },
  },
})

export const contentDetailContentBody = style({
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#374151",
})

export const contentDetailBodyHeading = style({
  color: "#1e293b",
  marginTop: "2rem",
  marginBottom: "1rem",
})

export const contentDetailBodyParagraph = style({
  marginBottom: "1rem",
})

export const contentDetailBodyImage = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  margin: "1rem 0",
})

export const contentDetailBodyList = style({
  marginBottom: "1rem",
  paddingLeft: "1.5rem",
})

export const contentDetailBodyListItem = style({
  marginBottom: "0.5rem",
})

export const contentDetailActions = style({
  textAlign: "center",
  background: "white",
  borderRadius: "16px",
  padding: "2rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
    },
  },
})

export const contentDetailActionButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "1rem 2rem",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.25)",
  },
  ":disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "none",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "0.875rem 1.5rem",
      fontSize: "0.9rem",
    },
  },
})

export const contentDetailErrorState = style({
  textAlign: "center",
  padding: "4rem 2rem",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  color: "#ef4444",
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "2rem",
})

export const contentDetailErrorDescription = style({
  fontSize: "0.9rem",
  color: "#64748b",
  fontWeight: 400,
  marginTop: "0.5rem",
})