import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { slideInRight } from "./animations.css";

export const priceCard = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: "24px",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  position: "relative",
  overflow: "hidden",
  animation: `${slideInRight} 0.6s ease-out`,
  height: "100%",
  minHeight: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 0.3s ease",
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
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow:
      "0 25px 80px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  },
  "@media": {
    "(max-width: 1024px)": {
      minHeight: "auto",
      height: "auto",
    },
    "(max-width: 768px)": {
      padding: vars.space.lg,
      borderRadius: "20px",
    },
  },
});

export const priceHeader = style({
  marginBottom: vars.space.xl,
  flexShrink: 0,
});

export const priceTitle = style({
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

export const priceComparison = style({
  display: "flex",
  justifyContent: "space-between",
  gap: vars.space.xl,
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.lg,
    },
  },
});

export const originalPrice = style({
  textAlign: "center",
  padding: vars.space.xl,
  borderRadius: "20px",
  backgroundColor: vars.colors.backgroundLight,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const originalPriceLabel = style({
  display: "block",
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  marginBottom: vars.space.sm,
  fontWeight: "600",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
});

export const originalPriceValue = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: vars.colors.text,
  textDecoration: "line-through",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  minHeight: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.1rem",
      minHeight: "2.2rem",
    },
  },
});

export const discountPrice = style({
  textAlign: "center",
  padding: vars.space.xl,
  borderRadius: "20px",
  backgroundColor: vars.colors.white,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  minHeight: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const discountPriceLabel = style({
  display: "block",
  fontSize: "0.8rem",
  color: vars.colors.primary,
  fontWeight: "700",
  marginBottom: vars.space.sm,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
});

export const discountPriceValue = style({
  fontSize: "1.5rem",
  fontWeight: "900",
  color: vars.colors.text,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  minHeight: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.25rem",
      minHeight: "2.2rem",
    },
  },
});

export const savings = style({
  display: "block",
  fontSize: "0.8rem",
  fontWeight: "700",
  color: "#059669",
  marginTop: vars.space.sm,
  wordBreak: "keep-all",
  overflowWrap: "break-word",
});

export const priceBreakdown = style({
  marginBottom: vars.space.xl,
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
});

export const breakdownItem = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.md} 0`,
  borderBottom: "1px solid rgba(226, 232, 240, 0.6)",
  fontSize: "0.8rem",
  fontWeight: "500",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  ":last-child": {
    borderBottom: "none",
    fontWeight: "700",
  },
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.space.sm,
    },
  },
});

export const priceNote = style({
  display: "flex",
  gap: vars.space.md,
  padding: vars.space.xl,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: "20px",
  marginBottom: vars.space.xl,
  border: "1px solid rgba(226, 232, 240, 0.6)",
  flexShrink: 0,
  overflow: "hidden",
});

export const noteIcon = style({
  fontSize: "1.5rem",
  color: vars.colors.primary,
  flexShrink: 0,
});

export const noteText = style({
  fontSize: "0.8rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  fontWeight: "500",
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
});

export const ctaSection = style({
  textAlign: "center",
});

export const ctaButton = style({
  width: "100%",
  padding: `${vars.space.lg} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: "white",
  border: "none",
  borderRadius: "16px",
  fontSize: "1.25rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  marginBottom: vars.space.md,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
  },
});

export const ctaSubtext = style({
  fontSize: "0.9rem",
  color: vars.colors.textLight,
  margin: 0,
  fontWeight: "500",
});
