import { style } from "@vanilla-extract/css";

import { vars } from "../../../shared/styles/theme.css";

// 그리드 레이아웃 (다른 페이지들과 동일)
export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: vars.space.xl,
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.lg,
    },
  },
});

// 공지사항 카드 - 현대적이고 세련된 디자인
export const card = style({
  backgroundColor: vars.colors.white,
  borderRadius: "24px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  cursor: "pointer",
  
  ":hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.2)",
  },
  
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
});

// 이미지 컨테이너 - 더 세련된 스타일
export const imageContainer = style({
  position: "relative",
  height: "220px",
  overflow: "hidden",
  background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
});

export const image = style({
  objectFit: "cover",
  transition: "transform 0.3s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const imagePlaceholder = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  fontSize: "4rem",
  color: vars.colors.primary,
  fontWeight: "300",
});

// 카드 콘텐츠 - 더 세련된 패딩과 레이아웃
export const content = style({
  padding: `${vars.space.xl} ${vars.space.xl} ${vars.space.lg}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.lg} ${vars.space.lg} ${vars.space.md}`,
    },
  },
});

export const cardTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: "700",
  marginBottom: vars.space.lg,
  color: vars.colors.textStrong,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  minHeight: "2.6em",
});

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.md,
  marginBottom: vars.space.lg,
  alignItems: "center",
});

export const metaItem = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
});

export const description = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: 1.7,
  marginBottom: vars.space.lg,
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  minHeight: "4.5em",
});

// 통계 정보 - 더 세련된 스타일
export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: vars.space.md,
  borderTop: `1px solid ${vars.colors.borderLight}`,
  gap: vars.space.md,
});

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
});

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  fontWeight: "500",
  backgroundColor: vars.colors.backgroundLight,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.md,
});

// 우선순위 배지 - 더 현대적인 스타일
export const priorityBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: "12px",
  fontSize: vars.fontSizes.xs,
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
});

export const priorityHigh = style({
  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
});

export const priorityMedium = style({
  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(245, 158, 11, 0.3)",
});

export const priorityLow = style({
  background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
  color: vars.colors.white,
  boxShadow: "0 2px 8px rgba(107, 114, 128, 0.3)",
});

export const pinnedBadge = style({
  position: "absolute",
  top: vars.space.md,
  right: vars.space.md,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
  color: vars.colors.white,
  borderRadius: "12px",
  fontSize: vars.fontSizes.xs,
  fontWeight: "600",
  letterSpacing: "0.5px",
  boxShadow: "0 2px 12px rgba(239, 68, 68, 0.4)",
  zIndex: 2,
  
  "::before": {
    content: "📌",
    marginRight: vars.space.xs,
  },
});