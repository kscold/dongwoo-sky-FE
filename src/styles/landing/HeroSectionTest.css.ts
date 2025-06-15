import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

const fadeIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

export const heroSection = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  overflow: "hidden",
  color: vars.colors.white,
  textAlign: "center",
})

export const heroContent = style({
  position: "relative",
  zIndex: 1,
  padding: vars.space.lg,
  maxWidth: "900px",
  margin: "0 auto",
  animation: `${fadeIn} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

export const loadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
})
