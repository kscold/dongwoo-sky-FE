import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"
import { fadeInUp, pulse } from "./animations.css"

// export const heroSection = style({
//   textAlign: "center",
//   marginTop: vars.space.md,
//   marginBottom: vars.space.xxl,
//   padding: `${vars.space.xl} ${vars.space.xl}`,
//   background: `
//     radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
//     radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
//     linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
//   `,
//   borderRadius: "32px",
//   border: "1px solid rgba(226, 232, 240, 0.6)",
//   boxShadow:
//     "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
//   position: "relative",
//   overflow: "hidden",
//   "::before": {
//     content: "",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "1px",
//     background:
//       "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
//   },
//   "@media": {
//     "(max-width: 768px)": {
//       marginTop: vars.space.sm,
//       marginBottom: vars.space.xl,
//       padding: `${vars.space.lg} ${vars.space.lg}`,
//       borderRadius: "24px",
//     },
//   },
// })

// Hero 섹션 (contact.css.ts와 유사)
export const heroSection = style({
  textAlign: "center",
  marginBottom: vars.space.xxl,
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
      marginBottom: vars.space.xl,
      padding: `${vars.space.xl} ${vars.space.lg}`,
      borderRadius: "24px",
    },
  },
})

export const heroContent = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: `0 ${vars.space.md}`,
  animation: `${fadeInUp} 0.8s ease-out`,
  boxSizing: "border-box",
})

export const mainTitle = style({
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

export const mainSubtitle = style({
  fontSize: "1.25rem",
  color: vars.colors.textLight,
  lineHeight: 1.6,
  marginBottom: vars.space.xl,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      marginBottom: vars.space.lg,
    },
  },
})

export const discountBanner = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.md,
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(8px)",
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: "100px",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  animation: `${pulse} 3s ease-in-out infinite`,
  "@media": {
    "screen and (max-width: 768px)": {
      gap: vars.space.sm,
      padding: `${vars.space.sm} ${vars.space.lg}`,
    },
  },
})

export const discountIcon = style({
  fontSize: "2rem",
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

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
})

export const discountText_strong = style({
  fontSize: "1.125rem",
  fontWeight: "700",
  color: vars.colors.primary,
})

export const discountText_span = style({
  fontSize: "0.875rem",
  color: vars.colors.textLight,
})
