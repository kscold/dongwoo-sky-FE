import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { fadeInUp } from "./animations.css";

export const heroSection = style({
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

export const heroContent = style({
  maxWidth: "900px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  animation: `${fadeInUp} 0.8s ease-out`,
  boxSizing: "border-box",
  position: "relative",
  zIndex: 1,
});

export const heroTitle = style({
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

export const heroSubtitle = style({
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

export const discountBanner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.md,
  background: vars.colors.white,
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderRadius: "24px",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  maxWidth: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.sm,
      padding: `${vars.space.md} ${vars.space.lg}`,
      textAlign: "center",
      maxWidth: "100%",
    },
    "(max-width: 480px)": {
      padding: `${vars.space.sm} ${vars.space.md}`,
      borderRadius: "20px",
    },
  },
});

export const discountIcon = style({
  fontSize: "2.5rem",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});

export const discountText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.xs,
  minWidth: 0,
  "@media": {
    "(max-width: 768px)": {
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const discountText_strong = style({
  fontSize: "1.25rem",
  fontWeight: "800",
  color: vars.colors.text,
});

export const discountText_span = style({
  fontSize: "0.9rem",
  color: vars.colors.textLight,
  fontWeight: "500",
});
