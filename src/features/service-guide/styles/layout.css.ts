import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";

// 페이지 전체 래퍼
export const pageWrapper = style({
  backgroundColor: vars.colors.backgroundLight, // 전체 배경은 약간 밝게
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
});

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

// 공통 섹션 컨테이너
export const sectionContainer = style({
  maxWidth: vars.breakpoints.lg, // 콘텐츠 최대 너비
  margin: `0 auto ${vars.space.xxxl} auto`,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
});

// 공통 섹션 제목
export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  textAlign: "center",
  marginBottom: vars.space.xxxl,
  paddingBottom: vars.space.md,
});

// 공통 섹션 래퍼
export const section = style({
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxxl,
    },
  },
});