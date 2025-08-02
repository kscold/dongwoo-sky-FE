import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const pageWrapper = style({
  backgroundColor: vars.colors.gray[50],
  minHeight: '100vh',
  fontFamily: vars.fonts.body,
})

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.xl} ${vars.space.lg} ${vars.space.xl}`,
  "@media": {
    "(max-width: 1440px)": {
      maxWidth: "1200px",
    },
    "(max-width: 1200px)": {
      maxWidth: "1000px",
    },
    "(max-width: 768px)": {
      padding: `${vars.space.lg} ${vars.space.md} ${vars.space.lg}`,
    },
    "(max-width: 480px)": {
      padding: `${vars.space.md} ${vars.space.sm} ${vars.space.md}`,
    },
  },
})

export const heroSection = style({
  background: `linear-gradient(to right, ${vars.colors.primary}, ${vars.colors.secondary})`,
  color: vars.colors.white,
  paddingTop: vars.space.xxxxl,
  paddingBottom: vars.space.xxxxl,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  textAlign: 'center',
})

export const heroTitle = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space.lg,
  '@media': {
    '(min-width: 768px)': {
      fontSize: vars.fontSizes.xxxxxl,
    }
  }
})

export const heroSubtitle = style({
  fontSize: vars.fontSizes.xl,
  marginBottom: vars.space.xxl,
  fontWeight: "500",
  "@media": {
    "(min-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
    },
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
  marginBottom: vars.space.md,
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
  },
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
      paddingTop: vars.space.md,
      paddingBottom: vars.space.md,
      width: "100%",
      maxWidth: "320px",
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.md,
      paddingLeft: vars.space.lg,
      paddingRight: vars.space.lg,
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

export const inquiryTypeSelector = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  marginBottom: vars.space.xl,
  padding: "1rem",
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
})

export const inquiryTypeLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.colors.text,
  border: "2px solid transparent",
  backgroundColor: "#ffffff",
  transition: "all 0.2s ease-in-out",
  
  ":hover": {
    borderColor: "#3b82f6",
    backgroundColor: "#eff6ff",
  },
})

export const inquiryTypeRadio = style({
  width: "1.125rem",
  height: "1.125rem",
  accentColor: "#3b82f6",
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
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
      paddingTop: vars.space.md,
      paddingBottom: vars.space.md,
      width: "100%",
      maxWidth: "320px",
      justifyContent: "center",
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.md,
      paddingLeft: vars.space.lg,
      paddingRight: vars.space.lg,
    },
  },
})

export const buttonGroup = style({
  display: "flex",
  gap: vars.space.md,
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: vars.space.sm,
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
