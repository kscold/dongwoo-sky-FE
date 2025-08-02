import { style } from "@vanilla-extract/css"
import { vars } from "../../../styles/common/theme.css"

export const section = style({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  boxShadow: vars.shadows.sm,
  border: `1px solid ${vars.colors.border}`,
  marginBottom: "24px",
})

export const sectionHeader = style({
  marginBottom: "16px",
  paddingBottom: "12px",
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  color: vars.colors.text,
  margin: "0 0 4px 0",
})

export const sectionDescription = style({
  fontSize: "14px",
  color: vars.colors.textLight,
  margin: 0,
})