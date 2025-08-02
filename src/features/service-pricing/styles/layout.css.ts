import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.lg}`,
  minHeight: "100vh",
})

export const pageWrapper = style({
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f0f9ff 0%, #ffffff 100%)",
  width: "100%",
})

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
})

export const sectionWrapper = style({
  marginBottom: vars.space.xxxl,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxl,
    },
  },
})

export const sectionHeader = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
  padding: `${vars.space.md} 0`,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.lg,
      padding: `${vars.space.sm} 0`,
    },
  },
})

export const sectionTitle = style({
  fontSize: "1.875rem",
  fontWeight: "700",
  color: "#1e293b",
  marginBottom: vars.space.sm,
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

export const sectionDescription = style({
  fontSize: "1rem",
  color: "#6b7280",
  fontWeight: "400",
  textAlign: "center",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "0.875rem",
    },
  },
})