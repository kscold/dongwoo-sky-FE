import { style } from "@vanilla-extract/css"

export const value = style({
  display: "flex",
  alignItems: "center",
})

export const statusBadge = style({
  padding: "0.25rem 0.75rem",
  borderRadius: "9999px",
  fontSize: "0.875rem",
  fontWeight: 500,
})

export const statusActive = style({
  backgroundColor: "#10b981",
  color: "white",
})

export const statusInactive = style({
  backgroundColor: "#ef4444",
  color: "white",
})

export const toggleContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
})

export const toggleSwitch = style({
  position: "relative",
  display: "inline-block",
  width: "3rem",
  height: "1.75rem",
})

export const toggleInput = style({
  opacity: 0,
  width: 0,
  height: 0,
})

export const slider = style({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#ccc",
  transition: "0.4s",
  borderRadius: "1.75rem",
  "::before": {
    position: "absolute",
    content: '""',
    height: "1.25rem",
    width: "1.25rem",
    left: "0.25rem",
    bottom: "0.25rem",
    backgroundColor: "white",
    transition: "0.4s",
    borderRadius: "50%",
  },
})

export const toggleActive = style({
  backgroundColor: "#10b981",
  "::before": {
    transform: "translateX(1.25rem)",
  },
})

export const toggleLabel = style({
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#6b7280",
})