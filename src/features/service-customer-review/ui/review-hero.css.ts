import { style } from "@vanilla-extract/css"

export const heroSection = style({
  backgroundColor: "#f8fafc",
  padding: "4rem 0",
  textAlign: "center",
})

export const heroContent = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "0 1rem",
})

export const heroTitle = style({
  fontSize: "3rem",
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: "1rem",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

export const heroSubtitle = style({
  fontSize: "1.25rem",
  color: "#64748b",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})