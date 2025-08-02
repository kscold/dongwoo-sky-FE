import { style } from "@vanilla-extract/css"

export const container = style({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f9fafb",
})

export const wrapper = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "2rem",
})

export const content = style({
  marginTop: "2rem",
})