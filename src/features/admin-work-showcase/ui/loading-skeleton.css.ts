import { style, keyframes } from "@vanilla-extract/css"

const shimmer = keyframes({
  "0%": {
    backgroundPosition: "-200% 0",
  },
  "100%": {
    backgroundPosition: "200% 0",
  },
})

const skeleton = style({
  background: `linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  )`,
  backgroundSize: "200% 100%",
  animation: `${shimmer} 1.5s infinite`,
})

export const container = style({
  padding: "2rem",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
})

export const titleSkeleton = style([
  skeleton,
  {
    height: "2rem",
    width: "15rem",
    borderRadius: "0.25rem",
  },
])

export const buttonSkeleton = style([
  skeleton,
  {
    height: "2.5rem",
    width: "8rem",
    borderRadius: "0.375rem",
  },
])

export const table = style({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "1rem",
})

export const row = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr",
  gap: "1rem",
  padding: "1rem 0",
  borderBottom: "1px solid #e2e8f0",
})

export const cellSkeleton = style([
  skeleton,
  {
    height: "1rem",
    borderRadius: "0.25rem",
  },
])