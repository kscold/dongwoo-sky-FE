import { style } from "@vanilla-extract/css"

export const container = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
})

export const input = style({
  display: "none",
})

export const slider = style({
  position: "relative",
  width: "2.5rem",
  height: "1.25rem",
  backgroundColor: "#cbd5e1",
  borderRadius: "9999px",
  transition: "all 0.3s",
  "::before": {
    content: '""',
    position: "absolute",
    top: "0.125rem",
    left: "0.125rem",
    width: "1rem",
    height: "1rem",
    backgroundColor: "white",
    borderRadius: "50%",
    transition: "all 0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
})

export const sliderActive = style({
  backgroundColor: "#3b82f6",
  "::before": {
    transform: "translateX(1.25rem)",
  },
})

export const label = style({
  fontSize: "0.75rem",
  fontWeight: 500,
  color: "#64748b",
})

export const labelActive = style({
  color: "#3b82f6",
})