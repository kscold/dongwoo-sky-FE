import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

// 그리드 레이아웃
export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: vars.space.lg,
});

// 쇼케이스 카드
export const card = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.sm,
  overflow: "hidden",
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.2s",
  ":hover": {
    transform: "translateY(-2px)",
  },
});

// 이미지 컴테이너
export const imageContainer = style({
  position: "relative",
  height: "200px",
  overflow: "hidden",
});

export const image = style({
  objectFit: "cover",
});

export const imagePlaceholder = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.colors.gray[100],
  fontSize: vars.fontSizes.xxxl,
});

// 카드 콘텐츠
export const content = style({
  padding: vars.space.lg,
});

export const cardTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
});

export const meta = style({
  marginBottom: vars.space.md,
});

export const metaItem = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginBottom: vars.space.xs,
});

export const description = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.md,
});

// 통계 정보
export const stats = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});

export const stat = style({
  display: "flex",
  alignItems: "center",
});

export const date = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
});