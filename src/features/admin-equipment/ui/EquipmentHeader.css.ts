import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "32px",
})

export const title = style({
  fontSize: "32px",
  fontWeight: "700",
  color: vars.colors.text,
  margin: 0,
  marginBottom: "8px",
})

export const subtitle = style({
  fontSize: "16px",
  color: vars.colors.textLight,
  margin: 0,
})

export const headerActions = style({
  marginTop: "16px",
})

export const addButton = style({
  backgroundColor: vars.colors.primary,
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-1px)",
  },
})