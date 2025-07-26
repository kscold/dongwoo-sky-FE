import { style, keyframes } from "@vanilla-extract/css"

import { vars } from "../../../common/theme.css"

const pulse = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },
  "40%": {
    transform: "scale(1.0)",
  },
})

export const contentSection = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  paddingTop: "4rem",
  paddingBottom: "4rem",
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
    pointerEvents: "none",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
    "(max-width: 480px)": {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  },
})

export const contentWrapper = style({
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  padding: `${vars.space.xxxxl} 0`,
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
    pointerEvents: "none",
  },
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.xxxl} 0`,
    },
    "(max-width: 480px)": {
      padding: `${vars.space.xxl} 0`,
    },
  },
})

export const swiperContainer = style({
  display: "flex",
  gap: vars.space.xxxxl,
  padding: `${vars.space.xxxxl} ${vars.space.xxxl}`,
  maxWidth: "1600px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,
  "@media": {
    "(max-width: 1024px)": {
      flexDirection: "column",
      gap: vars.space.xxxl,
      padding: `${vars.space.xxxl} ${vars.space.xl}`,
      maxWidth: "1400px",
    },
    "(max-width: 768px)": {
      padding: `${vars.space.xxl} ${vars.space.lg}`,
      gap: vars.space.xxl,
      maxWidth: "100%",
    },
    "(max-width: 480px)": {
      padding: `${vars.space.xl} ${vars.space.md}`,
      gap: vars.space.xl,
    },
  },
})

export const sectionWrapper = style({
  flex: 1,
  minWidth: 0,
  "@media": {
    "(max-width: 1024px)": {
      flex: "none",
      width: "100%",
    },
  },
})

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 2rem",

  "@media": {
    "(max-width: 768px)": {
      padding: "0 1.5rem",
    },
    "(max-width: 480px)": {
      padding: "0 1rem",
    },
  },
})

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: "3rem",

  "@media": {
    "(max-width: 768px)": {
      marginBottom: "2.5rem",
    },
    "(max-width: 480px)": {
      marginBottom: "2rem",
    },
  },
})

export const sectionTitle = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#1e293b",
  marginBottom: "1rem",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
      marginBottom: "0.75rem",
    },
    "(max-width: 480px)": {
      fontSize: "1.75rem",
      marginBottom: "0.5rem",
    },
  },
})

export const sectionSubtitle = style({
  fontSize: "1.125rem",
  color: "#64748b",
  lineHeight: 1.6,
  textShadow: "none",
})

export const contentGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
})

export const contentCard = style({
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s ease",

  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
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
  backgroundColor: "#e2e8f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2rem",
})

export const cardContent = style({
  padding: "1.5rem",
})

export const cardTitle = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "0.5rem",
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
})

export const cardMeta = style({
  fontSize: "0.875rem",
  color: "#64748b",
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
  color: "#64748b",
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
  borderTop: "1px solid rgba(226, 232, 240, 0.6)",
})

export const cardButton = style({
  padding: "0.5rem 1rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#475569",
  backgroundColor: "transparent",
  border: "1px solid #475569",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",

  ":hover": {
    backgroundColor: "#e2e8f0",
    color: "white",
  },
})

export const cardStats = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.875rem",
  color: "#64748b",
})

export const cardStat = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  cursor: "pointer",
  transition: "color 0.2s ease",

  ":hover": {
    color: "#475569",
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
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  backdropFilter: "blur(10px)",

  ":hover": {
    backgroundColor: "#f1f5f9",
    color: "#1e293b",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
})

export const emptyState = style({
  textAlign: "center",
  padding: "3rem 1rem",
  color: "#64748b",
  fontSize: "1.125rem",
})

export const loadingState = style({
  textAlign: "center",
  padding: "2rem 1rem",
  color: "#64748b",
})

export const errorState = style({
  textAlign: "center",
  padding: "2rem 1rem",
  color: "#ef4444",
  backgroundColor: "rgba(254, 242, 242, 0.9)",
  borderRadius: "12px",
  margin: "1rem 0",
  backdropFilter: "blur(10px)",
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
      gap: "1.5rem",
      marginTop: "1.5rem",
    },
    "(max-width: 480px)": {
      gap: "1rem",
      marginTop: "1rem",
    },
  },
})

export const newsSection = style({
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "1.5rem",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",

  "@media": {
    "(max-width: 768px)": {
      padding: "1.25rem",
      borderRadius: "16px",
    },
    "(max-width: 480px)": {
      padding: "1rem",
      borderRadius: "12px",
    },
  },
})

export const newsSectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  borderBottom: "2px solid #f3f4f6",
  paddingBottom: "1rem",

  "@media": {
    "(max-width: 768px)": {
      marginBottom: "1.25rem",
      paddingBottom: "0.75rem",
    },
    "(max-width: 480px)": {
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
    },
  },
})

export const newsSectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#1e293b",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.375rem",
    },
    "(max-width: 480px)": {
      fontSize: "1.125rem",
    },
  },
})

export const plusButton = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#e2e8f0",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "1.25rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: "#334155",
    transform: "scale(1.1)",
  },
})

export const newsGrid = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media": {
    "(max-width: 768px)": {
      gap: "0.75rem",
    },
    "(max-width: 480px)": {
      gap: "0.5rem",
    },
  },
})

export const newsCard = style({
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  borderRadius: "12px",
  backgroundColor: "#f9fafb",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s ease",

  ":hover": {
    backgroundColor: "#f3f4f6",
    transform: "translateX(4px)",
  },

  "@media": {
    "(max-width: 768px)": {
      gap: "0.75rem",
      padding: "0.875rem",
    },
    "(max-width: 480px)": {
      gap: "0.5rem",
      padding: "0.75rem",
      borderRadius: "8px",
    },
  },
})

export const newsCardImage = style({
  position: "relative",
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  flexShrink: 0,

  "@media": {
    "(max-width: 768px)": {
      width: "70px",
      height: "70px",
      borderRadius: "6px",
    },
    "(max-width: 480px)": {
      width: "60px",
      height: "60px",
    },
  },
})

export const newsImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const newsImagePlaceholder = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#e2e8f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  color: "white",
})

export const newsCardContent = style({
  flex: 1,
  minWidth: 0,
})

export const newsCardTitle = style({
  fontSize: "1rem",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "0.5rem",
  lineHeight: 1.3,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.95rem",
      marginBottom: "0.375rem",
      lineHeight: 1.25,
    },
    "(max-width: 480px)": {
      fontSize: "0.875rem",
      marginBottom: "0.25rem",
      lineHeight: 1.2,
    },
  },
})

export const newsCardDesc = style({
  fontSize: "0.875rem",
  color: "#64748b",
  lineHeight: 1.4,
  marginBottom: "0.5rem",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.8rem",
      lineHeight: 1.35,
      marginBottom: "0.375rem",
    },
    "(max-width: 480px)": {
      fontSize: "0.75rem",
      lineHeight: 1.3,
      marginBottom: "0.25rem",
    },
  },
})

export const newsCardMeta = style({
  display: "flex",
  gap: "1rem",
  fontSize: "0.75rem",
  color: "#64748b",

  "@media": {
    "(max-width: 768px)": {
      gap: "0.75rem",
      fontSize: "0.7rem",
    },
    "(max-width: 480px)": {
      gap: "0.5rem",
      fontSize: "0.625rem",
    },
  },
})

// 새로운 스타일 추가
export const sectionTitleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  flex: 1,
})

export const sectionIcon = style({
  fontSize: "1.2em",
  marginRight: "0.5rem",
})

export const sectionDescription = style({
  fontSize: vars.fontSizes.sm,
  color: "#64748b",
  lineHeight: vars.lineHeights.relaxed,
  margin: 0,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.8rem",
      lineHeight: 1.4,
    },
    "(max-width: 480px)": {
      fontSize: "0.75rem",
      lineHeight: 1.3,
    },
  },
})

export const viewAllButton = style({
  backgroundColor: "#e2e8f0",
  color: "#475569",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.3s ease",
  border: "1px solid #cbd5e1",
  backdropFilter: "blur(10px)",

  ":hover": {
    backgroundColor: "#cbd5e1",
    color: "#1e293b",
    transform: "translateY(-1px)",
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "0.4rem 0.8rem",
      fontSize: "0.8rem",
    },
    "(max-width: 480px)": {
      padding: "0.3rem 0.6rem",
      fontSize: "0.75rem",
    },
  },
})

export const loadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
  marginBottom: vars.space.md,
})

export const loadingSpinnerDot = style({
  width: "8px",
  height: "8px",
  backgroundColor: "white",
  borderRadius: "50%",
  animation: `${pulse} 1.4s ease-in-out infinite both`,

  selectors: {
    "&:nth-child(1)": {
      animationDelay: "-0.32s",
    },
    "&:nth-child(2)": {
      animationDelay: "-0.16s",
    },
    "&:nth-child(3)": {
      animationDelay: "0s",
    },
  },
})

export const errorIcon = style({
  fontSize: "2rem",
  marginBottom: vars.space.sm,
})

export const imageOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
  display: "flex",
  alignItems: "flex-end",
  padding: vars.space.sm,
})

export const categoryBadge = style({
  backgroundColor: "#e2e8f0",
  color: "white",
  padding: "0.25rem 0.5rem",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
})

export const ratingOverlay = style({
  color: "#fbbf24",
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.bold,
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
})

export const metaIcon = style({
  fontSize: "0.9em",
})

export const emptyIcon = style({
  fontSize: "3rem",
  marginBottom: vars.space.md,
  opacity: 0.6,
})

export const emptySubtext = style({
  fontSize: vars.fontSizes.sm,
  color: "#64748b",
  marginTop: vars.space.xs,
})
