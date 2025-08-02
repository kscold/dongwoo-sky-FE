import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: vars.space.xl,
  minHeight: "100vh",
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space.lg,
    },
  },
});

// 헤더 (고객 후기 스타일과 유사)
export const header = style({
  marginBottom: vars.space.xxl,
  paddingBottom: vars.space.xl,
  borderBottom: `2px solid ${vars.colors.gray[100]}`,
});

export const headerTop = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.lg,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.md,
      alignItems: "flex-start",
    },
  },
});

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  color: vars.colors.primary,
  textDecoration: "none",
  fontWeight: "600",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
});

export const breadcrumb = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  "@media": {
    "(max-width: 768px)": {
      order: -1,
    },
  },
});

export const breadcrumbLink = style({
  color: vars.colors.textLight,
  textDecoration: "none",
  transition: "color 0.3s ease",
  ":hover": {
    color: vars.colors.primary,
  },
});

export const separator = style({
  color: vars.colors.gray[300],
});

export const current = style({
  color: vars.colors.textStrong,
  fontWeight: "600",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "700",
  color: vars.colors.textStrong,
  marginBottom: vars.space.lg,
  lineHeight: 1.3,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.75rem",
    },
  },
});

// 우선순위 및 고정 배지 섹션
export const badgeSection = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const priorityBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
});

export const priorityHigh = style({
  backgroundColor: vars.colors.danger,
  color: vars.colors.white,
});

export const priorityMedium = style({
  backgroundColor: "#f59e0b",
  color: vars.colors.white,
});

export const priorityLow = style({
  backgroundColor: vars.colors.textLight,
  color: vars.colors.white,
});

export const pinnedBadge = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
});

// 메타 정보 (고객 후기와 비슷한 구조)
export const meta = style({
  marginBottom: vars.space.xl,
});

export const authorInfo = style({
  marginBottom: vars.space.md,
});

export const author = style({
  fontSize: vars.fontSizes.md,
  fontWeight: "600",
  color: vars.colors.textStrong,
});

export const details = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.md,
  marginBottom: vars.space.md,
});

export const detail = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
});

export const stats = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
});

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});

// 이미지 갤러리 (공지사항에 이미지가 있을 경우)
export const imageGallery = style({
  marginBottom: vars.space.xl,
});

export const mainImage = style({
  marginBottom: vars.space.md,
  borderRadius: "8px",
  overflow: "hidden",
});

export const image = style({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

export const thumbnails = style({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "8px",
    },
    "screen and (max-width: 480px)": {
      gap: "6px",
    },
  },
});

export const thumbnail = style({
  borderRadius: "6px",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.05)",
  },
});

// 콘텐츠 섹션
export const content = style({
  marginBottom: vars.space.xl,
  padding: `${vars.space.xl} 0`,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
});

export const contentBody = style({
  fontSize: vars.fontSizes.lg,
  lineHeight: 1.8,
  color: vars.colors.text,
  fontWeight: "400",
  letterSpacing: "-0.01em",
  whiteSpace: "pre-wrap",
});

// 액션 버튼 섹션 (고객 후기의 도움됨 버튼과 유사)
export const actions = style({
  textAlign: "center",
  paddingTop: vars.space.xl,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
});

export const listButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  textDecoration: "none",
  borderRadius: "12px",
  fontWeight: "600",
  fontSize: vars.fontSizes.md,
  transition: "all 0.3s ease",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.25)",
  },
});

// 에러 상태
export const errorContainer = style({
  textAlign: "center",
  padding: vars.space.xxxxl,
  maxWidth: "500px",
  margin: "0 auto",
});

export const errorIcon = style({
  fontSize: "4rem",
  marginBottom: vars.space.lg,
});

export const errorTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: "700",
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
});

export const errorMessage = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.xl,
});