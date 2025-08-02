import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const container = style({
  padding: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
})

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