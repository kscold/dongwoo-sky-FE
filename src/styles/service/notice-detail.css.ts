import { style } from "@vanilla-extract/css"

export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem 1rem",
  background: "#ffffff",
  minHeight: "100vh",
  "@media": {
    "(max-width: 768px)": {
      padding: "1rem",
    },
  },
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      alignItems: "flex-start",
    },
  },
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem 1rem",
  color: "#64748b",
  textDecoration: "none",
  fontWeight: 500,
  borderRadius: "8px",
  transition: "all 0.3s ease",
  border: "1px solid #e2e8f0",
  ":hover": {
    background: "#f8fafc",
    color: "#1e293b",
    borderColor: "#cbd5e1",
  },
  "@media": {
    "(max-width: 480px)": {
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
    },
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
    color: "#1e293b",
  },
})

export const separator = style({
  color: "#cbd5e1",
})

export const current = style({
  color: "#1e293b",
  fontWeight: 500,
})

export const noticeContainer = style({
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  overflow: "hidden",
  marginBottom: "2rem",
})

export const noticeHeader = style({
  padding: "2rem",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
  borderBottom: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
    },
    "(max-width: 480px)": {
      padding: "1rem",
    },
  },
})

export const titleSection = style({
  marginBottom: "1.5rem",
})

export const title = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "#1e293b",
  margin: "0 0 0.75rem 0",
  lineHeight: 1.3,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "(max-width: 480px)": {
      fontSize: "1.25rem",
    },
  },
})

export const summary = style({
  fontSize: "1.125rem",
  color: "#64748b",
  margin: 0,
  lineHeight: 1.6,
  "@media": {
    "(max-width: 480px)": {
      fontSize: "1rem",
    },
  },
})

export const metaInfo = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "0.75rem",
      alignItems: "flex-start",
    },
  },
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.875rem",
  color: "#64748b",
})

export const metaItemIcon = style({
  color: "#94a3b8",
})

export const contentSection = style({
  padding: "2rem",
  "@media": {
    "(max-width: 768px)": {
      padding: "1.5rem",
    },
    "(max-width: 480px)": {
      padding: "1rem",
    },
  },
})

export const content = style({
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#374151",
  marginBottom: "2rem",
})

export const contentParagraph = style({
  margin: "0 0 1rem 0",
})

export const contentImage = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  margin: "1rem 0",
})

export const navigationSection = style({
  padding: "0 2rem 2rem",
  "@media": {
    "(max-width: 768px)": {
      padding: "0 1.5rem 1.5rem",
    },
    "(max-width: 480px)": {
      padding: "0 1rem 1rem",
    },
  },
})

export const divider = style({
  height: "1px",
  background: "#e2e8f0",
  margin: "2rem 0 1.5rem",
})

export const navigationButtons = style({
  display: "flex",
  justifyContent: "center",
})

export const listButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
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

export const relatedSection = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem",
  background: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1rem",
      textAlign: "center",
    },
  },
})

export const sectionTitle = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#374151",
  margin: 0,
})

export const viewAllLink = style({
  color: "#667eea",
  textDecoration: "none",
  fontWeight: 500,
  transition: "color 0.3s ease",
  ":hover": {
    color: "#5a67d8",
  },
})

export const errorContainer = style({
  textAlign: "center",
  padding: "4rem 2rem",
})

export const errorIcon = style({
  fontSize: "4rem",
  marginBottom: "1rem",
})

export const errorTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#374151",
  margin: "0 0 0.75rem 0",
})

export const errorMessage = style({
  color: "#64748b",
  margin: "0 0 2rem 0",
  lineHeight: 1.6,
})