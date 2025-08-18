import { style } from "@vanilla-extract/css"

export const serviceProcessSection = style({
  marginBottom: "3rem",
})

export const sectionContainer = style({
  position: "relative",
})

export const sectionTitle = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "2rem",
  textAlign: "center",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.5rem",
    },
  },
})

export const processGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 768px)": {
      display: "none",
    },
  },
})

export const processStep = style({
  backgroundColor: "#f8fafc",
  borderRadius: "1rem",
  padding: "2rem",
  textAlign: "center",
  position: "relative",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#e2e8f0",
    transform: "translateY(-4px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
})

export const processStepNumber = style({
  position: "absolute",
  top: "-0.75rem",
  right: "-0.75rem",
  backgroundColor: "#3b82f6",
  color: "white",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.875rem",
  fontWeight: 700,
})

export const processStepIcon = style({
  width: "3rem",
  height: "3rem",
  color: "#3b82f6",
  margin: "0 auto 1rem",
})

export const processStepTitle = style({
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "0.75rem",
})

export const processStepDescription = style({
  fontSize: "0.875rem",
  color: "#64748b",
  lineHeight: 1.6,
})

export const processSlider = style({
  display: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "block",
    },
  },
})