import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "./theme.css"

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "-200px 0"
  },
  "100%": {
    backgroundPosition: "calc(200px + 100%) 0"
  }
})

export const skeleton = style({
  background: `linear-gradient(90deg, ${vars.colors.gray[200]} 25%, ${vars.colors.gray[100]} 50%, ${vars.colors.gray[200]} 75%)`,
  backgroundSize: "200px 100%",
  animation: `${shimmer} 1.5s infinite linear`,
  borderRadius: vars.radii.md,
  display: "block",
})

export const skeletonRect = style({
  // Default rectangle style
})

export const skeletonText = style({
  height: "1rem",
  marginBottom: "0.5rem",
  borderRadius: vars.radii.sm,
})

export const skeletonCircle = style({
  borderRadius: "50%",
})