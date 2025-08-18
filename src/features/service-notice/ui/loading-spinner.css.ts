import { style, keyframes } from "@vanilla-extract/css"

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  minHeight: "300px",
})

export const spinner = style({
  width: "2rem",
  height: "2rem",
  border: "3px solid #e5e7eb",
  borderTop: "3px solid #3b82f6",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  marginBottom: "1rem",
})

export const text = style({
  fontSize: "1rem",
  color: "#64748b",
})