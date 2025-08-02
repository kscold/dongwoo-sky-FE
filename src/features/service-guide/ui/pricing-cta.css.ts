import { style } from "@vanilla-extract/css"

export const pricingButtonContainer = style({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
})

export const pricingButton = style({
  backgroundColor: "#3b82f6",
  color: "white",
  fontSize: "1.125rem",
  fontWeight: 600,
  padding: "1rem 3rem",
  borderRadius: "0.75rem",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
  },
  ":active": {
    transform: "translateY(0)",
  },
})