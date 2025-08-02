import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const pageWrapper = style({
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  fontFamily: vars.fonts.body,
})

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.xl} ${vars.space.lg} ${vars.space.xl}`,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
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