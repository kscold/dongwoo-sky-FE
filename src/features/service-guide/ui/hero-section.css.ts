import { style } from "@vanilla-extract/css"

export const heroSection = style({
  backgroundColor: "#f8fafc",
  padding: "4rem 2rem",
  textAlign: "center",
  borderRadius: "1rem",
  marginBottom: "3rem",
})

export const heroTitle = style({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "1rem",
  lineHeight: 1.2,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.875rem",
    },
  },
})

export const heroSubtitle = style({
  fontSize: "1.125rem",
  color: "#64748b",
  lineHeight: 1.6,
  maxWidth: "800px",
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
})