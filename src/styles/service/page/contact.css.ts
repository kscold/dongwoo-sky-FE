import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const pageWrapper = style({
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
})

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
    },
  },
})

export const heroSection = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
  padding: `${vars.space.xxl} ${vars.space.xl}`,
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
      padding: `${vars.space.xl} ${vars.space.lg}`,
      borderRadius: "24px",
    },
  },
})

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
})

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
})

export const phoneLinkButton = style({
  backgroundColor: vars.colors.white,
  color: vars.colors.text,
  fontWeight: "600",
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xxl,
  paddingRight: vars.space.xxl,
  borderRadius: "16px",
  fontSize: vars.fontSizes.xl,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  textDecoration: "none",
  display: "inline-block",
  position: "relative",
  border: "1px solid rgba(226, 232, 240, 0.8)",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
  },
})

export const formSection = style({
  paddingTop: vars.space.xxxxl,
  paddingBottom: vars.space.xxxxl,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  position: "relative",
})

export const formContainer = style({
  background: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: "32px",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  maxWidth: vars.breakpoints.md,
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid rgba(226, 232, 240, 0.6)",
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
    "(min-width: 768px)": {
      padding: vars.space.xxl,
    },
  },
})

export const formTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: vars.space.xxl,
  color: vars.colors.text,
  position: "relative",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
})

export const formDescription = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  marginBottom: vars.space.xxl,
  textAlign: "center",
  lineHeight: vars.lineHeights.relaxed,
  fontWeight: "500",
})

export const formDescriptionLink = style({
  color: "#3b82f6",
  fontWeight: "700",
  textDecoration: "none",
  position: "relative",
  "::after": {
    content: "",
    position: "absolute",
    bottom: "-2px",
    left: 0,
    width: "0",
    height: "2px",
    background: "#3b82f6",
    transition: "width 0.3s ease",
  },
  selectors: {
    "&:hover::after": {
      width: "100%",
    },
  },
})

export const form = style({
  display: "grid",
  gap: vars.space.xl,
})

export const formField = style({
  display: "flex",
  flexDirection: "column",
})

export const formLabel = style({
  display: "block",
  fontSize: vars.fontSizes.lg,
  fontWeight: "700",
  color: "#1e293b",
  marginBottom: vars.space.sm,
})

export const formInput = style({
  marginTop: vars.space.xs,
  display: "block",
  width: "100%",
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  paddingTop: vars.space.md,
  paddingBottom: vars.space.md,
  border: "2px solid rgba(226, 232, 240, 0.6)",
  borderRadius: "16px",
  boxShadow:
    "0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  fontSize: vars.fontSizes.lg,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  color: vars.colors.text,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  backdropFilter: "blur(10px)",
  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: "#3b82f6",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow:
        "0 8px 25px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1)",
      transform: "translateY(-2px)",
    },
  },
})

export const formTextarea = style([
  formInput,
  {
    minHeight: "120px",
    resize: "vertical",
  },
])

export const submitButtonContainer = style({
  textAlign: "center",
  paddingTop: vars.space.lg,
})

export const kakaoButton = style({
  backgroundColor: "#FEE500",
  color: "#1e293b",
  fontWeight: "600",
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xxl,
  paddingRight: vars.space.xxl,
  borderRadius: "16px",
  fontSize: vars.fontSizes.xl,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  position: "relative",
  border: "1px solid rgba(254, 229, 0, 0.8)",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
  },
})

export const kakaoIconStyle = style({
  width: "24px",
  height: "24px",
  flexShrink: 0,
})

export const submitButton = style({
  width: "100%",
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  fontSize: vars.fontSizes.lg,
  fontWeight: "600",
  borderRadius: "16px",
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 4px ${vars.colors.primaryTransparent}`,
    },
  },
})
