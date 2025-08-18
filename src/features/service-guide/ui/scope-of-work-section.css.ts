import { style } from "@vanilla-extract/css"

export const section = style({
  marginBottom: "3rem",
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

export const capabilitiesList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const capabilityItem = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1.5rem",
  backgroundColor: "#f8fafc",
  borderRadius: "0.75rem",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#e2e8f0",
    transform: "translateY(-2px)",
  },
})

export const capabilityIcon = style({
  width: "2rem",
  height: "2rem",
  color: "#3b82f6",
  flexShrink: 0,
})

export const capabilityTextNoIcon = style({
  marginLeft: "3rem",
})