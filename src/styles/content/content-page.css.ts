import { style, globalStyle } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const pageWrapper = style({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  paddingBottom: vars.space.xxxxl,
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    pointerEvents: "none",
  },
})

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  zIndex: 1,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
    },
  },
})

export const header = style({
  textAlign: "center",
  marginTop: vars.space.md,
  marginBottom: vars.space.xxl,
  padding: `${vars.space.xl} ${vars.space.xl}`,
  background: `
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  borderRadius: "32px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.sm,
      marginBottom: vars.space.xl,
      padding: `${vars.space.lg} ${vars.space.lg}`,
      borderRadius: "24px",
    },
  },
})

export const title = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: "800",
  marginBottom: vars.space.lg,
  color: vars.colors.primary,
  position: "relative",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxxl,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const subtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  marginBottom: vars.space.lg,
  maxWidth: "600px",
  margin: `0 auto ${vars.space.lg} auto`,
  lineHeight: 1.6,
  fontWeight: "500",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: vars.fontSizes.md,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${vars.colors.primary}20`,
  boxShadow: `0 4px 12px ${vars.colors.primary}10`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  fontWeight: "600",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
    transition: "left 0.5s",
  },
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 8px 25px ${vars.colors.primary}20`,
    borderColor: vars.colors.primary,
    color: vars.colors.primary,
  },
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gridAutoRows: "1fr", // 모든 행의 높이를 동일하게
  gap: vars.space.xl,
  marginBottom: vars.space.xl,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: vars.space.lg,
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.md,
    },
  },
})

export const card = style({
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%", // 그리드 셀 전체 높이 사용
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${vars.colors.primary}05 0%, ${vars.colors.secondary}05 100%)`,
    opacity: 0,
    transition: "opacity 0.3s ease",
    borderRadius: "24px",
  },
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px rgba(59, 130, 246, 0.15), 0 8px 24px ${vars.colors.primary}20`,
    borderColor: `${vars.colors.primary}30`,
  },
})

export const imageContainer = style({
  height: "180px",
  overflow: "hidden",
  position: "relative",
  background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
  flexShrink: 0, // 이미지 영역은 고정 크기 유지
  "::after": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
})

export const imagePlaceholder = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
  fontSize: vars.fontSizes.xxxxl,
  color: "#64748b",
})

export const content = style({
  padding: vars.space.lg,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1, // 남은 공간을 모두 차지
  minHeight: 0, // flexbox에서 shrink 방지
})

export const cardTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: "700",
  marginBottom: vars.space.md,
  lineHeight: 1.4,
  color: "#1e293b",
  letterSpacing: "-0.01em",
})

export const rating = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.md,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
  borderRadius: "12px",
  width: "fit-content",
  border: "1px solid rgba(251, 191, 36, 0.3)",
  boxShadow: "0 2px 8px rgba(251, 191, 36, 0.15)",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(251, 191, 36, 0.25)",
  },
})

export const stars = style({
  color: "#f59e0b",
  fontSize: vars.fontSizes.lg,
})

export const ratingText = style({
  fontSize: vars.fontSizes.sm,
  color: "#92400e",
  fontWeight: "600",
})

export const meta = style({
  marginBottom: vars.space.md,
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.xs,
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.xs,
  color: "#64748b",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: "#f8fafc",
  borderRadius: vars.radii.sm,
  fontWeight: "500",
  border: "1px solid #e2e8f0",
  whiteSpace: "nowrap",
})

export const description = style({
  fontSize: vars.fontSizes.sm,
  color: "#64748b",
  lineHeight: 1.5,
  marginBottom: vars.space.md,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  flex: 1,
})

export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: vars.space.md,
  borderTop: "1px solid rgba(226, 232, 240, 0.6)",
  marginTop: "auto",
})

export const statsLeft = style({
  display: "flex",
  gap: vars.space.md,
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: "#64748b",
  fontWeight: "500",
})

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: "#64748b",
  fontWeight: "600",
})

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  border: `2px dashed ${vars.colors.primary}30`,
  color: "#64748b",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
})

export const emptyStateTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: "700",
  marginBottom: vars.space.md,
  color: "#1e293b",
})

export const emptyStateMessage = style({
  fontSize: vars.fontSizes.md,
  lineHeight: 1.6,
})

export const errorState = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
  color: "#dc2626",
  background: "rgba(254, 242, 242, 0.9)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  border: "2px solid rgba(252, 165, 165, 0.5)",
  position: "relative",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
})

export const loadingState = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
})

// Notice specific styles
export const noticeCard = style([
  card,
  {
    // 기본 card 스타일만 사용, 왼쪽 accent bar 제거
  },
])

export const pinnedBadge = style({
  position: "absolute",
  top: vars.space.md,
  right: vars.space.md,
  background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.secondary} 100%)`,
  color: "white",
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: "12px",
  fontSize: vars.fontSizes.xs,
  fontWeight: "700",
  zIndex: 10,
  boxShadow: `0 4px 16px ${vars.colors.primary}30`,
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 8px 24px ${vars.colors.primary}40`,
  },
})

// Card hover effect for ::before pseudo-element
globalStyle(`${card}:hover::before`, {
  opacity: 1,
})

// Image container hover effect for ::after pseudo-element
globalStyle(`${imageContainer}:hover::after`, {
  opacity: 1,
})
