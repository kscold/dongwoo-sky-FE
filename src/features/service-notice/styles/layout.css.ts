import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { spin } from "./animations.css";

// 전체 페이지 배경
export const pageWrapper = style({
  backgroundColor: vars.colors.backgroundLight,
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
});

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
});

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
});

export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "16px",
  ":hover": {
    textDecoration: "underline",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "12px",
      fontSize: "13px",
    },
  },
});

export const loading = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
});

export const error = style({
  padding: vars.space.xl,
  backgroundColor: vars.colors.gray[50],
  color: vars.colors.danger,
  borderRadius: vars.radii.md,
});

export const empty = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
});

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
});

// 로딩 스피너
export const spinner = style({
  width: "40px",
  height: "40px",
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderTop: "4px solid " + vars.colors.primary,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  margin: "0 auto",
});

// 에러 메시지
export const errorMessage = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.danger,
  marginTop: vars.space.sm,
});