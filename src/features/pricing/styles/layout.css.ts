import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

// 전체 페이지 배경
export const pageWrapper = style({
  backgroundColor: vars.colors.backgroundLight,
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
});

// 컨테이너 및 레이아웃
export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} ${vars.space.xxxxl}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} ${vars.space.xxxl}`,
    },
  },
});

// 섹션 스타일
export const sectionWrapper = style({
  marginBottom: vars.space.xxxl,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxl,
    },
  },
});

export const sectionHeader = style({
  textAlign: "center",
  marginTop: vars.space.lg,
  marginBottom: vars.space.xxl,
  padding: `${vars.space.lg} 0`,
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.md,
      marginBottom: vars.space.xl,
      padding: `${vars.space.md} 0`,
    },
  },
});

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: "800",
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xl,
    },
  },
});

export const sectionDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  fontWeight: "500",
  textAlign: "center",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.sm,
    },
  },
});

// 결과 섹션
export const resultSection = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: vars.space.xl,
  alignItems: "stretch",
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.xl,
      marginBottom: vars.space.xxxl,
    },
    "(max-width: 768px)": {
      padding: `0 ${vars.space.sm}`,
      gap: vars.space.lg,
      marginBottom: vars.space.xxl,
    },
  },
});
